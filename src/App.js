import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from "./pages/landingPage";
import SubscriptionPage from './pages/subscriptionPage';
import ScrollToTop from './components/scrolToTop';

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>

        <Route exact path="/" element={<LandingPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
      </Routes>

    </>

  );
}

export default App;