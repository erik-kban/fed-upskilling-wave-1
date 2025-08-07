import React from 'react'
import Image from 'next/image'
import styles from '../../../../src/styles/CarouselButton.module.scss'

interface CarouselButtonProps {
    direction: 'left' | 'right';
    onClick: () => void;
    className?: string;
}

const CarouselButton: React.FC<CarouselButtonProps> = ({ direction, onClick, className }) => {
  const ariaLabel = direction === 'left' ? 'Previous slide' : 'Next slide';

  return (
    <button 
      className={`${styles.carousel__button} ${className || ''}}`}
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
      tabIndex={0}
    >
      <Image 
        src={`/carouselAssets/${direction}-arrow.svg`}
        alt="Image of arrow"  
        width={48}
        height={48}
      />
    </button>
  )
}

export default CarouselButton