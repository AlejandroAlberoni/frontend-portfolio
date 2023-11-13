import TopWrapper from './components/top_page'
import MidPage from './components/midpage'
import NavigationContext from './components/navbar'
import PARALLAX from './components/parallax_content'

export default function Home() {
  return (
    <main>
      <NavigationContext></NavigationContext>
      <MidPage></MidPage>
      <PARALLAX></PARALLAX>
    </main>
  )
}
