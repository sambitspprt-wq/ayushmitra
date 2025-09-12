import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const Auth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async () => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) setError(error.message);
    else alert("Signup successful! Please check your email to confirm.");
  };

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setError(error.message);
  };

  return (
    <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl flex flex-col space-y-4">
      <h2 className="text-xl font-bold text-center">Login / Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Loading..." : "Login"}
      </button>
      <button
        onClick={handleSignup}
        className="bg-green-600 text-white py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Loading..." : "Sign Up"}
      </button>
    </div>
  );
};

export default Auth;