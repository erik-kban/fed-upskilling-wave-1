import React from 'react'
import Icon from '@/components/atoms/Icon/Icon'
import styles from '@styles/atoms/Sponsors.module.scss'

const Sponsors = () => {
    return (
        <div className={styles.sponsors__container}>
            <Icon className={styles["sponsors__container--margin"]} width={468} height={40} logo="./payments.svg" />
            <p>We are Proud partners of</p>
            <Icon width={658} height={31} logo="./partners.svg" />
            <p>Learn more about our Partnerships</p>
        </div>
    )
}

export default Sponsors