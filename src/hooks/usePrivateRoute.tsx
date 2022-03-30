import { useEffect, useContext } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const usePrivateRoute = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [])
}

export default usePrivateRoute
