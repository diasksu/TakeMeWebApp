import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';

export interface TakeMeDatePickerProps {
}

export function TakeMeDatePicker(props: TakeMeDatePickerProps) {
    return <MobileDatePicker
        format='MMM D YYYY'
        defaultValue={dayjs()}
        sx={{
            maxWidth: '140px',
            padding: '0px',
            borderWidth: '0px',
            "& .MuiOutlinedInput-root": { 
                borderRadius: '10px',
                background: 'var(--tg-section-bg-color)'
            },
            "& .MuiOutlinedInput-notchedOutline": {
                borderWidth: '0px'
            },
            "& .MuiOutlinedInput-input": {
                padding: '5px 0px 6px 20px',
                textAlign: 'right',
                lineHeight: '35px'
            }
        }}
    />;
}