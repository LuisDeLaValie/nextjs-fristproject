import Link from "next/link";

async function fetchUsers(): Promise<Users[]> {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const data = await res.json();
  return data.data;
}

type Users = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export default async function HomePage() {
  const usuarios = await fetchUsers();

  return (
    <ul>
      {usuarios.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`} >
          <li className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between">
            <div>
              <h5 className="font-bold">
                {user.id} {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-100">{user.email}</p>
            </div>
            <img src={user.avatar} alt="avatar" className="w-20 rounded-full" />
          </li>
        </Link>
      ))}
    </ul>
  );
}
