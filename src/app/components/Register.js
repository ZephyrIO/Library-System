'use client';
import { useRouter } from "next/navigation";

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
        <div>
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
                    <button type="submit" className="register">Create Account</button>
                    <button type="button" className="login" onClick={handleLogin}>Login with Existing Account</button>
                </div>
            </form>
        </div>
    )
}