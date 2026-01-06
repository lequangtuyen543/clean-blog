import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import './LayoutDefault.scss'
import { Hero } from "./Hero";

export const LayoutDefault = () => {
  return (
    <>
      <div className="layout-default">
        <Header />
        <Hero />
        <Main />
        <Footer />
      </div>
    </>
  );
}