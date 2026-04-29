import "./App.css";
import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollToTop from "react-scroll-to-top";
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPortfolio } from "./redux/portfolio/operations";
import { getHome } from "./redux/home/operations";
import { getAbout } from "./redux/about/operations";
import { getExperience } from "./redux/experience/operations";
import { getContact } from "./redux/contact/operations";
import { selectHomeLoading, selectHomeError } from "./redux/home/selectors";
import { selectAboutError, selectAboutLoading } from "./redux/about/selectors";
import {
  selectContactError,
  selectContactLoading,
} from "./redux/contact/selectors";
import {
  selectExperienceError,
  selectExperienceLoading,
} from "./redux/experience/selectors";
import {
  selectPortfolioError,
  selectPortfolioLoading,
} from "./redux/portfolio/selectors";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const initPortfolio = () => {
      dispatch(getHome());
      dispatch(getAbout());
      dispatch(getContact());
      dispatch(getExperience());
      dispatch(getPortfolio());
    };
    initPortfolio();
  }, [dispatch]);

  const isLoadingHome = useSelector(selectHomeLoading);
  const isLoadingAbout = useSelector(selectAboutLoading);
  const isLoadingContact = useSelector(selectContactLoading);
  const isLoadingExperience = useSelector(selectExperienceLoading);
  const isLoadingPortfolio = useSelector(selectPortfolioLoading);

  const hasErrorHome = useSelector(selectHomeError);
  const hasErrorAbout = useSelector(selectAboutError);
  const hasErrorContact = useSelector(selectContactError);
  const hasErrorExperience = useSelector(selectExperienceError);
  const hasErrorPortfolio = useSelector(selectPortfolioError);

  return (
    <>
      {(isLoadingHome ||
        isLoadingAbout ||
        isLoadingContact ||
        isLoadingExperience ||
        isLoadingPortfolio) && (
        <div className="absolute z-50  h-screen w-full flex items-center justify-center bg-gradient-to-b from-black via-black to-gray-800">
          <Loading color="#fff" />
        </div>
      )}
      {(hasErrorHome ||
        hasErrorAbout ||
        hasErrorContact ||
        hasErrorExperience ||
        hasErrorPortfolio) && (
        <div className="h-screen flex items-center text-center text-2xl sm:text-7xl font-bold text-white">
          <span>Error occurred while loading items.</span>
        </div>
      )}
      {!isLoadingHome &&
        !isLoadingAbout &&
        !isLoadingContact &&
        !isLoadingExperience &&
        !isLoadingPortfolio &&
        !hasErrorHome &&
        !hasErrorAbout &&
        !hasErrorContact &&
        !hasErrorExperience &&
        !hasErrorPortfolio && (
          <div className="App">
            <NavBar />
            <Home />
            <SocialLinks />

            <About />
            <Portfolio />
            <Experience />
            <Contact />
            <ScrollToTop
              smooth
              className="absolute !right-4 !bottom-4 flex items-center justify-center  bg-black text-white"
            />
          </div>
        )}
    </>
  );
}

export default App;
