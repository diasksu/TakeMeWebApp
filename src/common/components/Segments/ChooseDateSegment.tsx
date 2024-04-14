import { 
    Stack, 
    Typography
} from '@mui/material';
import { TakeMeDatePicker } from '../TakeMeDatePicker';
import '../../../app/css/takeme.css';
import dayjs from 'dayjs';

type ChooseDateSegmentProps = {
    caption: string;
    value?: dayjs.Dayjs;
    setValue: (value?: dayjs.Dayjs) => void;
    minDate?: dayjs.Dayjs;
};

export default function ChooseDateSegment(props: Readonly<ChooseDateSegmentProps>) {
    return <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Typography>{props.caption}</Typography>
        <TakeMeDatePicker 
            value={props.value}
            setValue={props.setValue}
            minDate={props.minDate} />
    </Stack>
}