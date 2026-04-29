import { useSelector } from "react-redux";
import {
  selectAboutItems,
  selectAboutLoading,
  selectAboutError,
} from "../redux/about/selectors";

const About = () => {
  const aboutData = useSelector(selectAboutItems);
  const isLoading = useSelector(selectAboutLoading);
  const hasError = useSelector(selectAboutError);
  return (
    <div
      name="about"
      className="w-full h-screen xs:h-auto xs:py-8 bg-gradient-to-b  from-gray-800 to-black text-white"
    >
      {isLoading && (
        <div className="h-screen flex items-center text-2xl sm:text-7xl font-bold text-white">
          <p className="w-full text-center">Loading...</p>
        </div>
      )}
      {hasError && (
        <div className="h-screen flex items-center text-center text-2xl sm:text-7xl font-bold text-white">
          <span>Error occurred while loading home items.</span>
        </div>
      )}
      {!isLoading && !hasError && (
        <>
          {aboutData.map(({ title, subTitle, description }) => (
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full sm:py-10">
              <div className="pb-8">
                <p className="text-4xl  font-bold inline border-b-4  border-gray-500">
                  {title}
                </p>
              </div>
              <p className="text-xl mt-20 sm:mt-10">{subTitle}</p>
              <br />
              <p className="text-xl">{description}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default About;
