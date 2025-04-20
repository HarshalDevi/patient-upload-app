'use client';

import CSVUploader from '../components/CSVUploader';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Upload Patient CSV</h1>
      <CSVUploader />
    </main>
  );
}
