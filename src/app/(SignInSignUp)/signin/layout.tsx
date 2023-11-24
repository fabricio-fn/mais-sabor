import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | + Flavor',
  description:
    'Log in to your account at to access exclusive and personalized features. Log in securely and enjoy a convenient online experience.',
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
