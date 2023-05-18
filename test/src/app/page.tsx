import Link from "next/link";

export default async function Home() {
  const response = await fetch('https://geocode.maps.co/search?q={address}')
  const data = await response.json();

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(data, data.lon, data.lat)}</pre>
      <pre>{JSON.stringify(data, null, 3)}</pre>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}