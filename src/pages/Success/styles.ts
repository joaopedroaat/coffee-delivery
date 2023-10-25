import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin-top: 5rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 2rem;
    font-weight: 800;
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SuccessHeader = styled.header`
  width: 100%;
  text-align: center;
  margin-bottom: 2.5rem;
`

export const DeliveryInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
`

export const DeliveryInfoBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 32.875rem;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  padding: 2.5rem;

  li {
    display: flex;
    gap: 0.75rem;
    width: 100%;

    span {
      font-weight: 700;
    }

    p {
      font-size: 1rem;
    }
  }
`

interface ListIconProps {
  fillColor: 'purple' | 'yellow' | 'yellow-dark'
}

export const ListIcon = styled.div<ListIconProps>`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme[props.fillColor]};
  border-radius: 50%;
  padding: 0.5rem;
  color: ${(props) => props.theme.white};
`
