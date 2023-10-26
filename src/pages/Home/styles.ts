import styled from 'styled-components'

export const HomeContainer = styled.main`
  position: relative;
`

export const CartInfo = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 2rem;

  @media (max-width: 620px) {
    right: 1rem;
    bottom: 1rem;
  }

  padding: 1rem;
  border-radius: 50%;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  cursor: pointer;

  span {
    position: absolute;
    top: -0.25rem;
    right: -0.25rem;
    font-size: 0.765rem;
    background: ${(props) => props.theme['yellow-dark']};
    padding: 0.45rem;
    border-radius: 50%;
    font-weight: bold;
  }
`
