import React from 'react'
import JoinCard from '@/components/atoms/JoinCard/JoinCard'
import styles from '@styles/molecules/JoinSca.module.scss'
import RegisterCard from '@/components/atoms/RegisterCard/RegisterCard'

const JoinSca = () => {
    const cards = [
        {
            title: 'Tailored Pricing',
            subTitle: 'We can tailor your pricing',
            paragraph: `We're cheaper or we'll beat it`,
            link: 'Get your tailored pricing'
        },
        {
            title: 'Parts Guide',
            subTitle: `Looking for vehicle parts?`,
            paragraph: `Use our handy parts guide to find what you’re looking for.`,
            link: 'View the parts guide'
        },
        {
            title: 'Trade Hotline',
            subTitle: 'Need help? or have any questions?',
            paragraph: `7 days support`,
            link: 'Call us at 1300 321 123'
        },
        {
            title: 'Click & Collect',
            subTitle: 'In stock orders ready to collect in store within 1 hour.'
        },
        {
            title: 'Free Returns',
            subTitle: 'For in store and online orders.'
        },
        {
            title: 'Free Shipping',
            subTitle: 'On all orders over $99*'
        },
    ]
    return (
        <>
            <section aria-label="Join SCA" className={styles.joinsca}>
                <h1>LET US HELP YOU</h1>
                <div className={styles.joinsca__cards}>
                    {cards.map((card, cardIndex) => (
                        <JoinCard key={cardIndex} title={card.title} subTitle={card.subTitle} paragraph={card.paragraph} link={card.link} />
                    ))}
                </div>

                <div className={styles.joinsca__registerContainer}>
                    <RegisterCard />
                </div>
            </section>
        </>
    )
}

export default JoinSca