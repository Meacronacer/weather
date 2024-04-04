import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchUser } from '../../redux/slices/userSlice';
import { addNewUser } from '../../redux/slices/savedUsersSlice';

const CardItem = React.memo(() => {

  const dispatch = useAppDispatch()
  const [saved, setSaved] = React.useState<boolean>(false)
  const {gender, location, name, picture, email} = useAppSelector(state => state.userSlice)

  React.useEffect(() => {
      dispatch(fetchUser())
  }, [])

  const handleAddNewUser = () => {
    dispatch(addNewUser({gender, name, location, email, picture}))
    setSaved(true)
  }

  return (
    <Card sx={{
        background: '#6d4343',
        color: '#ffff',
        p: '20px',
        width: '250px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column', 'alignItems': 'center',
        textAlign: 'center',
        overflow: "hidden", textOverflow: "ellipsis"}}>
      <CardMedia
        sx={{ height: '100px', width: '100px', borderRadius: '50%', m: '10px'}}
        image={picture.large}
        alt='profile'
        title="green iguana"
        component='img'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name.title} {name.first} {name.last}
        </Typography>
        <Typography variant="h6" >
          {gender}
        </Typography>
        <Typography color="#dfd8d8">
        {location.country} <br/>
        {location.state} <br/>
        {location.city}
        </Typography>
        <Typography color="#dfd8d8" sx={{ paddingInline: '10px', maxWidth: '280px'}} noWrap variant="h6" title={email}>
        {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button disabled={saved} onClick={handleAddNewUser} variant='contained' size="small">save</Button>
      </CardActions>
    </Card>
  );
})


export default CardItem