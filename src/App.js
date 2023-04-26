import About from "./paginas/About";
import Home from "./paginas/Home";

console.log(window.location)

const pagina = window.location.pathname === '/' ? <Home /> : <About />

export default function App() {
  return pagina;
}