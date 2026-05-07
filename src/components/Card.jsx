const Card = ({ children, title, className = "" }) => {
  return (
    <div className={`neo-brutal-card ${className}`}>
      {title && <h3 style={{ marginBottom: '1rem', borderBottom: '2px solid var(--primary-color)', paddingBottom: '0.5rem' }}>{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
