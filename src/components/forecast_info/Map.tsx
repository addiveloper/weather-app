import { locationData } from "@/interfaces/locationData";

export function Map({ location }: { location: locationData }) {
  const url = `https://maps.google.com/maps?width=100%&height=200&hl=en&q=${
    location.name + "%" + location.region + "%" + location.country || "Caracas"
  }&t=&z=10&ie=UTF8&iwloc=B&output=embed`;
  return (
    <>
      <iframe
        src={url}
        loading="lazy"
        width="100%"
        height="100%"
        className="rounded-xl"
      ></iframe>
    </>
  );
}
