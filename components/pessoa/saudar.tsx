type SaudarPessoaProps = {
  saudacao: string;
  nome: string;
};
export function SaudarPessoa({ saudacao, nome }: SaudarPessoaProps) {
  return (
    <p>
      O {nome} disse {saudacao}
    </p>
  );
}
