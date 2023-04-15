import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {name, imgUrl} = item
  return (
    <li className="bg-item">
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
