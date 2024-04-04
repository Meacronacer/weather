
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Iuser } from '../../redux/slices/types';
import { Grid } from '@mui/material';
import { removeUser } from '../../redux/slices/savedUsersSlice';
import { useAppDispatch } from '../../hooks/hooks';

interface IsavedUsers extends Iuser {
  id: number
}

const SavedUserCard: React.FC<IsavedUsers> = ({id, gender, location, name, picture, email}) => {
  const dispatch = useAppDispatch()

    return (
        <Grid item xs={3}>
            <Card sx={{
            background: '#6d4343',
            color: '#ffff',
            p: '10px',
            mb: '10px',
            width: '150px',
            height: '270px',
            display: 'flex',
            flexDirection: 'column', 'alignItems': 'center',
            textAlign: 'center',
            overflow: "hidden", textOverflow: "ellipsis"}}>
          <CardMedia
            sx={{ height: '70px', width: '70px', borderRadius: '50%'}}
            image={picture.medium}
            alt='profile'
            title="green iguana"
            component='img'
          />
          <CardContent>
            <Typography fontSize='18px'
             gutterBottom
              variant="h5"
               sx={{ paddingInline: '20px', maxWidth: '160px'}}
                noWrap title={`${name.title} ${name.first} ${name.last}`}>
              {name.title} {name.first} {name.last}
            </Typography>
            <Typography fontSize='14px' variant="h6" >
              {gender}
            </Typography>
            <Typography fontSize='14px' color="#dfd8d8">
            {location.country} <br/>
            {location.state} <br/>
            {location.city}
            </Typography>
            <Typography fontSize='14px' color="#dfd8d8" sx={{ paddingInline: '20px', maxWidth: '160px'}} noWrap variant="h6" title={email}>
            {email}
            </Typography>
            <Button onClick={() => dispatch(removeUser(id))} sx={{mt:'10px'}} color='error' variant='contained' size="small">remove</Button>
          </CardContent>
        </Card>
        </Grid>
      );
}


export default SavedUserCard