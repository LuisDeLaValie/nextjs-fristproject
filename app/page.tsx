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
        <li key={user.id}>
          <div>
            <h5>
              {user.id} {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
