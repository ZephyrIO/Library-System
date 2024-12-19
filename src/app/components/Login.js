'use client';
import { useRouter } from "next/navigation";
import './Login.css';

export default function Login() {
    const router = useRouter();

    function handleLogin ()
    {
        router.push('/view');
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
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                />
                <div className="button-group">
                    <button type="submit" className="action">Login</button>
                    <button type="button" className="register" onClick={handleRegister}>Register</button>
                </div>
            </form>
        </div>
    )
}