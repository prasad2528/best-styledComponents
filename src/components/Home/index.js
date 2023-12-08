import {Component} from 'react'
import './index.css'
import {
  TextareaContainer,
  ButtonsContainer,
  MainButton,
  TextAreaInput,
  ListItem,
  ItalicButton,
  UnderlineButton,
} from './styledComponents'

class Home extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const fontWeight = isBold ? 'bold' : 'normal'
    const fontStyle = isItalic ? 'italic' : 'normal'
    const textDecoration = isUnderline ? 'underline' : 'normal'
    const color = isBold ? '#faff00' : '#f1f5f9'
    const italicColor = isItalic ? '#faff00' : '#f1f5f9'
    const underlineColor = isUnderline ? '#faff00' : '#f1f5f9'
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="image-container">
            <h1 className="heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image"
            />
          </div>
          <TextareaContainer>
            <ButtonsContainer>
              <ListItem>
                <MainButton
                  data-testid="bold"
                  type="button"
                  onClick={this.onClickBold}
                  color={color}
                >
                  B
                </MainButton>
              </ListItem>
              <ListItem>
                <ItalicButton
                  data-testid="italic"
                  type="button"
                  onClick={this.onClickItalic}
                  color={italicColor}
                >
                  i
                </ItalicButton>
              </ListItem>
              <ListItem>
                <UnderlineButton
                  data-testid="underline"
                  type="button"
                  onClick={this.onClickUnderline}
                  color={underlineColor}
                >
                  U
                </UnderlineButton>
              </ListItem>
            </ButtonsContainer>
            <hr />
            <TextAreaInput
              className="text-input"
              rows="20"
              cols="40"
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </TextareaContainer>
        </div>
      </div>
    )
  }
}
export default Home
