import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;

  padding: 1.5rem 1.25rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;
`

export const TagList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
  margin-bottom: 1.25rem;
`

export const Tag = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  padding: 0.25rem 0.5rem;

  border-radius: 100px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    font-size: 0.875;
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
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;

    span {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-subtitle']};
      margin-left: 0.5rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;

    input {
      width: 50%;
      background: ${(props) => props.theme['base-button']};
      border: none;
      padding: 0.5rem;
    }

    button {
      padding: 0.5rem;
      background: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme['base-card']};

      border: none;
      border-radius: 8px;

      cursor: pointer;
    }
  }
`
