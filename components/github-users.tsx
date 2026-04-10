export function GitHubUsers() {
  return (
    <form>
      <div className="space-x-2 flex">
        <label>Nome do Usuario</label>
        <input
          type="text"
          placeholder="Encontre o teu usuario"
          className="px-2.5 py-1 border border-t-0 flex-1 rounded-lg md:w-4xl"
        />
      </div>
    </form>
  );
}
