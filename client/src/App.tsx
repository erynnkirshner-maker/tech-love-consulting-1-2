import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import AIFitCheck from "./pages/AIFitCheck";
import AIClaritySprint from "./pages/AIClaritySprint";
import AIDesignActivation from "./pages/AIDesignActivation";
import EmbeddedAIAdvisor from "./pages/EmbeddedAIAdvisor";
import ScaleFramework from "./pages/ScaleFramework";
import DiscoveryCall from "./pages/DiscoveryCall";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ThankYou from "./pages/ThankYou";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/ai-fit-check" component={AIFitCheck} />
      <Route path="/services/ai-clarity-sprint" component={AIClaritySprint} />
      <Route path="/services/ai-design-activation-sprint" component={AIDesignActivation} />
      <Route path="/services/embedded-ai-advisor" component={EmbeddedAIAdvisor} />
      <Route path="/scale-framework" component={ScaleFramework} />
      <Route path="/discovery-call" component={DiscoveryCall} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Layout>
            <Router />
          </Layout>
          <CookieBanner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
