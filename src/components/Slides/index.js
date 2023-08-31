import {Component} from 'react'
import './index.css'
import Context from '../../Context'

class Slides extends Component {
  state = {
    activeHeading: true,
    activeDescription: true,
  }

  onClickHeading = () => {
    this.setState({activeHeading: false})
  }

  onClickDescription = () => {
    this.setState({activeDescription: false})
  }

  render() {
    const {activeHeading, activeDescription} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            changeDescription,
          } = value

          const onBlurDescription = event => {
            if (event.target.value === '') {
              changeDescription('Description')
            }
            this.setState({activeDescription: true})
          }

          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeHeading('Heading')
            }
            this.setState({activeHeading: true})
          }

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }

          const onChangeDescription = event => {
            changeDescription(event.target.value)
          }

          const tabDetails = initialList[activeIndex]
          const {description, heading} = tabDetails

          return (
            <div className="slide-container">
              <div className="card-container">
                {activeHeading ? (
                  <h1 className="heading" onClick={this.onClickHeading}>
                    {heading}
                  </h1>
                ) : (
                  <input
                    type="text"
                    value={heading}
                    onChange={onChangeHeading}
                    onBlur={onBlurHeading}
                    className="input-heading"
                  />
                )}
                {activeDescription ? (
                  <p className="text" onClick={this.onClickDescription}>
                    {description}
                  </p>
                ) : (
                  <input
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                    onBlur={onBlurDescription}
                    className="input-text"
                  />
                )}
              </div>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Slides
