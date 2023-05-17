import { Fragment, useEffect } from "react";
import { MiPrimerComponente } from "./components/mir-primer-componente";
import { MiSegundoComponente } from "./components/mir-segundo-componente";
import { title } from "./mock";
import { useState } from "react";

function App() {
  const [showTitile, setShowTitle] = useState<boolean>(false);
  const [title1,setTitle1]=useState('')
  useEffect(() => {
    console.log('Renderizando')
  }, [showTitile]);

  
  const handleshowTitle = () => {
    setShowTitle((prevVlaue) => !prevVlaue);
  };
  return (
    <>
      <button onClick={handleshowTitle}>
        {!showTitile ? `Mostrar Titulo` : "Ocultar Titulo"}
      </button>
      {title.map((element) => (
        <Fragment key={element.id}>
          {showTitile && <MiPrimerComponente title={element.title} />}
          
        </Fragment>
        
      ))}
      <MiSegundoComponente title={title1} onclick={(e)=>setTitle1(e)}>
            <p>{title1}</p>
          </MiSegundoComponente>
      <MiSegundoComponente title={title1}>
            <p>{title1}</p>
          </MiSegundoComponente>
    </>
  );
}

export default App;
