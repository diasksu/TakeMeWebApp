import { 
    Paper, 
    Typography
} from '@mui/material';
import { ReactComponent as AirIcon } from '../../../app/images/airplane-postal.svg';
import '../../../app/css/takeme.css';
import { locales } from '../../localization/locales';

type TitleSegmentProps = {
    hideCaption?: boolean;
};

export function TitleSegment(props: Readonly<TitleSegmentProps>) {
    return <Paper sx={{    
        textAlign: 'center',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'none',
        backgroundColor: 'transparent',               
        flexGrow: 1 }}>
        <AirIcon style={{ margin: '35px' }} />
        <Typography variant='h1'>Take me</Typography>
        <br />
        <Typography style={{
            display: props.hideCaption ? 'none' : 'block',
            width: '80%',
            fontWeight: 100
        }}>{locales.titleCaption}</Typography>
    </Paper>;
}
