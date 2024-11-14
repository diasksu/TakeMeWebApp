import { enUS, ruRU } from '@mui/x-date-pickers';
import LocalizedStrings from 'react-localization';
import 'dayjs/locale/ru';
import 'dayjs/locale/en';

export const locales = new LocalizedStrings({
    en: {
        datePickerLocaleText: enUS,
        datePickerLanguage: 'en',
        geoNamesLanguageCode: 'en',
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
        inputCityWelcomeText: 'Enter city name and choose from the suggested options',
        nothingFound: 'Nothing found',
        commentLabel: 'Comment',
        commentSendPlaceholder: 'Enter your comment, courier will see it',
        commentDeliverPlaceholder: 'Enter your comment, sender will see it',
    },
    ru: {
        datePickerLocaleText: ruRU,
        datePickerLanguage: 'ru',
        geoNamesLanguageCode: 'ru',
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
        inputCityWelcomeText: 'Введите наименование города и выберите из списка подходящий вариант',
        nothingFound: 'Ничего не найдено',
        commentLabel: 'Комментарий',
        commentSendPlaceholder: 'Введите ваш комментарий. Его увидит курьер',
        commentDeliverPlaceholder: 'Введите ваш комментарий. Отправитель увидит его',
    }
});