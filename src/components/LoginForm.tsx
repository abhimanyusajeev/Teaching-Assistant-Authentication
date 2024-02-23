// login.tsx

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LoginForm: React.FC = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
        router.push('/homepage');
    };

    return (
        <div className="bg-transparent p-40  ">
            <div className="login-page">
                <div className="avatar">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/574/215/original/vector-sign-of-user-icon.jpg" alt="Avatar" className="w-24 h-24 rounded-full mx-auto" />
                </div>
                <div className="form bg-white bg-opacity-70 rounded-lg shadow-lg max-w-md mx-auto p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label>Email</label>
                            <input type="email" className="border p-2 w-full" />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" className="border p-2 w-full" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 text-center">Log in</button>
                    </form>
                    <div className="message text-gray-600 text-sm mt-6 text-center">Not registered? <Link href="signup"><p className="text-blue-500">Create an account</p></Link></div>
                    {/* <div className="message text-gray-600 text-sm">Forgot your password? <Link href="#"><div className="text-blue-500">Click here to reset it</div></Link></div> */}
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
