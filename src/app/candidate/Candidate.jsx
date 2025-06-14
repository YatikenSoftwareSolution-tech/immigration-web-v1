'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";

export default function ShowPage() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id"); 
  const [record, setRecord] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://immigration-ca-run-service-829497711371.asia-south1.run.app/api/data/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Fetch failed (${res.status})`);
        return res.json();
      })
      .then((data) => setRecord(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (!id) return <p>Loading…</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!record) return <p>Fetching…</p>;

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>Record {record.id}</h1>
      <p>
        <strong>Text:</strong> <br />
        {record.name}
      </p>
      <p>
        <strong>File:</strong>{' '}
        <a href={record.fileUrl} target="_blank" rel="noopener noreferrer">
          Download / View
        </a>
      </p>
      <p style={{ fontSize: '0.85em', color: '#666' }}>
        Created on: {new Date(record.createdAt).toLocaleString()}
      </p>
    </div>
  );
}
