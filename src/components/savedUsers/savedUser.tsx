import { Box,Grid } from "@mui/material"
import { useAppSelector } from "../../hooks/hooks"
import SavedUserCard from "./savedUserCard"
import Navbar from "../navbar/navbar"


const SavedUsers = () => {

    const { users } = useAppSelector(state => state.savedUsersSlice)


    const usersData = users.map((item, index) => <SavedUserCard key={index} {...item} id={index} />)

    return <Box 
    sx={{width: '850px',
    height: '500px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    background: 'radial-gradient(circle at 10% 20%, rgb(59, 149, 237) 0%, rgb(7, 91, 173) 90%);',
    borderRadius: '6px'}} >
        <Navbar />
        <Grid margin='auto' container spacing={2}>
            {usersData}
        </Grid>
    </Box>
}


export default SavedUsers