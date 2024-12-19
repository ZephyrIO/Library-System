'use client';
import { useRouter } from "next/navigation";
import './Register.css';

export default function Register() {
    const router = useRouter()

    function handleRegister ()
    {
        router.push('/');
    }

    function handleLogin ()
    {
        router.push('/');
    }
    
    return (
        <div className="register">
            <form action={handleRegister}>
                <input
                    type="email"
                    name="email"
                    placeholder="user@example.com"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                />
                <input
                    type="password"
                    name="confirm-password"
                    placeholder="confirm password"
                    required
                />
                <div className="button-group">
                    <button type="submit" className="action">Create Account</button>
                    <button type="button" className="login" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    )
}