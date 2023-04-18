import { coffeeData } from '../../../../data/CoffeeData'
import { CoffeeCard } from './components/CoffeeCard/components/CoffeeCardForm'
import { CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      {coffeeData.map((coffee) => (
        <CoffeeCard key={coffee.name} coffee={coffee} />
      ))}
    </CoffeeListContainer>
  )
}
