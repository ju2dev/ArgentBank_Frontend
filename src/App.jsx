import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import './index.css';

function App() {
  const setupPageTitle = (title) => {
    document.title = title;
  };

  return (
      <BrowserRouter>
        <AppRoutes setupPageTitle={setupPageTitle} />
      </BrowserRouter>
  );
}

export default App;