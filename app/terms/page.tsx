import Link from 'next/link'

import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

export const metadata = {
  title: 'Terms and Conditions | WinkyPie',
  description: 'Terms and Conditions for WinkyPie by Minimax Development. Read the legally binding agreement governing your use of the WinkyPie app.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto legal-content">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">Terms and Conditions for WinkyPie</h1>
          <p className="text-sm text-muted mb-1"><strong>Last Updated:</strong> January 25, 2026</p>
          <p className="text-sm text-muted mb-8 pb-6 border-b border-border"><strong>Effective Date:</strong> January 25, 2026</p>

          <p>Welcome to WinkyPie. These Terms and Conditions (&quot;Terms,&quot; &quot;Agreement&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and WinkyPie by Minimax Development (&quot;WinkyPie,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of the WinkyPie mobile application (&quot;App,&quot; &quot;Application&quot;) and all related services (&quot;Services&quot;).</p>

          <div className="warning-box">
            <p><strong>PLEASE READ THESE TERMS CAREFULLY BEFORE USING OUR SERVICE.</strong></p>
          </div>

          <p>By downloading, installing, accessing, or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not download, install, access, or use the App.</p>

          <hr />

          <div className="toc">
            <h2>Table of Contents</h2>
            <ol>
              <li><a href="#section-1">Acceptance of Terms</a></li>
              <li><a href="#section-2">Definitions</a></li>
              <li><a href="#section-3">Eligibility</a></li>
              <li><a href="#section-4">Description of Service</a></li>
              <li><a href="#section-5">User Accounts</a></li>
              <li><a href="#section-6">Subscription and Payment Terms</a></li>
              <li><a href="#section-7">Winky Shots (Credits)</a></li>
              <li><a href="#section-8">User Content License</a></li>
              <li><a href="#section-9">Biometric Data Consent</a></li>
              <li><a href="#section-10">AI-Generated Content</a></li>
              <li><a href="#section-11">User Representations and Warranties</a></li>
              <li><a href="#section-12">Prohibited Content and Conduct</a></li>
              <li><a href="#section-13">Content Moderation</a></li>
              <li><a href="#section-14">DMCA and Copyright</a></li>
              <li><a href="#section-15">Third-Party Services</a></li>
              <li><a href="#section-16">Intellectual Property</a></li>
              <li><a href="#section-17">Disclaimers</a></li>
              <li><a href="#section-18">Limitation of Liability</a></li>
              <li><a href="#section-19">Indemnification</a></li>
              <li><a href="#section-20">Termination</a></li>
              <li><a href="#section-21">Dispute Resolution</a></li>
              <li><a href="#section-22">Governing Law and Jurisdiction</a></li>
              <li><a href="#section-23">Regional Provisions</a></li>
              <li><a href="#section-24">Apple-Specific Terms</a></li>
              <li><a href="#section-25">Google Play-Specific Terms</a></li>
              <li><a href="#section-26">Changes to Terms</a></li>
              <li><a href="#section-27">General Provisions</a></li>
              <li><a href="#section-28">Contact Information</a></li>
            </ol>
          </div>

          <hr />

          <h2 id="section-1">1. Acceptance of Terms</h2>

          <h3>1.1 Binding Agreement</h3>
          <p>By accessing or using the WinkyPie App, you enter into a legally binding contract with WinkyPie by Minimax Development. These Terms govern your use of the App and all related services.</p>

          <h3>1.2 Acceptance Methods</h3>
          <p>You accept these Terms by:</p>
          <ul>
            <li>Downloading or installing the App</li>
            <li>Creating an account or using the Service</li>
            <li>Clicking &quot;I Agree,&quot; &quot;Accept,&quot; or similar buttons when prompted</li>
            <li>Continuing to use the App after being notified of changes to these Terms</li>
          </ul>

          <h3>1.3 Incorporated Documents</h3>
          <p>These Terms incorporate by reference:</p>
          <ul>
            <li>Our <Link href="/privacy">Privacy Policy</Link>, which describes how we collect, use, and protect your information</li>
            <li>Any additional terms, guidelines, or policies referenced herein</li>
          </ul>

          <h3>1.4 Conflicts</h3>
          <p>In the event of a conflict between these Terms and any supplemental terms, these Terms shall prevail unless the supplemental terms expressly state otherwise.</p>

          <hr />

          <h2 id="section-2">2. Definitions</h2>

          <p>For the purposes of these Terms:</p>

          <ul>
            <li><strong>&quot;App&quot; or &quot;Application&quot;</strong> means the WinkyPie mobile application available for iOS and Android devices.</li>
            <li><strong>&quot;AI Service&quot;</strong> means the artificial intelligence-powered image generation and processing features provided through our App using third-party AI models.</li>
            <li><strong>&quot;Biometric Data&quot;</strong> means data derived from the measurement or analysis of human body characteristics, including facial geometry, used for the purpose of AI image generation.</li>
            <li><strong>&quot;Content&quot;</strong> means all text, images, photographs, graphics, data, and other materials uploaded, submitted, or generated through the App.</li>
            <li><strong>&quot;Generated Content&quot;</strong> means images, graphics, or other output created by the AI Service based on your User Content and selected poses.</li>
            <li><strong>&quot;Pose Library&quot;</strong> means the collection of reference poses, templates, and styles available within the App for use in generating AI images.</li>
            <li><strong>&quot;Subscription&quot;</strong> means a paid plan that grants access to premium features and Winky Shots on a recurring basis.</li>
            <li><strong>&quot;Winky Shots&quot;</strong> means the virtual credits used within the App to access AI generation features. Each AI image generation consumes one Winky Shot.</li>
            <li><strong>&quot;User Content&quot;</strong> means photographs, images, and other content that you upload, submit, or provide to the App for processing.</li>
            <li><strong>&quot;Services&quot;</strong> means all features, functionality, and services provided through the App, including AI image generation, the Pose Library, and subscription management.</li>
            <li><strong>&quot;FAL.ai&quot;</strong> means our third-party AI service provider that processes images to generate AI content.</li>
          </ul>

          <hr />

          <h2 id="section-3">3. Eligibility</h2>

          <h3>3.1 Age Requirement</h3>
          <p>You must be at least 16 years of age to use the App. By using the App, you represent and warrant that you are at least 16 years old. This age requirement is in accordance with Article 8 of the GDPR regarding conditions applicable to child&apos;s consent in relation to information society services.</p>

          <h3>3.2 Parental Consent</h3>
          <p>If you are between 16 and 18 years of age (or the age of majority in your jurisdiction), you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.</p>

          <h3>3.3 Prohibited Users</h3>
          <p>You may not use the App if:</p>
          <ul>
            <li>You are under 16 years of age</li>
            <li>You have been previously banned or removed from the Service</li>
            <li>Your use would violate any applicable law or regulation</li>
            <li>You are located in a jurisdiction where use of the App is prohibited</li>
          </ul>

          <h3>3.4 Children Under 16</h3>
          <p>We do not knowingly collect information from or direct our Services to children under 16. If we learn that we have collected personal information from a child under 16, we will promptly delete such information.</p>

          <hr />

          <h2 id="section-4">4. Description of Service</h2>

          <div className="important-box">
            <p><strong>IMPORTANT:</strong> WinkyPie uses artificial intelligence technology to generate images. All images produced through our Service are AI-generated. You acknowledge and understand that you are interacting with AI technology when using our Service.</p>
          </div>

          <h3>4.1 Core Functionality</h3>
          <p>WinkyPie provides an AI-powered image generation service that allows users to:</p>
          <ul>
            <li>Upload selfies or photographs from their device</li>
            <li>Select poses from our curated Pose Library</li>
            <li>Generate new AI images combining your likeness with selected poses</li>
            <li>Save generated images to your device&apos;s local storage</li>
          </ul>

          <h3>4.2 AI Image Generation</h3>
          <p>Our AI Service processes your uploaded photographs to generate new images. This processing involves:</p>
          <ul>
            <li>Analyzing facial features and characteristics from your uploaded images</li>
            <li>Applying selected poses and styles to create new compositions</li>
            <li>Generating unique AI-created images based on your inputs</li>
          </ul>

          <h3>4.3 Local Storage</h3>
          <p>Generated images are saved exclusively to your device&apos;s local storage. We do not permanently store your generated images on our servers. You are responsible for backing up and managing your locally stored images.</p>

          <h3>4.4 Winky Shots-Based Access</h3>
          <p>AI generation features are accessed using Winky Shots, which are included with your Subscription. Each AI image generation consumes one Winky Shot.</p>

          <h3>4.5 Service Availability</h3>
          <p>We strive to maintain continuous service availability but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.</p>

          <hr />

          <h2 id="section-5">5. User Accounts</h2>

          <h3>5.1 Account Creation</h3>
          <p>When you use the App, a unique, anonymous User ID is automatically created and associated with your device installation. This ID is used to manage your subscription status and Winky Shots balance.</p>

          <h3>5.2 Account Security</h3>
          <p>You are responsible for:</p>
          <ul>
            <li>Maintaining the security of your device</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use</li>
          </ul>

          <h3>5.3 Account Data</h3>
          <p>We store minimal data associated with your account:</p>
          <ul>
            <li>Anonymous User ID</li>
            <li>Subscription status</li>
            <li>Winky Shots balance</li>
            <li>Generation count</li>
          </ul>

          <h3>5.4 Account Deletion</h3>
          <p>You may delete your account at any time through Settings &gt; Delete Account within the App. Upon deletion:</p>
          <ul>
            <li>All locally stored images will be permanently deleted from your device</li>
            <li>Your subscription data and Winky Shots balance will be removed from our systems</li>
            <li>Your anonymous User ID will be reset</li>
            <li>This action is immediate and irreversible</li>
            <li>Any active subscription must be cancelled separately through the App Store or Play Store</li>
          </ul>

          <hr />

          <h2 id="section-6">6. Subscription and Payment Terms</h2>

          <h3>6.1 Subscription Plans</h3>
          <p>WinkyPie offers the following subscription plans:</p>

          <table>
            <thead>
              <tr>
                <th>Plan</th>
                <th>Winky Shots</th>
                <th>Billing Cycle</th>
                <th>Renewal Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Weekly</strong></td>
                <td>25 Winky Shots</td>
                <td>Every 7 days</td>
                <td>Weekly</td>
              </tr>
              <tr>
                <td><strong>Monthly</strong></td>
                <td>50 Winky Shots</td>
                <td>Every 30 days</td>
                <td>Monthly</td>
              </tr>
              <tr>
                <td><strong>Half-Year</strong></td>
                <td>50 Winky Shots per month</td>
                <td>Every 6 months</td>
                <td>Semi-annually</td>
              </tr>
            </tbody>
          </table>

          <p><strong>Pricing:</strong> Prices are displayed in the App and may vary by region and currency. Current pricing is always available in the Apple App Store or Google Play Store before purchase.</p>

          <h3>6.2 Billing</h3>

          <h4>6.2.1 iOS Users</h4>
          <p>Payment will be charged to your Apple ID account at confirmation of purchase. Your subscription will be managed through your Apple App Store account settings.</p>

          <h4>6.2.2 Android Users</h4>
          <p>Payment will be charged through your Google Play account at confirmation of purchase. Your subscription will be managed through your Google Play Store account settings.</p>

          <h3>6.3 Auto-Renewal Terms</h3>

          <div className="warning-box">
            <p><strong>AUTO-RENEWAL NOTICE:</strong> YOUR SUBSCRIPTION WILL AUTOMATICALLY RENEW AT THE END OF EACH BILLING PERIOD UNLESS YOU CANCEL AT LEAST 24 HOURS BEFORE THE RENEWAL DATE. YOUR PAYMENT METHOD WILL BE CHARGED THE THEN-CURRENT SUBSCRIPTION PRICE UPON EACH RENEWAL.</p>
          </div>

          <p>By subscribing, you authorize us (through Apple or Google as applicable) to charge the payment method associated with your account for all subscription fees until you cancel.</p>
          <ul>
            <li>Your subscription will automatically renew at the end of each billing period unless you cancel at least 24 hours before the end of the current period.</li>
            <li>Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
            <li>The renewal charge will be at the same price as your current subscription unless you have been notified of a price change in advance.</li>
          </ul>

          <h3>6.4 Free Trial</h3>
          <p>WinkyPie offers a free trial for new users:</p>
          <ul>
            <li>During the free trial, you receive <strong>5 Winky Shots</strong> to try the Service</li>
            <li>Full access to Service features is provided</li>
            <li>The trial period begins when you activate the trial</li>
            <li>Free trials are limited to one per user/device</li>
          </ul>

          <div className="warning-box">
            <p><strong>IMPORTANT:</strong> UNLESS YOU CANCEL AT LEAST 24 HOURS BEFORE THE FREE TRIAL ENDS, YOUR SUBSCRIPTION WILL AUTOMATICALLY CONVERT TO A PAID SUBSCRIPTION AND YOUR PAYMENT METHOD WILL BE CHARGED AT THE THEN-CURRENT SUBSCRIPTION PRICE.</p>
          </div>

          <p>Any unused portion of a free trial period will be forfeited when you purchase a subscription.</p>

          <h3>6.5 Cancellation Policy</h3>
          <p>You may cancel your subscription at any time using the following methods:</p>

          <p><strong>For iOS (Apple App Store):</strong><br />
          Settings &rarr; [Your Name] &rarr; Subscriptions &rarr; WinkyPie &rarr; Cancel Subscription</p>

          <p><strong>For Android (Google Play Store):</strong><br />
          Google Play Store &rarr; Menu &rarr; Subscriptions &rarr; WinkyPie &rarr; Cancel Subscription</p>

          <p><strong>Effect of Cancellation:</strong></p>
          <ul>
            <li>Cancellation takes effect at the end of your current billing period</li>
            <li>You will retain access to premium features until the end of the paid period</li>
            <li>No refunds will be provided for partial billing periods</li>
            <li>Unused Winky Shots remain available until they expire at billing period end</li>
            <li>Cancelling your subscription does NOT automatically delete your account</li>
          </ul>

          <h3>6.6 Refund Policy</h3>
          <p>All purchases are subject to the refund policies of Apple (for iOS) or Google (for Android). We do not process refunds directly. To request a refund:</p>
          <ul>
            <li><strong>iOS:</strong> Contact Apple Support or request through your purchase history</li>
            <li><strong>Android:</strong> Contact Google Play Support or request through your order history</li>
          </ul>

          <h3>6.7 Price Changes</h3>
          <p>We reserve the right to change subscription prices. If prices increase:</p>
          <ul>
            <li>We will provide notice through the App or via email at least 30 days in advance</li>
            <li>Price changes will take effect at the start of your next billing period after notice</li>
            <li>If you do not agree to the new price, you may cancel before the change takes effect</li>
          </ul>

          <hr />

          <h2 id="section-7">7. Winky Shots (Credits)</h2>

          <p>Winky Shots are virtual credits used to generate AI images within the WinkyPie Service.</p>

          <h3>7.1 How Winky Shots Work</h3>
          <ul>
            <li>Each AI image generation consumes one Winky Shot</li>
            <li>Winky Shots are allocated based on your subscription plan</li>
            <li>Your current Winky Shots balance is displayed in the App</li>
          </ul>

          <h3>7.2 Credit Allocation</h3>

          <table>
            <thead>
              <tr>
                <th>Subscription</th>
                <th>Winky Shots Included</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Free Trial</td>
                <td>5 Winky Shots (one-time)</td>
              </tr>
              <tr>
                <td>Weekly</td>
                <td>25 Winky Shots per week</td>
              </tr>
              <tr>
                <td>Monthly</td>
                <td>50 Winky Shots per month</td>
              </tr>
              <tr>
                <td>Half-Year</td>
                <td>50 Winky Shots per month</td>
              </tr>
            </tbody>
          </table>

          <h3>7.3 Credit Replenishment</h3>
          <p><strong>Winky Shots are replenished (reset to the maximum amount for your plan) at each billing cycle renewal.</strong></p>
          <p>Example: If you have a Monthly plan with 50 Winky Shots and you have 15 remaining at renewal, your balance resets to 50 (not 65).</p>

          <h3>7.4 No Carryover</h3>
          <div className="warning-box">
            <p><strong>IMPORTANT:</strong> UNUSED WINKY SHOTS DO NOT CARRY OVER TO THE NEXT BILLING PERIOD. At each renewal, your Winky Shots balance is reset to the maximum amount for your plan, regardless of how many Winky Shots you had remaining.</p>
          </div>

          <h3>7.5 No Monetary Value</h3>
          <p>Winky Shots:</p>
          <ul>
            <li>Have no cash or monetary value</li>
            <li>Cannot be transferred, sold, traded, or exchanged</li>
            <li>Cannot be converted to cash or any other form of payment</li>
            <li>Are for use only within the WinkyPie Service</li>
          </ul>

          <h3>7.6 No Refunds for Unused Winky Shots</h3>
          <div className="warning-box">
            <p><strong>THERE ARE NO REFUNDS, CREDITS, OR COMPENSATION OF ANY KIND FOR UNUSED WINKY SHOTS UNDER ANY CIRCUMSTANCES, INCLUDING BUT NOT LIMITED TO:</strong></p>
            <ul>
              <li>Unused Winky Shots at the end of a billing period</li>
              <li>Unused Winky Shots when you cancel your subscription</li>
              <li>Unused Winky Shots remaining when you delete your account</li>
              <li>Unused Winky Shots when the Service is modified or discontinued</li>
            </ul>
          </div>
          <p>By using the Service, you acknowledge and accept this no-refund policy for Winky Shots.</p>

          <h3>7.7 Winky Shots Upon Termination</h3>
          <p>If your account is terminated:</p>
          <ul>
            <li>All Winky Shots will be forfeited</li>
            <li>No compensation will be provided for unused Winky Shots</li>
          </ul>

          <hr />

          <h2 id="section-8">8. User Content License</h2>

          <h3>8.1 Your Ownership</h3>
          <p>You retain all ownership rights to the photographs and images you upload to the App (&quot;User Content&quot;). We do not claim any ownership interest in your User Content.</p>

          <h3>8.2 License Grant to WinkyPie</h3>
          <p>By uploading User Content to the App, you grant WinkyPie a limited, non-exclusive, royalty-free, worldwide license to:</p>
          <ul>
            <li>Process your User Content through our AI Service</li>
            <li>Create Generated Content based on your User Content</li>
            <li>Temporarily store your User Content as necessary to provide the Service</li>
            <li>Display your User Content within the App interface during your session</li>
          </ul>

          <h3>8.3 License Limitations</h3>
          <p>The license you grant to us is:</p>
          <ul>
            <li><strong>Purpose-limited:</strong> Only for providing the Services you request</li>
            <li><strong>Time-limited:</strong> Only for the duration necessary to process your request (approximately 60 seconds for processing images)</li>
            <li><strong>Non-permanent:</strong> We do not permanently store your User Content on our servers</li>
          </ul>

          <h3>8.4 No Training Rights</h3>
          <p><strong>IMPORTANT:</strong> Your User Content, including any biometric data derived from your photographs, will NOT be used to train, improve, or develop AI models. Our AI service providers operate under Zero Data Retention policies and paid-tier terms that prohibit the use of user data for model training.</p>

          <h3>8.5 License Survival</h3>
          <p>The license granted in Section 8.2 terminates when your User Content is deleted from our systems (within 60 seconds of processing completion).</p>

          <hr />

          <h2 id="section-9">9. Biometric Data Consent</h2>

          <div className="warning-box">
            <p><strong>THIS SECTION CONTAINS IMPORTANT DISCLOSURES REQUIRED BY LAW. PLEASE READ CAREFULLY.</strong></p>
          </div>

          <h3>9.1 What We Collect</h3>
          <p>When you upload photographs containing your face or the face of others, our AI Service processes biometric data, specifically:</p>
          <ul>
            <li><strong>Facial geometry:</strong> The size, shape, and position of facial features</li>
            <li><strong>Facial characteristics:</strong> Visual attributes necessary for AI image generation</li>
          </ul>

          <h3>9.2 Purpose and Use</h3>
          <p>Your biometric data is collected and processed <strong>solely</strong> for the purpose of:</p>
          <ul>
            <li>Generating AI images at your explicit request</li>
            <li>Creating personalized content combining your likeness with selected poses</li>
          </ul>

          <p>Your biometric data is <strong>NOT</strong> used for:</p>
          <ul>
            <li>Facial recognition or identification</li>
            <li>Biometric verification or authentication</li>
            <li>Emotion detection or analysis</li>
            <li>Categorization based on protected characteristics</li>
            <li>Sale, lease, trade, or commercial profit</li>
            <li>Training AI models</li>
          </ul>

          <h3>9.3 Retention and Destruction Schedule</h3>
          <p>We maintain the following retention and destruction policy for biometric data:</p>

          <table>
            <thead>
              <tr>
                <th>Data Type</th>
                <th>Retention Period</th>
                <th>Destruction Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Processing Images (Our servers)</td>
                <td>Maximum 60 seconds</td>
                <td>Automatic deletion upon processing completion</td>
              </tr>
              <tr>
                <td>Generated Images (FAL.ai)</td>
                <td>Up to 7 days</td>
                <td>Automatic deletion (App downloads immediately to your device)</td>
              </tr>
              <tr>
                <td>Your Device (Local)</td>
                <td>Permanent until you delete</td>
                <td>User-controlled deletion</td>
              </tr>
              <tr>
                <td>Biometric Templates</td>
                <td>Not created</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>

          <p><strong>Important:</strong> All generated images are immediately downloaded to your device&apos;s local storage. The 7-day retention on FAL.ai servers is a temporary cache only - your images are stored permanently on your device under your control.</p>

          <p>Biometric data is destroyed immediately upon completion of its initial purpose (AI image generation) or within 60 seconds, whichever occurs first.</p>

          <h3>9.4 Written Consent (BIPA/CUBI Compliance)</h3>
          <div className="important-box">
            <p><strong>BY UPLOADING A PHOTOGRAPH CONTAINING A FACE AND USING OUR AI GENERATION FEATURES, YOU PROVIDE YOUR INFORMED, WRITTEN CONSENT TO:</strong></p>
            <ol>
              <li><strong>Collection:</strong> The capture and collection of biometric identifiers (facial geometry) from photographs you upload</li>
              <li><strong>Processing:</strong> The processing of your biometric data by our AI service providers (FAL.ai) for the sole purpose of generating AI images</li>
              <li><strong>Temporary Storage:</strong> The temporary storage of your biometric data as necessary to provide the Service (maximum 60 seconds)</li>
              <li><strong>Disclosure to Service Providers:</strong> The disclosure of your biometric data to our AI service providers under agreements that protect your data</li>
            </ol>
          </div>

          <p><strong>YOU ACKNOWLEDGE AND AGREE THAT:</strong></p>
          <ul>
            <li>You have been informed of the specific purpose and length of time for which your biometric data will be collected, stored, and used</li>
            <li>You understand that your biometric data will be processed by third-party AI service providers</li>
            <li>You have the right to refuse this consent by not using the AI generation features</li>
          </ul>

          <h3>9.5 Withdrawal of Consent</h3>
          <p>You may withdraw your consent to biometric data collection at any time by:</p>
          <ul>
            <li>Discontinuing use of the AI image generation features</li>
            <li>Deleting your account through Settings &gt; Delete Account</li>
            <li>Contacting us at <a href="mailto:privacy@notforget.ai">privacy@notforget.ai</a></li>
          </ul>
          <p>Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal.</p>

          <h3>9.6 Additional State-Specific Rights</h3>
          <p>If you are a resident of Illinois, Texas, or another state with biometric privacy laws, please see <a href="#section-23">Section 23: Regional Provisions</a> for additional rights and disclosures specific to your jurisdiction.</p>

          <hr />

          <h2 id="section-10">10. AI-Generated Content</h2>

          <h3>10.1 AI Service Provider</h3>
          <p>Our AI image generation features are powered by <strong>FAL.ai</strong>, a third-party AI service provider. By using our AI features, you acknowledge that:</p>
          <ul>
            <li>Your images are transmitted to and processed by FAL.ai&apos;s infrastructure</li>
            <li>Generated images are available on FAL.ai servers for up to 7 days before automatic deletion</li>
            <li>Our App immediately downloads generated images to your device&apos;s local storage</li>
            <li>Your uploaded photos are not used to train AI models</li>
          </ul>

          <h3>10.2 Ownership of Generated Content</h3>
          <p>Generated Content created by the AI Service belongs to you, subject to the following:</p>
          <ul>
            <li>You own the unique output generated from your specific inputs</li>
            <li>Ownership is subject to the limitations described in Section 10.3</li>
            <li>You are responsible for your use of Generated Content</li>
          </ul>

          <h3>10.3 Copyright Notice</h3>
          <div className="important-box">
            <p><strong>IMPORTANT INFORMATION REGARDING AI-GENERATED CONTENT:</strong></p>
            <p>Under current United States Copyright Office guidance (effective 2025), purely AI-generated content may not be eligible for copyright protection. This means:</p>
            <ul>
              <li>The AI-generated portions of your content may not be copyrightable</li>
              <li>Your original input photographs remain protected by your existing rights</li>
              <li>The creative selection and arrangement of inputs may be protectable</li>
              <li>Copyright law regarding AI-generated content continues to evolve</li>
            </ul>
          </div>
          <p>We recommend consulting a qualified attorney if you intend to commercially exploit Generated Content or assert copyright claims.</p>

          <h3>10.4 AI Disclaimers and Limitations</h3>
          <p>You acknowledge and agree that:</p>
          <ul>
            <li><strong>No Guarantee of Accuracy:</strong> AI outputs may contain errors, artifacts, distortions, or inaccuracies</li>
            <li><strong>Unpredictable Results:</strong> Generated images may not match your expectations</li>
            <li><strong>Variation:</strong> Results may vary between generations even with identical inputs</li>
            <li><strong>No Endorsement:</strong> Generated Content does not represent our views or endorsement</li>
            <li><strong>User Responsibility:</strong> You are responsible for reviewing all Generated Content before use</li>
          </ul>

          <h3>10.5 Machine-Readable Marking (EU AI Act Compliance)</h3>
          <p>In compliance with Article 50 of the EU AI Act (effective August 2026), Generated Content may include:</p>
          <ul>
            <li>Metadata indicating AI generation</li>
            <li>Machine-readable watermarks or markers</li>
            <li>Technical identifiers for AI-generated content</li>
          </ul>
          <p>You agree not to remove, disable, or circumvent these markers where technically feasible.</p>

          <h3>10.6 Deepfake and Synthetic Media Disclosure</h3>
          <p>Generated Content created using the App constitutes synthetic media. You agree:</p>
          <ul>
            <li>Not to use Generated Content to deceive others about authenticity</li>
            <li>To disclose the AI-generated nature of content when required by law</li>
            <li>To comply with all applicable deepfake regulations</li>
            <li>Not to create non-consensual intimate imagery</li>
          </ul>

          <hr />

          <h2 id="section-11">11. User Representations and Warranties</h2>

          <p>By using the App, you represent and warrant that:</p>

          <h3>11.1 Ownership of Uploaded Content</h3>
          <p>You either:</p>
          <ul>
            <li>Own all rights to the photographs you upload, OR</li>
            <li>Have obtained all necessary permissions, licenses, and consents to upload and process such content</li>
          </ul>

          <h3>11.2 Consent of Identifiable Persons</h3>
          <p>For any photographs containing identifiable individuals other than yourself:</p>
          <ul>
            <li>You have obtained their explicit, informed consent for the upload and AI processing of their image</li>
            <li>You have informed them about the nature of the AI processing</li>
            <li>They are at least 16 years of age</li>
            <li>You will provide proof of consent upon our request</li>
          </ul>

          <h3>11.3 Age Representations</h3>
          <ul>
            <li>You are at least 16 years of age</li>
            <li>Any individuals depicted in your uploaded content are at least 16 years of age</li>
            <li>You have verified the age of individuals depicted, where required</li>
          </ul>

          <h3>11.4 No Infringement</h3>
          <p>Your User Content does not and will not:</p>
          <ul>
            <li>Infringe any third party&apos;s intellectual property rights</li>
            <li>Violate any person&apos;s rights of privacy or publicity</li>
            <li>Violate any applicable law or regulation</li>
            <li>Breach any duty of confidentiality</li>
          </ul>

          <h3>11.5 Accuracy of Information</h3>
          <p>Any information you provide to us is accurate, current, and complete.</p>

          <hr />

          <h2 id="section-12">12. Prohibited Content and Conduct</h2>

          <h3>12.1 Prohibited Content Categories</h3>
          <p>You agree not to upload, generate, or distribute content that:</p>

          <h4>12.1.1 Child Sexual Abuse Material (CSAM)</h4>
          <div className="warning-box">
            <p><strong>ZERO TOLERANCE POLICY:</strong> Any content that depicts, promotes, or relates to the sexual exploitation of minors is strictly prohibited. This includes:</p>
            <ul>
              <li>Any sexual content involving individuals under 18</li>
              <li>Content that sexualizes minors in any way</li>
              <li>AI-generated content depicting minors in sexual situations</li>
            </ul>
            <p>Violations will result in immediate account termination and reporting to relevant authorities including the National Center for Missing &amp; Exploited Children (NCMEC).</p>
          </div>

          <h4>12.1.2 Non-Consensual Intimate Imagery (NCII)</h4>
          <p>Content depicting real individuals in intimate, sexual, or compromising situations without their consent, including:</p>
          <ul>
            <li>Non-consensual pornography (&quot;revenge porn&quot;)</li>
            <li>AI-generated intimate imagery of real people without consent</li>
            <li>&quot;Deepfake&quot; pornographic content</li>
          </ul>

          <h4>12.1.3 Adult/Sexual Content</h4>
          <p>Sexually explicit content, including:</p>
          <ul>
            <li>Pornographic images or content</li>
            <li>Graphic sexual acts</li>
            <li>Content intended to sexually arouse</li>
          </ul>

          <h4>12.1.4 Violence and Gore</h4>
          <p>Content depicting or promoting:</p>
          <ul>
            <li>Graphic violence or injury</li>
            <li>Torture or abuse</li>
            <li>Self-harm or suicide</li>
          </ul>

          <h4>12.1.5 Hate and Harassment</h4>
          <p>Content that:</p>
          <ul>
            <li>Promotes hatred against protected groups</li>
            <li>Harasses, bullies, or intimidates individuals</li>
            <li>Glorifies or incites violence against any person or group</li>
          </ul>

          <h4>12.1.6 Illegal Content</h4>
          <p>Content that violates any applicable law, including:</p>
          <ul>
            <li>Promotion of illegal activities</li>
            <li>Terrorism or extremism</li>
            <li>Fraudulent or deceptive content</li>
          </ul>

          <h3>12.2 Prohibited Conduct</h3>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service to create fraudulent identification documents</li>
            <li>Impersonate others for deceptive purposes</li>
            <li>Circumvent content moderation or safety systems</li>
            <li>Use automated systems to access the Service</li>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Share your account or Winky Shots with others</li>
            <li>Use the Service for any commercial purpose without authorization</li>
          </ul>

          <h3>12.3 TAKE IT DOWN Act Compliance</h3>
          <p>In compliance with the TAKE IT DOWN Act (effective May 2025):</p>
          <ul>
            <li>We will remove identified non-consensual intimate imagery within 48 hours of valid notification</li>
            <li>Victims may submit removal requests to: <a href="mailto:dmca@notforget.ai">dmca@notforget.ai</a></li>
            <li>We maintain processes to prevent re-upload of removed content</li>
          </ul>

          <hr />

          <h2 id="section-13">13. Content Moderation</h2>

          <h3>13.1 Automated Screening</h3>
          <p>We employ automated content moderation systems that may:</p>
          <ul>
            <li>Screen uploaded content before processing</li>
            <li>Detect and block prohibited content</li>
            <li>Flag content for human review</li>
          </ul>

          <h3>13.2 Human Review</h3>
          <p>Content flagged by automated systems may be subject to human review. Review decisions are final and may result in content removal, account warnings, or account termination.</p>

          <h3>13.3 Reporting Mechanism</h3>
          <p>Users may report prohibited content by:</p>
          <ul>
            <li>Using the in-app reporting feature</li>
            <li>Contacting us at: <a href="mailto:dmca@notforget.ai">dmca@notforget.ai</a></li>
          </ul>
          <p>We investigate all reports and take appropriate action.</p>

          <h3>13.4 Moderation Actions</h3>
          <p>We may, at our sole discretion:</p>
          <ul>
            <li>Remove or disable access to content</li>
            <li>Issue warnings to users</li>
            <li>Suspend account access temporarily</li>
            <li>Terminate accounts permanently</li>
            <li>Report violations to law enforcement</li>
          </ul>

          <h3>13.5 Appeal Process</h3>
          <p>If your content is removed or your account is actioned, you may appeal by:</p>
          <ul>
            <li>Contacting us at: <a href="mailto:privacy@notforget.ai">privacy@notforget.ai</a></li>
            <li>Providing a detailed explanation of why you believe the action was in error</li>
            <li>Waiting for our review (typically within 10 business days)</li>
          </ul>
          <p>Appeal decisions are final.</p>

          <hr />

          <h2 id="section-14">14. DMCA and Copyright</h2>

          <h3>14.1 Designated Agent</h3>
          <p>In accordance with the Digital Millennium Copyright Act (DMCA), we have designated an agent to receive notifications of claimed infringement:</p>
          <p><strong>DMCA Designated Agent</strong><br />
          WinkyPie by Minimax Development<br />
          Email: <a href="mailto:dmca@notforget.ai">dmca@notforget.ai</a></p>

          <h3>14.2 DMCA Notice Requirements</h3>
          <p>If you believe your copyrighted work has been infringed, please provide a written notification containing:</p>
          <ol>
            <li>A physical or electronic signature of the copyright owner or authorized agent</li>
            <li>Identification of the copyrighted work claimed to have been infringed</li>
            <li>Identification of the material claimed to be infringing and its location</li>
            <li>Your contact information (address, telephone number, email)</li>
            <li>A statement that you have a good faith belief the use is not authorized</li>
            <li>A statement under penalty of perjury that the information is accurate and you are authorized to act</li>
          </ol>

          <h3>14.3 Counter-Notification</h3>
          <p>If you believe your content was wrongly removed, you may submit a counter-notification containing:</p>
          <ol>
            <li>Your physical or electronic signature</li>
            <li>Identification of the material removed and its former location</li>
            <li>A statement under penalty of perjury that removal was due to mistake or misidentification</li>
            <li>Your name, address, telephone number, and consent to jurisdiction</li>
            <li>A statement that you will accept service of process from the complainant</li>
          </ol>

          <h3>14.4 Repeat Infringer Policy</h3>
          <p>We maintain a policy of terminating accounts of users who are repeat infringers of copyright. Factors considered include:</p>
          <ul>
            <li>Number of valid DMCA notices received</li>
            <li>Nature and severity of infringement</li>
            <li>User&apos;s response to prior notices</li>
          </ul>

          <hr />

          <h2 id="section-15">15. Third-Party Services</h2>

          <h3>15.1 FAL.ai (AI Service Provider)</h3>
          <p>Our AI image generation features utilize FAL.ai&apos;s infrastructure. By using these features:</p>
          <ul>
            <li>Your images are transmitted to and processed by FAL.ai&apos;s servers</li>
            <li>Generated outputs are available for up to 7 days on FAL.ai servers before automatic deletion</li>
            <li>Our App immediately downloads generated images to your device&apos;s local storage</li>
            <li>FAL.ai is committed to GDPR compliance and data protection</li>
          </ul>
          <p><strong>Important:</strong> FAL.ai&apos;s standard terms do not guarantee that your images will not be used for service improvement. For enterprise-level guarantees regarding AI model training, please contact us.</p>

          <h3>15.2 Subscription Management (RevenueCat)</h3>
          <p>We use RevenueCat to manage subscriptions and in-app purchases:</p>
          <ul>
            <li>RevenueCat assigns an anonymous App User ID to your installation</li>
            <li>Payment processing is handled by Apple or Google, not RevenueCat</li>
            <li>RevenueCat does not have access to your payment details</li>
          </ul>

          <h3>15.3 Cloud Infrastructure (Convex)</h3>
          <p>Our backend services use cloud infrastructure located in the United States:</p>
          <ul>
            <li>Images are processed temporarily and deleted within 60 seconds</li>
            <li>Technical data (IP address, device type) is processed during your session</li>
            <li>Data transfers are protected by appropriate safeguards</li>
          </ul>

          <h3>15.4 Data Transfers</h3>
          <p>Your data may be transferred to and processed in the United States by our service providers. For international data transfers, we ensure appropriate safeguards are in place, including:</p>
          <ul>
            <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
            <li>EU-US Data Privacy Framework certification where applicable</li>
            <li>Contractual protections with service providers</li>
          </ul>

          <hr />

          <h2 id="section-16">16. Intellectual Property</h2>

          <h3>16.1 App Ownership</h3>
          <p>The App, including its design, features, functionality, code, graphics, and user interface, is owned by WinkyPie by Minimax Development and protected by intellectual property laws. All rights not expressly granted are reserved.</p>

          <h3>16.2 Pose Library</h3>
          <p>The Pose Library, including all reference images, templates, and styles, is our proprietary content or licensed material. You may use the Pose Library solely within the App as intended and may not:</p>
          <ul>
            <li>Copy, distribute, or modify Pose Library content</li>
            <li>Use Pose Library content outside the App</li>
            <li>Reverse engineer or extract Pose Library assets</li>
          </ul>

          <h3>16.3 User License</h3>
          <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:</p>
          <ul>
            <li>Download and install the App on your personal device</li>
            <li>Access and use the App and Services for personal, non-commercial purposes</li>
            <li>Generate and save images for your personal use</li>
          </ul>
          <p>This license does not include the right to:</p>
          <ul>
            <li>Modify, adapt, or create derivative works of the App</li>
            <li>Sublicense, rent, lease, or transfer the App</li>
            <li>Use the App for commercial purposes without authorization</li>
            <li>Remove any proprietary notices from the App</li>
          </ul>

          <hr />

          <h2 id="section-17">17. Disclaimers</h2>

          <h3>17.1 &quot;AS IS&quot; Service</h3>
          <p>THE APP AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</p>
          <ul>
            <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
            <li>FITNESS FOR A PARTICULAR PURPOSE</li>
            <li>NON-INFRINGEMENT</li>
            <li>TITLE</li>
            <li>QUIET ENJOYMENT</li>
            <li>ACCURACY</li>
          </ul>

          <h3>17.2 No Warranty of AI Accuracy</h3>
          <p>WE DO NOT WARRANT THAT:</p>
          <ul>
            <li>AI-generated images will be accurate, complete, or error-free</li>
            <li>Generated content will meet your expectations or requirements</li>
            <li>Results will be consistent across generations</li>
            <li>The AI Service will correctly interpret your inputs</li>
            <li>Generated images will be suitable for any particular purpose</li>
          </ul>

          <h3>17.3 Service Availability</h3>
          <p>WE DO NOT WARRANT THAT:</p>
          <ul>
            <li>The Service will be uninterrupted or error-free</li>
            <li>Defects will be corrected</li>
            <li>The App is free of viruses or harmful components</li>
            <li>The Service will be available at all times</li>
          </ul>

          <h3>17.4 Third-Party Services</h3>
          <p>We are not responsible for the availability, accuracy, or content of third-party services, including AI providers and infrastructure services.</p>

          <hr />

          <h2 id="section-18">18. Limitation of Liability</h2>

          <h3>18.1 Liability Cap</h3>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR YOUR USE OF THE SERVICE SHALL NOT EXCEED THE GREATER OF:</p>
          <ul>
            <li>THE AMOUNTS YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR</li>
            <li>ONE HUNDRED US DOLLARS ($100 USD)</li>
          </ul>

          <h3>18.2 Exclusion of Damages</h3>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY:</p>
          <ul>
            <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
            <li>LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES</li>
            <li>DAMAGES RESULTING FROM UNAUTHORIZED ACCESS TO YOUR ACCOUNT</li>
            <li>DAMAGES RESULTING FROM THIRD-PARTY ACTIONS</li>
            <li>DAMAGES RESULTING FROM INTERRUPTION OR CESSATION OF SERVICE</li>
          </ul>

          <h3>18.3 AI-Specific Exclusions</h3>
          <p>WE SHALL NOT BE LIABLE FOR:</p>
          <ul>
            <li>Any emotional distress or harm caused by AI-generated images</li>
            <li>Reputational harm resulting from AI outputs</li>
            <li>Misuse of AI-generated content by you or third parties</li>
            <li>Inaccuracies or errors in AI-generated content</li>
            <li>Unintended or unexpected AI outputs</li>
          </ul>

          <h3>18.4 Jurisdictional Limitations</h3>
          <p>Some jurisdictions do not allow the exclusion of certain warranties or limitation of certain damages. If you reside in such a jurisdiction, some or all of the above exclusions or limitations may not apply to you, and you may have additional rights.</p>

          <h3>18.5 Basis of the Bargain</h3>
          <p>THE LIMITATIONS IN THIS SECTION REFLECT THE ALLOCATION OF RISK BETWEEN THE PARTIES. THESE LIMITATIONS WILL APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.</p>

          <hr />

          <h2 id="section-19">19. Indemnification</h2>

          <h3>19.1 User Indemnification</h3>
          <p>You agree to indemnify, defend, and hold harmless WinkyPie, its affiliates, officers, directors, employees, agents, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to:</p>
          <ul>
            <li>Your use of the App or Services</li>
            <li>Your User Content or Generated Content</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights, including intellectual property or privacy rights</li>
            <li>Your violation of any applicable law or regulation</li>
            <li>Your biometric data consent and representations</li>
            <li>Any claim that your use of the Service caused damage to a third party</li>
          </ul>

          <h3>19.2 Indemnification Process</h3>
          <p>We will:</p>
          <ul>
            <li>Promptly notify you of any claim subject to indemnification</li>
            <li>Provide reasonable cooperation in the defense</li>
            <li>Allow you to control the defense and settlement, provided any settlement does not impose obligations on us without our consent</li>
          </ul>

          <h3>19.3 No Platform Indemnification for AI Content</h3>
          <p>You acknowledge that AI-generated content is your responsibility. We do not indemnify you against claims arising from your use of AI-generated content.</p>

          <hr />

          <h2 id="section-20">20. Termination</h2>

          <h3>20.1 Termination by Us</h3>
          <p>We may suspend or terminate your access to the App and Services, in whole or in part, at any time and for any reason, including but not limited to:</p>
          <ul>
            <li>Violation of these Terms</li>
            <li>Conduct that we determine is harmful to other users, us, or third parties</li>
            <li>Extended periods of inactivity</li>
            <li>Requests by law enforcement or government agencies</li>
            <li>Technical or security issues</li>
            <li>At our sole discretion for any reason</li>
          </ul>

          <h3>20.2 Termination by You</h3>
          <p>You may terminate your account at any time by:</p>
          <ul>
            <li>Deleting your account through Settings &gt; Delete Account</li>
            <li>Uninstalling the App from your device</li>
            <li>Contacting us at <a href="mailto:privacy@notforget.ai">privacy@notforget.ai</a></li>
          </ul>

          <h3>20.3 Effect on Subscriptions</h3>
          <p>If your account is terminated:</p>
          <ul>
            <li><strong>By You:</strong> Your subscription remains active until the end of the current billing period, then automatically cancels</li>
            <li><strong>By Us for Violation:</strong> Your subscription is immediately terminated with no refund for the current period</li>
            <li><strong>By Us without Cause:</strong> We will refund the pro-rata unused portion of your current subscription period</li>
          </ul>

          <h3>20.4 Data Deletion</h3>
          <p>Upon termination:</p>
          <ul>
            <li>All locally stored data will be deleted (if you delete through the App)</li>
            <li>Your backend data (User ID, subscription status, token balance) will be removed</li>
            <li>Any content in processing will be discarded</li>
            <li>This deletion is immediate and irreversible</li>
          </ul>

          <h3>20.5 Survival</h3>
          <p>The following sections survive termination: Definitions, User Content License (to the extent content was processed), Biometric Data Consent (regarding data already processed), Disclaimers, Limitation of Liability, Indemnification, Dispute Resolution, Governing Law, and General Provisions.</p>

          <hr />

          <h2 id="section-21">21. Dispute Resolution</h2>

          <h3>21.1 Informal Resolution</h3>
          <p>Before initiating formal dispute resolution, you agree to contact us at <a href="mailto:privacy@notforget.ai">privacy@notforget.ai</a> and attempt to resolve the dispute informally for at least 30 days. Most disputes can be resolved this way.</p>

          <h3>21.2 Binding Arbitration (US Users)</h3>
          <p><strong>FOR USERS IN THE UNITED STATES:</strong></p>
          <p>If informal resolution fails, any dispute arising from or relating to these Terms or the Services shall be resolved by binding arbitration rather than in court, except that:</p>
          <ul>
            <li>You may assert claims in small claims court if they qualify</li>
            <li>Either party may seek injunctive relief in court for intellectual property infringement</li>
          </ul>
          <p>Arbitration shall be conducted by JAMS under its Streamlined Arbitration Rules and Procedures. The arbitration will take place in your county of residence or as otherwise agreed. The arbitrator&apos;s decision will be final and binding.</p>

          <h3>21.3 Class Action Waiver</h3>
          <p><strong>FOR USERS IN THE UNITED STATES:</strong></p>
          <p>YOU AND WINKYPIE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</p>
          <p>Unless both parties agree otherwise, the arbitrator may not consolidate more than one person&apos;s claims and may not preside over any form of representative or class proceeding.</p>

          <h3>21.4 Opt-Out</h3>
          <p>You may opt out of the arbitration agreement and class action waiver by sending written notice to <a href="mailto:privacy@notforget.ai">privacy@notforget.ai</a> within 30 days of first accepting these Terms. Your notice must include your name, address, email, and a clear statement that you wish to opt out.</p>

          <h3>21.5 Non-US Users</h3>
          <p>If you are not located in the United States, disputes shall be resolved in accordance with Section 22 (Governing Law and Jurisdiction).</p>

          <hr />

          <h2 id="section-22">22. Governing Law and Jurisdiction</h2>

          <h3>22.1 Governing Law</h3>
          <p>These Terms shall be governed by and construed in accordance with the laws of Poland, without regard to its conflict of law provisions.</p>

          <h3>22.2 Jurisdiction</h3>
          <p>Subject to the arbitration provisions for US users, the courts located in Poland shall have exclusive jurisdiction over any disputes arising from these Terms.</p>

          <h3>22.3 Exceptions</h3>
          <p>The following claims are not subject to the arbitration agreement:</p>
          <ul>
            <li>Claims for injunctive or other equitable relief</li>
            <li>Claims related to intellectual property infringement</li>
            <li>Claims within small claims court jurisdiction</li>
          </ul>

          <hr />

          <h2 id="section-23">23. Regional Provisions</h2>

          <p>The following provisions apply based on your location and supplement (but do not replace) the other provisions of these Terms:</p>

          <h3>23.1 European Economic Area (GDPR)</h3>
          <p>If you are located in the European Economic Area (EEA):</p>

          <p><strong>Data Processing Legal Basis:</strong></p>
          <ul>
            <li>AI image generation: Performance of contract (Art. 6(1)(b)) and explicit consent for biometric data (Art. 9(2)(a))</li>
            <li>Subscription management: Performance of contract (Art. 6(1)(b))</li>
            <li>Security: Legitimate interest (Art. 6(1)(f))</li>
          </ul>

          <p><strong>Your Rights:</strong></p>
          <ul>
            <li>Right of access (Art. 15)</li>
            <li>Right to rectification (Art. 16)</li>
            <li>Right to erasure (Art. 17)</li>
            <li>Right to restriction of processing (Art. 18)</li>
            <li>Right to data portability (Art. 20)</li>
            <li>Right to object (Art. 21)</li>
            <li>Right to withdraw consent (Art. 7(3))</li>
          </ul>

          <p><strong>Data Transfers:</strong> International data transfers are protected by Standard Contractual Clauses (SCCs).</p>

          <p><strong>Supervisory Authority:</strong> You have the right to lodge a complaint with a supervisory authority in your member state.</p>

          <h3>23.2 United Kingdom</h3>
          <p>If you are located in the United Kingdom, you have similar rights under the UK GDPR. References to EU GDPR shall be read as references to UK GDPR where applicable.</p>
          <p><strong>Supervisory Authority:</strong> Information Commissioner&apos;s Office (ICO): <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer">https://ico.org.uk/</a></p>

          <h3>23.3 California (CCPA/CPRA)</h3>
          <p>If you are a California resident:</p>

          <p><strong>Your Rights:</strong></p>
          <ul>
            <li>Right to know what personal information is collected, used, shared, or sold</li>
            <li>Right to delete personal information</li>
            <li>Right to correct inaccurate personal information</li>
            <li>Right to opt-out of sale/sharing (we do not sell or share your data)</li>
            <li>Right to non-discrimination for exercising your rights</li>
            <li>Right to limit use of sensitive personal information</li>
          </ul>

          <p><strong>Notice at Collection:</strong> We collect: identifiers (anonymous User ID), biometric information (facial geometry for AI processing), and commercial information (subscription status).</p>

          <p><strong>Sensitive Personal Information:</strong> We process biometric data solely for AI image generation at your request. This data is not used for profiling or inference purposes.</p>

          <p><strong>Do Not Sell or Share:</strong> We do not &quot;sell&quot; or &quot;share&quot; your personal information as defined under the CCPA/CPRA.</p>

          <h3>23.4 Illinois (BIPA)</h3>
          <p>If you are an Illinois resident, the following additional provisions apply:</p>

          <p><strong>Written Consent:</strong> By accepting these Terms and using the AI generation features, you provide written consent to the collection and use of your biometric data as described in Section 9.</p>

          <p><strong>Retention Policy:</strong> We maintain a publicly available retention schedule as described in Section 9.3.</p>

          <p><strong>Destruction:</strong> Biometric data is destroyed within 60 seconds of processing completion or when the purpose has been satisfied, whichever occurs first.</p>

          <p><strong>No Sale or Profit:</strong> We do not sell, lease, trade, or otherwise profit from your biometric data.</p>

          <p><strong>Security:</strong> We store, transmit, and protect biometric data using reasonable security measures, including encryption in transit.</p>

          <h3>23.5 Texas (CUBI)</h3>
          <p>If you are a Texas resident:</p>

          <p><strong>Notice and Consent:</strong> We provide notice and obtain consent before capturing your biometric identifiers, as required by the Capture or Use of Biometric Identifier (CUBI) Act.</p>

          <p><strong>Prohibited Uses:</strong> We do not:</p>
          <ul>
            <li>Capture biometric identifiers for commercial purposes without consent</li>
            <li>Sell, lease, or disclose biometric identifiers except as necessary to provide our Service</li>
            <li>Use biometric identifiers for surveillance or tracking</li>
          </ul>

          <p><strong>Storage:</strong> Biometric identifiers are stored securely and destroyed within 60 seconds of processing completion.</p>

          <h3>23.6 Other US States</h3>
          <p>If you are a resident of Virginia, Colorado, Connecticut, Utah, Oregon, Montana, Delaware, Iowa, New Hampshire, New Jersey, Nebraska, Tennessee, Maryland, Minnesota, Indiana, Kentucky, Rhode Island, or another state with comprehensive privacy laws, you may have additional rights. Please contact us at <a href="mailto:privacy@notforget.ai">privacy@notforget.ai</a> to exercise any applicable rights.</p>

          <h3>23.7 Australia</h3>
          <p>If you are located in Australia:</p>
          <p><strong>Australian Consumer Law:</strong> Nothing in these Terms excludes, restricts, or modifies rights you may have under the Competition and Consumer Act 2010 (Cth).</p>
          <p><strong>Privacy:</strong> Your data is processed in accordance with the Australian Privacy Principles.</p>

          <h3>23.8 Canada (PIPEDA)</h3>
          <p>If you are a Canadian resident:</p>
          <p><strong>Consent:</strong> We obtain meaningful consent for the collection, use, and disclosure of your personal information.</p>
          <p><strong>Access and Correction:</strong> You have the right to access and request correction of your personal information.</p>
          <p><strong>Privacy Commissioner:</strong> You may file a complaint with the Office of the Privacy Commissioner of Canada.</p>

          <h3>23.9 Brazil (LGPD)</h3>
          <p>If you are located in Brazil:</p>
          <p><strong>Your Rights under LGPD:</strong></p>
          <ul>
            <li>Confirmation of processing</li>
            <li>Access to your data</li>
            <li>Correction of incomplete or inaccurate data</li>
            <li>Anonymization, blocking, or deletion of unnecessary data</li>
            <li>Data portability</li>
            <li>Information about sharing with third parties</li>
            <li>Revocation of consent</li>
          </ul>

          <h3>23.10 Japan (APPI)</h3>
          <p>If you are located in Japan, your data is processed in accordance with the Act on the Protection of Personal Information (APPI), including provisions for cross-border data transfers.</p>

          <h3>23.11 South Korea (PIPA)</h3>
          <p>If you are located in South Korea, your data is processed in accordance with the Personal Information Protection Act (PIPA), including requirements for consent and data subject rights.</p>

          <hr />

          <h2 id="section-24">24. Apple-Specific Terms</h2>

          <p>If you downloaded the App from the Apple App Store, the following terms apply:</p>

          <h3>24.1 Acknowledgment</h3>
          <p>You acknowledge and agree that:</p>
          <ul>
            <li>These Terms are between you and WinkyPie only, and not Apple Inc. (&quot;Apple&quot;)</li>
            <li>WinkyPie, not Apple, is solely responsible for the App and its content</li>
            <li>Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App</li>
          </ul>

          <h3>24.2 Third-Party Beneficiary</h3>
          <p>Apple and its subsidiaries are third-party beneficiaries of these Terms. Upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary thereof.</p>

          <h3>24.3 Scope of License</h3>
          <p>The license granted to you for the App is limited to a non-transferable license to use the App on any Apple-branded products that you own or control, as permitted by the Usage Rules set forth in the Apple Media Services Terms and Conditions.</p>

          <h3>24.4 No Apple Liability</h3>
          <p>Apple has no liability whatsoever for any claims relating to the App, including:</p>
          <ul>
            <li>Product liability claims</li>
            <li>Claims that the App fails to conform to legal or regulatory requirements</li>
            <li>Claims arising under consumer protection, privacy, or similar legislation</li>
          </ul>

          <h3>24.5 Intellectual Property Claims</h3>
          <p>In the event of any claim that the App or your use of the App infringes a third party&apos;s intellectual property rights, WinkyPie, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such claim.</p>

          <h3>24.6 Compliance with Third-Party Terms</h3>
          <p>You represent and warrant that:</p>
          <ul>
            <li>You are not located in a country subject to a US Government embargo</li>
            <li>You are not listed on any US Government list of prohibited or restricted parties</li>
          </ul>

          <h3>24.7 Apple Support</h3>
          <p>Apple has no obligation to provide support services for the App. For support, please contact WinkyPie at <a href="mailto:privacy@notforget.ai">privacy@notforget.ai</a>.</p>

          <hr />

          <h2 id="section-25">25. Google Play-Specific Terms</h2>

          <p>If you downloaded the App from the Google Play Store, the following terms apply:</p>

          <h3>25.1 Google Play Terms</h3>
          <p>Your use of the App is also subject to Google Play&apos;s Terms of Service.</p>

          <h3>25.2 Billing</h3>
          <p>All billing and payment processing is handled through Google Play. Google&apos;s refund policies apply to purchases made through Google Play.</p>

          <h3>25.3 User Generated Content</h3>
          <p>In compliance with Google Play&apos;s User Generated Content Policy, you acknowledge that:</p>
          <ul>
            <li>You must accept these Terms before uploading content</li>
            <li>Prohibited content (as defined in Section 12) is not allowed</li>
            <li>You may report inappropriate content through the in-app reporting mechanism</li>
          </ul>

          <h3>25.4 AI-Generated Content Policy</h3>
          <p>In compliance with Google Play&apos;s AI-Generated Content Policy:</p>
          <ul>
            <li>Content generated by our AI Service is clearly AI-generated</li>
            <li>You may report offensive AI-generated content through our reporting mechanism</li>
            <li>We employ content filtering to prevent harmful outputs</li>
          </ul>

          <hr />

          <h2 id="section-26">26. Changes to Terms</h2>

          <h3>26.1 Right to Modify</h3>
          <p>We reserve the right to modify these Terms at any time. Changes may be made for various reasons, including:</p>
          <ul>
            <li>Legal or regulatory requirements</li>
            <li>Changes to our Services or features</li>
            <li>Security enhancements</li>
            <li>Clarifications of existing terms</li>
          </ul>

          <h3>26.2 Notification</h3>
          <p>We will notify you of material changes by:</p>
          <ul>
            <li>Posting updated Terms within the App</li>
            <li>Updating the &quot;Last Updated&quot; date at the top of these Terms</li>
            <li>Providing in-app notification for significant changes</li>
            <li>Emailing you (if we have your email address) for major changes</li>
          </ul>

          <h3>26.3 Continued Use</h3>
          <p>Your continued use of the App after changes become effective constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop using the App and may delete your account.</p>

          <h3>26.4 Review Recommendation</h3>
          <p>We encourage you to review these Terms periodically to stay informed about any changes.</p>

          <hr />

          <h2 id="section-27">27. General Provisions</h2>

          <h3>27.1 Severability</h3>
          <p>If any provision of these Terms is found to be unenforceable or invalid:</p>
          <ul>
            <li>That provision shall be modified to the minimum extent necessary to make it enforceable</li>
            <li>If modification is not possible, the provision shall be severed</li>
            <li>All other provisions shall remain in full force and effect</li>
          </ul>

          <h3>27.2 Entire Agreement</h3>
          <p>These Terms, together with the Privacy Policy and any other documents incorporated by reference, constitute the entire agreement between you and WinkyPie regarding the subject matter herein and supersede all prior agreements and understandings.</p>

          <h3>27.3 Waiver</h3>
          <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. Any waiver must be in writing and signed by us.</p>

          <h3>27.4 Assignment</h3>
          <p>You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.</p>

          <h3>27.5 No Agency</h3>
          <p>Nothing in these Terms creates any agency, partnership, joint venture, or employment relationship between you and WinkyPie.</p>

          <h3>27.6 Force Majeure</h3>
          <p>We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, riots, pandemics, government actions, or internet outages.</p>

          <h3>27.7 Headings</h3>
          <p>Section headings are for convenience only and do not affect the interpretation of these Terms.</p>

          <h3>27.8 Language</h3>
          <p>These Terms are written in English. If translated into other languages, the English version shall prevail in case of conflict.</p>

          <h3>27.9 Electronic Communications</h3>
          <p>By using the App, you consent to receive electronic communications from us. You agree that any notices, agreements, disclosures, or other communications sent electronically satisfy any legal requirement that such communications be in writing.</p>

          <hr />

          <h2 id="section-28">28. Contact Information</h2>

          <p>If you have questions, concerns, or requests regarding these Terms or the App, please contact us:</p>

          <p><strong>WinkyPie by Minimax Development</strong></p>

          <p><strong>General Inquiries and Privacy Requests:</strong><br />
          Email: <a href="mailto:privacy@notforget.ai">privacy@notforget.ai</a></p>

          <p><strong>DMCA and Copyright:</strong><br />
          Email: <a href="mailto:dmca@notforget.ai">dmca@notforget.ai</a></p>

          <p><strong>Location:</strong> Poland</p>

          <p><strong>Response Time:</strong> We aim to respond to all inquiries within 5 business days. For data subject rights requests, we will respond within the timeframes required by applicable law (typically 30 days for GDPR, 45 days for CCPA).</p>

          <hr />

          <h2>Summary of Key Points</h2>

          <p>This summary is provided for convenience only and does not replace the full Terms above.</p>

          <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Key Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Age Requirement</strong></td>
                <td>You must be 16+ years old to use WinkyPie</td>
              </tr>
              <tr>
                <td><strong>Service</strong></td>
                <td>AI-powered image generation using your selfies and our pose library</td>
              </tr>
              <tr>
                <td><strong>Subscriptions</strong></td>
                <td>Auto-renew unless cancelled 24 hours before renewal</td>
              </tr>
              <tr>
                <td><strong>Winky Shots</strong></td>
                <td>No cash value, non-transferable, reset (not carry over) each billing cycle</td>
              </tr>
              <tr>
                <td><strong>Your Content</strong></td>
                <td>You own your uploads; we get a limited license to process them</td>
              </tr>
              <tr>
                <td><strong>Biometric Data</strong></td>
                <td>Facial geometry processed for AI; deleted within 60 seconds</td>
              </tr>
              <tr>
                <td><strong>AI Provider</strong></td>
                <td>FAL.ai; generated images downloaded immediately to your device</td>
              </tr>
              <tr>
                <td><strong>Generated Content</strong></td>
                <td>You own it, but copyright protection may be limited</td>
              </tr>
              <tr>
                <td><strong>Prohibited Content</strong></td>
                <td>CSAM, NCII, violence, hate, illegal content - ZERO TOLERANCE</td>
              </tr>
              <tr>
                <td><strong>Disclaimers</strong></td>
                <td>Service provided &quot;as is&quot;; AI results not guaranteed</td>
              </tr>
              <tr>
                <td><strong>Liability</strong></td>
                <td>Limited to fees paid in last 12 months or $100</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <p className="mt-10 pt-6 border-t border-border italic text-muted">These Terms and Conditions are effective as of January 25, 2026.</p>
          <p><em>WinkyPie by Minimax Development</em></p>
          <p><strong>Version:</strong> 01.2026<br />
          <strong>Document ID:</strong> terms_v_01.2026</p>

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
