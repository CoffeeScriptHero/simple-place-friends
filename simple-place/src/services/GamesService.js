export const getGames = async (category) => {
  const response = await fetch("/api/games/get-games", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category }),
  });
  return response;
};
