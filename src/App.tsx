import React, { useEffect, useState } from "react";
import Chatbot from "./components/Chatbot";
import Auth from "./components/Auth";
import { supabase } from "./lib/supabaseClient";

function App() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {session ? <Chatbot /> : <Auth />}
    </div>
  );
}

export default App;