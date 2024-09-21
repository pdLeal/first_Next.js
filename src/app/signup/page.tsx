"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

function SignupPage() {
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: '',
    });

    const onSignup = async () => {

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Singup</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" 
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />

            <label htmlFor="email">Email</label>
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" 
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />

            <label htmlFor="password">Password</label>
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" 
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />

            <button
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                onClick={onSignup}
            >Signup Now!</button>
            <Link href="/login">Visit login page</Link>
        </div>
    )
}

export default SignupPage;