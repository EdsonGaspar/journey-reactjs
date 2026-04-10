import { GitHubUsers } from "@/components/github-users";

export default function DevPage() {
  return (
    <div>
      <header className="space-y-6 my-8">
        <h1>Pesquisar Usuarios do GitHub</h1>
        <p>Todos encontre a tua conta do GitHub aqui</p>
      </header>
      <main>
        <GitHubUsers />
      </main>
    </div>
  );
}
