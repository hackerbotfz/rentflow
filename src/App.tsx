import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Pages
import Home from "@/pages/home";
import Overview from "@/pages/overview";
import Gallery from "@/pages/gallery";
import Features from "@/pages/features";
import Realtor from "@/pages/realtor";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import ForgotPassword from "@/pages/forgot-password";
import Help from "@/pages/help";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Finance from "@/pages/finance";
import Sell from "@/pages/sell";
import Rent from "@/pages/rent";
import Testimonials from "@/pages/testimonials";
import Careers from "@/pages/careers";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
        
        <Route>
          <Navbar />
          <main className="flex-grow pt-16">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/overview" component={Overview} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/features" component={Features} />
              <Route path="/realtor" component={Realtor} />
              <Route path="/help" component={Help} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/terms" component={Terms} />
              <Route path="/finance" component={Finance} />
              <Route path="/sell" component={Sell} />
              <Route path="/rent" component={Rent} />
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/careers" component={Careers} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
