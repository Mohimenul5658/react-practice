import React, { useState } from 'react'
import { faqsData } from './DATA'
import FAQ from './FAQ'
import Style from './FAQS.modules.css'

const FAQS = () => {
    const [faqs, setfaqs] = useState(faqsData)
  return (
    <main className={Style.container}>
        <section className={Style.faqs}>
            <h1>FAQs</h1>
            {faqs.map(faq => <FAQ key={faq.id} {...faq}/>)}
        </section>
    </main>
  )
}

export default FAQS