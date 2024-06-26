export function toDegreesMinutesAndSeconds(coordinate: any) {
  const absolute = Math.abs(coordinate);
  const degrees = Math.floor(absolute);
  const minutesNotTruncated = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesNotTruncated);
  const seconds = Math.floor((minutesNotTruncated - minutes) * 60);

  return degrees + '° ' + minutes + "' " + seconds + "''";
}

export function convertDMS(lat: any, lng: any) {
  const latitude = toDegreesMinutesAndSeconds(lat);
  const latitudeCardinal = lat >= 0 ? 'N' : 'S';

  const longitude = toDegreesMinutesAndSeconds(lng);
  const longitudeCardinal = lng >= 0 ? 'E' : 'W';

  return (
    latitude +
    ' ' +
    latitudeCardinal +
    ', ' +
    longitude +
    ' ' +
    longitudeCardinal
  );
}

export const convertToLocationInfo = (location: any) => {
  return {
    city: location.city,
    geometry: {
      type: location.type,
      coordinates: [+location.latitude, +location.longitude],
    },
    mapBoxId: location.mapBoxId,
    place_name: location.place_name,
    place_name_is: location.place_name_is,
    postcode: location.postNumber,
  };
};
