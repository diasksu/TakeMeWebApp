import { FC, ReactElement } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Theme } from '@mui/material';
import { useTelegramWebApp, useWebAppTheme } from '@kloktunov/react-telegram-webapp';
import { TelegramWebApps } from '@kloktunov/react-telegram-webapp/lib/telegram-webapps';

type LayoutProps = {
    children: ReactElement;
};

const lightThemeParams = {
    accent_text_color: "#168acd",
    bg_color: "#ffffff",
    button_color: "#40a7e3",
    button_text_color: "#ffffff",
    destructive_text_color: "#d14e4e",
    header_bg_color: "#ffffff",
    hint_color: "#999999",
    link_color: "#168acd",
    secondary_bg_color: "#f1f1f1",
    section_bg_color: "#ffffff",
    section_header_text_color: "#168acd",
    subtitle_text_color: "#999999",
    text_color: "#000000",
}

const darkThemeParams = {
    accent_text_color: "#6ab2f2",
    bg_color: "#17212b",
    button_color: "#5288c1",
    button_text_color: "#ffffff",
    destructive_text_color: "#ec3942",
    header_bg_color: "#17212b",
    hint_color: "#708499",
    link_color: "#6ab3f3",
    secondary_bg_color: "#232e3c",
    section_bg_color: "#17212b",
    section_header_text_color: "#6ab3f3",
    subtitle_text_color: "#708499",
    text_color: "#f5f5f5"
}

function createTakeMeTheme(
    colorScheme: TelegramWebApps.ColorScheme,
    themeParams: TelegramWebApps.ThemeParams) : Theme {
    const takeMeTheme = createTheme({
        palette: {
            mode:  'dark', //colorScheme ?? 'dark',
            primary: {
                main: themeParams.button_color ?? '#5288c1', // var(--tg-theme-button-color, #3e88f7);
            },
            text: {
                primary: themeParams.text_color ?? '#f5f5f5',
                secondary: themeParams.hint_color ?? '#708499',
                disabled: themeParams.hint_color ?? '#f5f5f5'
            },
            background: {
                paper: themeParams.secondary_bg_color ?? '#232e3c',
                default: themeParams.bg_color ?? '#17212b', // --tg-theme-bg-color
            }
        },
        typography: {
            fontSize: 15,
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, Inter, Avenir, Helvetica, Arial, sans-serif',
            button: {
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '17px'
            },
            h1: {
                fontSize: '22px',
                fontWeight: 500
            },
            body1: {
                lineHeight: '22px'
            }
        },
        shape: {
            borderRadius: 13
        }
    });
    return takeMeTheme;
}
  
// https://www.npmjs.com/package/@kloktunov/react-telegram-webapp?activeTab=readme
export const Layout: FC<LayoutProps> = ({ children }) => {
    const webApp = useTelegramWebApp();
	webApp?.MainButton?.show();
    const { colorScheme, themeParams } = useWebAppTheme();
    const theme = createTakeMeTheme(colorScheme, themeParams);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}