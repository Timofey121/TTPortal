import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../icons/Icon";
import { NavLink } from "react-router-dom";

interface AsideItemProps {
  icon: IconDefinition;
  title: string;
  link: string;
}
export const AsideItem = ({ icon, title, link }: AsideItemProps) => {
  return (
    <li>
      <NavLink
        to={link}
        // className={
        //   "flex items-center space-x-3 py-2 px-3 rounded text-gray-500 hover-brand-red-text hover-transition" +
        //   (() => (isActive ? "brand-red-text" : ""))
        // }
        className={({ isActive }) =>
          `flex items-center space-x-3 py-2 px-3 rounded hover-brand-red-text hover-transition ${
            isActive ? "brand-red-text" : ""
          }`
        }
      >
        <Icon icon={icon} />
        <span>{title}</span>
      </NavLink>
    </li>
  );
};
