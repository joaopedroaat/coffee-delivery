import { CoffeeList } from './components/CoffeeList'
import { HomeInfo } from './components/HomeInfo'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeInfo />
      <CoffeeList />
    </HomeContainer>
  )
}
