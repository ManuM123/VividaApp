"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signInWithEmail = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password", {duration:3000});
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });


    if (error) {
      setLoading(false);
      toast.error(error.message, {duration:3000});
    } else {
      toast.success("Welcome back!");
      router.push("/dashboard");
    }
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
              Log In
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

            <div className="flex flex-col gap-2">
              <Input
                type="password"
                placeholder="Password"
                className="h-12 rounded-xl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Link
                href="/reset-password"
                className="text-sm text-[#6366F1] hover:underline self-end"
              >
                Forgot your password?
              </Link>
            </div>

            <Button
              onClick={signInWithEmail}
              disabled={loading}
              className="w-full h-12 text-lg rounded-xl bg-[#6366F1] hover:bg-[#585AE3] transition hover:cursor-pointer"
            >
              {loading ? "Logging in..." : "Log In"}
            </Button>

            <p className="text-center text-sm text-gray-600 pt-2">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-[#6366F1] font-semibold hover:underline"
              >
                Sign up here
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
