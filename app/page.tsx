import Image from 'next/image'
import TopWrapper from './components/top_page'
import MidPage from './components/midpage'
import NavigationContext from './components/navbar'

export default function Home() {
  return (
    <main>
      <TopWrapper></TopWrapper>
      <NavigationContext></NavigationContext>
      <MidPage></MidPage>
    </main>
  )
}
