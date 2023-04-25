import styled from 'styled-components'

export const BudgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const BudgetItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
`

export const BudgetTotal = styled(BudgetItem)`
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`
