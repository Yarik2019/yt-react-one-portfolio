import {
  selectPortfolioItems,
  selectPortfolioLoading,
  selectPortfolioError,
} from "../redux/portfolio/selectors";
import { useSelector } from "react-redux";
const Portfolio = () => {
  const portfolioItems = useSelector(selectPortfolioItems);
  const isLoading = useSelector(selectPortfolioLoading);
  const hasError = useSelector(selectPortfolioError);

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white  xs:h-auto xs:py-8"
    >
      {isLoading && (
        <div className="h-screen flex items-center text-2xl sm:text-7xl font-bold text-white">
          <p className="w-full text-center">Loading...</p>
        </div>
      )}
      {hasError && (
        <div className="h-screen flex items-center text-center text-2xl sm:text-7xl font-bold text-white">
          <span>Error occurred while loading portfolio items.</span>
        </div>
      )}
      <>
        {portfolioItems.map((item) => (
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                {item.title}
              </p>
              <p className="py-6">{item.description}</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8 ">
              {item.cards.map(({ _id, image, title, demoLink, codeLink }) => (
                <div key={_id} className="shadow-md shadow-gray-600 rounded-lg">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    <img
                      src={image?.url}
                      alt={title}
                      className="rounded-md duration-200  h-[150px] w-full hover:scale-105"
                    />
                  </a>
                  <div className="flex items-center justify-center">
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    >
                      Demo
                    </a>
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 xs:grid xs:justify-center"
                    >
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Portfolio;
