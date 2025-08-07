import React from 'react'
import Image from 'next/image'
import styles from '../../../../src/styles/CarouselButton.module.css'

interface CarouselButtonProps {
    direction: 'left' | 'right';
    onClick: () => void;
    className?: string;
}

const CarouselButton: React.FC<CarouselButtonProps> = ({ direction, onClick, className }) => {
  return (
    <button 
      className={`${styles.button} ${styles[direction]} ${className || ''}`}
      onClick={onClick}
      aria-label={`${direction} slide`}
    >
      <Image 
        src={`/carouselAssets/${direction}-arrow.svg`}
        alt={`${direction} arrow`}
        width={24}
        height={24}
      />
    </button>
  )
}

export default CarouselButton