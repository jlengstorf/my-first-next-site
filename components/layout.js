import Link from 'next/link';

export function Layout({ children }) {
  return (
    <>
      <header>
        <Link href="/">My Next Site</Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/characters/">Characters</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>What a great site!</footer>
    </>
  );
}
