import axios from 'axios';

const userName = 'dias';

export type GeoName = {
    geonameId: number;
    toponymName: string;
    name: string;
    countryId: number;
    countryCode: string;
    countryName: string;
};
  
type GetGeoNamesResponse = {
    totalResultsCount: number;
    geonames: GeoName[];
};

export const getGeoNames = async (cityName: string) : Promise<GeoName[]> => {
    const geonamesUrl = `https://secure.geonames.org/search?name=${encodeURIComponent(cityName)}&username=${userName}&featureClass=P&maxRows=10&type=json`;
    const { data, status } = await axios.get<GetGeoNamesResponse>(
        geonamesUrl,
        {
            headers: {
                Accept: 'application/json',
            },
        },
    );
    return data.geonames;
}