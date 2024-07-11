import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(8),
});

export const signUpSchema = z
  .object({
    email: z.string().email(),
    username: z.string().min(2),
    password: z.string().min(8),
    password2: z.string().min(8),
  })
  .superRefine(({ password2, password }, ctx) => {
    if (password2 !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['password2'],
      });
    }
  });
