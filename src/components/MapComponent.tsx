'use client';

import { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

interface Location {
  lat: number;
  lng: number;
}

interface MapComponentProps {
  center: Location;
  onLocationSelect: (location: Location, formattedAddress: string) => void;
}

const containerStyle = {
  width: '100%',
  height: '300px'
};

export default function MapComponent({ center, onLocationSelect }: MapComponentProps) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places']
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
    setMarker(null);
  }, []);

  const onMarkerLoad = useCallback((marker: google.maps.Marker) => {
    setMarker(marker);
  }, []);

  const handleMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (e.latLng && marker) {
      marker.setPosition(e.latLng);
      updateLocation(e.latLng.lat(), e.latLng.lng());
    }
  }, [marker]);

  const handleMarkerDragEnd = useCallback((e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      updateLocation(e.latLng.lat(), e.latLng.lng());
    }
  }, []);

  const updateLocation = async (lat: number, lng: number) => {
    if (!window.google?.maps) return;

    try {
      const geocoder = new google.maps.Geocoder();
      const response = await geocoder.geocode({
        location: { lat, lng }
      });

      if (response.results[0]) {
        const formattedAddress = response.results[0].formatted_address;
        onLocationSelect({ lat, lng }, formattedAddress);
      }
    } catch (error) {
      console.error('Failed to update location:', error);
    }
  };

  if (!isLoaded) {
    return (
      <div className="w-full h-[300px] rounded-lg overflow-hidden mb-2 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden mb-2 border-2 border-gray-200 dark:border-gray-700">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={handleMapClick}
        options={{
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            }
          ],
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false
        }}
      >
        <Marker
          position={center}
          draggable={true}
          onLoad={onMarkerLoad}
          onDragEnd={handleMarkerDragEnd}
        />
      </GoogleMap>
    </div>
  );
} 