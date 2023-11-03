import Image from 'next/image'
import HelloPresentation from './components/hellopresentation'
import MidPage from './components/midpage'

export default function Home() {
  return (
    <main>
      <HelloPresentation></HelloPresentation>
      <MidPage></MidPage>
    </main>
  )
}
