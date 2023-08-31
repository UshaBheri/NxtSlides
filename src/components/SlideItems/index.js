import {Component} from 'react'
import SlideListItems from '../SlideListItems'
import Context from '../../Context'
import './index.css'

class SlideItems extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideListItems
                    key={eachSlide.id}
                    details={eachSlide}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default SlideItems
