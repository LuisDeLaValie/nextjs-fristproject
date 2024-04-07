async function fetchUser(id: number): Promise<User> {
  const res = await fetch("https://reqres.in/api/users/" + id);
  const data = await res.json();

  return data.data;
}

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export default async function UserPage({ params }: any) {
  const user = await fetchUser(params.id);
  console.log(params);

  return (
    <div>
      <img src={user.avatar} />
      <h3> {user.first_name} {user.last_name} </h3>
      <p> {user.email} </p>
    </div>
  );
}
