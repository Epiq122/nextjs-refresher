// Client-side rendering

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState({});

  //Fetch data from the API route we created
  useEffect(() => {
    const fetchMessage = async () => {
      const res = await fetch('/api/todos');
      const data = await res.json();
      console.log(data);

      setMessage(data);
    };
    fetchMessage();
  }, []);

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
