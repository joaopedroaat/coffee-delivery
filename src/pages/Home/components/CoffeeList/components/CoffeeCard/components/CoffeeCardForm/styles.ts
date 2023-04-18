import styled from 'styled-components'

export const CoffeeCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.25rem 1.25rem 1.25rem;

  width: 16rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  h1,
  p {
    text-align: center;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-label']};
    margin-bottom: 2rem;
  }
`

export const CardImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;

  margin-top: -1.25rem;
  margin-bottom: 0.75rem;
`

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;

  margin-bottom: 1rem;
`

export const Tag = styled.li`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  text-transform: uppercase;

  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`

export const CardForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  gap: 0.5rem;

  label {
    color: ${(props) => props.theme['base-text']};

    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;

    span {
      font-family: 'Baloo 2', cursive;
      font-size: 1.5rem;
      font-weight: 800;

      margin-left: 0.25rem;
    }
  }
`

export const FormSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const CardSubmitButton = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};

  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  cursor: pointer;
`
