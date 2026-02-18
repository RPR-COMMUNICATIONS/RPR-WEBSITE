import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RprMasterLogo } from '../brand/rprmasterlogo';

/**
 * TS-Λ3 // SOVEREIGN LEGAL SUBSTRATE [v5.0.0]
 * Dynamic routing component for all /legal/* paths
 * Maintains Branding Lock with RprMasterLogo
 */

interface LegalContent {
  title: string;
  content: string;
  lastUpdated: string;
}

const legalDocuments: Record<string, LegalContent> = {
  privacy: {
    title: 'Privacy Policy',
    content: `# Privacy Policy

**Effective Date:** January 26, 2026
**Last Updated:** January 26, 2026
**Authority:** RPR Communications LLC

---

## 1. Introduction

RPR Communications LLC ("we," "us," "our," or "Company") is committed to protecting your privacy and ensuring you have a positive experience on our website and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.

---

## 2. Information We Collect

### 2.1 Information You Provide Directly
- **Contact Information:** Name, email address, phone number
- **Account Information:** Login credentials, profile details
- **Service Information:** Documents, transaction history, verification data

### 2.2 Information Collected Automatically
- **Log Data:** IP address, browser type, pages visited, timestamp
- **Device Information:** Device type, operating system, unique identifiers
- **Usage Data:** How you interact with our services

### 2.3 Information from Third Parties
- **Service Providers:** Payment processors, hosting providers
- **Partners:** Forensic verification services, compliance partners

---

## 3. How We Use Your Information

We use collected information to:
- Provide, maintain, and improve our services
- Process transactions and send related information
- Send promotional communications (with your consent)
- Respond to your inquiries and support requests
- Comply with legal and regulatory obligations
- Monitor and analyze service usage patterns

---

## 4. Data Security

We implement technical, administrative, and physical safeguards to protect your information:
- **Encryption:** SSL/TLS for data in transit; AES-256 for data at rest
- **Access Control:** Role-based access control (RBAC) via WIF v2
- **Authentication:** Workload Identity Federation v2 (WIF), no static keys
- **Regional Locks:** Data residency enforcement (asia-southeast1 primary)

---

## 5. Data Retention

We retain your information for as long as necessary to provide services and comply with legal obligations. Retention periods vary by data type:
- **Account Data:** Until account deletion
- **Transaction Data:** 7 years (Australian tax/legal compliance)
- **Log Data:** 90 days
- **Marketing Data:** Until opt-out or account closure

---

## 6. Third-Party Sharing

We do not sell your personal information. We may share information with:
- **Service Providers:** Hosting, payment processing, analytics (data processing agreements in place)
- **Legal Compliance:** Law enforcement, regulators (when required by law)
- **Multi-Tenant Services:** Tenant-scoped data isolation enforced via Firestore rules

---

## 7. Your Privacy Rights

You have the right to:
- **Access:** Request a copy of your personal information
- **Correction:** Update or correct inaccurate data
- **Deletion:** Request erasure of your data (where permitted by law)
- **Portability:** Receive your data in a portable format
- **Opt-Out:** Unsubscribe from marketing communications

To exercise these rights, contact **privacy@rprcomms.com**.

---

## 8. Regional Compliance

### Australia (Primary Jurisdiction)
- **Privacy Act 1988 (Cth):** Compliance with Australian Privacy Principles (APPs)
- **AUSTRAC:** Know Your Customer (KYC) and AML/CFT compliance
- **Data Residency:** Core systems remain in asia-southeast1 (Singapore)

### EU/GDPR (If Applicable)
- **Lawful Basis:** Legitimate interests, contract performance, consent
- **Data Processing Agreements:** In place with all processors
- **Data Subject Rights:** Full GDPR rights supported

---

## 9. Cookies and Tracking

We use:
- **Essential Cookies:** Session management, security
- **Analytics:** Non-invasive analytics to improve services
- **Third-Party Tools:** Google Analytics (anonymized IP)

You can control cookies via browser settings.

---

## 10. Children's Privacy

Our services are not directed to individuals under 18. We do not knowingly collect information from children. If you become aware that a child has provided us with information, please contact **privacy@rprcomms.com**.

---

## 11. Changes to This Policy

We may update this Privacy Policy. Material changes will be communicated via email or prominent notice on the website. Your continued use of our services signifies acceptance of changes.

---

## 12. Contact Us

**Privacy Officer**
RPR Communications LLC
Email: **privacy@rprcomms.com**
Web: **https://rprcomms.com**

For data protection inquiries:
- **Australia:** [Regulatory Body]
- **EU:** Your national data protection authority

---

**Classification:** Public  
**Authority:** RPR Communications LLC  
**Effective:** January 26, 2026`,
    lastUpdated: 'January 26, 2026'
  },
  terms: {
    title: 'Terms of Service',
    content: `# Terms of Service

**Effective Date:** January 26, 2026
**Last Updated:** January 26, 2026
**Authority:** RPR Communications LLC

---

## 1. Agreement to Terms

By accessing and using the RPR Communications LLC website and services ("Service"), you agree to be bound by these Terms of Service ("Agreement"). If you do not agree to abide by the above, please do not use this Service.

---

## 2. Use License

Permission is granted to temporarily download one copy of the materials (information or software) on RPR Communications LLC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title. Under this license you may not:
- Modify or copy the materials
- Use the materials for any commercial purpose or for any public display
- Attempt to reverse engineer any software contained on the website
- Remove any copyright or other proprietary notations from the materials
- Transfer the materials to another person or "mirror" the materials on any other server
- Violate any laws, regulations, or third-party rights

---

## 3. Disclaimer

The materials on RPR Communications LLC's website are provided on an "as is" basis. RPR Communications LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

---

## 4. Limitations

In no event shall RPR Communications LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on RPR Communications LLC's website, even if RPR Communications LLC or an authorized representative has been notified orally or in writing of the possibility of such damage.

---

## 5. Accuracy of Materials

The materials appearing on RPR Communications LLC's website could include technical, typographical, or photographic errors. RPR Communications LLC does not warrant that any of the materials on the website are accurate, complete, or current. RPR Communications LLC may make changes to the materials contained on the website at any time without notice.

---

## 6. Links

RPR Communications LLC has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by RPR Communications LLC of the site. Use of any such linked website is at the user's own risk.

---

## 7. Modifications

RPR Communications LLC may revise these Terms of Service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.

---

## 8. Governing Law

These terms and conditions are governed by and construed in accordance with the laws of Australia, and you irrevocably submit to the exclusive jurisdiction of the courts located in Australia.

---

## 9. Limitation of Liability

In no case shall RPR Communications LLC, its officers, directors, employees, agents, or representatives be liable to you for any indirect, incidental, special, punitive, or consequential damages arising from your use of the website or services, even if advised of the possibility of such damages.

---

## 10. Indemnification

You agree to defend, indemnify, and hold harmless RPR Communications LLC, its officers, directors, employees, and agents, from and against any and all claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from or relating to your use of the website or violation of these Terms of Service.

---

## 11. Intellectual Property Rights

All content on the website, including but not limited to text, graphics, logos, images, and software, is the property of RPR Communications LLC or its content suppliers and is protected by international copyright laws. All trademarks and service marks are the property of their respective owners.

---

## 12. User Accounts

If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account or password.

---

## 13. Prohibited Conduct

You agree not to:
- Access or use the Service in any unlawful manner or in violation of any applicable law
- Attempt to gain unauthorized access to the Service or its systems
- Transmit any viruses, malware, or harmful code
- Harass, abuse, or threaten any user or representative of RPR Communications LLC
- Engage in any activity that interferes with the proper functioning of the Service

---

## 14. Termination

RPR Communications LLC reserves the right to terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including if you breach the Terms of Service.

---

## 15. Contact Information

If you have any questions about these Terms of Service, please contact us at:
**support@rprcomms.com**

---

**Classification:** Public  
**Authority:** RPR Communications LLC  
**Effective:** January 26, 2026`,
    lastUpdated: 'January 26, 2026'
  },
  cookies: {
    title: 'Cookie Policy',
    content: `# Cookie Policy

**Effective Date:** January 26, 2026
**Last Updated:** January 26, 2026
**Authority:** RPR Communications LLC

---

## 1. What Are Cookies?

Cookies are small text files stored on your device when you visit our website. They help us recognize you, remember your preferences, and understand how you use our services.

---

## 2. Types of Cookies We Use

### 2.1 Essential Cookies
- **Purpose:** Enable core functionality (login, security, payment processing)
- **Necessity:** Required for service operation
- **Duration:** Session or persistent
- **Examples:** Session tokens, CSRF protection, authentication

### 2.2 Performance Cookies
- **Purpose:** Analyze how users interact with our website
- **Necessity:** Non-essential but helpful for optimization
- **Duration:** Persistent (typically 13 months)
- **Examples:** Google Analytics (_ga, _gid)

### 2.3 Functional Cookies
- **Purpose:** Remember user preferences and settings
- **Necessity:** Non-essential but improve experience
- **Duration:** Persistent (1–2 years)
- **Examples:** Theme selection, language preference

### 2.4 Marketing Cookies
- **Purpose:** Track marketing campaign effectiveness
- **Necessity:** Non-essential; require consent
- **Duration:** Persistent
- **Examples:** Conversion tracking, audience building

---

## 3. How to Control Cookies

### 3.1 Browser Settings
Most browsers allow you to refuse cookies or alert you when cookies are being sent. See your browser's help documentation for instructions.

### 3.2 Opt-Out Mechanisms
- **Google Analytics:** Use Google Analytics Opt-Out Browser Add-on
- **Marketing:** Email **privacy@rprcomms.com** to opt out of marketing cookies
- **Third-Party Cookies:** Visit [third-party provider] opt-out pages

---

## 4. Third-Party Cookies

We use third-party services that may set cookies:
- **Google Analytics:** Usage analytics (privacy.google.com)
- **Firebase:** Infrastructure and analytics (firebase.google.com)
- **Payment Processors:** Secure payment processing

These services are governed by their own privacy policies.

---

## 5. Data Residency and Security

- **Storage Location:** asia-southeast1 (Singapore)
- **Encryption:** HTTPS/TLS for all cookie transmission
- **Duration:** Typically 1–13 months for persistent cookies
- **Deletion:** Clear cookies via browser settings or request deletion from **privacy@rprcomms.com**

---

## 6. Changes to This Policy

We may update this Cookie Policy. Changes will be posted on this page with an updated effective date. Your continued use of the website constitutes acceptance of changes.

---

## 7. Contact Us

For questions about our use of cookies:
**Email:** privacy@rprcomms.com

---

**Classification:** Public  
**Authority:** RPR Communications LLC  
**Effective:** January 26, 2026`,
    lastUpdated: 'January 26, 2026'
  },
  security: {
    title: 'Security & Compliance',
    content: `# Security & Compliance

**Effective Date:** January 26, 2026
**Last Updated:** January 26, 2026
**Authority:** RPR Communications LLC

---

## 1. Security Commitment

RPR Communications LLC is committed to maintaining the highest standards of security and compliance. We implement industry-leading security measures to protect your data and ensure regulatory compliance.

---

## 2. Technical Security Measures

### 2.1 Encryption
- **In Transit:** All data transmitted over our services is encrypted using TLS 1.3
- **At Rest:** Data stored in our systems is encrypted using AES-256 encryption
- **Key Management:** Encryption keys are managed through Google Cloud KMS with automatic rotation

### 2.2 Authentication & Access Control
- **Workload Identity Federation (WIF) v2:** No static service account keys
- **Multi-Factor Authentication (MFA):** Required for all administrative access
- **Role-Based Access Control (RBAC):** Granular permissions based on user roles
- **Zero Trust Architecture:** Continuous verification of user and device identity

### 2.3 Infrastructure Security
- **Regional Locks:** Data residency enforced in asia-southeast1 (Singapore)
- **Network Segmentation:** Isolated network segments for different service tiers
- **DDoS Protection:** Cloudflare and Google Cloud Armor protection
- **Intrusion Detection:** Real-time monitoring and alerting systems

---

## 3. Compliance Frameworks

### 3.1 Australian Compliance
- **Privacy Act 1988 (Cth):** Full compliance with Australian Privacy Principles (APPs)
- **AUSTRAC:** Know Your Customer (KYC) and Anti-Money Laundering (AML) compliance
- **ASIC Regulations:** Financial services compliance where applicable

### 3.2 International Standards
- **ISO 27001:** Information security management system (in progress)
- **SOC 2 Type II:** Security, availability, and confidentiality controls (planned)
- **GDPR:** European data protection compliance (where applicable)

---

## 4. Data Protection

### 4.1 Data Residency
- **Primary Region:** asia-southeast1 (Singapore)
- **Backup Regions:** Multi-region replication for disaster recovery
- **Data Sovereignty:** Compliance with local data protection laws

### 4.2 Data Retention
- **Account Data:** Retained until account deletion
- **Transaction Records:** 7 years (Australian tax/legal compliance)
- **Log Data:** 90 days retention
- **Backup Data:** Encrypted backups retained for 30 days

---

## 5. Incident Response

### 5.1 Security Incident Procedures
- **Detection:** Automated monitoring and alerting systems
- **Response Time:** Immediate response to critical security incidents
- **Notification:** Affected users notified within 72 hours (where required by law)
- **Remediation:** Immediate containment and remediation procedures

### 5.2 Breach Notification
In the event of a data breach, we will:
- Notify affected users within 72 hours
- Report to relevant regulatory authorities (where required)
- Provide detailed information about the breach and remediation steps

---

## 6. Third-Party Security

### 6.1 Vendor Management
- **Security Assessments:** All third-party vendors undergo security assessments
- **Data Processing Agreements:** Contracts include data protection clauses
- **Regular Audits:** Annual security audits of critical vendors

### 6.2 Service Provider Security
- **Google Cloud Platform:** Enterprise-grade security and compliance
- **Firebase:** Secure backend infrastructure with built-in security features
- **Payment Processors:** PCI DSS compliant payment processing

---

## 7. Security Best Practices

### 7.1 For Users
- Use strong, unique passwords
- Enable multi-factor authentication when available
- Keep your devices and software updated
- Report suspicious activity immediately

### 7.2 For Our Team
- Regular security training and awareness programs
- Mandatory security certifications for technical staff
- Regular penetration testing and vulnerability assessments
- Continuous security monitoring and threat intelligence

---

## 8. Compliance Certifications

- **ISO 27001:** Information Security Management (in progress)
- **SOC 2 Type II:** Security, Availability, Confidentiality (planned)
- **PCI DSS:** Payment Card Industry compliance (via payment processors)

---

## 9. Contact Security Team

For security-related inquiries or to report a security issue:
**Email:** security@rprcomms.com
**Response Time:** Within 24 hours for critical issues

---

**Classification:** Public  
**Authority:** RPR Communications LLC  
**Effective:** January 26, 2026`,
    lastUpdated: 'January 26, 2026'
  },
  governance: {
    title: 'Responsible AI & Governance',
    content: `# Responsible AI & Governance

**Effective Date:** January 26, 2026
**Last Updated:** January 26, 2026
**Authority:** RPR Communications LLC

---

## 1. AI Ethics Commitment

RPR Communications LLC is committed to developing and deploying artificial intelligence (AI) systems responsibly, ethically, and in compliance with applicable laws and regulations. This policy outlines our approach to AI governance and responsible AI practices.

---

## 2. Core Principles

### 2.1 Fairness & Non-Discrimination
- **Bias Mitigation:** We actively work to identify and mitigate bias in our AI systems
- **Equal Treatment:** AI systems are designed to treat all users fairly and without discrimination
- **Regular Audits:** Periodic audits of AI systems for fairness and bias

### 2.2 Transparency & Explainability
- **Clear Communication:** We clearly communicate when AI is being used in our services
- **Explainable AI:** Where possible, we provide explanations for AI-driven decisions
- **User Awareness:** Users are informed about AI features and their implications

### 2.3 Privacy & Data Protection
- **Data Minimization:** We collect and use only the minimum data necessary for AI functionality
- **Consent:** Explicit consent obtained for AI processing of personal data
- **Data Security:** Robust security measures to protect data used in AI systems

### 2.4 Accountability
- **Human Oversight:** Human oversight and intervention capabilities in AI systems
- **Responsibility:** Clear lines of responsibility for AI system outcomes
- **Redress Mechanisms:** Processes for users to challenge AI-driven decisions

---

## 3. AI System Development

### 3.1 Design Phase
- **Ethics Review:** All AI systems undergo ethics review before development
- **Risk Assessment:** Comprehensive risk assessments for potential harms
- **Stakeholder Input:** Input from diverse stakeholders in AI system design

### 3.2 Training & Testing
- **Diverse Training Data:** Training data represents diverse populations and use cases
- **Bias Testing:** Regular testing for bias and discrimination
- **Performance Validation:** Rigorous testing before deployment

### 3.3 Deployment
- **Gradual Rollout:** Phased deployment with monitoring and feedback loops
- **User Education:** Clear documentation and user education about AI features
- **Monitoring:** Continuous monitoring of AI system performance and impacts

---

## 4. AI Use Cases

### 4.1 Current AI Applications
- **Content Analysis:** Automated content analysis and verification
- **User Experience:** Personalization and recommendation systems
- **Security:** Fraud detection and security monitoring

### 4.2 Prohibited Uses
- **Discrimination:** AI systems that discriminate against protected groups
- **Manipulation:** AI systems designed to manipulate or deceive users
- **Surveillance:** Unauthorized surveillance or monitoring of users

---

## 5. Governance Framework

### 5.1 AI Governance Board
- **Oversight:** Cross-functional board responsible for AI governance
- **Review Process:** Regular review of AI systems and policies
- **Decision Authority:** Authority to approve, modify, or discontinue AI systems

### 5.2 Compliance & Auditing
- **Regular Audits:** Annual audits of AI systems for compliance and ethics
- **External Review:** Periodic external review by independent experts
- **Regulatory Compliance:** Compliance with applicable AI regulations

---

## 6. User Rights

### 6.1 Right to Information
- Users have the right to know when AI is being used
- Users can request information about how AI systems make decisions

### 6.2 Right to Human Review
- Users can request human review of AI-driven decisions
- Processes for challenging AI system outcomes

### 6.3 Right to Opt-Out
- Where technically feasible, users can opt out of AI features
- Clear opt-out mechanisms and processes

---

## 7. Continuous Improvement

### 7.1 Monitoring & Feedback
- Continuous monitoring of AI system performance
- User feedback mechanisms and complaint processes
- Regular updates and improvements based on feedback

### 7.2 Research & Development
- Ongoing research into responsible AI practices
- Collaboration with academic and industry partners
- Contribution to responsible AI standards and best practices

---

## 8. Regulatory Compliance

### 8.1 Applicable Regulations
- **EU AI Act:** Compliance with European Union AI regulations (where applicable)
- **Australian AI Ethics Framework:** Alignment with Australian AI ethics principles
- **Industry Standards:** Compliance with relevant industry standards and guidelines

### 8.2 Future Regulations
- Proactive monitoring of emerging AI regulations
- Adaptation of policies and practices to meet new requirements

---

## 9. Contact AI Governance Team

For questions about our AI practices or to report concerns:
**Email:** ai-governance@rprcomms.com
**Response Time:** Within 5 business days

---

**Classification:** Public  
**Authority:** RPR Communications LLC  
**Effective:** January 26, 2026`,
    lastUpdated: 'January 26, 2026'
  }
};

export const LegalStub: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [content, setContent] = useState<LegalContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract docId from URL (/legal/privacy → privacy)
    const pathParts = location.pathname.split('/');
    const docId = pathParts[pathParts.length - 1]?.toLowerCase();

    if (docId && legalDocuments[docId]) {
      setContent(legalDocuments[docId]);
      setLoading(false);
    } else {
      // Redirect to home if document not found
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#000000] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse text-cyan-400 font-mono text-sm uppercase tracking-wider">
            Loading Legal Document...
          </div>
        </div>
      </div>
    );
  }

  if (!content) {
    return null;
  }

  // Simple markdown-like content renderer
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let listKey = 0;

    lines.forEach((line, idx) => {
      // Headers
      if (line.startsWith('# ')) {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${listKey++}`} className="list-disc list-inside space-y-2 ml-6 mb-4 text-zinc-300">
              {currentList.map((item, i) => (
                <li key={i}>{item.replace(/^[-*]\s*/, '')}</li>
              ))}
            </ul>
          );
          currentList = [];
        }
        elements.push(
          <h1 key={idx} className="text-3xl md:text-4xl font-bold text-white mt-12 mb-6 first:mt-0">
            {line.replace(/^#+\s*/, '')}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${listKey++}`} className="list-disc list-inside space-y-2 ml-6 mb-4 text-zinc-300">
              {currentList.map((item, i) => (
                <li key={i}>{item.replace(/^[-*]\s*/, '')}</li>
              ))}
            </ul>
          );
          currentList = [];
        }
        elements.push(
          <h2 key={idx} className="text-2xl md:text-3xl font-semibold text-white mt-10 mb-4">
            {line.replace(/^##+\s*/, '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${listKey++}`} className="list-disc list-inside space-y-2 ml-6 mb-4 text-zinc-300">
              {currentList.map((item, i) => (
                <li key={i}>{item.replace(/^[-*]\s*/, '')}</li>
              ))}
            </ul>
          );
          currentList = [];
        }
        elements.push(
          <h3 key={idx} className="text-xl md:text-2xl font-medium text-white mt-8 mb-3">
            {line.replace(/^###+\s*/, '')}
          </h3>
        );
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        currentList.push(line);
      } else if (line.trim() === '---') {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${listKey++}`} className="list-disc list-inside space-y-2 ml-6 mb-4 text-zinc-300">
              {currentList.map((item, i) => (
                <li key={i}>{item.replace(/^[-*]\s*/, '')}</li>
              ))}
            </ul>
          );
          currentList = [];
        }
        elements.push(<hr key={idx} className="border-zinc-800 my-8" />);
      } else if (line.trim() === '') {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${listKey++}`} className="list-disc list-inside space-y-2 ml-6 mb-4 text-zinc-300">
              {currentList.map((item, i) => (
                <li key={i}>{item.replace(/^[-*]\s*/, '')}</li>
              ))}
            </ul>
          );
          currentList = [];
        }
      } else {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${listKey++}`} className="list-disc list-inside space-y-2 ml-6 mb-4 text-zinc-300">
              {currentList.map((item, i) => (
                <li key={i}>{item.replace(/^[-*]\s*/, '')}</li>
              ))}
            </ul>
          );
          currentList = [];
        }
        // Handle bold text
        const boldRegex = /\*\*(.*?)\*\*/g;
        const parts: React.ReactNode[] = [];
        let lastIndex = 0;
        let match;
        while ((match = boldRegex.exec(line)) !== null) {
          if (match.index > lastIndex) {
            parts.push(line.substring(lastIndex, match.index));
          }
          parts.push(<strong key={match.index} className="text-zinc-100 font-semibold">{match[1]}</strong>);
          lastIndex = match.index + match[0].length;
        }
        if (lastIndex < line.length) {
          parts.push(line.substring(lastIndex));
        }
        elements.push(
          <p key={idx} className="text-zinc-300 leading-relaxed mb-4">
            {parts.length > 0 ? parts : line}
          </p>
        );
      }
    });

    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${listKey++}`} className="list-disc list-inside space-y-2 ml-6 mb-4 text-zinc-300">
          {currentList.map((item, i) => (
            <li key={i}>{item.replace(/^[-*]\s*/, '')}</li>
          ))}
        </ul>
      );
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 border-b border-zinc-800">
      {/* Header */}
      <header className="border-b border-zinc-800 sticky top-0 z-50 bg-black/95 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <RprMasterLogo />
            <span className="text-sm text-zinc-400 font-mono uppercase tracking-wider hidden md:inline">
              ← Back Home
            </span>
          </button>
          <h1 className="text-lg font-semibold text-white uppercase tracking-tight hidden md:block">
            {content.title}
          </h1>
          <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
            {content.lastUpdated}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        <article className="prose prose-invert max-w-none">
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            {renderContent(content.content)}
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16 py-8">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-sm text-zinc-500">
          <p className="font-mono uppercase tracking-wider mb-2">RPR Communications LLC © 2026</p>
          <p className="mt-2">
            Questions? Email{' '}
            <a
              href="mailto:privacy@rprcomms.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              privacy@rprcomms.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
