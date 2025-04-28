import {
  faBell,
  faEnvelope,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../icons/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// interface HeaderProps {
//   name: string | null;
//   job: string | null;
// }

export const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 py-4 px-6 flex justify-between items-center">
      <Link to="/">
        <div className="flex items-center">
          <div className="brand-red-bg text-white p-2 rounded mr-4">
            <FontAwesomeIcon icon={faTruckMoving} />
          </div>
          <h1 className="text-2xl font-bold text-gray-700">
            Транспортные Технологии
          </h1>
        </div>
      </Link>
      <div className="header-navbar flex items-center gap-4">
        <button className="text-gray-500 hover:text-gray-700 hover:cursor-pointer w-6 h-6">
          <Icon markerCounter={3} icon={faBell} />
        </button>
        <button className="text-gray-500 hover:text-gray-700 hover:cursor-pointer w-6 h-6">
          <Icon icon={faEnvelope} />
        </button>
        <div className="header-profile flex items-center gap-2">
          <div className="profile-img">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="h-10 w-10 rounded-full"
            ></img>
          </div>
          <div className="flex flex-col">
            <div className="profile-name text-sm font-medium text-dark-gray">
              {/* {name ?? "имя не определено"} */}
              Иван Иванов
            </div>
            <div className="profile-job text-xs text-gray-500">
              {/* {job ?? "работа не определена"} */}
              Менеджер по логистике
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
