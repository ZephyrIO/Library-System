'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import './Register.css';

export default function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const router = useRouter()

    async function handleRegister (e)
    {
        console.log(e);
        try
        {
            const response = await axios.post('http://localhost:3001/api/register', formData);
            alert(response.data.message);
            router.push('/');
        } catch (error)
        {
            console.error('Error registering:', error);

            // Show the exact error message from the backend
            if (error.response && error.response.data) {
                alert(`Registration failed: ${error.response.data.message}`);
            } else {
                alert('Registration failed. Please try again.');
            }
        }
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
                <div className="button-group">
                    <button type="submit" className="action">Create Account</button>
                    <button type="button" className="login" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    )
}