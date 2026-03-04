"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ResetPassword = () => {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/change-password`,
    });

    if (error) {
      setMessage(error.message);
    } else setMessage("Check your email for the password reset link!");
  };

  return (
    <div className="min-h-screen w-full bg-[#6366F1]/10 flex flex-col">
      <header className="p-6">
        <Link href="/" className="text-3xl font-bold text-[#6366F1]">
          Vivida
        </Link>
      </header>

      <div className="flex-1 flex justify-center items-center px-4">
        <Card className="w-full max-w-md shadow-xl rounded-2xl bg-white border-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-[#6366F1]">
              Reset Password
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-5">
            <Input
              type="email"
              placeholder="Email"
              className="h-12 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {message && (
              <p className="text-center text-sm text-red-500">{message}</p>
            )}

            <Button
              onClick={handleResetPassword}
              className="w-full h-12 text-lg rounded-xl bg-[#6366F1] hover:bg-[#585AE3] transition"
            >
              Send Reset Link
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;
