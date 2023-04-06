// Client-side rendering

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();
      setData(data);
    };
    fetchTodos();
  });
  return (
    <main>
      <Link href={'/about'}>Navigate To About</Link>
      <h1>Hello next 13</h1>
      {data.map((todo) => (
        <div>
          <h3>{todo.title}</h3>
        </div>
      ))}
    </main>
  );
}
