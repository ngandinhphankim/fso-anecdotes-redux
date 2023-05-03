import { useSelector } from "react-redux"
import '../style.css'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  
  return (
    <div className={`notification ${notification ? 'show' : ''}`}>
      {notification}
    </div>
  )
}

export default Notification