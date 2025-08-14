import React from 'react';
import PopularBrandsCard from '@/components/atoms/PopularBrandsCard/PopularBrandsCard';
import styles from '@/styles/molecules/PopularBrandsSection.module.scss';

interface PopularBrandSectionProps {
    amount: number;
}

const PopularBrandSection: React.FC<PopularBrandSectionProps> = ({ amount }) => {
    return (
        <section className={styles.popularbrandsection}>
            <h1 className={styles.popularbrandsection__sectionHeader}>SHOP BY CATEGORY</h1>
            <div className={styles.popularbrandsection__cards}>
                {Array.from({ length: amount }).map((_, index) => (
                    <PopularBrandsCard key={index} />
                ))}
            </div>
        </section>

    );
};

export default PopularBrandSection;
