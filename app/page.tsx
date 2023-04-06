import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href={'/about'}>Navigate To About</Link>
      <h1>Hello next 13</h1>
    </main>
  );
}
