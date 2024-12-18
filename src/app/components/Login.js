'use client';
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    function handleLogin () {}

    function handleRegister ()
    {
        router.push('/register');
    }
    
    return (
        <div>
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
                    <button type="submit" className="login">Login</button>
                    <button type="button" className="register" onClick={handleRegister}>Register a new Account</button>
                </div>
            </form>
        </div>
    )
}