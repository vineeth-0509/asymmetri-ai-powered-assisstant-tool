"use client";
import { Button } from "@/components/ui/button";
import { Chrome, Github } from "lucide-react";
import { signIn } from "next-auth/react";

export function LoginForm() {
  const handleSignIn = (provider: "google" | "github") => {
    signIn(provider, { callbackUrk: "/" });
  };

  return (
    <div className="flex flex-col space-y-4">
      <Button
        variant="outline"
        size="lg"
        className="w-full text-lg"
        onClick={() => handleSignIn("google")}
      >
        <Chrome className="mr-3 h-6 w-6" />
        Sign in with Google
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="w-full text-lg"
        onClick={() => handleSignIn("github")}
      >
        <Github className="mr-3 h-6 w-6" />
        Sign in with GitHub
      </Button>
    </div>
  );
}
