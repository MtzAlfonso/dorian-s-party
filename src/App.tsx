import { BrowserRouter, Route, Routes } from 'react-router';
import { AdminPage, FamilyMembersPage, LandingPage } from './pages';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/invite" element={<FamilyMembersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
