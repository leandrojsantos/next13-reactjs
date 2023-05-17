import Link from "next/link"

export default async function Dashboard () {
  const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-23.68&longitude=-46.45&hourly=temperature_2m')
  const data = await response.json();

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, data.lon, data.lat)}</pre>
      <pre>{JSON.stringify(data, null, 3)}</pre>
      <Link href="/">Home</Link>
    </div>
  )
}