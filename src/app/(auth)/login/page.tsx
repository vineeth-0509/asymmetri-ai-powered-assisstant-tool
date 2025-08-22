import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "./_components/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-md p-4">
        <Card className="rounded-2xl border-2 border-gray-200/50 shadow-lg backdrop-blur-sm dark:border-gray-800/50">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tight">
              Asymmetri AI
            </CardTitle>
            <CardDescription className="pt-2 text-base">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
<LoginForm/>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
