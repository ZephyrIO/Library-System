'use client';

export default function Login() {
    function handleLogin () {}

    function handleRegister () {}
    
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
                    <button type="button" className="register" onClick={handleRegister}>Register</button>
                </div>
            </form>
        </div>
    )
}