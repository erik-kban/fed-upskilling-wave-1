import React from 'react'
import styles from '@/styles/atoms/Disclaimers.module.scss'

const Disclaimers = () => {
    return (
        <>
            <div className={styles.disclaimers}>
                <div className={styles.disclaimers__containerOne}>
                    <p>^Disclaimer: Discounts apply to most recent previous ticketed advertised price. Some products will have likely been sold below ticketed advertised price in some stores prior to the discount offer. Prices displayed inclusive of discount. Some In Store prices may vary.
                        ^Sale Offers: Sale includes store stock only unless otherwise stated, excludes clearance. Products may not be available in all stores, check availability online.
                        All prices displayed exclude GST.</p>
                </div>
                <div className={styles.disclaimers__containerTwo}>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Site Map</li>
                        <li>2023 Supercheap Auto</li>
                    </ul>
                </div>


            </div>

        </>
    )
}

export default Disclaimers