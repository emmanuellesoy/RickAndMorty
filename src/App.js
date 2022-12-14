import "./styles/app.css";

import CharsTable from "./components/CharsTable";
import useCharacters from "./hooks/useCharacters";


export default function App() {
  
  /* Use this to get first result page from API */
  const [characters] = useCharacters();
  
  /* Use this to get some characters */
  //const [characters] = useCharacters({ids: [1, 2, 3]});
  
  /* Use this to get a specific result */
  //const [characters] = useCharacters({ids: [1]});
  
  return (
    <div className="App">
      <h1>Hello Softtek</h1>
      <CharsTable characters={characters} />
    </div>
  );
};

// You can add the libraries you need in the left sidebar under "Dependencies" section

// * You should be able to integrate the RickAndMorty API endpoint that retrieve multiple
//    characters at once (https://rickandmortyapi.com/documentation/#get-multiple-characters)
// * You should be able to render the characters info in the table dinamically
//    The required properties to display are character's name, image and location name
// * You should be able to center the table

// BONUS POINTS:
// Use a custom hook called "useCharacters" to ONLY fetch and return data mapped
// Do not pass unnecessary (or unused) data to the CharsTable component as props
// Extract the table data rows to their own component
// Setup folder structure separating components, hooks and styles

// Once you finish save all your files and send back the link to your codesandbox by email
// (Note that the url of your codesandbox should be different from the one that i sent to you)
