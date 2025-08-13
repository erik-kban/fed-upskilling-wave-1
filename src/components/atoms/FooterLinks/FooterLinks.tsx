'use client'
import React from 'react'
import styles from '@styles/atoms/FooterLinks.module.scss'
import Icon from '../Icon/Icon'
import tradeLogo from '@assets/HeaderAssets/tradeLogo.svg'
import buttonUp from "@assets/buttonUp.svg"

const FooterLinks = () => {
    const footerSections = [
        {
            title: "Customer Service",
            items: [
                "Help Centre",
                "Product Safety & Recalls",
                "FAQs",
                "Shipping & Delivery",
                "Returns and Refunds",
                "My Account",
                "Track my Order",
                "DIY Advice",
                "Payment Options",
                "About ZIP",
                "About Afterpay"
            ]
        },
        {
            title: "Surpercheap Auto",
            items: [
                "About us",
                "Find a Store",
                "In Store Services",
                "Mechanic Finder",
                "Club",
                "Trade",
                "Gift Cards",
                "Price Beat",
                "Click & Collect",
                "Trade Partner Information",
                "Careers",
                "Partnerships"
            ]
        },
        {
            title: "Popular Brands",
            items: [
                "Chemical Guys",
                "ToolPRO",
                "Meguiar's",
                "Karcher",
                "Prorack",
                "Castrol",
                "Penrite",
                "Century",
                "Ridge Ryder",
                "Ryco",
                "Bosch",
                "Tridon"
            ]
        },
        {
            title: "Popular Searches",
            items: [
                "Batteries",
                "Seat Covers",
                "Oil Filters",
                "Wiper Blades",
                "Engine Oil",
                "Brake Pads",
                "Coolant",
                "Spark Plugs",
                "Roof Racks",
                "Dash Cameras",
                "Floor Mats",
                "Air Compressors",
            ]
        }
    ]
    return (
        <nav aria-label="Footer Links" className={styles.footerLinks__container}>
            {footerSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    <ul>{section.title}</ul>
                    {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                    ))}
                </div>
            ))}
            <div>
                <Icon width={151} height={44} logo={tradeLogo} />
            </div>
            <div className={styles.footerLinks__buttonContainer}>
                <Icon logo={buttonUp} 
                width={50} 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
                />
            </div>
        </nav>
    )
}

export default FooterLinks