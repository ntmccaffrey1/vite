import { RouterProvider } from 'react-router-dom';
import appRouter from './routes';
import { Suspense } from 'react';

function App () {
    return (
      <RouterProvider router={appRouter} />
    );
}

export default App;
