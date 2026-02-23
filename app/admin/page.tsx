import Link from 'next/link';
import '@/components/dashboard.css';
import { adminModerationQueue, adminStats } from '@/components/dashboard-data';

export default function AdminDashboardPage() {
  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <div>
          <p className="badge">Dashboard Admin</p>
          <h1>Pilotage global de la plateforme</h1>
          <p>Supervision des ventes, modération événements et sécurité.</p>
        </div>
        <Link href="/" className="back-link">
          ← Retour au portail
        </Link>
      </div>

      <section className="metric-grid">
        {adminStats.map((item) => (
          <article key={item.label} className="metric-card">
            <p>{item.label}</p>
            <strong>{item.value}</strong>
            <span>{item.trend}</span>
          </article>
        ))}
      </section>

      <section className="panel">
        <h2>File de modération</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Événement</th>
              <th>Organisateur</th>
              <th>Statut</th>
              <th>Niveau de risque</th>
            </tr>
          </thead>
          <tbody>
            {adminModerationQueue.map((row) => (
              <tr key={row.event}>
                <td>{row.event}</td>
                <td>{row.organizer}</td>
                <td>{row.status}</td>
                <td>{row.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="actions">
          <button type="button">Valider un événement</button>
          <button type="button">Suspendre un vendeur</button>
          <button type="button">Exporter le rapport hebdo</button>
        </div>
      </section>
    </main>
  );
}
