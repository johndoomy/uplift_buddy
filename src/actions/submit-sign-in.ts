'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import paths from '@/paths';
import { prisma } from '@/lib/prisma';

const createSignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  password: z.string().min(3),
});

interface SubmitSignInFormState {
  errors: {
    email?: string[];
    password?: string[];
    _form?: string[];
  };
}

export async function submitSignIn(
  formState: SubmitSignInFormState,
  formData: FormData
): Promise<SubmitSignInFormState> {
  console.log('signing in');
  const result = createSignInSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const credentials = {
      email: result.data.email,
      password: result.data.password,
    };
    console.log(credentials);
    const user = await prisma.user.findUnique({
      where: { email: result.data.email },
    });

    if (!user) {
      return {
        errors: {
          _form: ['Could not find account with this email.'],
        },
      };
    }

    console.log(user);
  } catch (err: unknown) {
    return {
      errors: {
        _form: ['Something went wrong, please try again.'],
      },
    };
  }

  //check if need to revalidate path

  redirect(paths.home());
}
