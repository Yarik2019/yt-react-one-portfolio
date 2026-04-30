import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import * as LiaIcons from "react-icons/lia";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import { useSelector } from "react-redux";
import {
  selectContactItems,
  selectContactLoading,
  selectContactError,
} from "../redux/social/selectors";

const SocialLinks = () => {
  const SocialItems = useSelector(selectContactItems);
  const isLoading = useSelector(selectContactLoading);
  const hasError = useSelector(selectContactError);
  const Icons = (icon) => {
    const [packName, iconName] = icon.split("/");
    const pachs = {
      fa: FaIcons,
      bs: BsIcons,
      hi: HiIcons,
      lia: LiaIcons,
      si: SiIcons,
      tb: TbIcons,
    };

    return pachs[packName]?.[iconName];
  };

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      {isLoading && (
        <div className="h-screen flex items-center text-2xl sm:text-7xl font-bold text-white">
          <p className="w-full text-center">Loading...</p>
        </div>
      )}
      {hasError && (
        <div className="h-screen flex items-center text-center text-2xl sm:text-7xl font-bold text-white">
          <span>Error occurred while loading social items.</span>
        </div>
      )}
      {!isLoading && !hasError && (
        <ul>
          {SocialItems.map(({ _id, icon, link, name }) => {
            const Icon = Icons(icon);
            return (
              <li
                key={_id}
                className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 last:rounded-br-md first:rounded-tr-md`}
              >
                <a
                  href={link}
                  className="flex justify-between items-center w-full text-white"
                  download={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <>
                    {name}
                    {Icon && <Icon size={30} />}
                  </>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SocialLinks;
