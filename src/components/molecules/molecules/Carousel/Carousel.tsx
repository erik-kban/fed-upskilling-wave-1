'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../../../../styles/Carousel.module.css'
import CarouselButton from '../../../atoms/CarouselButton/CarouselButton';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }

    return (
        <div className={styles.carousel}>
            <CarouselButton 
                direction="left" 
                onClick={prevSlide}
                className={styles.prevButton}
            />
            {images.length > 0 ? (
                <div className={styles.carouselImages}>
                    <Image 
                        src={images[currentIndex]} 
                        alt={`Carousel image ${currentIndex + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            ) : (
                <p>No images available</p>
            )}
            <CarouselButton 
                direction="right" 
                onClick={nextSlide}
                className={styles.nextButton}
            />
        </div>
    )
}

export default Carousel