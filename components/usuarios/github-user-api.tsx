type GitHubUserProps = {
  userName: string;
};
export function GitHubUser({ userName }: GitHubUserProps) {
  const users = [
    { id: 1, name: "Kiluange" },
    { id: 2, name: "Mwanza" },
    { id: 3, name: "Josue" },
    { id: 4, name: "Balton" },
    { id: 5, name: "Flavio" },
    { id: 6, name: "Bertone" },
  ];
  const filted = users.filter((user) =>
    user.name.toLowerCase().includes(userName.toLocaleLowerCase()),
  );
  return (
    <div>
      {filted.map((item) => (
        <div key={item.id}>
          <h3>{item.id}</h3>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
}
