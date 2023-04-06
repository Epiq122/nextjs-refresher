// Client-side rendering

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CSR() {
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
      <h1>Client Side Rendering</h1>
      {data.map((todo) => (
        <div>
          <h3>{todo.title}</h3>
        </div>
      ))}
    </main>
  );
}
