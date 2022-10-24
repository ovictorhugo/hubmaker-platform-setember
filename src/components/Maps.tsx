import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '800px',
    height: '400px'
};

const center = {

    lat: -12.98091874308753,
    lng: -38.51151131800578
};

export function Maps() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDU3EikrUmBmdCL9W05eiS1NzaVCwHMnr0"
      })

      

    return (
      <div>
         {isLoaded ? (
             <GoogleMap
             mapContainerStyle={containerStyle}
             center={center}
             zoom={20}

           >
             <Marker position={center}/>
           </GoogleMap>
         ) : (
            <></>
         )}
      </div>
    );
  }