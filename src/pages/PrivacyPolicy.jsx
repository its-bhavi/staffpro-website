import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import FadeIn from '@/components/ui/FadeIn';
import { seoData } from '@/data/seoData';
import { companyInfo } from '@/data/companyInfo';

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title={seoData.privacyPolicy.title}
        description={seoData.privacyPolicy.description}
        keywords={seoData.privacyPolicy.keywords}
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
              <span className="text-white/90">Privacy Policy</span>
            </nav>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="font-display font-extrabold text-white mb-4"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Privacy Policy
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
            <div className="max-w-3xl mx-auto prose-styles">
              <div className="space-y-10">
                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">1. Introduction</h2>
                  <p className="font-body text-text-secondary leading-relaxed mb-4">
                    NextHorizon Staffing LLC ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website nexthorizonstaffing.com, use our services, or interact with us in any way.
                  </p>
                  <p className="font-body text-text-secondary leading-relaxed">
                    By accessing or using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our practices, please do not use our website or services.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">2. Information We Collect</h2>
                  <p className="font-body text-text-secondary leading-relaxed mb-4">
                    We may collect the following types of personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 font-body text-text-secondary">
                    <li>Personal identification information (name, email address, phone number, company name)</li>
                    <li>Resume and career-related information (work history, education, skills, certifications)</li>
                    <li>Communication preferences and correspondence records</li>
                    <li>Technical data (IP address, browser type, device information, pages visited)</li>
                    <li>Cookies and tracking technology data</li>
                    <li>Any other information you voluntarily provide through our contact forms or interactions</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">3. How We Use Your Information</h2>
                  <p className="font-body text-text-secondary leading-relaxed mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 font-body text-text-secondary">
                    <li>To provide, maintain, and improve our staffing and recruitment services</li>
                    <li>To match candidates with suitable employment opportunities</li>
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To send relevant job opportunities, newsletters, and service updates</li>
                    <li>To comply with legal obligations and regulatory requirements</li>
                    <li>To analyze website usage and improve user experience</li>
                    <li>To prevent fraud and ensure the security of our services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">4. Information Sharing</h2>
                  <p className="font-body text-text-secondary leading-relaxed mb-4">
                    We may share your personal information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 font-body text-text-secondary">
                    <li>With client companies for the purpose of job placement (with your consent)</li>
                    <li>With service providers who assist us in operating our website and conducting our business</li>
                    <li>When required by law, regulation, or legal process</li>
                    <li>To protect the rights, safety, or property of NextHorizon Staffing, our clients, or others</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                  <p className="font-body text-text-secondary leading-relaxed mt-4">
                    We do not sell your personal information to third parties for marketing purposes.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">5. Data Security</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">6. Cookies</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain parts of our website.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">7. Your Rights</h2>
                  <p className="font-body text-text-secondary leading-relaxed mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 font-body text-text-secondary">
                    <li>Right to access your personal data we hold</li>
                    <li>Right to correct inaccurate or incomplete data</li>
                    <li>Right to request deletion of your data</li>
                    <li>Right to withdraw consent at any time</li>
                    <li>Right to object to processing of your data</li>
                    <li>Right to data portability</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">8. Data Retention</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Candidate profiles are retained for up to 3 years after last contact, unless you request earlier deletion.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">9. Third-Party Links</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party website you visit.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">10. Changes to This Policy</h2>
                  <p className="font-body text-text-secondary leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically for any changes.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-text-primary text-2xl mb-4">11. Contact Us</h2>
                  <p className="font-body text-text-secondary leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-surface-alt rounded-xl p-6 font-body text-text-secondary">
                    <p className="font-semibold text-text-primary mb-2">{companyInfo.name}</p>
                    <p>{companyInfo.address}</p>
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
