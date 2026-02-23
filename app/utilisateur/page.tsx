import Link from 'next/link';
import '@/components/dashboard.css';
import { buyerStats, buyerTickets } from '@/components/dashboard-data';

export default function BuyerDashboardPage() {
  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <div>
          <p className="badge">Dashboard Utilisateur</p>
          <h1>Vos billets et accès livestream</h1>
          <p>Retrouvez vos achats, QR codes et événements à venir.</p>
        </div>
        <Link href="/" className="back-link">
          ← Retour au portail
        </Link>
      </div>

      <section className="metric-grid">
        {buyerStats.map((item) => (
          <article key={item.label} className="metric-card">
            <p>{item.label}</p>
            <strong>{item.value}</strong>
            <span>{item.trend}</span>
          </article>
        ))}
      </section>

      <section className="panel">
        <h2>Mes billets</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Événement</th>
              <th>Date</th>
              <th>Type</th>
              <th>Accès</th>
            </tr>
          </thead>
          <tbody>
            {buyerTickets.map((row) => (
              <tr key={`${row.event}-${row.date}`}>
                <td>{row.event}</td>
                <td>{row.date}</td>
                <td>{row.type}</td>
                <td>{row.access}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="actions">
          <button type="button">Télécharger mon QR code</button>
          <button type="button">Accéder au livestream</button>
          <button type="button">Contacter le support</button>
        </div>
      </section>
    </main>
  );
}
