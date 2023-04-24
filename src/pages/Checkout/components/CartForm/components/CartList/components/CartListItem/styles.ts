import styled from 'styled-components'

export const CartListItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const CartItemImage = styled.img`
  width: 4rem;
  height: 4rem;
`

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-weight: 700;
  }
`

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
`

export const TrashButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  gap: 0.5rem;
  cursor: pointer;

  font-size: 0.75rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;

  i {
    color: ${(props) => props.theme.purple};
  }
`
