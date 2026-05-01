"use client";

import { useEffect, useState } from "react";
import { trackDevice } from "@/lib/tracker";

export default function Home() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    const secret = "aec0fcb4-7cb6-4446-a05a-44eaf569b16d";
    trackDevice(secret);

    // ambil data tiap 3 detik
    const interval = setInterval(async () => {
      const res = await fetch("/api/device/ping");
      const data = await res.json();
      setLogs(data);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Tracking Device Aktif 🚀</h1>

      <h2>Data Lokasi:</h2>

      {logs.map((log, i) => (
        <div key={i} style={{ border: "1px solid #ccc", margin: 10 }}>
          <p>IP: {log.ip}</p>
          <p>Kota: {log.city}</p>
          <p>Latitude: {log.latitude}</p>
          <p>Longitude: {log.longitude}</p>
        </div>
      ))}
    </div>
  );
}