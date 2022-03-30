import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Avatar from '@mui/material/Avatar'
import { Stack } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/userContext'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="left">
          Piarespa soccer
        </Typography>
        {user && (
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1" component="div" sx={{ flexGrow: 0 }} align="left">
              {user.email}
            </Typography>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>{user.email?.slice(0, 1).toUpperCase()}</Avatar>
          </Stack>
        )}
        {!user && (
          <Button variant="outlined" color="inherit" onClick={() => navigate('/login')}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
