import { Fragment, useEffect } from "react";
import { MiPrimerComponente } from "./components/mir-primer-componente";
import { MiSegundoComponente } from "./components/mir-segundo-componente";
import { title } from "./mock";
import { useState } from "react";
import axios from "axios";
import { RootRouter } from "./routers";


function App() {
  // const [title, setTitle] = useState<IPost[]>([]);
  
  // const handleGetPost = async () => {
  //   const result = await mycustomAxios.get<IPost[]>("posts");
  //   setTitle(result.data);
  // };
  // useEffect(() => {
  //   handleGetPost();
  // }, []);

  return <RootRouter />;
}

export default App;
