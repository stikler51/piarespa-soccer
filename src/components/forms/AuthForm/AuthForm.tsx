import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import UserStore from '../../../stores/UserStore'
import { Checkbox, FormControlLabel } from '@mui/material'

function SignIn() {
  const { register, handleSubmit } = useForm()
  const user = UserStore

  const onSubmit: SubmitHandler<FieldValues> = ({ email, password, newAccount }) => {
    if (newAccount) {
      user.register({ email, password })
      return
    }
    user.login({ email, password })
  }

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            {...register('email')}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            {...register('password')}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel {...register('newAccount')} control={<Checkbox />} label="Register new account" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
            Log In
          </Button>
        </Box>

        {user.error && (
          <Typography component="p" sx={{ fontSize: 12 }} color="red">
            {user.error.message}
          </Typography>
        )}
      </Box>
    </Container>
  )
}

export default observer(SignIn)
