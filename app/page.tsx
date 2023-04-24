import ClientStory from '@/components/ClientStory/ClientStory'
import FeaturedList from '@/components/FeaturedList/FeaturedList'
import Hero from '@/components/Hero/Hero'
import Story from '@/components/Story/Story'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <FeaturedList />
      <ClientStory />

    </>
  )
}
