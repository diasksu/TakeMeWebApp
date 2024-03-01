import { 
    Stack, 
    Typography,
} from '@mui/material';
import '../../app/css/takeme.css';
import CustomWebAppMainButton from '../../common/components/WebApp/CustomWebAppMainButton';
import { WebAppBackButton } from '@kloktunov/react-telegram-webapp';
import { useNavigate } from 'react-router-dom';
import ChooseDateSegment from '../../common/components/Segments/ChooseDateSegment';
import ChooseCitySegment from '../../common/components/Segments/ChooseCitySegment';
import { ControlsPaper } from '../../common/components/ControlsPaper';
import { locales } from '../../common/localization/locales';

export default function DeliverItem() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(-1);
    }

    return (
        <Stack>
            <ControlsPaper>
                <ChooseDateSegment
                    caption={locales.departureDate} />
                <ChooseCitySegment
                    caption={locales.cityFrom} />
                <ChooseCitySegment
                    caption={locales.cityTo} />
            </ControlsPaper>
            <Typography style={{
                    margin: '10px',
                    fontWeight: 100,
                    textAlign: 'center'
                }}>{locales.deliverPackageHelperText}</Typography>
            <CustomWebAppMainButton
                text={locales.deliverButtonCaption}
                onClick={onClick} />
            <WebAppBackButton
                onClick={onClick} />
        </Stack>
    );
}
