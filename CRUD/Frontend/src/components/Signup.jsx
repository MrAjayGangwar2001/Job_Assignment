import axios from "../api/api";
import { useState } from "react";

function Signup({ setShowSignup }) {

    const [form, setForm] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        //  validations, We already Used in Backend
        if (!form.userName || !form.email || !form.password || !form.confirmPassword) {
            setError("All fields are required");
            return;
        }

        if (form.password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        if (form.password !== form.confirmPassword) {
            setError("Password & Confirm Password do not match");
            return;
        }

        try {
            await axios.post("/signup", {
                userName: form.userName,
                email: form.email,
                password: form.password
            });

            alert("Signup successful, please login");
            setShowSignup(false);
        } catch (err) {
            setError(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h3 className="text-center mb-3">Signup</h3>

                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <input className="form-control mb-2"
                        placeholder="Username"
                        onChange={e => setForm({ ...form, userName: e.target.value })}
                    />

                    <input 
                        type="email"
                        className="form-control mb-2"
                        placeholder="Email"
                        onChange={e => setForm({ ...form, email: e.target.value })}
                    />

                    <input type="password" className="form-control mb-2"
                        placeholder="Password"
                        onChange={e => setForm({ ...form, password: e.target.value })}
                    />

                    <input type="password" className="form-control mb-3"
                        placeholder="Confirm Password"
                        onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
                    />

                    <button className="btn btn-primary w-100">
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
