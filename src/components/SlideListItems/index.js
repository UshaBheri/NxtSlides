import {Component} from 'react'
import './index.css'
import Context from '../../Context'

class SlideListItems extends Component {
  render() {
    const {details, serialNumber} = this.props
    const {heading, description} = details

    return (
      <Context.Consumer>
        {value => {
          const {changeActiveTab, activeIndex} = value
          const isActive = activeIndex === serialNumber - 1
          const activeStyles = isActive ? 'active-style' : ''

          const onClickSlideTab = () => {
            changeActiveTab(serialNumber - 1)
          }

          return (
            <li
              className={`slide-item ${activeStyles}`}
              onClick={onClickSlideTab}
              testid={`slideTab${serialNumber}`}
            >
              <p className="slide-number">{serialNumber}</p>
              <div className="slide-container">
                <h1 className="heading">{heading}</h1>
                <p className="text">{description}</p>
              </div>
            </li>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default SlideListItems
