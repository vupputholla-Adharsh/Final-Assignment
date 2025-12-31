export default function MatchCard({ match }) {
  return (
    <div className="match-card">
      <div className="players">
        <span>{match.player1}</span>
        <span className="vs">VS</span>
        <span>{match.player2}</span>
      </div>

      <div className="score">{match.score}</div>

      <div className="winner">
        Winner: <strong>{match.winner}</strong>
      </div>
    </div>
  );
}