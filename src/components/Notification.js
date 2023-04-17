import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { reset } from "../reducers/notificationReducer"
import '../style.css'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const [showNotification, setShowNotification] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if(notification) {
      setShowNotification(true)

      const timer = setTimeout(() => {
        setShowNotification(false)
        dispatch(reset())
      }, 5000)
    
      return () => {
        clearTimeout(timer)
      }
    }
  }, [notification])
  
  return (
    <div className={`notification ${showNotification ? 'show' : ''}`}>
      {notification}
    </div>
  )
}

export default Notification