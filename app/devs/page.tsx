import { GitHubUsers } from "@/components/github-users/github-users";

export default function DevPage() {
  return (
    <div className="px-5 max-w-7xl">
      <header className="space-y-6 my-8">
        <h1 className="text-2xl text-center font-bold">
          Pesquisar Usuarios do GitHub
        </h1>
        <p className="text-sm font-light text-white/65 text-center md:text-base">
          Todos encontre a tua conta do GitHub aqui
        </p>
      </header>
      <main>
        <GitHubUsers />
      </main>
    </div>
  );
}
