'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import paths from '@/paths';

const createOnboardingSchema = z.object({
  name: z
    .string()
    .min(2)
    .regex(/^[A-Za-z-]+$/, {
      message: 'Just First Name please',
    }),
  phoneNumber: z
    .string()
    .min(10)
    .regex(/^\d+$/, { message: 'Phone number must be 10 digits, no dashes' }),
});

interface SubmitOnboardingFormState {
  errors: {
    name?: string[];
    phoneNumber?: string[];
    _form?: string[];
  };
}

export async function submitOnboarding(
  formState: SubmitOnboardingFormState,
  formData: FormData
): Promise<SubmitOnboardingFormState> {
  const result = createOnboardingSchema.safeParse({
    name: formData.get('name'),
    phoneNumber: formData.get('phoneNumber'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const message = {
      name: result.data.name,
      phoneNumber: result.data.phoneNumber,
    };
    console.log(message);
    const response = await fetch(
      'http://localhost:3001/api/send-greeting-message',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
        body: JSON.stringify(message),
      }
    );

    if (!response.ok) {
      return {
        errors: {
          _form: ['Server connection refused. Please try again.'],
        },
      };
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (err: unknown) {
    return {
      errors: {
        _form: ['Something went wrong, please try again.'],
      },
    };
  }

  //check if need to revalidate path

  redirect(paths.messageSent());
}
