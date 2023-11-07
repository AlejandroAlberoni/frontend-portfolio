import TopWrapper from './components/top_page'
import MidPage from './components/midpage'
import NavigationContext from './components/navbar'

export default function Home() {
  return (
    <main>
      <NavigationContext></NavigationContext>
      <MidPage></MidPage>
    </main>
  )
}
