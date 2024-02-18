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

export interface CityDrawerProps {
    isOpen: boolean;
    handleClose: (city: GeoName) => void;
}

export function CityDrawer(props: Readonly<CityDrawerProps>) {
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
                background: theme.palette.background.default
            }
        }}
        anchor='bottom'
        open={props.isOpen}
        onClose={props.handleClose}>
        <Stack
            spacing={1}
            sx={{
                margin: '20px'
            }}>
            <TextField
                onChange={handleTextChange}
                value={cityInput}
                label='Origin city'
                sx={{
                    padding: '0px'
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