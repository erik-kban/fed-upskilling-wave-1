import React from 'react'
import styles from '@styles/atoms/CustomLink.module.scss'

interface CustomLinkProps {
    text: string;
}

const CustomLink:React.FC<CustomLinkProps> = ({ text }) => {
  return (
    <a className={styles.customLink__decoration}>{text}</a>
  )
}

export default CustomLink