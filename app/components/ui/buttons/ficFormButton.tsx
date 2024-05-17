import { MdPlayDisabled } from "react-icons/md";

interface ButtonProps {
  children: React.ReactNode
  disabled?: boolean
  type?: 'submit'
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, disabled, type, className: styles }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`text-sm rounded-xl p-2 border border-white ${styles}`}
    >
      {children}
    </button>
  )
}

export default Button;