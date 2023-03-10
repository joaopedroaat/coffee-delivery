import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    justify-self: end;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.4;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
    margin-top: 1rem;
  }
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;
  margin-top: 4.125rem;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
  }
`

const FILL_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface InfoIconProps {
  backgroundColor: keyof typeof FILL_COLORS
}

export const InfoIcon = styled.div<InfoIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme[FILL_COLORS[props.backgroundColor]]};
  color: ${(props) => props.theme.background};
  border-radius: 50%;
  padding: 0.625rem;
`

export const CoffeeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  margin: 8.75rem 0;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;

  align-items: center;
  justify-items: center;

  width: 100%;
  margin-top: 3.375rem;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
`
