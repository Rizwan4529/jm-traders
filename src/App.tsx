import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import SkipLink from "./components/layout/SkipLink";
import AboutPage from "./components/pages/AboutPage";
import CataloguePage from "./components/pages/CataloguePage";
import ContactPage from "./components/pages/ContactPage";
import FlavourPage from "./components/pages/FlavourPage";
import HomePage from "./components/pages/HomePage";
import JellyCupsPage from "./components/pages/JellyCupsPage";
import JellyDrinksPage from "./components/pages/JellyDrinksPage";
import LegalPage from "./components/pages/LegalPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import PackagingPage from "./components/pages/PackagingPage";
import ProductsPage from "./components/pages/ProductsPage";
import WholesalePage from "./components/pages/WholesalePage";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import { ROUTES } from "./constants/nav";
import { MAIN_CONTENT_ID } from "./constants/site";
import { LanguageProvider } from "./i18n/LanguageProvider";

const App = () => {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <SkipLink />
      <Navbar />
      {/* Pulled up under the transparent navbar; every page opens on navy. */}
      <main id={MAIN_CONTENT_ID} className="-mt-19 flex-1 sm:-mt-22">
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.products} element={<ProductsPage />} />
          <Route path={ROUTES.jellyCups} element={<JellyCupsPage />} />
          <Route path={`${ROUTES.jellyCups}/:slug`} element={<FlavourPage />} />
          <Route path={ROUTES.jellyDrinks} element={<JellyDrinksPage />} />
          <Route path={ROUTES.packaging} element={<PackagingPage />} />
          <Route path={ROUTES.wholesale} element={<WholesalePage />} />
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route path={ROUTES.catalogue} element={<CataloguePage />} />
          <Route path={ROUTES.contact} element={<ContactPage />} />
          {/* Legal notice disabled for now:
          <Route path={ROUTES.imprint} element={<LegalPage variant="imprint" />} /> */}
          <Route path={ROUTES.privacy} element={<LegalPage variant="privacy" />} />
          <Route path={ROUTES.terms} element={<LegalPage variant="terms" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </LanguageProvider>
  );
};

export default App;
