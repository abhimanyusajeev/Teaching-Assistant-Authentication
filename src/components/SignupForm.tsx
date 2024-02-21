import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';


const SignupForm = () => {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [validationErrors, setValidationErrors] = useState<{ fullName?: string, password?: string, confirmPassword?: string }[]>([]);
    const [submitError, setSubmitError] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const validateData = () => {
        const errors = [];

        if (data.fullName.length < 4 || data.fullName.length > 30) {
            errors.push({ fullName: "Full name must be between 4 and 30 characters long" });
        }

        if (data.password.length < 6) {
            errors.push({ password: "Password should be at least 6 characters long" });
        }

        if (data.password !== data.confirmPassword) {
            errors.push({ confirmPassword: "Passwords don't match" });
        }

        setValidationErrors(errors);

        return errors.length === 0;
    };

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValid = validateData();

        if (isValid) {
            try {
                setLoading(true);

                const apiRes = await axios.post("http://localhost:3000/api/signup", data);

                console.log(apiRes);

                if (apiRes?.status == 201) {


                    router.push("/homepage");
                }
            } catch (error) {
                if (error instanceof AxiosError) {
                    const errorMsg = error.response?.data?.error;
                    setSubmitError(errorMsg || "An error occurred during signup");
                }
            }

            setLoading(false);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    return (
        <div className='max-w-md mx-auto px-4 py-8z'>
            <h1 className="text-2xl font-bold mb-4">Sign up</h1>
            <form onSubmit={handleSignup} className="space-y-4 ">
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        className="border p-2 w-full"
                        value={data.email}
                        name="email"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>name</label>
                    <input
                        type="text"
                        className="border p-2 w-full"
                        value={data.fullName}
                        name="fullName"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Enter Password</label>
                    <input
                        type="password"
                        className="border p-2 w-full"
                        value={data.password}
                        name="password"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        className="border p-2 w-full"
                        value={data.confirmPassword}
                        name="confirmPassword"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {validationErrors.map((error, index) => (
                    <p key={index} className="text-red-500">{Object.values(error)[0]}</p>
                ))}
                {submitError && <p className="text-red-500">{submitError}</p>}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Sign up
                </button>
            </form>
            <div className="mt-4">
                Already have an account?{' '}
                <Link href="/" className="text-blue-500">
                    Login here
                </Link>
            </div>

        </div>
    );
};

export default SignupForm;
