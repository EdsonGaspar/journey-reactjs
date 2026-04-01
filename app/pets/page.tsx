import Image from "next/image";
import dolly from "../../assets/dolly.jpg";
import molly from "../../assets/molly.jpg";
export default function Pets() {
  const animals = [
    {
      id: 1,
      name: "Dolly",
      type: "cat",
      description: "Dolly é engraçada e gosta de estar perto das pessoas",
      skills: ["fetch", "play dead", "roll over"],
      image: dolly,
    },
    {
      id: 2,
      name: "Molly",
      type: "cat",
      description: "Molly é fofa e gosta de cuidar dos outros gatos",
      skills: ["play dead", "meow", "purr"],
      image: molly,
    },
  ];

  return (
    <div>
      <h1>Meus animais</h1>
      <ul>
        {animals.map((animal) => {
          return (
            <li key={animal.id}>
              <div className="flex justify-between w-lg border">
                <h2>{animal.name}</h2> <span>{animal.type}</span>
              </div>
              <p>{animal.description}</p>
              <Image
                src={animal.image}
                alt={animal.name}
                width={200}
                height={200}
              />
              <ul>
                {animal.skills.map((skill) => {
                  return <li key={skill}>{skill}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
