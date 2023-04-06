// SERVER SIDE RENDERING

import Link from 'next/link';

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data;
};

export const metadata = {
  title: 'About',
  description: 'About page',
};

export default async function About() {
  const data = await fetchTodos();
  return (
    <main>
      <Link href={'/'}>Navigate To Home Page</Link>
      <h1>About Page</h1>
      {data.map((todo) => (
        <div>
          <h3>{todo.title}</h3>
        </div>
      ))}
    </main>
  );
}
