import Link from "next/link"

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m

export default async function Dashboard () {
  const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
  const data = await response.json();

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 3)}</pre>
      <Link href="/">Home</Link>
    </div>
  )
}