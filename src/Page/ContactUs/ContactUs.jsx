import React from 'react'
import HeaderComp from "../../Components/HeaderComp/HeaderComp"
import ContactModal from "../../Components/ContactModal/ConactModal"

function ContactUs() {
  return (
    <>
        <HeaderComp title="Contact Us" bgImg="contact-bg text-dark"></HeaderComp>
        <ContactModal></ContactModal>
    </>
  )
}

export default ContactUs