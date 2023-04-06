// SERVER SIDE RENDERING

import Link from 'next/link';

export const revalidate = 0;

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data;
};

export const metadata = {
  title: 'About',
  description: 'About page',
};

export default async function SSR() {
  const data = await fetchTodos();
  return (
    <main>
      <h1>Server Side Generated</h1>

      {data.map((todo) => (
        <div>
          <h3>{todo.title}</h3>
        </div>
      ))}
    </main>
  );
}
