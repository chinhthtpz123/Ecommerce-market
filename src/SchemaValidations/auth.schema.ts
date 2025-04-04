
import z from 'zod';


export const RegisBody = z.object({
  firstName: z.string().max(50),
  lastName: z.string().max(50),
  email: z.string().email(),
  password: z.string().min(6).max(100),
  confirmPassword: z.string().min(6).max(100),
})
.strict()
.superRefine(({ password, confirmPassword } , ctx) => {
  if (password !== confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Password and confirm password do not match",
      path: ["confirmPassword"]
    })
  }
})

export const RegisterRes = z.object({
  data: z.object({
    token: z.string(),
    expiresAt: z.string(),
    account: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string()
    })
  }),
  message: z.string()
})

export type RegisBodyType = z.infer<typeof RegisBody>;
export type RegisterResType = z.infer<typeof RegisterRes>;

export const LoginBody = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100)
})
.strict();

export const LoginRes = RegisterRes;

export type LoginBodyType = z.infer<typeof LoginBody>;
export type LoginResType = z.infer<typeof LoginRes>;