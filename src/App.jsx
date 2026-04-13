// export const App = () => <h1>Bite</h1>

import { useState } from "react";
import { Sidebar } from "./components/ui/Sidebar";

export const App = () =>{
    const [active, setActive] = useState("Главная");

 const role = "admin"; 

 return (
  <div style={{ display: "flex" }}>
   <Sidebar props={'B'} role={role} active={active} onChange={setActive} />

   <div style={{ padding: "20px" }}>
    <h1>{active}</h1>
   </div>
  </div>
 );
}
