import { Fragment } from "react";
import { MiPrimerComponente } from "./components/mir-primer-componente";
import { MiSegundoComponente } from "./components/mir-segundo-componente";
import { title } from "./mock";

function App() {
  return (
    <>
      {title.map((element) => (
        <Fragment key={element.id}>
          <MiPrimerComponente title={element.title} />
          <MiSegundoComponente title={element.title}>
            <p>{element.title}</p>
          </MiSegundoComponente>
        </Fragment>
      ))}
    </>
  );
}

export default App;
