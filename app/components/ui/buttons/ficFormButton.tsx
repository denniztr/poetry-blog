import { MdPlayDisabled } from "react-icons/md";

interface ButtonProps {
  children: React.ReactNode
  disabled?: boolean
  type?: 'submit' 
}

const Button: React.FC<ButtonProps> = ({ children, disabled, type }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className="text-sm rounded-xl p-2 border border-white"
    >
      {children}
    </button>
  )
}

export default Button;