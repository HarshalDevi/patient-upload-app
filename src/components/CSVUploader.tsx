'use client';

import React, { useState } from 'react';
import Papa from 'papaparse';
import EditableTable from '../components/EditableTable';

import { syncToCRM } from '../utils/syncToCRM';

export default function CSVUploader() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.name.endsWith('.csv')) {
      setError('Please upload a valid CSV file.');
      return;
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (!Array.isArray(results.data) || results.data.length === 0) {
          setError('Invalid or empty CSV.');
        } else {
          setError(null);
          setData(results.data as any[]);
        }
      },
      error: () => setError('Failed to parse CSV.'),
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      {data.length > 0 && (
        <>
          <EditableTable data={data} setData={setData} />
          <button
            onClick={() => syncToCRM(data)}
            style={{
              marginTop: '15px',
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Sync to CRM
          </button>
        </>
      )}
    </div>
  );
}
