import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CloverFlowSection } from './components/CloverFlowSection';
import { WhatItIsSection } from './components/WhatItIsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ProblemSection } from './components/ProblemSection';
import { TrustSection } from './components/TrustSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { EnablementLayerSection } from './components/EnablementLayerSection';
import { CTASection } from './components/CTASection';
import { DecorativeFooter } from './components/DecorativeFooter';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { HashScrollManager } from './components/reference/HashScrollManager';
import { TitlePage } from './pages/TitlePage';
import { OverviewPage } from './pages/OverviewPage';
import { TrustStatesPage } from './pages/TrustStatesPage';
import { VerificationModelPage } from './pages/VerificationModelPage';
import { AnchoringModelPage } from './pages/AnchoringModelPage';
import { IdentityAuthorityPage } from './pages/IdentityAuthorityPage';
import { CoreArchitecturePage } from './pages/CoreArchitecturePage';
import { InteroperabilityPage } from './pages/InteroperabilityPage';
import { PlatformTrustRegistryPage } from './pages/PlatformTrustRegistryPage';
import { PlatformAnchorServicePage } from './pages/PlatformAnchorServicePage';
import { PlatformVerifierPage } from './pages/PlatformVerifierPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PublishingMediaPage } from './pages/PublishingMediaPage';
import { CreativeIndustriesPage } from './pages/CreativeIndustriesPage';
import { ResearchDataPage } from './pages/ResearchDataPage';
import { AISystemsAgentsPage } from './pages/AISystemsAgentsPage';
import { ReferenceSpecificationPage } from './pages/reference/ReferenceSpecificationPage';
import { ReferenceGlossaryPage } from './pages/reference/ReferenceGlossaryPage';
import { ReferenceDigitalHologramPage } from './pages/reference/ReferenceDigitalHologramPage';
import { ReferenceTrustModelPage } from './pages/reference/ReferenceTrustModelPage';
import { ReferenceCryptoPrimitivesPage } from './pages/reference/ReferenceCryptoPrimitivesPage';
import { ReferenceVerificationRulesPage } from './pages/reference/ReferenceVerificationRulesPage';
import { ReferenceInteropGuidelinesPage } from './pages/reference/ReferenceInteropGuidelinesPage';
import { ReferenceAIFootprintPage } from './pages/reference/ReferenceAIFootprintPage';
import { CompanyAboutPage } from './pages/company/CompanyAboutPage';
import { CompanyGovernancePage } from './pages/company/CompanyGovernancePage';
import { CompanyRoadmapPage } from './pages/company/CompanyRoadmapPage';
import { CompanyResearchPage } from './pages/company/CompanyResearchPage';
import { CompanyPressPage } from './pages/company/CompanyPressPage';
import { CompanyCareersPage } from './pages/company/CompanyCareersPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { RequestAccessPage } from './pages/access/RequestAccessPage';
import { RequestStatusPage } from './pages/access/RequestStatusPage';
import { TermsPage } from './pages/legal/TermsPage';
import { PrivacyPage } from './pages/legal/PrivacyPage';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HashScrollManager />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              {/* <TrustSection /> */}
              <ProblemSection />
              <CloverFlowSection />
              <WhatItIsSection />
               {/* <CaseStudiesSection /> */}
              <CapabilitiesSection />
              <EnablementLayerSection />
              <CTASection />
              <DecorativeFooter />
              <Footer />
            </>
          }
        />

        <Route path="/platform" element={<OverviewPage />} />
        <Route path="/platform/architecture" element={<CoreArchitecturePage />} />
        <Route path="/platform/trust-states" element={<TrustStatesPage />} />
        <Route path="/platform/anchoring" element={<AnchoringModelPage />} />
        <Route path="/platform/verification" element={<VerificationModelPage />} />
        <Route path="/platform/identity" element={<IdentityAuthorityPage />} />
        <Route path="/platform/interoperability" element={<InteroperabilityPage />} />
        <Route path="/platform/trust-registry" element={<PlatformTrustRegistryPage />} />
        <Route path="/platform/anchor-service" element={<PlatformAnchorServicePage />} />
        <Route path="/platform/verifier" element={<PlatformVerifierPage />} />

        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/publishing-media" element={<PublishingMediaPage />} />
        <Route path="/solutions/creative" element={<CreativeIndustriesPage />} />
        <Route path="/solutions/research-data" element={<ResearchDataPage />} />
        <Route path="/solutions/public-institutions" element={<TitlePage title="Public Institutions" />} />
        <Route path="/solutions/ai-systems-agents" element={<AISystemsAgentsPage />} />

        <Route path="/reference/specification" element={<ReferenceSpecificationPage />} />
        <Route path="/reference/ai-footprint" element={<ReferenceAIFootprintPage />} />
        <Route path="/reference/digital-hologram" element={<ReferenceDigitalHologramPage />} />
        <Route path="/reference/trust-model" element={<ReferenceTrustModelPage />} />
        <Route path="/reference/cryptographic-primitives" element={<ReferenceCryptoPrimitivesPage />} />
        <Route path="/reference/verification-rules" element={<ReferenceVerificationRulesPage />} />
        <Route path="/reference/interop" element={<ReferenceInteropGuidelinesPage />} />
        <Route path="/reference/glossary" element={<ReferenceGlossaryPage />} />

        <Route path="/company/about" element={<CompanyAboutPage />} />
        <Route path="/company/governance" element={<CompanyGovernancePage />} />
        <Route path="/company/roadmap" element={<CompanyRoadmapPage />} />
        <Route path="/company/research" element={<CompanyResearchPage />} />
        <Route path="/company/press" element={<CompanyPressPage />} />
        <Route path="/company/careers" element={<CompanyCareersPage />} />

        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/access/request" element={<RequestAccessPage />} />
        <Route path="/request-status" element={<RequestStatusPage />} />
        <Route path="/legal/terms" element={<TermsPage />} />
        <Route path="/legal/privacy" element={<PrivacyPage />} />
      </Routes>
    </div>
  );
}
