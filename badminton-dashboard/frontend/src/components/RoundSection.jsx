import MatchCard from "./MatchCard";

export default function RoundSection({ title, matches }) {
  return (
    <section className="round">
      <h2>{title}</h2>

      <div className="round-grid">
        {matches.length === 0 ? (
          <p className="empty">No matches found</p>
        ) : (
          matches.map((match, index) => (
            <MatchCard key={index} match={match} />
          ))
        )}
      </div>
    </section>
  );
}
