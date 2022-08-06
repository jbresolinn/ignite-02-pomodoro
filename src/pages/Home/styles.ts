import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    outline: 0;
    border-color: ${(props) => props.theme['green-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CountDownContainer = styled.div`
  font: 700 10rem 'Roboto Mono', monospace;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Divider = styled.div`
  width: 4rem;
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  overflow: hidden;

  display: flex;
  justify-content: center;
`

export const StartCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  transition: background 0.1s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-300']};
  }

  &:disabled {
    opacity: 0.7;
  }
`
