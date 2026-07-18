"use server";

import { cookies } from "next/headers";

export const getMe = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Access token not found",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}api/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `${accessToken}`,
    },
    cache: "force-cache",
    next: {
        revalidate: 60 * 60 * 24, // 1 day
        tags: ['my-profile'],
    }
  });

  const result = await res.json();

  return result;
};
