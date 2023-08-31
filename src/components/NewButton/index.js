import {v4 as uuidv4} from 'uuid'
import './index.css'
import Context from '../../Context'

const NewButton = () => (
  <Context.Consumer>
    {value => {
      const {addNewItem, activeIndex, changeActiveTab} = value

      const onClickAddButton = () => {
        const id = uuidv4()
        const item = {
          id,
          heading: 'Heading',
          description: 'Description',
        }
        addNewItem(item)
        changeActiveTab(activeIndex + 1)
      }
      const onDoubleClickButton = () => {
        console.log('Hello')
      }

      return (
        <div>
          <button
            type="button"
            className="button"
            onClick={onClickAddButton}
            onDoubleClick={onDoubleClickButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon"
            />
            New
          </button>
        </div>
      )
    }}
  </Context.Consumer>
)

export default NewButton
