"use client";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";

export default function MapComponent() {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const [zoom, setZoom] = useState(10);
    const [mapError, setMapError] = useState(null);

    // Target Location
    const location = [90.4125, 23.8103];

    useEffect(() => {
        mapboxgl.accessToken =
            process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

        if (!mapContainerRef.current) {
            console.error("Map container not found!");
            return;
        }

        try {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: "mapbox://styles/mapbox/light-v10",
                center: location,
                zoom: zoom,
            });

            new mapboxgl.Marker({ color: "#31ED93" })
                .setLngLat(location)
                .addTo(mapRef.current);

            mapRef.current.on("load", () => {
                try {
                    mapRef.current.addSource("circle-source", {
                        type: "geojson",
                        data: {
                            type: "Feature",
                            geometry: { type: "Point", coordinates: location },
                        },
                    });

                    mapRef.current.addLayer({
                        id: "circle-layer",
                        type: "circle",
                        source: "circle-source",
                        paint: {
                            "circle-radius": 50,
                            "circle-color": "#31ED93",
                            "circle-opacity": 0.1,
                        },
                    });
                } catch (layerError) {
                    console.error("Error adding Mapbox layer:", layerError);
                    setMapError("Failed to load the map layer.");
                }
            });

            mapRef.current.on("zoomend", () => setZoom(mapRef.current.getZoom()));
        } catch (error) {
            console.error("Mapbox initialization error:", error);
            setMapError("Failed to load the map.");
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
            }
        };
    }, []);

    const zoomIn = () => {
        try {
            mapRef.current?.zoomIn();
        } catch (error) {
            console.error("Error zooming in:", error);
        }
    };

    const zoomOut = () => {
        try {
            mapRef.current?.zoomOut();
        } catch (error) {
            console.error("Error zooming out:", error);
        }
    };

    return (
        <div className="absolute top-24 left-0 w-screen h-[calc(100%-100px)]">
            {mapError && (
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                    <p className="text-red-600 font-semibold">{mapError}</p>
                </div>
            )}

            {/* Map Container */}
            <div ref={mapContainerRef} className="w-full h-full" />

            {/* Zoom Buttons */}
            <div className="absolute top-5 right-5 flex flex-col items-center bg-white rounded-full overflow-hidden">
                <button
                    onClick={zoomIn}
                    className="p-3 text-xl text-[#31ED93] hover:bg-gray-100 transition"
                >
                    +
                </button>
                <div className="w-3/4 h-[1px] bg-gray-200"></div>
                <button
                    onClick={zoomOut}
                    className="p-3 text-xl text-[#31ED93] hover:bg-gray-100 transition"
                >
                    −
                </button>
            </div>

            <div className="absolute left-0 bottom-0 w-full rounded-tl-lg rounded-tr-lg overflow-hidden bg-white">
                <div className="py-8 px-10 shadow-lg grid grid-cols-3 divide-x">
                    {[
                        { title: "Estimated arrival time", value: "10:50" },
                        { title: "Turn Right in", value: "2.4 KM" },
                        { title: "Distance to Creative Tim", value: "6.3 KM" },
                    ].map((item, index) => (
                        <div key={index} className="pl-10 flex items-center gap-4">
                            <div className="w-6 h-6 rounded-full flex justify-center items-center border border-[#31ED93]">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#31ED93]"></div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-2xl font-semibold">{item.value}</p>
                                <p className="text-sm opacity-60">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
