import { AppRoutes } from '../common/routes/AppRoutes';
import { Layout } from './Layout';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TelegramWebApp } from "@kloktunov/react-telegram-webapp";

function App() {
  return (
    <TelegramWebApp>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Layout>      
          <AppRoutes />
        </Layout>
      </LocalizationProvider>
    </TelegramWebApp>
  );
}

export default App;