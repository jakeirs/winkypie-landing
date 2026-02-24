import type { Metadata } from 'next'
import Link from 'next/link'

import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | WinkyPie',
  description: 'Privacy Policy for WinkyPie by Minimax Development. Learn how we collect, store, use, and share your information.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto legal-content">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">Privacy Policy for WinkyPie</h1>
          <p className="text-sm text-muted mb-8 pb-6 border-b border-border">Last updated: January 25, 2026</p>

          <p>This Privacy Policy for WinkyPie by Minimax Development (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) explains how we collect, store, use, and share information (&quot;process&quot;) when you engage with our services (&quot;Services&quot;) in relation to the WinkyPie mobile application (&quot;Application&quot;). This includes instances when you:</p>

          <ul>
            <li>download, install, access, or use the Application and its services, or</li>
            <li>interact with us in other related ways, such as through customer support.</li>
          </ul>

          <p>This Privacy Policy describes why we collect your information, how we use and protect it, who we share it with, and what your rights are regarding your data. Your privacy is fundamental to our service.</p>

          <hr />

          <h2>Summary of Key Points</h2>

          <p>This summary outlines the key highlights of our Privacy Policy. For more detailed information, please refer to the table of contents below to navigate to the relevant sections.</p>

          <ul>
            <li><strong>What personal data do we process?</strong> When you use our Services, we process a minimal amount of data necessary for the app to function. This includes:
              <ul>
                <li><strong>User Content:</strong> The images you choose to upload from your device&apos;s camera or gallery for AI processing.</li>
                <li><strong>Transaction Information:</strong> An anonymous, randomly generated user ID to manage your subscription status. We do not process your payment details directly.</li>
                <li><strong>Technical Information:</strong> Standard technical data, such as your IP address, which is automatically processed by our backend servers during your session.</li>
              </ul>
            </li>
            <li><strong>Do we process sensitive personal data?</strong> We do not intentionally process sensitive personal data. Our service processes images which may contain faces, but this data is used solely for AI image generation and is not used to identify you. We ask that you do not upload any content containing other sensitive personal information.</li>
            <li><strong>How do we process your information?</strong> We process your information to deliver, enhance, and manage our Services, primarily to facilitate the AI image generation feature. We also use it to manage subscriptions, safeguard security, and comply with legal obligations.</li>
            <li><strong>When do we share personal information?</strong> We share your information only with essential third-party service providers required for our Application to function. This includes cloud backend infrastructure, AI service providers (FAL.ai), and a subscription management service. We do not sell your data.</li>
            <li><strong>Third-Party AI Disclosure:</strong> Your images are processed by FAL.ai through secure API infrastructure. By using our AI features, you consent to this data sharing for image generation purposes only. Generated images are immediately downloaded to your device&apos;s local storage.</li>
            <li><strong>How do we keep your personal data secure?</strong> Our security is built on a &quot;privacy-by-design&quot; principle. We implement technical measures like encryption in transit and, most importantly, we do not permanently store your images on our servers.</li>
            <li><strong>What are your rights?</strong> Depending on your region, you have rights concerning your personal data, including the right to access, correct, delete your information, and delete your account.</li>
            <li><strong>How can you exercise your rights?</strong> You can exercise your rights by contacting us directly at <a href="mailto:winkypie.app@gmail.com">winkypie.app@gmail.com</a> or by using the account deletion feature within the Application (Settings &gt; Delete Account). We will address your request in compliance with applicable data protection laws.</li>
          </ul>

          <hr />

          <div className="toc">
            <h2>Table of Contents</h2>
            <ol>
              <li><a href="#section-1">The Data Controller and the Objective</a></li>
              <li><a href="#section-2">Collection of Personal Data and Method</a></li>
              <li><a href="#section-3">Purposes of Processing Personal Data and Legal Bases</a></li>
              <li><a href="#section-4">Transferring Personal Data to Third Parties</a></li>
              <li><a href="#section-5">Data Storage and Retention</a></li>
              <li><a href="#section-6">Technical and Administrative Measures</a></li>
              <li><a href="#section-7">Children&apos;s Privacy</a></li>
              <li><a href="#section-8">Your Rights as the Data Subject</a></li>
              <li><a href="#section-9">Account Deletion</a></li>
              <li><a href="#section-10">Contact Information</a></li>
              <li><a href="#section-11">For Individuals in the EEA, UK, and Switzerland</a></li>
              <li><a href="#section-12">For California Residents</a></li>
              <li><a href="#section-13">For Residents of Other US States with Privacy Laws</a></li>
              <li><a href="#section-14">Illinois Residents (Biometric Information Privacy Act)</a></li>
              <li><a href="#section-15">Texas Residents (Capture or Use of Biometric Identifier Act)</a></li>
              <li><a href="#section-16">Analytics (Future Implementation)</a></li>
              <li><a href="#section-17">Changes to This Privacy Policy</a></li>
            </ol>
          </div>

          <hr />

          <h2 id="section-1">1. The Data Controller and the Objective</h2>

          <p>The entity responsible for your information (the &quot;data controller&quot;) is:</p>

          <p><strong>WinkyPie by Minimax Development</strong><br />Poland</p>

          <p>For any privacy-related questions or requests, please contact us at: <strong><a href="mailto:winkypie.app@gmail.com">winkypie.app@gmail.com</a></strong></p>

          <p>We aim to process user data transparently and in accordance with applicable data protection legislation, including the European Union&apos;s General Data Protection Regulation (GDPR) and the EU AI Act.</p>

          <hr />

          <h2 id="section-2">2. Collection of Personal Data and Method</h2>

          <p>We collect the minimal amount of information necessary to provide and improve our Service.</p>

          <h3>User Content</h3>

          <p>We process the data you provide when you interact with our core service. This includes images that you select from your device&apos;s photo gallery or capture using your device&apos;s camera. This is the only &quot;User Content&quot; we process.</p>

          <p><strong>Note regarding Biometric Data:</strong> Our service processes photographic images, which may include facial features. We use this data solely for the purpose of providing our AI image generation service at your request. This data:</p>
          <ul>
            <li>Is performed solely at your explicit request to generate AI images</li>
            <li>Does NOT constitute biometric identification or verification</li>
            <li>Does NOT categorize individuals based on biometric data</li>
            <li>Is NOT used for facial recognition, emotion detection, or any prohibited AI practices under the EU AI Act</li>
            <li>Is not permanently stored on our servers and is not used to train AI models</li>
          </ul>

          <p><strong>Note regarding sensitive information:</strong> Please do not upload any content that might contain sensitive personal information (e.g., health information, government IDs). The provision of any such information via the Application is strictly prohibited. While we do not intentionally process such data, we recognize that users might inadvertently include it. If we become aware that we have inadvertently received sensitive personal data, we will take commercially reasonable steps to promptly delete it.</p>

          <h3>Customer Transaction Information</h3>

          <p>We use a third-party subscription management service to manage in-app subscriptions. We do not collect or process your payment method details, such as your credit card number. Our subscription service assigns a randomized, anonymous App User ID to your installation of the app to track your subscription status. Additionally, we store your token balance and generated image count in our database to manage service usage.</p>

          <h3>Technical Information</h3>

          <p>When you use our Services, our cloud backend infrastructure (located in the United States) may automatically log standard technical information required for communication. This includes your Internet Protocol (IP) address, device type, and operating system version. This data is processed only for the duration of your session to ensure the secure and functional delivery of our Service.</p>

          <hr />

          <h2 id="section-3">3. Purposes of Processing Personal Data and Legal Bases</h2>

          <p>We process your information for specific purposes and only when we have a valid legal basis to do so under GDPR.</p>

          <table>
            <thead>
              <tr>
                <th>Purpose of Processing</th>
                <th>Data Categories Involved</th>
                <th>Legal Basis (under GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Providing Core AI Service</td>
                <td>User Content, Technical Information</td>
                <td>Performance of a contract (Art. 6(1)(b)). Processing your image is necessary to fulfill your request to generate a new one. For facial data specifically, explicit consent (Art. 9(2)(a)).</td>
              </tr>
              <tr>
                <td>Managing Subscriptions</td>
                <td>Customer Transaction Information</td>
                <td>Performance of a contract (Art. 6(1)(b)). Processing is necessary to manage your access to premium features.</td>
              </tr>
              <tr>
                <td>Ensuring Security and Stability</td>
                <td>Technical Information</td>
                <td>Legitimate Interest (Art. 6(1)(f)). We have a legitimate interest in protecting our Service from fraud and ensuring it functions correctly.</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2 id="section-4">4. Transferring Personal Data to Third Parties</h2>

          <p>We do not sell your personal data. We only share your information with trusted third-party service providers (&quot;sub-processors&quot;) who are essential for our Service to function.</p>

          <h3>AI Image Generation (FAL.ai)</h3>

          <p>We use FAL.ai for AI image generation, accessed through secure API infrastructure. Your images are transmitted to and processed by FAL.ai&apos;s servers located in the United States.</p>

          <p><strong>Data Retention by FAL.ai:</strong></p>
          <ul>
            <li>Generated images are available on FAL.ai servers for up to 7 days before automatic deletion</li>
            <li>Our App immediately downloads generated images to your device&apos;s local storage</li>
            <li>FAL.ai is committed to GDPR compliance and data protection</li>
          </ul>

          <p><strong>Important Note:</strong> FAL.ai&apos;s standard terms do not provide a formal &quot;Zero Data Retention&quot; guarantee. For enterprise-level guarantees regarding AI model training, please contact us.</p>

          <p><strong>Your Data:</strong></p>
          <ul>
            <li>Uploaded photos are processed temporarily for AI generation</li>
            <li>Generated images are immediately downloaded to your device</li>
            <li>Your photos are stored permanently only on your local device, under your control</li>
          </ul>

          <h3>Cloud Backend Infrastructure</h3>

          <p>Our application uses cloud backend infrastructure located in the United States for temporary data processing. We use this service to temporarily handle the image you upload before sending it to the AI service. Images are deleted within 60 seconds of processing completion and are not permanently stored.</p>

          <h3>Subscription Management</h3>

          <p>We use a third-party subscription management service to securely manage in-app purchases and verify your subscription status. We do not process your payment details directly - all payment processing is handled by Apple (App Store) or Google (Play Store). Subscription status data is retained until you delete your account.</p>

          <h3>International Data Transfers</h3>

          <p>Our service providers are located in the United States. When we transfer your data outside the European Economic Area (EEA), we ensure that appropriate safeguards, such as Standard Contractual Clauses (SCCs), are in place to protect your information in accordance with GDPR requirements.</p>

          <hr />

          <h2 id="section-5">5. Data Storage and Retention</h2>

          <p>Our data retention policy is designed to protect your privacy by storing as little data as possible.</p>

          <h3>Server-Side Storage</h3>

          <p>We do not permanently store, save, or catalog the photos you upload or the images generated for you on our servers. Specific retention periods are as follows:</p>

          <ul>
            <li><strong>Processing Images (Cloud Backend):</strong> Deleted within 60 seconds of processing completion</li>
            <li><strong>Generated Images (FAL.ai):</strong> Available for up to 7 days on FAL.ai servers, then automatically deleted</li>
            <li><strong>Your Device (Local Storage):</strong> Permanently stored until you delete them</li>
            <li><strong>Subscription Data:</strong> Retained until account deletion</li>
          </ul>

          <p><strong>Important:</strong> All generated images are immediately downloaded to your device&apos;s local storage. The retention on FAL.ai servers is a temporary cache - your images are stored permanently on your device under your control.</p>

          <h3>Local Storage</h3>

          <p>The final, AI-generated images are sent back to your device and are saved exclusively in your device&apos;s local file system. The history of your generated images is also stored locally on your device. We do not have access to these images or your history.</p>

          <h3>Your Responsibility</h3>

          <p>You are the owner of the images you generate and are responsible for the content you upload for processing and the images you create.</p>

          <hr />

          <h2 id="section-6">6. Technical and Administrative Measures</h2>

          <p>We are committed to protecting your data. We implement appropriate technical and administrative security measures, including:</p>

          <ul>
            <li><strong>Encryption in Transit:</strong> All data transmitted between your device and our servers is encrypted using industry-standard protocols (TLS/HTTPS).</li>
            <li><strong>Data Minimization:</strong> Our primary security measure is our policy of not storing your images on our servers. By not holding the data, we minimize the risk of unauthorized access.</li>
            <li><strong>Trusted Vendors:</strong> We rely on reputable, US-based service providers who maintain high standards of security for their infrastructure.</li>
            <li><strong>Zero Data Retention:</strong> Our AI providers operate with policies that prevent your data from being stored or used for model training.</li>
          </ul>

          <hr />

          <h2 id="section-7">7. Children&apos;s Privacy</h2>

          <p>Our Service is not intended for use by anyone under the age of 16. We do not knowingly collect personally identifiable information from children under 16. If we become aware that we have collected data from a child under 16 without verification of parental consent, we will take steps to remove that information.</p>

          <p>If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:winkypie.app@gmail.com">winkypie.app@gmail.com</a> so we can take appropriate action.</p>

          <hr />

          <h2 id="section-8">8. Your Rights as the Data Subject</h2>

          <p>You have certain rights regarding your personal data. These rights may vary depending on your location but generally include the right to access, rectify, erase, or object to the processing of your data. To exercise any of your rights, please contact us at <a href="mailto:winkypie.app@gmail.com">winkypie.app@gmail.com</a>.</p>

          <hr />

          <h2 id="section-9">9. Account Deletion</h2>

          <p>You can delete your account and all associated data directly within the Application through <strong>Settings &gt; Delete Account</strong>.</p>

          <p>Upon a deletion request, we will immediately:</p>
          <ul>
            <li>Delete all your locally stored images (selfies, poses, generated creations) from your device</li>
            <li>Remove your subscription data and transaction history from our database</li>
            <li>Log out from our subscription management service (which resets your anonymous user ID)</li>
            <li>Clear all your preferences and app settings</li>
          </ul>

          <p>This deletion is immediate and cannot be undone. If you have an active subscription, please cancel it through your device&apos;s app store settings before deleting your account to avoid future charges.</p>

          <hr />

          <h2 id="section-10">10. Contact Information</h2>

          <p>If you have any questions or comments regarding this Privacy Policy, please contact us:</p>

          <p><strong>By email:</strong> <a href="mailto:winkypie.app@gmail.com">winkypie.app@gmail.com</a></p>

          <hr />

          <h2 id="section-11">11. For Individuals in the European Economic Area (EEA), the UK, and Switzerland</h2>

          <p>If you are a resident of the EEA, UK, or Switzerland, you have the following data protection rights under the GDPR:</p>

          <ul>
            <li><strong>The right to access, update, or delete</strong> the information we have on you. Since we operate on an anonymous basis, this primarily applies to your subscription data held by our subscription management service.</li>
            <li><strong>The right of rectification,</strong> to have your information corrected if it is inaccurate.</li>
            <li><strong>The right to object</strong> to our processing of your personal data.</li>
            <li><strong>The right of restriction,</strong> to request that we restrict the processing of your personal data.</li>
            <li><strong>The right to data portability,</strong> to be provided with a copy of your information.</li>
            <li><strong>The right to withdraw consent</strong> at any time where we relied on your consent to process your information.</li>
          </ul>

          <h3>Biometric Data Processing Notice</h3>

          <p>Our service processes photographic images containing facial geometry using third-party AI services. This processing is performed with your explicit consent when you use our AI generation features. We have conducted appropriate assessments of these processing activities to ensure compliance with GDPR requirements for special category data.</p>

          <h3>Automated Decision-Making</h3>

          <p>Our AI image generation service involves automated processing of your images. However, this processing does not produce legal effects concerning you or similarly significantly affect you. The output is purely creative content generated at your request.</p>

          <h3>Right to Erasure Limitations</h3>

          <p>When you delete your account through Settings &gt; Delete Account, we immediately delete all your locally stored images, preferences, and backend data. Due to the nature of our service, we cannot erase images that you may have exported or shared outside the Application before deletion.</p>

          <p>To exercise these rights, contact us at <a href="mailto:winkypie.app@gmail.com">winkypie.app@gmail.com</a>. We can assist you by submitting a data deletion request to our subscription management service on your behalf using your anonymous App User ID. You also have the right to lodge a complaint with a data protection authority.</p>

          <p>Contact details for your Data Protection Authority:</p>
          <ul>
            <li>EU: <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer">https://edpb.europa.eu/about-edpb/board/members_en</a></li>
            <li>UK: <a href="https://ico.org.uk/global/contact-us/" target="_blank" rel="noopener noreferrer">https://ico.org.uk/global/contact-us/</a></li>
            <li>Switzerland: <a href="https://www.edoeb.admin.ch/edoeb/en/home/the-fdpic/contact.html" target="_blank" rel="noopener noreferrer">https://www.edoeb.admin.ch/edoeb/en/home/the-fdpic/contact.html</a></li>
          </ul>

          <hr />

          <h2 id="section-12">12. For California Residents</h2>

          <p>If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA/CPRA), including:</p>

          <ul>
            <li><strong>The Right to Know:</strong> You can request disclosure of the categories and specific pieces of personal information we have collected about you.</li>
            <li><strong>The Right to Delete:</strong> You can request the deletion of your personal information.</li>
            <li><strong>The Right to Correct:</strong> You can request the correction of inaccurate personal information.</li>
            <li><strong>The Right to Opt-Out:</strong> We do not &quot;sell&quot; or &quot;share&quot; your personal information as those terms are defined under the CCPA/CPRA.</li>
            <li><strong>The Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
          </ul>

          <h3>Sensitive Personal Information</h3>

          <p>We process images which may contain facial features. This data is used solely to provide the service you explicitly requested and is not used for profiling or inference purposes beyond generating your requested image.</p>

          <p>To exercise these rights, please contact us at <a href="mailto:winkypie.app@gmail.com">winkypie.app@gmail.com</a>.</p>

          <hr />

          <h2 id="section-13">13. For Residents of Other US States with Privacy Laws</h2>

          <p>If you are a resident of a US state with comprehensive privacy laws (including Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, Delaware, Iowa, New Hampshire, New Jersey, Nebraska, Tennessee, Maryland, Minnesota, Indiana, Kentucky, Rhode Island, and others that may become effective), you have rights that may include:</p>

          <ul>
            <li>Right to access your personal data</li>
            <li>Right to correct inaccuracies in your personal data</li>
            <li>Right to delete your personal data</li>
            <li>Right to opt-out of data sales (we do not sell your data)</li>
            <li>Right to opt-out of targeted advertising (we do not engage in targeted advertising)</li>
            <li>Right to data portability</li>
            <li>Right to opt-out of profiling in furtherance of decisions that produce legal or similarly significant effects (we do not engage in such profiling)</li>
          </ul>

          <p>To exercise these rights, contact us at <a href="mailto:winkypie.app@gmail.com">winkypie.app@gmail.com</a>. We will respond to your request within the timeframe required by applicable law.</p>

          <hr />

          <h2 id="section-14">14. Illinois Residents (Biometric Information Privacy Act)</h2>

          <p>Our service processes photographic images that may include facial geometry for AI image generation purposes. This constitutes the collection of biometric identifiers under the Illinois Biometric Information Privacy Act (BIPA).</p>

          <p><strong>By uploading your photo and using our AI generation features, you provide written consent for:</strong></p>

          <ul>
            <li>The collection of biometric identifiers from your photographs</li>
            <li>The processing of such data by our AI service providers (FAL.ai)</li>
            <li>The temporary storage necessary to provide the service (deleted within 60 seconds of processing)</li>
          </ul>

          <p><strong>Important BIPA Disclosures:</strong></p>

          <ul>
            <li><strong>Purpose:</strong> Biometric data is collected solely for the purpose of AI image generation at your request.</li>
            <li><strong>Retention:</strong> Biometric data is not permanently stored. Processing images are deleted within 60 seconds; generated images on content delivery infrastructure are deleted after 7 days.</li>
            <li><strong>Destruction Schedule:</strong> Biometric data is destroyed immediately upon completion of the initial purpose (image generation), or within 60 seconds, whichever occurs first.</li>
            <li><strong>No Sale or Disclosure:</strong> We do not sell, lease, trade, or otherwise profit from biometric data. We do not disclose biometric data to third parties except as necessary to provide our service (our AI providers).</li>
            <li><strong>No Training:</strong> Your biometric data is not used to train AI models.</li>
          </ul>

          <hr />

          <h2 id="section-15">15. Texas Residents (Capture or Use of Biometric Identifier Act)</h2>

          <p>We process photographs containing facial geometry using AI services. By using our service, you consent to this collection and use of biometric identifiers solely for the purpose of AI image generation.</p>

          <p><strong>Texas CUBI Disclosures:</strong></p>

          <ul>
            <li>We capture biometric identifiers from photographs you voluntarily upload for AI image generation purposes.</li>
            <li>We do not sell, lease, or disclose biometric data to third parties except as necessary to provide our service through our AI processing partners.</li>
            <li>Biometric data is not permanently stored and is deleted within 60 seconds of processing.</li>
            <li>You may withdraw consent by discontinuing use of the AI image generation features.</li>
          </ul>

          <hr />

          <h2 id="section-16">16. Analytics (Future Implementation)</h2>

          <p><strong>Currently:</strong> No third-party analytics services are implemented in the Application.</p>

          <p>We may implement analytics services in the future. Any analytics data collected would be anonymized and could not be used to identify you personally. We will update this Privacy Policy before implementing any analytics services.</p>

          <hr />

          <h2 id="section-17">17. Changes to This Privacy Policy</h2>

          <p>We may update our Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and/or through an in-app notification before the changes take effect. We encourage you to review this Privacy Policy periodically.</p>

          <p>The &quot;Last updated&quot; date at the top of this Privacy Policy indicates when the most recent revisions were made.</p>

          <p className="mt-10 pt-6 border-t border-border italic text-muted">This Privacy Policy is effective as of January 25, 2026.</p>

          <div className="text-center pt-6 border-t border-border mt-12">
            <Link href="/" className="text-primary hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
