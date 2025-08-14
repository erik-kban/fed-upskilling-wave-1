import React from 'react'
import CTAButton from '../CTAButton'
import CustomLink from '../CustomLink/CustomLink'
import styles from '@/styles/atoms/RegisterCard.module.scss'

const RegisterCard = () => {
  return (
    <div className={styles.registerCard}>
        <div className={styles.registerCard__container}>
            <h3>Register for a Trade Account</h3>
            <p>Own or operate a business or trade workshop?</p>
        </div>
        <div className={styles.registerCard__actions}>
            <CTAButton
                    text="Register"
                    isDarkButton={false}
                    size="small"
            />
            <CustomLink text="Find out more"/>
        </div>
    </div>
  )
}

export default RegisterCard