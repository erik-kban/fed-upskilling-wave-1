import React from 'react'
import Icon from '@components/atoms/Icon/Icon'
import styles from "@styles/atoms/JoinCard.module.scss"

interface JoinCardProps {
    title: string;
    subTitle: string;
    paragraph: string;
    link?: React.ReactNode;
}


const JoinCard:React.FC<JoinCardProps> = ({title, subTitle, paragraph, link}) => {
  return (
    <div className={styles.joincard}>
        <Icon logo="Rectangle.svg" width={48}/>
        <h2>{title}</h2>
        <p>{subTitle}</p>
        <p>{paragraph}</p>
        {link ? link : null}
    </div>
  )
}

export default JoinCard