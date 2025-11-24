import './App.css';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./actions";

function App() {
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");

    function handleLogin() {
        if (!username) return;
        const fakeToken = "fake.jwt.token.for." + username;
        dispatch(login(fakeToken));
    }

    function handleLogout() {
        dispatch(logout());
        setUsername("");
    }
    return (
        <div style={{ padding: 20 }}>
            <h2>Redux + JWT Demo</h2>

            {!token && (
                <>
                    <p>Enter your username to log in:</p>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <button onClick={handleLogin} style={{ marginLeft: 10 }}>
                        Login
                    </button>
                </>
            )}

            {token && (
                <>
                    <p>Logged in as: <b>{username}</b></p>
                    <p><b>Token:</b> {token}</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
        </div>
    );
}

export default App;