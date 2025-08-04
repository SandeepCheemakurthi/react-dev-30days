import axios, { AxiosResponse } from "axios";


export class CountryDropdownService {

    private readonly baseUrl: string = 'https://openholidaysapi.org';

    public async getCountryList() {
        try {
            const response: AxiosResponse =
                await axios.get(`${this.baseUrl}/Countries`,
                    {
                        params: {
                            'languageIsoCode': 'en'
                        }
                    }
                );
            return response;
        }
        catch (error) {
            console.error('Error while fetching Countries: ', error);
            throw error;
        }
    }

    public async getPublicHolidaysList(payload) {
        try {
            const response: AxiosResponse =
                await axios.get(`${this.baseUrl}/PublicHolidays`,
                    {
                        params: { ...payload }
                    }
                );
            return response;
        }
        catch (error) {
            console.log('error occurred in getPublicHolidaysList ', error);
        }
    }
}