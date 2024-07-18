import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

import { loginSchema, signUpSchema } from '@shared/ui/AuthBlock/model/index';
import { z } from 'zod';

export type TextInputProps = Partial<
  Omit<MdOutlinedTextField, keyof HTMLElement>
>;

export type TLoginSchema = z.infer<typeof loginSchema>;
export type TSignUpSchema = z.infer<typeof signUpSchema>;
