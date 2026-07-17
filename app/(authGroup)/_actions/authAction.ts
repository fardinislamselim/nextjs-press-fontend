"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type State = {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const loginAction = async (prevState: State | null, formData: FormData) => {
  console.log(formData);
  const email = formData.get("email");
  const password = formData.get("password");

  const res = await fetch(`${process.env.BACKEND_API_URL}api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const result: State = await res.json();

  if (result.success) {
    const cookieStore = await cookies();
    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 1, // 1 day
    });
    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    redirect('/dashboard', "replace");
  }

  return result;
};

