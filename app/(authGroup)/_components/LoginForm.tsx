"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginAction } from "../_actions/authAction";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const [ state, formAction, isPending] = useActionState(loginAction, null);
    const router = useRouter();

    useEffect(() => {
        if (state?.success) {
            toast.success(state?.message);
            // router.push("/dashboard");
        } else {
            toast.error(state?.message);
        }
    }, [state, router])

  return (
    <form className="space-y-4" action={formAction}>
      <Card className="p-5 space-y-4">
        <Input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter Your Password"
          required
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Login..." : "Login"}
        </Button>
      </Card>
    </form>
  );
};

export default LoginForm;
