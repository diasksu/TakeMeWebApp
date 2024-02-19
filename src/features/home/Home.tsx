import { 
    Stack, 
    Box,
    Container, 
    Paper, 
    Typography,
    Switch
} from '@mui/material';
import { ReactComponent as AirIcon } from '../../app/images/airplane-postal.svg';
import '../../app/css/takeme.css';

function Home() {

    return (
        <Container sx={{
            height: '100%',
            padding: '7px',
            fontStyle: 'normal', }} maxWidth='md'>
            <Box sx={{ height: '100%' }}>
                <Stack 
                    spacing={1} 
                    sx={{ 
                        height: '100%' 
                    }}
                    direction="column"
                    alignItems="stretch">
                    <Paper sx={{    
                        verticalAlign: 'center',
                        textAlign: 'center',
                        border: 'none',
                        boxShadow: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: 'none',
                        backgroundColor: 'transparent',                   
                        transition: 'flex-grow 2s ease',
                        flexGrow: 1 }}>
                        <AirIcon style={{ margin: '35px' }} />
                        <Typography variant='h1'>Take Me</Typography>
                        <br />
                        <Typography style={{ 
                            width: '80%',
                            fontWeight: 100
                        }}>Отправляйте и доставляйте посылки по всему миру</Typography>
                    </Paper>
                    <Stack
                        sx={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            verticalAlign: 'center'
                        }}
                        direction="row"
                        spacing={0.5}>
                        <Typography>Отправить</Typography>
                        <Switch />
                        <Typography>Доставить</Typography>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    );
}

export default Home;