import { DateValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';

export interface TakeMeDatePickerProps {
    value?: dayjs.Dayjs;
    setValue: (value?: dayjs.Dayjs) => void;
    minDate?: dayjs.Dayjs;
}

export function TakeMeDatePicker(props: Readonly<TakeMeDatePickerProps>) {
    const onChange = (value: dayjs.Dayjs | null, context?: PickerChangeHandlerContext<DateValidationError>) => {
        if(value !== null) {
            props.setValue(value);
        }
    };

    return <MobileDatePicker
        format='D MMM YYYY'
        value={props.value}
        onChange={onChange}
        minDate={props.minDate ?? props.value}
        sx={{
            maxWidth: '150px',
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