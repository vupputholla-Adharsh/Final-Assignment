import axios from "axios";

const BASE_URL = "https://final-assignment-3.onrender.com/api/matches";
export const getMatchesByRound = (round) =>
  axios.get(`${BASE_URL}/round/${round}`);

export const getWinner = () =>
  axios.get(`${BASE_URL}/winner`);
