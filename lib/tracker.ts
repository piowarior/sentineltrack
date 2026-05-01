let lastLocation: { lat: number; lng: number } | null = null;
let lastSentTime = 0;

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371e3;
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export async function trackDevice(secret: string) {
  navigator.geolocation.watchPosition(async (pos) => {
    const current = {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    };

    const now = Date.now();

    if (!lastLocation) {
      await sendPing(secret, current);
      lastLocation = current;
      lastSentTime = now;
      return;
    }

    const distance = getDistance(
      lastLocation.lat,
      lastLocation.lng,
      current.lat,
      current.lng
    );

    const timeDiff = now - lastSentTime;

    if (distance > 100 || timeDiff > 5 * 60 * 1000) {
      await sendPing(secret, current);
      lastLocation = current;
      lastSentTime = now;
    } else {
      console.log("❌ Skip kirim (hemat)");
    }
  });
}

async function sendPing(
  secret: string,
  loc: { lat: number; lng: number }
) {
  await fetch("/api/device/ping", {
    method: "POST",
    body: JSON.stringify({
      secret,
      ip: "auto",
      city: "auto",
      region: "auto",
      country: "auto",
      latitude: loc.lat,
      longitude: loc.lng,
    }),
  });

  console.log("✅ Kirim lokasi");
}