
'use client'
import React from 'react'
import logoImage from '@assets/HeaderAssets/tradeLogo.svg'
import menuIcon from '@assets/HeaderAssets/menuIcon.svg'
import Icon from '@/components/atoms/Icon/Icon'
import styles from '@styles/Header.module.scss'
import SearchBar from '@/components/molecules/SearchBar/SearchBar'
import shoppingCartIcon from '@assets/HeaderAssets/cartLogo.svg'
import CTAButton from '@/components/atoms/CTAButton'
import PersonIcon from '@/assets/icons/PersonIcon'
import ToolIcon from '@/assets/icons/ToolIcon'



const Header: React.FC = () => {
    return (
        <header className={styles.header} role="banner">
            <Icon
                logo={logoImage}
                width={164}
                height={48}
            />
            <div aria-label="Menu Icon" className={styles.header__menuIcon}>
                <Icon
                    logo={menuIcon}
                    width={40}
                    height={60}
                />
            </div>
            <SearchBar
            />
            <div className={styles.header__ctaButtons}>
                <CTAButton
                    icon={<PersonIcon />}
                    text="Menu"
                    isDarkButton={false}
                    size="medium"
                />
                <CTAButton
                    icon={<ToolIcon />}
                    text="Login"
                    isDarkButton={true}
                    size="medium"
                />
            </div>
            <Icon
                logo={shoppingCartIcon}
                width={50}
                height={50}
            />
        </header>
    )
}

export default Header