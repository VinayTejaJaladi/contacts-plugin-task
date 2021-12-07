/* eslint-disable react/void-dom-elements-no-children */
import {Component} from 'react'
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'
import {BiSearch} from 'react-icons/bi'
import Contacts from './Components/Contacts'
import './App.css'

const contactsList = [
  'Anil',
  'Arvind',
  'Akhil',
  'Ashok',
  'Amar',
  'Ajay',
  'Abhinav',
  'Bhargav',
  'Bindhu',
  'Bunty',
  'Chaitanya',
  'Charithra',
  'Datta',
  'Devendra',
  'Hari',
  'Harsha',
  'Jagadish',
  'Janaki Nivas',
  'Kalesha Vali',
  'Keerthana',
  'Keerthika',
  'Kishore',
  'Leela',
  'Mahesh',
  'Mallika',
  'Manikanta',
  'Manogna',
  'Naga Lakshmi',
  'Naveen',
  'Nithin',
  'Nandini',
  'Prasanthi',
  'Praneeth',
  'Ravi',
  'Ramesh',
  'Ravindra',
  'Rayudu',
  'Sahithi',
  'Sai Kiran',
  'Sasi',
  'Sanjeeva',
  'Omsai',
  'Sankar',
  'Siva',
  'Srikar',
  'Swathi',
  'Teju',
  'Vamsi',
  'Vasu',
  'Venu',
  'Yashraj',
]
contactsList.sort()

class App extends Component {
  state = {contacts: contactsList, isToggleOn: false, searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value}, this.updateContactsList)
  }

  onPressKeyDown = event => {
    const {searchInput} = this.state
    if (event.key === 'Enter') {
      const updatedList = contactsList.filter(each =>
        each.toLowerCase().includes(searchInput.toLowerCase()),
      )
      this.setState({contacts: updatedList})
    }
  }

  onClickToggle = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }))
  }

  renderListView = () => {
    const {searchInput, contacts} = this.state
    return (
      <div className="expanded-view-container">
        <div className="search-container">
          <BiSearch className="search-icon" />
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            onKeyDown={this.onPressKeyDown}
            placeholder="Search"
            value={searchInput}
            className="input-field"
          />
        </div>
        <Contacts data={contacts} />
      </div>
    )
  }

  render() {
    const {isToggleOn} = this.state
    return (
      <div className="bg-container">
        <div className={`contacts-container ${isToggleOn && 'cc-toggled'}`}>
          <div className={`default-container ${isToggleOn && 'dc-toggled'}`}>
            <p className="all-contacts"> All Contacts </p>
            <button
              type="button"
              className="toggle-button"
              onClick={this.onClickToggle}
            >
              {isToggleOn ? (
                <IoIosArrowUp size="20px" />
              ) : (
                <IoIosArrowDown size="20px" />
              )}
            </button>
          </div>
          {isToggleOn && this.renderListView()}
        </div>
      </div>
    )
  }
}

export default App
