
interface ButtonProps {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      className="text-sm rounded-xl p-2 border border-white"
    >
      {children}
    </button>
  )
}

export default Button;