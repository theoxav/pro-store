'use server';

import { signInFormSchema } from '../validators/auth';
import { signIn, signOut } from '@/auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

// SIGN IN USER WITH CREDENTIALS
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const validatedFields = signInFormSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', validatedFields.data);

    return { success: true, message: 'Login successful' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return { success: false, message: 'Invalid credentials' };
  }
}

// SIGN OUT USER
export async function signOutUser() {
  await signOut();
}
