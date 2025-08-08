
'use client'
import React from 'react'
import logoImage from '@assets/HeaderAssets/tradeLogo.svg'
import menuIcon from '@assets/HeaderAssets/menuIcon.svg'
import Icon from '@/components/atoms/Icon/Icon'
import styles from '@styles/Header.module.scss'
import SearchBar from '@/components/molecules/SearchBar/SearchBar'
import shoppingCartIcon from '@assets/HeaderAssets/cartLogo.svg'

// Dummy prop
interface HeaderProps {
    text?: string;
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className={styles.header} role="banner">
            <div className={styles.header__logoContainer}>
                <div aria-label="trade logo">
                    <Icon
                        logo={logoImage}
                        width={164}
                        height={48}
                    />
                </div>
                <div aria-label="Menu Icon">
                    <Icon
                        logo={menuIcon}
                        width={50}
                        height={50}
                    />
                </div>
            </div>
            <div className={styles.header__searchContainer}>
                <div>
                    <SearchBar
                    />
                </div>
                <div aria-label="shopping cart icon">
                    <Icon
                        logo={shoppingCartIcon}
                        width={50}
                        height={50}
                    />
                </div>
            </div>

        </header>
    )
}

export default Header