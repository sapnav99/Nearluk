import { useEffect, useState } from "react";

const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] =
    useState<google.maps.LatLngLiteral | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        const { latitude, longitude } = position.coords;
        // console.log(latitude, longitude);
        setCurrentLocation({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  return currentLocation;
};

export default useCurrentLocation;
