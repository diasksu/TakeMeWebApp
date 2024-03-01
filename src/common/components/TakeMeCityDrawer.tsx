import { 
    Stack, 
    TextField,
    Drawer,
    useTheme,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';
import { useState } from 'react';
import { GeoName, getGeoNames } from '../../api/geoNamesApi';

export interface TakeMeCityDrawerProps {
    isOpen: boolean;
    handleClose: (city?: GeoName) => void;
    placeholder: string;
}

export function TakeMeCityDrawer(props: Readonly<TakeMeCityDrawerProps>) {
    const theme = useTheme();
    let [cityInput, setCityInput] = useState<string>('');
    let [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
    let [geonames, setGeonames] = useState<GeoName[]>([]);
    let [processing, setProcessing] = useState<boolean>(false);

    const handleTextChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const cityRawInput = event.target.value;
        setCityInput(cityRawInput);
        if(timeoutId) {
            clearTimeout(timeoutId);
        }
        const processCityInput = async () => {
            setProcessing(true);
            const geonames = await getGeoNames(cityRawInput);
            setProcessing(false);
            setGeonames(geonames);
        }
        const newTimeoutId = setTimeout(processCityInput, 1000);
        setTimeoutId(newTimeoutId);
    };

    const handleCityClick = async (event: React.MouseEvent, geoname: GeoName) => {
        props.handleClose(geoname);
    };

    return <Drawer
        sx={{
            '& .MuiPaper-root': {
                background: theme.palette.background.default,
                height: `calc(100%)`,
                overflow: 'visible',
            }
        }}
        anchor='bottom'
        open={props.isOpen}
        onClose={() => props.handleClose()}>
        <Stack
            spacing={1}
            sx={{
                margin: '20px'
            }}>
            <TextField
                onChange={handleTextChange}
                value={cityInput}
                label={props.placeholder}
                sx={{
                    padding: '0px',
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.text.secondary,
                    }
                }}/>
            <List
                sx={{ 
                    width: '100%',
                    opacity: processing ? 0.5 : 1
                }}>
                {geonames.map((geoname: GeoName) => (
                    <ListItem 
                        key={geoname.geonameId}
                        disablePadding
                        sx={{
                            marginTop: '3px',
                            padding: '3px',
                            background: theme.palette.background.paper
                        }}>
                        <ListItemButton onClick={e => handleCityClick(e, geoname)}>
                            <ListItemText primary={`${geoname.name} (${geoname.countryCode})`} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    </Drawer>;
}