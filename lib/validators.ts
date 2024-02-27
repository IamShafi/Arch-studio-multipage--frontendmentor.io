// schemas.ts
import { z } from 'zod';

export const RegisterSchema = z.object({
    email: z.string().email({
      message: 'Email is required',
    }),
    password: z.string().min(6
    ),
    confirmPassword: z.string().min(6),
  });


export const LoginSchema = z.object({
    email: z.string().email({
      message: "Email is required",
    }),
    password: z.string().min(6),
    // code: z.optional(z.string()),
  });