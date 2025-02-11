import { RouterProvider } from 'react-router-dom';
import GlobalStyles from '@/theme/GlobalStyles';
import router from '@/routes/Routers';

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;