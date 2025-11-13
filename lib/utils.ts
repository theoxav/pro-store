import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert prisma object into a regular JS object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
}

// Format errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatErrors(error: any): string {
  // Erreurs Zod - utiliser issues (tableau simple)
  if (error?.name === 'ZodError' && Array.isArray(error.issues)) {
    return error.issues.map((issue: { message: string }) => issue.message).join('. ');
  }

  // Erreurs Prisma - Email dupliqué
  if (error?.name === 'PrismaClientKnownRequestError' && error?.code === 'P2002') {
    const field = error.meta?.target?.[0] || 'field';
    return `This ${field} is already in use. Please use a different ${field}.`;
  }

  // Erreurs avec message personnalisé
  if (error?.message && typeof error.message === 'string') {
    return error.message;
  }

  // Erreur par défaut
  return 'An error occurred. Please try again.';
}


export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}