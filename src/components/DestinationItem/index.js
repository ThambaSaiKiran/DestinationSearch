// Write your code here
import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {name, imgUrl} = item
  return (
    <div className="bg-item">
      <img src={imgUrl} />
      <p>{name}</p>
    </div>
  )
}

export default DestinationItem
