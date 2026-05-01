"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix icon issue di Next.js + Leaflet
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function DashboardPage() {
  const [devices, setDevices] = useState<any[]>([]);

  useEffect(() => {
    fetchDevices();

    const interval = setInterval(() => {
      fetchDevices();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  async function fetchDevices() {
    try {
      const res = await fetch("/api/device/latest");
      const data = await res.json();
      setDevices(data);
    } catch (err) {
      console.error("Failed to fetch devices", err);
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        SentinelTrack Dashboard
      </h1>

      {/* MAP */}
      <div className="h-[500px] w-full rounded-xl overflow-hidden border">
        <MapContainer
          center={[-6.2, 106.8]}
          zoom={10}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {devices.map((device) => {
            const log = device.logs?.[0];

            if (!log) return null;

            return (
              <Marker
                key={device.id}
                position={[log.latitude, log.longitude]}
                icon={icon}
              >
                <Popup>
                  <div>
                    <p><b>{device.name}</b></p>
                    <p>{log.city}</p>
                    <p>{log.country}</p>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      {/* LIST */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Device List</h2>

        <div className="grid gap-3">
          {devices.map((device) => {
            const log = device.logs?.[0];

            return (
              <div
                key={device.id}
                className="p-3 border rounded-lg"
              >
                <p><b>{device.name}</b></p>
                <p>Status: {device.isActive ? "Active" : "Inactive"}</p>
                <p>
                  Last Location: {log?.city || "-"}, {log?.country || "-"}
                </p>
                <p>
                  Lat: {log?.latitude || "-"}, Lng: {log?.longitude || "-"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
