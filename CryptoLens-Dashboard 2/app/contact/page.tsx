import { Metadata } from 'next'
import { ContactPage } from '@/components/contact-page'

export const metadata: Metadata = {
  title: 'CryptoLens | Contact Us',
  description: 'Get in touch with the CryptoLens team for inquiries or support',
}

export default function Contact() {
  return <ContactPage />
}

