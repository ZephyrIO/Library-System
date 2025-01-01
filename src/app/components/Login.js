'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import './Login.css';

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    async function handleLogin (e)
    {
        try
        {
            const response = await axios.post('http://localhost:3001/api/login', formData);
            alert(response.msg);
            router.push('/view');
        } catch (error)
        {
            console.error('Error logging in:', error);

            // Show the exact error message from the backend
            if (error.response && error.response.data) {
                alert(`Login failed: ${error.response.msg}`);
            } else {
                alert('Login failed. Please try again.');
            }
        }
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