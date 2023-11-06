import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>Examples</h1>

      <h2>Sign-up</h2>
      <ul>
        <li>
          <Link href="/sign-up/email-password">Email + Password</Link>
        </li>
        <li>
          <Link href="/sign-up/magic-auth">Magic Auth</Link>
        </li>
      </ul>

      <h2>Sign-in</h2>
      <ul>
        <li>
          <Link href="/sign-in/email-password">Email + Password</Link>
        </li>
        <li>
          <Link href="/sign-in/magic-auth">Magic Auth</Link>
        </li>
      </ul>
    </main>
  );
}