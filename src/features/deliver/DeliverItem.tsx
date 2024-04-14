import { 
    Stack, 
    Typography,
    useTheme,
} from '@mui/material';
import '../../app/css/takeme.css';
import CustomWebAppMainButton from '../../common/components/WebApp/CustomWebAppMainButton';
import { WebAppBackButton, useTelegramWebApp } from '@kloktunov/react-telegram-webapp';
import { useNavigate } from 'react-router-dom';
import ChooseDateSegment from '../../common/components/Segments/ChooseDateSegment';
import ChooseCitySegment from '../../common/components/Segments/ChooseCitySegment';
import { ControlsPaper } from '../../common/components/ControlsPaper';
import { locales } from '../../common/localization/locales';
import { useEffect, useState } from 'react';
import { GeoName } from '../../api/geoNamesApi';
import dayjs from 'dayjs';
import { UseType } from '../../models/Enums';

export default function DeliverItem() {
    const [originDialogOpen, setOriginDialogOpen] = useState(false);
    const [origin, setOrigin] = useState<GeoName>();

    const [destinationDialogOpen, setDestinationDialogOpen] = useState(false);
    const [destination, setDestination] = useState<GeoName>();

    const [departureDate, setDepartureDate] = useState<dayjs.Dayjs | undefined>(dayjs());

    const navigate = useNavigate();
    const theme = useTheme();
    const webApp = useTelegramWebApp();
    const onMainClick = () => {
        const userInputData = {
            useType: UseType.Deliver,
            origin,
            destination,
            departureDate
        };
        webApp?.sendData(JSON.stringify(userInputData));
    }
    
    useEffect(
        () => {
            webApp?.expand();
        }, 
        [webApp]
    );

    const onBackClick = () => {
        if(originDialogOpen) {
            setOriginDialogOpen(false);
            return;
        }
        if(destinationDialogOpen){
            setDestinationDialogOpen(false);
            return;
        }
        navigate(-1);
    }

    return (
        <Stack>
            <ControlsPaper>
                <ChooseDateSegment
                    value={departureDate}
                    setValue={setDepartureDate}
                    caption={locales.departureDate}
                    minDate={dayjs()} />
                <ChooseCitySegment
                    caption={locales.cityFrom}
                    open={originDialogOpen}
                    setOpen={setOriginDialogOpen}
                    city={origin}
                    setCity={setOrigin} />
                <ChooseCitySegment
                    caption={locales.cityTo} 
                    open={destinationDialogOpen}
                    setOpen={setDestinationDialogOpen}
                    city={destination}
                    setCity={setDestination}  />
            </ControlsPaper>
            <Typography style={{
                    margin: '10px',
                    fontWeight: 100,
                    textAlign: 'center',
                    color: theme.palette.text.secondary
                }}>{locales.deliverPackageHelperText}</Typography>
            {(!originDialogOpen && !destinationDialogOpen) && 
                <CustomWebAppMainButton
                    disable={!(departureDate && origin && destination)}
                    text={locales.deliverButtonCaption}
                    onClick={onMainClick} />
            }
            {(originDialogOpen || destinationDialogOpen) && 
                <WebAppBackButton
                    onClick={onBackClick} />}
        </Stack>
    );
}
