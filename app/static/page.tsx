import Link from 'next/link';

export const revalidate = 60; // revalidate every 60 seconds

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data;
};

export const metadata = {
  title: 'About',
  description: 'About page',
};

export default async function Static() {
  const data = await fetchTodos();
  return (
    <main>
      <h1>Statically Generated</h1>

      {data.map((todo) => (
        <div>
          <h3>{todo.title}</h3>
        </div>
      ))}
    </main>
  );
}
