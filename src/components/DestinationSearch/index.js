import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const updatedList = destinationsList.filter(item =>
      item.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg">
        <div className="bg2">
          <h1>Destination Search</h1>
          <div className="d-flex flex-row">
            <input
              type="search"
              placeholder="Search"
              onChange={this.onSearch}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="img"
            />
          </div>
        </div>
        <ul className="bg1">
          {updatedList.map(item => (
            <DestinationItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
