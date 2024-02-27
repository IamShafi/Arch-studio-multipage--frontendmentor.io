"use server";

import * as z from "zod";
import { LoginSchema } from "../../lib/validators";
import { signIn } from "../../auth";
import { DEFAULT_LOGIN_REDIRECT } from "../../routes";
import { AuthError } from "next-auth";

export const Login = async (value: z.infer<typeof LoginSchema>) => {
  console.log(value);
  const validatedFields = LoginSchema.parse(value);
  // if backend zod validation fails
  if (!validatedFields) {
    return {
      error: "Invalid fields",
    };
  }
  const { email, password } = validatedFields;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid credentials",
          };
        default:
          return {
            error: "Something went wrong",
          };
      }
    }
    throw error;
  }
};
