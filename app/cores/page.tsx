import { Colorizer } from "@/components/cores/colorizer";
import { CounterComponent } from "@/components/cores/conter";

export default function PageColor() {
  return (
    <div>
      <header className="font-bold text-2xl  uppercase text-center my-6">
        Tratamento de cores
      </header>
      <Colorizer />
      <CounterComponent />
    </div>
  );
}
