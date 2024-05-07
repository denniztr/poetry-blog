'use client'

import Link from "next/link"

interface CardMenuItemProps {
  label: string
  icon: any
}

const CardMenuItem: React.FC<CardMenuItemProps> = ({ label, icon: Icon }) => {
  
  return (
    <li className="flex items-center gap-3 text-gray-800">
      <Icon className="h-5 w-5 cursor-pointer" />
      <Link href='#'>{label}</Link>
    </li>
  )
}

export default CardMenuItem;