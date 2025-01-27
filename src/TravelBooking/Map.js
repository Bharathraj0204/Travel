import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';

// Fix for the default icon not being found in Leaflet 1.x
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
    const [locations, setLocations] = useState([
        { id: 1, name: "Predefined Location 1", latitude: 11.342423, longitude: 77.728165 },
        { id: 2, name: "Predefined Location 2", latitude: 11.004556, longitude: 76.961632 }
    ]);

    useEffect(() => {
        axios.get('https://api.example.com/locations')
            .then(response => {
                // Combine predefined locations with the data from the API
                setLocations(prevLocations => [...prevLocations, ...response.data]);
            })
            .catch(error => {
                console.error('Error fetching data from API', error);
            });
    }, []);

    // Create an array of positions for the polyline
    const polylinePositions = locations.map(location => [location.latitude, location.longitude]);

    return (
        <MapContainer center={[11.173, 77.344]} zoom={10} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map(location => (
                <Marker key={location.id} position={[location.latitude, location.longitude]}>
                    <Popup>
                        {location.name}
                    </Popup>
                </Marker>
            ))}
            <Polyline positions={polylinePositions} color="blue" />
        </MapContainer>
    );
}

export default MapComponent;