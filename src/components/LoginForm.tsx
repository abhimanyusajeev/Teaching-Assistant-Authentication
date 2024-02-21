import React from 'react';
import Link from 'next/link';
import router from 'next/router';

const LoginForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Email</label>
                    <input type="email" className="border p-2 w-full" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" className="border p-2 w-full" />
                </div>
                {/* <button  type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Login
                </button> */}
                <button type="button" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' onClick={() => router.push('/homepage')}>
                    Login
                </button>
            </form>
            <div className="mt-4">
                {/* Don't have an account?{' '} */}
                <Link href="/signup">
                    <div className="text-blue-400">Sign up here</div>
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;
