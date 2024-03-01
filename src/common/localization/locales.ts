import { enUS, ruRU } from '@mui/x-date-pickers';
import LocalizedStrings from 'react-localization';
import 'dayjs/locale/ru';
import 'dayjs/locale/en';

export const locales = new LocalizedStrings({
    en: {
        deliverButtonCaption: 'Deliver',
        sendButtonCaption: 'Send',
        mainButtonCaptionContinue: 'Continue',
        titleCaption: 'Send and deliver packages around the world',
        packageActualFrom: 'Actual from',
        packageActualTo: 'Actual to',
        originCity: 'Origin city',
        destinationCity: 'Destination city', 
        cityFrom: 'City from',
        cityTo: 'City to',
        sendPackageHelperText: 'Enter the date range wherein the package delivery is actual, the origin city and the destination city',
        departureDate: 'Departure date',
        deliverPackageHelperText: 'Enter your departure date, the origin city, and the destination city',
        chooseCityButtonCaption: 'Choose city',
        datePickerLocaleText: enUS,
        datePickerLanguage: 'en',
        geoNamesLanguageCode: 'en'
    },
    ru: {
        deliverButtonCaption: 'Доставить',
        sendButtonCaption: 'Отправить',
        mainButtonCaptionContinue: 'Продолжить',
        titleCaption: 'Отправляйте и доставляйте посылки по всему миру',
        packageActualFrom: 'Актуальна с',
        packageActualTo: 'Актуальна по',
        originCity: 'Город отправления',
        destinationCity: 'Город назначения',
        cityFrom: 'Откуда',
        cityTo: 'Куда',
        sendPackageHelperText: 'Введите диапазон дат в который посылка актуальна, город из которого отправляете посылку и город назначения',
        departureDate: 'Дата вылета',
        deliverPackageHelperText: 'Введите дату вашего вылета, город отправления и город назначения',
        chooseCityButtonCaption: 'Выбрать город',
        datePickerLocaleText: ruRU,
        datePickerLanguage: 'ru',
        geoNamesLanguageCode: 'ru'
    }
});