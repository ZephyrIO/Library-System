'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import './Login.css';

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    function handleLogin (e)
    {
        e.preventDefault();
        router.push('/view');
    }

    function handleInputChange (e)
    {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleRegister ()
    {
        router.push('/register');
    }
    
    return (
        <div className="login">
            <form action={handleLogin}>
                <input
                    type="email"
                    name="email"
                    placeholder="user@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <div className="button-group">
                    <button type="submit" className="action">Login</button>
                    <button type="button" className="register" onClick={handleRegister}>Register</button>
                </div>
            </form>
        </div>
    )
}