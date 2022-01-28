import { typeOfIcon } from "./typeOfIcon";

export const makeLocations = (
  filteredData,
  setLocations,
  setData,
  setIsOpen
) => {
  if (filteredData.length === 0) {
    setLocations([]);
  }

  const locationsToShow =
    filteredData &&
    filteredData.map((el) => {
      const lati = Number(el.location.latitude).toFixed(6);
      const longi = Number(el.location.longitude).toFixed(6);
      return {
        position: { lat: Number(lati), lng: Number(longi) },
        icon: typeOfIcon(el.status),
        fn: () => {
          setIsOpen(true);
          setData(el);
        },
      };
    });
  setLocations(locationsToShow);
};
