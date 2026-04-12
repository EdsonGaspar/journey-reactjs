import { ClientCard } from "@/components/client-components/client-card";

export default function ClientesPage() {
  return (
    <div className="max-w-7xl px-5 mx-auto border flex">
      <h2>Pagina de pesquisa de clientes.</h2>
      <ClientCard />
    </div>
  );
}
