import { events, livestreamPlans } from '@/components/data';

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <p className="badge">Marketplace événementielle</p>
        <h1>EventHub Live</h1>
        <p>
          Une plateforme de billetterie moderne pour découvrir des événements,
          acheter vos billets et rejoindre les livestreams en direct.
        </p>
        <div className="hero-actions">
          <a href="#events">Explorer les événements</a>
          <a href="#livestream" className="secondary">
            Voir les offres livestream
          </a>
        </div>
      </header>

      <section id="events" className="section">
        <h2>Événements à la une</h2>
        <div className="grid">
          {events.map((event) => (
            <article className="card" key={event.id}>
              <img src={event.image} alt={event.title} />
              <div className="content">
                <span>{event.category}</span>
                <h3>{event.title}</h3>
                <p>
                  {event.city} · {event.date}
                </p>
                <strong>À partir de {event.priceFrom}€</strong>
                <button type="button">Acheter un billet</button>
                {event.livestream ? <small>Disponible en livestream</small> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="purchase" className="section ticket-box">
        <h2>Portail d&apos;achat de billet</h2>
        <p>
          Simulez une réservation rapide avec sélection d&apos;événement, type de
          billet et paiement sécurisé.
        </p>
        <form className="ticket-form">
          <label>
            Événement
            <select defaultValue="">
              <option value="" disabled>
                Sélectionnez un événement
              </option>
              {events.map((event) => (
                <option value={event.id} key={event.id}>
                  {event.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            Type de billet
            <select defaultValue="standard">
              <option value="standard">Standard</option>
              <option value="vip">VIP</option>
              <option value="group">Groupe</option>
            </select>
          </label>
          <label>
            Quantité
            <input type="number" min={1} defaultValue={1} />
          </label>
          <button type="submit">Procéder au paiement</button>
        </form>
      </section>

      <section id="livestream" className="section livestream">
        <h2>Portail de visionnage en livestream</h2>
        <p>
          Activez un pass live et suivez vos événements préférés depuis
          n&apos;importe où.
        </p>
        <div className="plans">
          {livestreamPlans.map((plan) => (
            <article key={plan.name} className="plan-card">
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}€</p>
              <ul>
                {plan.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
              <button type="button">Choisir ce pass</button>
            </article>
          ))}
        </div>
      </section>
    
      <section className="section ticket-box">
        <h2>Accès dashboards</h2>
        <p>Choisissez votre espace selon votre rôle sur la plateforme.</p>
        <div className="hero-actions">
          <a href="/admin">Espace Admin</a>
          <a href="/organisateur" className="secondary">Espace Organisateur</a>
          <a href="/utilisateur" className="secondary">Espace Utilisateur</a>
        </div>
      </section>
</main>
  );
}
