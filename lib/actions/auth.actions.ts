'use server';

import { signInFormSchema, signUpFormSchema } from '../validators/auth';
import { signIn, signOut } from '@/auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import prisma from '../prisma';
import { hashSync } from 'bcrypt-ts-edge';
import { formatErrors } from '../utils';

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

    // Vérifier la validation Zod
    if (!validatedFields.success) {
      return {
        success: false,
        message:
          formatErrors(validatedFields.error) ||
          'Invalid email or password format.',
      };
    }

    await signIn('credentials', {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    });

    return { success: true, message: 'Login successful' };
  } catch (error) {
    // Gérer les erreurs de redirection (NextAuth)
    if (isRedirectError(error)) {
      throw error;
    }

    // Erreurs d'authentification
    console.error('Sign in error:', error);
    return {
      success: false,
      message:
        formatErrors(error) || 'Invalid email or password. Please try again.',
    };
  }
}

// SIGN UP USER
export async function signUpUser(prevState: unknown, formData: FormData) {
  try {
    const validatedFields = signUpFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    });

    // Vérifier la validation Zod
    if (!validatedFields.success) {
      return {
        success: false,
        message:
          formatErrors(validatedFields.error) ||
          'Validation failed. Please check your input.',
      };
    }

    const plainPassword = validatedFields.data.password;
    const hashedPassword = hashSync(validatedFields.data.password, 10);

    // Créer l'utilisateur
    await prisma.user.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        password: hashedPassword,
      },
    });

    // Connecter l'utilisateur automatiquement
    await signIn('credentials', {
      email: validatedFields.data.email,
      password: plainPassword,
    });

    return { success: true, message: 'User registered successfully' };
  } catch (error) {
    // Gérer les erreurs de redirection (NextAuth)
    if (isRedirectError(error)) {
      throw error;
    }

    return {
      success: false,
      message: formatErrors(error),
    };
  }
}

// SIGN OUT USER
export async function signOutUser() {
  await signOut();
}
