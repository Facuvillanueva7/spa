import { useMemo, useState } from 'react';
import type { Lead } from '../types';

export function AdminPage() {
  const [password, setPassword] = useState('');
  const [query, setQuery] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState('');

  async function fetchLeads() {
    setError('');
    const response = await fetch('/api/admin/leads', {
      headers: { Authorization: `Bearer ${password}` }
    });

    if (!response.ok) {
      setError('Unauthorized or backend unavailable.');
      return;
    }

    const json = await response.json();
    setLeads(json.data || []);
  }

  const filtered = useMemo(() =>
    leads.filter((lead) =>
      `${lead.name} ${lead.company} ${lead.email}`.toLowerCase().includes(query.toLowerCase())
    )
  , [leads, query]);

  function exportCsv() {
    const header = 'name,company,email,need,message,created_at';
    const rows = filtered.map((lead) =>
      [lead.name, lead.company, lead.email, lead.need, lead.message, lead.created_at]
        .map((value) => `"${String(value || '').replaceAll('"', '""')}"`)
        .join(',')
    );

    const blob = new Blob([[header, ...rows].join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'leads.csv';
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className='container'>
      <h1>Admin</h1>
      <div className='card grid'>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='ADMIN_PASSWORD' />
        <button className='btn primary' onClick={fetchLeads}>Load leads</button>
        {error && <small>{error}</small>}
      </div>

      <div className='toolbar'>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search lead...' />
        <button className='btn' onClick={exportCsv}>Export CSV</button>
      </div>

      <table>
        <thead><tr><th>Name</th><th>Company</th><th>Email</th><th>Need</th><th>Date</th></tr></thead>
        <tbody>
          {filtered.map((lead) => (
            <tr key={lead.id}><td>{lead.name}</td><td>{lead.company}</td><td>{lead.email}</td><td>{lead.need}</td><td>{new Date(lead.created_at).toLocaleString()}</td></tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
