import { HomeInfo } from './components/HomeInfo'
import { CoffeeSection, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeInfo />
      <CoffeeSection>
        <h1>Nossos cafés</h1>
      </CoffeeSection>
    </HomeContainer>
  )
}
