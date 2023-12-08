import styled from 'styled-components'

export const TextareaContainer = styled.div`
  background-color: #25262c;
  width: 50%;
  border: 1px solid #cbd5e1;
`

export const ButtonsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  width: 400px;
  justify-content: space-around;
`
export const MainButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => props.color};
  font-size: 24px;
  cursor: pointer;
`

export const ItalicButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => props.color};
  font-size: 24px;
  cursor: pointer;
  font-style: italic;
`
export const UnderlineButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => props.color};
  font-size: 24px;
  cursor: pointer;
  text-decoration: underline;
`
export const TextAreaInput = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: #f1f5f9;
  outline: none;
  border: none;
  padding: 20px;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  background-color: transparent;
`
export const ListItem = styled.li``
