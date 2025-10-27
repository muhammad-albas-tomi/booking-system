import { useCallback, useEffect, useState } from 'react';

export function useGeolocation() {
  const [location, setLocation] = useState<{
    loaded: boolean;
    coordinates: {
      lat: number | null;
      lng: number | null;
    };
    error: string | null;
  }>({
    loaded: false,
    coordinates: { lat: null, lng: null },
    error: null,
  });

  const onSuccess: PositionCallback = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
      error: null,
    });
  };

  const onError: PositionErrorCallback = (error) => {
    setLocation({
      loaded: true,
      coordinates: { lat: null, lng: null },
      error: error.message,
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError(new GeolocationPositionError());
      return;
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
}

export function useClockInGeolocation() {
  const [location, setLocation] = useState<{
    loaded: boolean;
    coordinates: {
      lat: number | null;
      lng: number | null;
    };
    error: string | null;
  }>({
    loaded: false,
    coordinates: { lat: null, lng: null },
    error: null,
  });

  const onSuccess: PositionCallback = (pos) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      },
      error: null,
    });
  };

  const onError: PositionErrorCallback = (error) => {
    setLocation({
      loaded: true,
      coordinates: { lat: null, lng: null },
      error: error.message,
    });
  };

  const getLocation = useCallback(() => {
    if (!('geolocation' in navigator)) {
      onError({
        message: 'Geolocation tidak didukung',
        code: 0,
        PERMISSION_DENIED: 1,
        POSITION_UNAVAILABLE: 2,
        TIMEOUT: 3,
      } as GeolocationPositionError);
      return;
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { location, getLocation };
}
