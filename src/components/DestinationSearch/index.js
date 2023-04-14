// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
    const {destinationsList} = this.props
  state = {searchList: destinationsList}

  onSearch = event => {
    this.setState(
      const newSearchList= destinationsList.filter(item => {
        item.name.includes(event.target.value)
      });
      return ({searchList: newSearchList})
    )
  }

  render() {
    const {searchList} = this.state
    return (
      <div className="bg">
        <h1>Destination Search</h1>
        <input type="search" placeholder="Search" onChange={this.onSearch} />
        <div className="bg1">
          {searchList.map(item => (
            <DestinationItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default DestinationSearch
