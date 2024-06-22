import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"
import ImageCollage from '../components/ImageCollage';
import { Container } from "@mui/material";
import CustomizedAccordions from '../components/Accordion';
import Paper from "@mui/material/Paper"
import BottomNavigation from "@mui/material/BottomNavigation"
import BasicModal from '../components/Modal';

const Tour = () => <Container sx={{width: 900}}>
    <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas 
    </Typography>
    <Box marginTop={3} sx={{display:"flex"}}>
        <img src='https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'
         alt='' 
         height={325}
         />
         <ImageCollage/>
    </Box>
    <Box>
    <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket 
    </Typography>
    <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ea omnis consequuntur eveniet molestias aliquid inventore qui. Tenetur quisquam nesciunt officia nam quia ut iure ex pariatur, in praesentium quasi repellendus eius deleniti animi nulla culpa veritatis! Porro, assumenda iusto.
    </Typography>
    </Box>
    <Box marginBottom={10}>
    <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
        Frequently Asked Questions
    </Typography>
    <CustomizedAccordions/>
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BasicModal/>
        </BottomNavigation>
      </Paper>
</Container>

export default Tour