import axios from "axios";

const BASE_URL = "http://localhost:5000/api/matches";

export const getMatchesByRound = (round) =>
  axios.get(`${BASE_URL}/round/${round}`);

export const getWinner = () =>
  axios.get(`${BASE_URL}/winner`);
