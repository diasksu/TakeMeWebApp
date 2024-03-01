import { 
    Stack, 
    Typography
} from '@mui/material';
import '../../app/css/takeme.css';
import CustomWebAppMainButton from '../../common/components/WebApp/CustomWebAppMainButton';
import { WebAppBackButton } from '@kloktunov/react-telegram-webapp';
import { useNavigate } from 'react-router-dom';
import ChooseCitySegment from '../../common/components/Segments/ChooseCitySegment';
import ChooseDateSegment from '../../common/components/Segments/ChooseDateSegment';
import { ControlsPaper } from '../../common/components/ControlsPaper';
import { locales } from '../../common/localization/locales';

export default function SendItem() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(-1);
    }

    return (
        <Stack>
            <ControlsPaper>
                <ChooseDateSegment
                    caption={locales.packageActualFrom} />
                <ChooseDateSegment
                    caption={locales.packageActualTo} />
                <ChooseCitySegment
                    caption={locales.cityFrom} />
                <ChooseCitySegment
                    caption={locales.cityTo} />
            </ControlsPaper>

            <Typography 
                style={{
                    margin: '10px',
                    fontWeight: 100,
                    textAlign: 'center'
                }}>{locales.sendPackageHelperText}
            </Typography>

            <CustomWebAppMainButton
                text={locales.sendButtonCaption}
                onClick={onClick} />

            <WebAppBackButton 
                onClick={onClick} />
        </Stack>
    );
}
