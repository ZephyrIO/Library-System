'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import './Register.css';

export default function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const router = useRouter()

    function handleRegister ()
    {
        router.push('/');
    }

    function handleLogin ()
    {
        router.push('/');
    }

    function handleInputChange (e)
    {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    
    return (
        <div className="register">
            <form action={handleRegister}>
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
                <input
                    type="password"
                    name="confirm-password"
                    placeholder="confirm password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                />
                <div className="button-group">
                    <button type="submit" className="action">Create Account</button>
                    <button type="button" className="login" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    )
}