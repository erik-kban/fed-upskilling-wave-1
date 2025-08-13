import React from 'react'
import Disclaimers from '@/components/atoms/Disclaimers/Disclaimers'
import Sponsors from '@/components/atoms/Sponsors/Sponsors'
import FooterLinks from '@/components/atoms/FooterLinks/FooterLinks'

const Footer = () => {
  return (
    <>
      <FooterLinks />
      <Sponsors />
      <Disclaimers />
    </>
  )
}

export default Footer