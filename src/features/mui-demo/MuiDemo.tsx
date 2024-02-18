import { 
    Button, 
    Stack, 
    Box,
    Container, 
    Paper, 
    Divider, 
    Typography
} from '@mui/material';
import { useState } from 'react';
import { Global } from '@emotion/react';
import { ReactComponent as LogoIcon } from './telebook.svg';
import './takeme.css';
import { TakeMeDatePicker } from './TakeMeDatePicker';
import { CityDrawer } from './CityDrawer';
import { GeoName } from '../../api/geoNamesApi';

function MuiDemo() {

    let [originCity, setOriginCity] = useState<GeoName>();
    const [originDialogOpen, setOriginDialogOpen] = useState(false);
    const handleClickOpen = () => {
        setOriginDialogOpen(true);
    };
    const handleOriginCityDrawerClose = (city: GeoName) => {
        setOriginDialogOpen(false);
        setOriginCity(city);
    };

    return (
        <Container sx={{
            height: '100%',
            padding: '7px',
            fontStyle: 'normal', }} maxWidth='md'>
            <Box sx={{ height: '100%' }}>
                <Stack 
                    spacing={1} 
                    sx={{ height: '100%' }}
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
                        <LogoIcon style={{ margin: '35px' }} />
                        <Typography variant='h1'>Take Me</Typography>
                        <br />
                        <Typography style={{ 
                            width: '80%',
                            fontWeight: 100
                        }}>Отправляйте и доставляйте посылки по всему миру</Typography>
                    </Paper>
                    <Paper
                        style={{
                            margin: '10px',
                            backgroundImage: 'none'                            
                        }}>
                        <Stack
                            padding='10px 15px'
                            direction="column"
                            alignItems="stretch"
                            spacing={1}
                            divider={<Divider orientation="horizontal" flexItem />}
                            >
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                >
                                <Typography>Travel date</Typography>
                                <TakeMeDatePicker />
                            </Stack>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                >
                                <Typography>Travel date</Typography>
                                <TakeMeDatePicker />
                            </Stack>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                >
                                <Typography>Origin city</Typography>                                
                                <Button
                                    onClick={handleClickOpen}
                                    sx={{
                                        backgroundColor: 'var(--tg-section-bg-color)',
                                        padding: '7px 30px',
                                        borderRadius: '10px'
                                    }}>
                                    <Typography>
                                        {originCity 
                                            ? `${originCity.name} (${originCity.countryCode})` 
                                            : 'Choose city >'}
                                    </Typography>
                                </Button>
                                <Global
                                    styles={{
                                        '.MuiDrawer-root > .MuiPaper-root': {
                                            height: `calc(100%)`,
                                            overflow: 'visible',
                                        }
                                    }}
                                />
                                <CityDrawer 
                                    isOpen={originDialogOpen}
                                    handleClose={handleOriginCityDrawerClose}
                                />
                            </Stack>
                        </Stack>
                    </Paper>
                    <Stack 
                        direction="row"
                        spacing={0.5}
                        sx={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Button
                            sx={{ 
                                borderRadius: '30px 4px 4px 30px',
                                padding: '10px 20px 10px 30px'
                            }}
                            variant="contained">Отправить</Button>
                        <Button
                            sx={{ 
                                borderRadius: '4px 30px 30px 4px',
                                padding: '10px 30px 10px 20px'
                            }}
                            variant="contained">Захватить</Button>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    );
}

export default MuiDemo;