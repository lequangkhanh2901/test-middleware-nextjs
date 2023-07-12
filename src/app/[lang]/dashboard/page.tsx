import Link from "next/link";

function DashBoard({ params }: { params: { lang: string } }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>{params.lang}</h3>

      <Link href="/profile">Profile</Link>
    </div>
  );
}

export default DashBoard;
