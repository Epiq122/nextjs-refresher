'use client';

const mainStyles = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function Styler() {
  return (
    <main style={mainStyles}>
      <button style={{ backgroundColor: 'red', padding: '1rem' }}>
        Beer Me🍺
      </button>
    </main>
  );
}
