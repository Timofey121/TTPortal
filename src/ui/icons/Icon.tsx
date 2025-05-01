import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconProps {
  icon: IconDefinition;
  markerCounter?: number;
}
export const Icon: React.FC<IconProps> = ({ icon, markerCounter }) => {
  return (
    <div className="relative text-center w-6 h-6">
      <FontAwesomeIcon icon={icon} />
      {markerCounter && markerCounter > 0 && (
        <div className="absolute w-4 h-4 rounded-full text-[10px] text-white bg-red-700 flex justify-center items-center right-[-5px] top-[-5px]">
          {markerCounter}
        </div>
      )}
    </div>
  );
};
