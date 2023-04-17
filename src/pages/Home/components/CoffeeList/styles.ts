import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;

  // Compensar a margem negativa do avatar de café
  row-gap: calc(1.25rem + 1.25rem);
`
