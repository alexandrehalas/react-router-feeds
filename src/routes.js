import Footer from "componentes/Footer";
import PageDefault from "componentes/PageDefault";
import ScrollToTop from "componentes/ScrollToTop";
import NotFound from "paginas/NotFound";
import Post from "paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import About from "./paginas/About";
import Home from "./paginas/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PageDefault />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}