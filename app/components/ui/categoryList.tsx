'use client'

import { LiHTMLAttributes } from "react";
import Link from "next/link";


interface CategoryCardProps extends LiHTMLAttributes<HTMLLIElement> {
  label: string,
  caption: string,
}

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  const { label } = props;

  return (
    <li>
      <Link href='/' className="text-gray-300 text-sm hover:underline">{label}</Link>
    </li>
  )
}

export default CategoryCard;