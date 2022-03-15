export const fetchData = async (path) => {
  const pageUrl = `https://swapi.dev/api/`;
  const response = await fetch(`${pageUrl}${path}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
