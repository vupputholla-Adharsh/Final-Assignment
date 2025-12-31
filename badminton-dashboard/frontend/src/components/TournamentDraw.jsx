import { useEffect, useState } from "react";
import { fetchRound, fetchWinner } from "../services/api";
import MatchCard from "./MatchCard";

const rounds = ["Quarterfinals", "Semifinals", "Finals"];

export default function TournamentDraw() {
  const [data, setData] = useState({});
  const [winner, setWinner] = useState("");

  useEffect(() => {
    rounds.forEach(async (r) => {
      const res = await fetchRound(r);
      setData((p) => ({ ...p, [r]: res.data }));
    });

    fetchWinner().then((res) => setWinner(res.data.winner));
  }, []);

  return (
    <div className="container">
      {rounds.map((r) => (
        <section key={r}>
          <h2>{r}</h2>
          <div className="grid">
            {data[r]?.map((m, i) => (
              <MatchCard key={i} match={m} />
            ))}
          </div>
        </section>
      ))}

      <div className="champion">
        🏆 Champion: <strong>{winner}</strong>
      </div>
    </div>
  );
}
