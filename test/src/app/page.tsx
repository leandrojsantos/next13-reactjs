import Link from "next/link";

export default async function Home() {
  const response = await fetch('http://api.github.com/users/leandrojsantos')
  const user = await response.json();

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}