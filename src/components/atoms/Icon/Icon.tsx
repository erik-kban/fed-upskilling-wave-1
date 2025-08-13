import Image from 'next/image';
import React from 'react'

interface IconProps {
    logo?: string;
    width?: number;
    height?: number;
    alt?: string;
    className?: string;
    onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ logo, width, height, alt, className, onClick }) => {
    const appLogo = logo || '/placeholder-icon.svg'; 
  return (
    <Image
        src={appLogo}
        alt={alt || 'Logo'}
        width={width || 100}
        height={height || 50}
        className={className}
        onClick={onClick}
    />
  )
}

export default Icon