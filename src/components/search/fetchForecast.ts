export default async function fetchForecast(id?: number) {
  const key = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=id:${
        id || "2687185"
      }&days=3&aqi=yes&alerts=no`
    );

    const data = await response.json();

    if (!data) {
      console.error("Error en la API");
      return;
    }
    return {
      current: data.current,
      location: data.location,
      forecast: data.forecast,
    };
  } catch (e) {
    console.error(e);
  }
}
