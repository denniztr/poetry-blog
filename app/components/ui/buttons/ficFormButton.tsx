import { MdPlayDisabled } from "react-icons/md";

interface ButtonProps {
  children: React.ReactNode
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="text-sm rounded-xl p-2 border border-white"
    >
      {children}
    </button>
  )
}

export default Button;