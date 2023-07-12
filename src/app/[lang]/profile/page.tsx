import Link from "next/link";

function Profile({ params }: { params: { lang: string } }) {
  return (
    <div>
      <h2>Profile</h2>
      <h3>{params.lang}</h3>

      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Profile;
