import Link from 'next/link';
import '@/components/dashboard.css';
import { organizerEvents, organizerStats } from '@/components/dashboard-data';

export default function OrganizerDashboardPage() {
  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <div>
          <p className="badge">Dashboard Organisateur</p>
          <h1>Gestion de vos événements</h1>
          <p>Suivez vos ventes, vos performances et votre diffusion live.</p>
        </div>
        <Link href="/" className="back-link">
          ← Retour au portail
        </Link>
      </div>

      <section className="metric-grid">
        {organizerStats.map((item) => (
          <article key={item.label} className="metric-card">
            <p>{item.label}</p>
            <strong>{item.value}</strong>
            <span>{item.trend}</span>
          </article>
        ))}
      </section>

      <section className="panel">
        <h2>Performance de vos événements</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Événement</th>
              <th>Billets vendus</th>
              <th>Revenus</th>
              <th>Livestream</th>
            </tr>
          </thead>
          <tbody>
            {organizerEvents.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.sold}</td>
                <td>{row.revenue}</td>
                <td>{row.stream}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="actions">
          <button type="button">Créer un événement</button>
          <button type="button">Lancer un live test</button>
          <button type="button">Télécharger la liste participants</button>
        </div>
      </section>
    </main>
  );
}
