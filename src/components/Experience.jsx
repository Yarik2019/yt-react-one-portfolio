import { useSelector } from "react-redux";
import {
  selectExperienceItems,
  selectExperienceLoading,
  selectExperienceError,
} from "../redux/experience/selectors";
const Experience = () => {
  const experienceData = useSelector(selectExperienceItems);
  const isLoading = useSelector(selectExperienceLoading);
  const hasError = useSelector(selectExperienceError);
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen xs:h-auto xs:py-8"
    >
      {isLoading && (
        <div className="h-screen flex items-center text-2xl sm:text-7xl font-bold text-white">
          <p className="w-full text-center">Loading...</p>
        </div>
      )}
      {hasError && (
        <div className="h-screen flex items-center text-center text-2xl sm:text-7xl font-bold text-white">
          <span>Error occurred while loading experience items.</span>
        </div>
      )}
      {!isLoading &&
        !hasError &&
        experienceData.map(({ title, description, cards }) => (
          <div className="max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                {title}
              </p>
              <p className="py-6">{description}</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8">
              {cards.map(({ _id, image, name, styles }) => (
                <div
                  key={_id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${styles}`}
                >
                  <img src={image.url} className="w-20 mx-auto" alt={name} />
                  <p className="mt-4">{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Experience;
