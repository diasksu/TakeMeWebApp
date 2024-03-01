import { 
    Stack, 
    Typography
} from '@mui/material';
import { TakeMeDatePicker } from '../TakeMeDatePicker';
import '../../../app/css/takeme.css';

type ChooseDateSegmentProps = {
    caption: string;
};

export default function ChooseDateSegment(props: Readonly<ChooseDateSegmentProps>) {
    return <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Typography>{props.caption}</Typography>
        <TakeMeDatePicker />
    </Stack>
}