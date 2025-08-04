import { Component } from "react";
import "./Country_drodpown.css";
import { CountryDropdownService } from "../service/CountryDropdownService";

interface State {
    countryList: Array<{
        countryIsoCode: string;
        label: string;
        value: string;
    }>;
    listOfHolidays: Array<{}>
}

export class CountryDropdown extends Component<{}, State> {

    private countryDropdownService: CountryDropdownService;

    constructor(props: {}) {
        super(props);
        this.state = {
            countryList: [],
            listOfHolidays: [],
        }
        this.countryDropdownService = new CountryDropdownService();
    }

    componentDidMount(): void {
        console.log('componentDidMount');
        this.getCountryList();
    }

    async getCountryList() {
        try {
            const response = await this.countryDropdownService.getCountryList();
            this.setState({
                countryList: response.data.map(country => ({
                    countryIsoCode: country?.isoCode,
                    label: country?.name[0]?.text,
                    value: country?.isoCode
                }))
            }, () => {
                console.log('country List', this.state.countryList);
            })
        }
        catch (error) {
            console.error('Error Occured in component while fetching country List ', error);
        }
    }

    async getPublicHolidays(selectedCountry) {
        selectedCountry = JSON.parse(selectedCountry);
        console.log('selectedCountry after parse ', selectedCountry);
        const now = new Date();
        const year = now.getFullYear();

        const startOfYear = `${year}-01-01`;
        const endOfYear = `${year}-12-31`;
        let payload = {
            'countryIsoCode': selectedCountry?.countryIsoCode,
            'validFrom': startOfYear,
            'validTo': endOfYear
        }
        const response: any = await this.countryDropdownService.getPublicHolidaysList(payload);
        this.setState({
            listOfHolidays: response?.data.map((holiday: any) => ({
                date: holiday?.startDate == holiday?.endDate ? new Date(holiday?.startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) : new Date(holiday?.startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) + new Date(holiday?.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }),
                text: holiday?.name[0]?.text
            }))
        }, () => {
            console.log('list of holidays ', this.state.listOfHolidays)
        })
    }

    render() {
        console.log('render')
        const { countryList, listOfHolidays } = this.state;
        return (
            <>
                <div>
                    <label>Country</label>
                </div>
                {countryList.length > 0 &&
                    (<select onChange={e => this.getPublicHolidays(e.target.value)}>
                        {countryList.map((country) => (
                            <option key={country.value} value={JSON.stringify(country)}>{country.label}</option>
                        ))}
                    </select>)
                }
                {listOfHolidays.length > 0 && (
                    <div>
                        <div>
                            <h4>List of Holidays are:</h4>
                        </div>
                        {
                            listOfHolidays.map((holiday: any) => (
                                <div>
                                    <p>{holiday?.date} , {holiday?.text}</p>
                                </div>
                            ))
                        }
                    </div>

                )}
            </>
        )
    }
}