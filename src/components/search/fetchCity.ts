export default async function fetchCity(url: string) {
  const res = await fetch(url);
  return res.json();
}
