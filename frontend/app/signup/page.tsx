"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SignUp = () => {
  const supabase = createClient();
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const signUpNewUser = async () => {
    if (!email || !password || !firstName || !gender) {
      toast.error("Please fill in all fields", { duration: 3000 });
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      toast.error(error.message, { duration: 3000 });
      setLoading(false);
    } else {
      toast.success("Account created successfully!");
      router.push("/onboarding");
    }

    const user = data.user;

    if (!user) {
      setLoading(false);
      toast.error("User creation failed");
      return;
    }

    
    const { error: profileError } = await supabase // destructuring error from response and renaming it to 'profileError'
      .from("user_profile")
      .insert({ id: user.id, first_name: firstName, gender: gender })
      .select();

    if (profileError) {
      toast.error(profileError.message, { duration: 3000 });
      return;
    }

    // console.log(firstName)
    // console.log(gender)
    // console.log(email)
    // console.log(password)
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
              Create an Account
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-5">
            <Input
              type="text"
              placeholder="First name"
              className="h-12 rounded-xl"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <Select onValueChange={(e) => setGender(e)}>
              <SelectTrigger className="w-full h-12 rounded-xl font-normal">
                <SelectValue placeholder="Select your gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Input
              type="email"
              placeholder="Email"
              className="h-12 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Password"
              className="h-12 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              onClick={signUpNewUser}
              className="w-full h-12 text-lg rounded-xl bg-[#6366F1] hover:bg-[#585AE3] transition"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign up"}
            </Button>

            <p className="text-center text-sm text-gray-600 pt-2">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#6366F1] font-semibold hover:underline"
              >
                Log in instead
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
