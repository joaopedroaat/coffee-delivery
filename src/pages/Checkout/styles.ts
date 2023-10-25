import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  padding-top: 2.5rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }

  form {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-column-gap: 2rem;
    align-items: flex-start;
  }

  @media (max-width: 1200px) {
    form {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;

      div {
        width: 100%;
      }
    }
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${(props) => props.theme['base-card']};

  padding: 2.5rem;
  border-radius: 6px;
`

export const FormHeader = styled.header`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  display: flex;
  gap: 0.5rem;

  i {
    align-self: flex-start;
    font-size: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  h1 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`
