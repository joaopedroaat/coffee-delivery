import styled from 'styled-components'
import { BaseButton } from '../../../../styles/BaseButton'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;

  padding: 1.25rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  img {
    margin-top: -2.5rem;
  }
`

export const TagList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.25rem;

  margin-top: 1rem;
  margin-bottom: 1.25rem;
`

export const Tag = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  font-size: 0.625rem;
  font-weight: 700;
  line-height: 1.3;

  text-transform: uppercase;

  padding: 0.25rem 0.5rem;

  border-radius: 100px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 1.5rem;

  gap: 0.5rem;

  h1 {
    font-size: 1.25rem !important;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;

    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  color: ${(props) => props.theme['base-text']};

  label {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;

    span {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      margin-right: 0.25rem;
    }
  }

  input {
    width: 4.5rem;
    border: none;
    background: ${(props) => props.theme['base-button']};
    padding: 0.5rem;
    border-radius: 6px;
    outline: none;
    text-align: center;
  }
`
export const CartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
`
