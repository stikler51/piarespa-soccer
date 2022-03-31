import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserStore from '../stores/UserStore'

const usePrivateRoute = () => {
  const navigate = useNavigate()
  const { user } = UserStore

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [])
}

export default usePrivateRoute
