import React from 'react';
import PopularBrandsCard from '@/components/atoms/PopularBrandsCard/PopularBrandsCard';
import styles from '@/styles/molecules/PopularBrandsSection.module.scss';

interface PopularBrandSectionProps {
    amount: number;
}

const PopularBrandSection: React.FC<PopularBrandSectionProps> = ({ amount }) => {
    return (
        <section className={styles.popularbrandsection}>
            {Array.from({ length: amount }).map((_, index) => (
                <PopularBrandsCard key={index} />
            ))}
        </section>
    );
};

export default PopularBrandSection;
