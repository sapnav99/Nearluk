import   {useCallback, useMemo, useRef} from 'react'
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api"

type latlngLiteral = google.maps.LatLngLiteral
type MapOtions = google.maps.MapOptions


const Maps = ({propertyPosition}: any) => {
    const mapRef = useRef<GoogleMap>()

   

    const containerStyle = {
        width: '100%',
        height: '400px'
      };

      const centerPositon = useMemo<latlngLiteral>(() => (
        {
            lat: propertyPosition.lat,
            lng: propertyPosition.lng
        }
      ), [propertyPosition])


      const options = useMemo<MapOtions>(() => (
        {
            disableDefaultUI: true,
            clickableIcons: false
        }
      ),[])

      const onLoad: any = useCallback((map: GoogleMap) => (mapRef.current = map), [])

    const {isLoaded} = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCEDp1k2rqt67lzxkvetaemDGp7ieO3rpg"
    })
    return (
            isLoaded ? (
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={propertyPosition}
                zoom={15}
                options={options}
                onLoad={onLoad}
                >
                
            {centerPositon && (<Marker position={centerPositon}/>)} 
                
            </GoogleMap>) : (<h4>Loadding...</h4>)
        
    );

}

export default Maps