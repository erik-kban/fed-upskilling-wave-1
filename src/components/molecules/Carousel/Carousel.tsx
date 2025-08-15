'use client'
import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import styles from '../../../styles/Carousel.module.scss'
import CarouselButton from '../../atoms/CarouselButton/CarouselButton';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = useCallback(() => {
        setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    }, [images.length]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, [images.length]);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            prevSlide();
        } else if (event.key === 'ArrowRight') {
            nextSlide();
        }
    }, [nextSlide, prevSlide]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <section
            className={styles.carousel}
            aria-label="Image carousel"
        >
            <nav aria-label="Carousel Navigation" className={`${styles.carousel__nav}`}>
                <CarouselButton
                    direction="left"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                />
                <CarouselButton
                    direction="right"
                    onClick={nextSlide}
                    aria-label="Next slide"
                />
            </nav>

            {images.length > 0 ? (
                <figure
                    className={styles.carousel__container}
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1} of ${images.length}`}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <figcaption>
                        Image {currentIndex + 1} of {images.length}
                    </figcaption>
                </figure>
            ) : (
                <p role="alert">No images available</p>
            )}

            <div className={styles.carousel__pagination}>
                <Image
                    src="/carouselAssets/pagination.svg"
                    alt="Pagination indicator"
                    width={100}
                    height={100}
                    priority
                    onError={(e) => {
                        console.error('Error loading pagination image:', e);
                    }}
                />
            </div>
        </section>
    )
}

export default Carousel