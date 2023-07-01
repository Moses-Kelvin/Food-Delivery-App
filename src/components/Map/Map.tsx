import Link from "next/link";
import React, { useEffect, useState } from 'react';
import maplibre from 'maplibre-gl';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import { Marker, GeolocateControl, Popup } from "maplibre-gl";


const Map = ({props} : any) => {

    const [cord, setCord] = useState({lat: 6.55098, lng: 3.228213, zoom: 4});
    const [address, setAddress] = useState("xxx-xxx-xxx-xxx");

    const geolocate = new GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    });


    const onPlaceSelect = (value: any) => {
         if (value) {
            const latitute = value.properties.lat;
        const longitude = value.properties.lon;
        setCord({lat: latitute, lng: longitude, zoom: 14});
         }
        // console.log(latitute, longitude);
    };

    const onSuggectionChange = (value: any) => {
        console.log(value);
    };

    console.log(props);

    let mapContainer: any;

    const myAPIKey = 'daca931ce8a24d899e1bab0a85f050a8';
    const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';

    const updatedState = {
        lng: cord.lng,
        lat: cord.lat,
        zoom: cord.zoom
    };

    useEffect(() => {

        const map = new maplibre.Map({
            container: mapContainer,
            style: `${mapStyle}?apiKey=${myAPIKey}`,
            center: [updatedState.lng, updatedState.lat],
            zoom: updatedState.zoom
        });

        const marker = new Marker({
            color: "#000",
            draggable: true
        }).setLngLat([cord.lng, cord.lat]).addTo(map);


        map.addControl(geolocate);

        geolocate.on('geolocate', () => console.log('A geolocate event has occured'));

        map.on("click", function (e) {
            const coordinates: any = [e.lngLat.lng, e.lngLat.lat];
            console.log(coordinates)
          
            // on small zoom levels it could happen that a location is present multiple times on the map
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
          
                fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${coordinates[1]}&lon=${coordinates[0]}&apiKey=${myAPIKey}`)
                .then(response => response.json())
                .then(result => {
                  if (result.features.length) {
                    const address = result.features[0].properties.formatted;
                    setAddress(address);
                    new Popup().setLngLat(coordinates).setHTML(address).addTo(map);
                  } else {
                    new Popup().setLngLat(coordinates).setHTML("No address found").addTo(map);
                  }
                });
             });

    }, [mapContainer, cord]);



    return (
        <section className="h-full w-full flex flex-col bg-lightBlue shadow-xl">
             <GeoapifyContext apiKey={myAPIKey}>
             <GeoapifyGeocoderAutocomplete placeholder="Enter address here"
            limit={20}
            placeSelect={onPlaceSelect}
            suggestionsChange={onSuggectionChange}
                />
            </GeoapifyContext>
            <div className="map-container h-full" ref={el => mapContainer = el}> 
            </div>
            <div className="w-full py-2 bg-white flex justify-between px-4">
                <p className="font-bold">{address}</p>
                <button className="rounded-lg px-4 bg-deepRed text-white text-sm py-2">save</button>
            </div>
        </section>
    )
}

export default Map;

 