interface MobileButtonProps {
    children?: string,
    type: "submit" | "reset" | "button",
    onClick?: () => void,
    className?: string,
    disabled?: boolean
    buttonFor?:  "edit" | "confirm" | "delete" | "cancel" | "save"
}
import { FaEdit, FaTrash, FaCheckSquare, FaTimes, FaSave } from "react-icons/fa";



const MobileButton = ({ children, type, onClick, disabled, className, buttonFor } : MobileButtonProps) => {
    const renderIcon = () => {

        const baseClass = "transition-colors duration-300";
        const hoverClass = "hover:text-blue-500";

        switch (buttonFor) {
          case "edit":
            return <FaEdit className={`${baseClass} ${hoverClass}`}/>;
          case "confirm":
            return <FaCheckSquare className={`${baseClass} ${hoverClass}`}/>;
          case "delete":
            return <FaTrash className={`${baseClass} ${hoverClass}`}/>;
          case "cancel":
            return <FaTimes className={`${baseClass} ${hoverClass}`}/>;
          case "save":
            return <FaSave className={`${baseClass} ${hoverClass}`}/>;
          default:
            return null; // Return null if no matching case
        }
      };
  return (
    <button 
        type={ type }
        onClick={ onClick }
        disabled={ disabled }
        className={`${className}`}>{ children }{renderIcon()}
    </button>
    
  )
}

export default MobileButton