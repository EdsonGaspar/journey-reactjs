export function GitHubUsers() {
  return (
    <form className="flex flex-col gap-6">
      <div className="space-x-2 flex items-center">
        <label className="font-semibold text-white/75">Nome do Usuario</label>
        <input
          type="text"
          placeholder="Encontre o teu usuario"
          className="px-2.5 py-1 border border-t-0 flex-1 rounded-lg md:w-4xl outline-0"
        />
      </div>
      <button className="px-3.5 py-1.5 border rounded-2xl bg-blue-400 text-blue-950 text-lg border-blue-300 w-44 self-end">
        Limpar
      </button>
    </form>
  );
}
