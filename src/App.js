import React, { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { Logo } from "./Components/Logo";
import { SearchBar } from "./Components/SearchBar";
import { ContainerCards } from "./Components/ContainerCards";
import Card from "./Components/Card";
import Pagination from "./Components/Pagination/Pagination";
import style from "./style.module.css"


function App() {
  const [characters, setCharacters] = React.useState([]);
  const[info, setInfo] = React.useState({});
  const [value, setValue] = useState ('');    
  let searchCharacters= [];                                                                     
 
  const baseUrl = "https://rickandmortyapi.com/api/character";
 
  const consumeApi = async (url) => {

    const obj = await fetch(url);
    const data = await obj.json();
    setCharacters(data.results);
    setInfo(data.info);
  };
  useEffect(() => {
    consumeApi(baseUrl);
  }, []);

  const onPrevius = () => {
    consumeApi (info.prev)
  }
  const onNext = ()=> {
    consumeApi (info.next)
  };
  if (characters.length > 0) {
    searchCharacters = characters.filter(character => {
      const characterText = character.name.toLowerCase();
      const searchTex = value.toLowerCase();
      return characterText.includes (searchTex);
    });
  }
  else {
    searchCharacters = characters;
  }

  console.log(characters);
  console.log(searchCharacters);
  return (
    <div className={style.padre}>
      <Header>
        <Logo />
        <SearchBar
        value={value}
        setValue={setValue} />
      </Header>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevius={onPrevius}
        onNext={onNext}
      />
      <ContainerCards>
        {searchCharacters.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            type={character.type}
            image={character.image}
          />
        ))}
        
      </ContainerCards>
    </div>
  );
}

export default App;
