import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Divisions from './pages/Divisions';
import SectorDetail from './pages/SectorDetail';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import EmployeePortal from './pages/EmployeePortal';
import AIAssistant from './components/AIAssistant';

// Placeholder for minor pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
    <h1 className="text-5xl font-display font-bold text-brand-navy mb-8">{title}</h1>
    <p className="text-gray-600 text-lg">This section is being populated with premium corporate data. Please check back shortly or explore our Home page.</p>
  </div>
);

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/divisions', element: <Divisions /> },
      { path: '/divisions/:sectorId', element: <SectorDetail /> },
      { path: '/projects', element: <Projects /> },
      { path: '/contact', element: <Contact /> },
      { path: '/careers', element: <Careers /> },
      { path: '/portal', element: <EmployeePortal /> },
      { path: '/blog', element: <Placeholder title="News & Insights" /> },
      { path: '/investors', element: <Placeholder title="Investor Relations" /> },
      { path: '/privacy', element: <Placeholder title="Privacy Policy" /> },
      { path: '/terms', element: <Placeholder title="Terms & Conditions" /> },
      { path: '/sitemap', element: <Placeholder title="Sitemap" /> },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
