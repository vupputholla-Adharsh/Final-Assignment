export default function WinnerCard({ winner }) {
  if (!winner) return null;

  return (
    <div className="winner-card">
      🏆 Tournament Champion
      <h2>{winner}</h2>
    </div>
  );
}
