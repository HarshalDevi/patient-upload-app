'use client';

import React from 'react';

export default function EditableTable({
  data,
  setData,
}: {
  data: any[];
  setData: (data: any[]) => void;
}) {
  const keys = Object.keys(data[0]);

  const handleChange = (rowIndex: number, key: string, value: string) => {
    const newData = [...data];
    newData[rowIndex][key] = value;
    setData(newData);
  };

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={key} style={{ border: '1px solid #ccc', padding: '8px' }}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {keys.map((key) => (
              <td key={key} style={{ border: '1px solid #ccc', padding: '8px' }}>
                <input
                  value={row[key]}
                  onChange={(e) => handleChange(rowIndex, key, e.target.value)}
                  style={{ width: '100%', padding: '4px' }}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
