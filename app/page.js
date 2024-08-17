"use client";
import { Button } from "@/components/ui/button";
import supabase from "@/config/Supabase_Client";
import useUser from "@/hooks/useUser";
import { useEffect } from "react";

export default function Home() {
  const handleSignIn = () => {
    window.location.href = "https://analytics3.vercel.app/signin";
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={handleSignIn}>Sign in</Button>
    </main>
  );
}
