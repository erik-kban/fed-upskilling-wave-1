'use client'
import React from 'react';
import styles from '@styles/SearchBar.module.scss';
import Icon from '@/components/atoms/Icon/Icon';
import searchIcon from '@assets/HeaderAssets/searchIcon.svg';



const SearchBar: React.FC = () => {
    return (
        <div className={`${styles.searchBar}`}>
            <div className={styles.searchBar__container}>
                <input
                    type="search"
                    className={styles.searchBar__input}
                    aria-label="Search input"
                    id="search-input"
                    placeholder="What are you looking for?"
                />
                <button type="submit" className={styles.searchBar__button}>
                    <Icon logo={searchIcon} width={46} height={46}/>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;