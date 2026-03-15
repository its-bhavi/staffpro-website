import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import FadeIn from '@/components/ui/FadeIn';
import { seoData } from '@/data/seoData';
import { companyInfo } from '@/data/companyInfo';

export default function TermsOfUse() {
  return (
    <>
      <SEOHead
        title={seoData.termsOfUse.title}
        description={seoData.termsOfUse.description}
        keywords={seoData.termsOfUse.keywords}
      />

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0B1D3A 0%, #0F2B5B 30%, #143A7A 60%, #1A4A9A 100%)',
          }}
        />
        <div className="relative container-max px-6 text-center">
          <FadeIn>
            <nav className="flex items-center justify-center gap-2 font-body text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white/90">Terms of Use</span>
            </nav>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="font-display font-extrabold text-white mb-4"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Terms of Use
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-lg text-white/70">
              Last updated: January 1, 2026
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-10">
                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">1. Acceptance of Terms</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    By accessing and using the NextHorizon Staffing website (nexthorizonstaffing.com) and our services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please refrain from using our website and services. These terms apply to all visitors, users, and others who access or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">2. Description of Services</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    NextHorizon Staffing provides staffing and recruitment services, including but not limited to temporary staffing, permanent recruitment, contract staffing, executive search, payroll services, and recruitment process outsourcing (RPO). Our website serves as an informational resource and a point of contact for prospective clients and job seekers.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">3. User Responsibilities</h2>
                  <p className="font-body text-text-secondary leading-relaxed mb-4">
                    When using our website and services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 font-body text-text-secondary">
                    <li>Provide accurate and truthful information in all forms and communications</li>
                    <li>Not use the website for any unlawful purpose or in violation of any applicable laws</li>
                    <li>Not attempt to gain unauthorized access to any part of the website or its systems</li>
                    <li>Not transmit any viruses, malware, or other harmful code</li>
                    <li>Not scrape, crawl, or collect data from our website without prior written permission</li>
                    <li>Not impersonate any person or entity or misrepresent your affiliation</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">4. Intellectual Property</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of NextHorizon Staffing LLC or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written consent.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">5. Job Listings and Recruitment</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    While we strive to ensure accuracy, we do not guarantee that all job listings or opportunities presented through our services are current, accurate, or available. NextHorizon Staffing acts as an intermediary between employers and candidates. We do not guarantee employment or placement, and the final hiring decision rests with the employer.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">6. Limitation of Liability</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    To the fullest extent permitted by law, NextHorizon Staffing LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of our website or services.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">7. Disclaimer of Warranties</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    Our website and services are provided on an "as is" and "as available" basis. NextHorizon Staffing makes no representations or warranties of any kind, express or implied, regarding the operation of the website, the accuracy of information, or the suitability of services for any particular purpose.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">8. Privacy</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    Your use of our website is also governed by our{' '}
                    <Link to="/privacy-policy" className="text-primary-bright hover:underline">
                      Privacy Policy
                    </Link>
                    , which describes how we collect, use, and protect your personal information. By using our website, you consent to the practices described in our Privacy Policy.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">9. Third-Party Links</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    Our website may contain links to third-party websites or services that are not owned or controlled by NextHorizon Staffing. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You access third-party sites at your own risk.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">10. Governing Law</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    These Terms of Use shall be governed by and construed in accordance with the laws of the State of New Mexico, United States. Any disputes arising from these terms or your use of the website shall be subject to the exclusive jurisdiction of the courts in Bernalillo County, New Mexico, United States.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">11. Changes to Terms</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    We reserve the right to modify or replace these Terms of Use at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website following the posting of revised terms means that you accept and agree to the changes.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">12. Contact Information</h2>
                  <p className="font-body text-text-secondary leading-relaxed mb-4">
                    If you have any questions about these Terms of Use, please contact us:
                  </p>
                  <div className="bg-surface-alt rounded-xl p-6 font-body text-text-secondary">
                    <p className="font-semibold text-text-primary mb-2">{companyInfo.name}</p>
                    <p>{companyInfo.addressLines.map((line, i) => (
                      <span key={i}>{line}{i < companyInfo.addressLines.length - 1 && <br />}</span>
                    ))}</p>
                    <p>Email: <a href={`mailto:${companyInfo.email}`} className="text-primary-bright hover:underline">{companyInfo.email}</a></p>
                    <p>Phone: <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="text-primary-bright hover:underline">{companyInfo.phone}</a></p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
