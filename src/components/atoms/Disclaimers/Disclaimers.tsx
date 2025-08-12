import React from 'react';
import styles from '@/styles/atoms/Disclaimers.module.scss';

const Disclaimers = () => {
    return (
        <div className={styles.disclaimers}>
            <div className={[styles.disclaimers__container, styles["disclaimers__container--one"]].join(' ')}>
                <p>^Disclaimer: Discounts apply to most recent previous ticketed advertised price. Some products will have likely been sold below ticketed advertised price in some stores prior to the discount offer. Prices displayed inclusive of discount. Some In Store prices may vary.
                    ^Sale Offers: Sale includes store stock only unless otherwise stated, excludes clearance. Products may not be available in all stores, check availability online.<br></br>
                    All prices displayed exclude GST.</p>
            </div>

            <div className={[styles.disclaimers__container, styles["disclaimers__container--two"]].join(' ')}>
                <ul className={styles.disclaimers__list}>
                    <li className={styles.disclaimers__item}>Privacy Policy</li>
                    <li className={styles.disclaimers__item}>Terms & Conditions</li>
                    <li className={styles.disclaimers__item}>Site Map</li>
                </ul>
                <ul className={styles.disclaimers__list}>
                    <li className={styles.disclaimers__copyright}>&#169; 2023 Supercheap Auto</li>
                </ul>
            </div>
        </div>
    );
};

export default Disclaimers;
