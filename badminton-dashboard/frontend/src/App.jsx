import { useEffect, useState } from "react";
import Header from "./components/Header";
import RoundSection from "./components/RoundSection";
import WinnerCard from "./components/WinnerCard";
import { getMatchesByRound, getWinner } from "./services/api";

export default function App() {
  const [quarterfinals, setQuarterfinals] = useState([]);
  const [semifinals, setSemifinals] = useState([]);
  const [finals, setFinals] = useState([]);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    async function loadData() {
      const qf = await getMatchesByRound("Quarterfinals");
      const sf = await getMatchesByRound("Semifinals");
      const fn = await getMatchesByRound("Final");
      const win = await getWinner();

      setQuarterfinals(qf.data);
      setSemifinals(sf.data);
      setFinals(fn.data);
      setWinner(win.data.winner);
    }

    loadData();
  }, []);

  return (
    <>
      <Header />

      <div className="container">
        <RoundSection title="Quarterfinals" matches={quarterfinals} />
        <RoundSection title="Semifinals" matches={semifinals} />
        <RoundSection title="Final" matches={finals} />

        <WinnerCard winner={winner} />
      </div>
    </>
  );
}
