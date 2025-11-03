export default function Section({ id, title, icon, children }) {
  return (
    <section id={id} className="section">
      <div className="section__heading">
        <div className="section__icon">{icon}</div>
        <h2>{title}</h2>
      </div>
      <div className="section__content">{children}</div>
    </section>
  );
}
