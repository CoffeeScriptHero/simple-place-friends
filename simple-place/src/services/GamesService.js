export const getGames = async (category) => {
  const response = await fetch("/api/games/get-games", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category }),
  });
  return response;
};

export const getGameInfo = async (name) => {
  const response = await fetch("/api/games/get-game-info", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return response;
};
