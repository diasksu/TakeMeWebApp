import { 
    Stack,
    Typography,
    Button,
    useTheme
} from '@mui/material';
import '../../app/css/takeme.css';
import { MuiSwitchLarge } from '../../common/components/SwitchLarge';
import { ChangeEvent, useState } from 'react';
import { UseType } from '../../models/Enums';
import { useNavigate } from 'react-router-dom';
import { TitleSegment } from '../../common/components/Segments/TitleSegment';
import { locales } from '../../common/localization/locales';

export default function Home() {
    const [useType, setUseType] = useState(UseType.Send);
    const navigate = useNavigate();
    const theme = useTheme();

    const onClick = () => {
        navigate(useType.toLowerCase());
    }

    const onUseTypeChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setUseType(checked ? UseType.Deliver : UseType.Send);
    }

    return (
        <Stack 
            spacing={1} 
            sx={{ 
                height: '100%',
                justifyContent: 'center'
            }}
            direction="column"
            alignItems="stretch">
            <TitleSegment />
            <Stack
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                direction="row"
                spacing={0.5}>
                <Typography>{locales.sendButtonCaption}</Typography>
                    <MuiSwitchLarge
                        value={useType}
                        onChange={onUseTypeChange} />
                <Typography>{locales.deliverButtonCaption}</Typography>              
            </Stack>          
            <Button
                sx={{
                    color: theme.palette.text.primary,
                    background: theme.palette.primary.main
                }}
                onClick={onClick}>{locales.mainButtonCaptionContinue}</Button>
        </Stack>
    );
}
