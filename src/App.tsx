import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardPage, PageNotFound } from './pages';
export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div className="mx-auto min-h-screen max-w-7xl flex-col">
          <main id="main" className="px-6 py-6 sm:px-12 sm:py-12">
            <DashboardPage />
          </main>
        </div>
      ),
      errorElement: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
