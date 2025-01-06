import Link from 'next/link';
import React from 'react';

type Props = {
  href?: string;
  children?: React.ReactNode;
};

export const Button = ({ children, href = '' }: Props) => {
  return (
    <Link href={href}>
      <span
        className="
          inline-block 
          px-4 py-2 
          text-white 
          bg-blue-500 
          rounded-md 
          hover:bg-blue-600 
          transition 
          duration-300 
          ease-in-out 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-400 
          focus:ring-offset-2
        "
      >
        {children}
      </span>
    </Link>
  );
};
