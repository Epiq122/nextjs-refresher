import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'About page',
};

export default function About() {
  return (
    <main>
      <Link href={'/'}>Navigate To Home Page</Link>
      <h1>About Page</h1>
    </main>
  );
}
