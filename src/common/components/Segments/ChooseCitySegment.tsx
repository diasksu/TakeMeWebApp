import { 
    Button, 
    Stack, 
    Typography
} from '@mui/material';
import { useState } from 'react';
import { GeoName } from '../../../api/geoNamesApi';
import { TakeMeCityDrawer } from '../TakeMeCityDrawer';
import '../../../app/css/takeme.css';
import { locales } from '../../localization/locales';

type ChooseCitySegmentProps = {
    caption: string;
};

export default function ChooseCitySegment(props: Readonly<ChooseCitySegmentProps>) {
    let [city, setCity] = useState<GeoName>();
    const [cityDialogOpen, setCityDialogOpen] = useState(false);
    const handleCityClickOpen = () => {
        setCityDialogOpen(true);
    };
    const handleCityDrawerClose = (city?: GeoName) => {
        setCityDialogOpen(false);
        if(city) {
            setCity(city);
        }
    };

    return <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Typography>{props.caption}</Typography>                                
        <Button
            onClick={handleCityClickOpen}
            sx={{
                backgroundColor: 'var(--tg-section-bg-color)',
                padding: '7px 30px',
                borderRadius: '10px'
            }}>
            <Typography>
                {city 
                    ? `${city.name} (${city.countryCode})` 
                    : `${locales.chooseCityButtonCaption} >`}
            </Typography>
        </Button>      
        <TakeMeCityDrawer
            placeholder={props.caption}
            isOpen={cityDialogOpen}
            handleClose={handleCityDrawerClose}
        />
    </Stack>
}