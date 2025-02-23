"use client";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";

export default function MapComponent() {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const [zoom, setZoom] = useState(10);

    // Target Location
    const location = [90.4125, 23.8103];

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiaWJudWw0MiIsImEiOiJjbTdoeno2aWoxNnU4MmtzN2p5ODhpdDE2In0.vcRERJRg8V6offf1EEfgPg";

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/light-v10",
            center: location,
            zoom: zoom,
        });

        // a pinpoint marker
        new mapboxgl.Marker({ color: "#31ED93" })
            .setLngLat(location)
            .addTo(mapRef.current);

        // a circle around the location
        mapRef.current.on("load", () => {
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
                    "circle-strokeWidth": 0,
                    // "circle-stroke-color": "#31ED93",
                },
            });
        });

        mapRef.current.on("zoomend", () => setZoom(mapRef.current.getZoom()));

        return () => mapRef.current.remove();
    }, []);

    const zoomIn = () => mapRef.current?.zoomIn();
    const zoomOut = () => mapRef.current?.zoomOut();

    return (
        <div className="absolute top-24 left-0 w-screen h-[calc(100%-100px)]">
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

            {/* all informations */}
            <div className="absolute left-0 bottom-0 w-full rounded-tl-lg rounded-tr-lg overflow-hidden bg-white">
                <div className="py-10 px-10  shadow-lg grid grid-cols-3 divide-x">
                    <div className="pl-10 flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full overflow-hidden flex justify-center items-center border border-[#31ED93]">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#31ED93]"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-2xl font-semibold">10:50</p>
                            <p className="text-sm opacity-60">Estimated arrival time</p>
                        </div>
                    </div>
                    <div className="pl-10 flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full overflow-hidden flex justify-center items-center border border-[#31ED93]">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#31ED93]"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold">
                                <span className="text-2xl">2.4 </span>
                                <span className="text-sm">KM</span>
                            </p>
                            <p className="text-sm opacity-60">Turn Right in 2.4 miles</p>
                        </div>
                    </div>
                    <div className="pl-10 flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full overflow-hidden flex justify-center items-center border border-[#31ED93]">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#31ED93]"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold">
                                <span className="text-2xl">6.3 </span>
                                <span className="text-sm">KM</span>
                            </p>
                            <p className="text-sm opacity-60">Distance to Creative Tim</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
