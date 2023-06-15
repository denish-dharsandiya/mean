import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Seeder } from "nestjs-seeder";
import { Content } from "src/common/schema/content.schema";

@Injectable()
export class ContentSeeder implements Seeder {
    constructor(@InjectModel(Content.name) private readonly content: Model<Content>) {}

    async seed(): Promise<any> {
        await this.drop();
        var json = [
      {
          title: 'About Us',
          description:'<h1><strong>About Pangi.</strong></h1>'+
              '<p>&nbsp;</p>'+
              '<p>Pangi is a social, all-in-one travel app for local and global travel.</p>'+
              '<p>When people are planning a trip, they often open the same internet tabs: TripAdvisor, Yelp, Google Maps, maybe AllTrails or some others. Using Pangi, instead of looking at the same lists of places that everyone else is looking at, you are able to perform detailed searches of unique places that other people have already explored and posted (local spots, off the beaten path spots, or even popular spots but with updated, first-hand details).</p>'+
              '<p>Any spot can be discovered, saved, and used to plan a trip using Pangi&rsquo;s Itinerary feature &ndash; which also allows for trip collaborative planning with friends who use the app. Because every spot is associated with an exact location and tagged so that it becomes searchable, Pangi is serves as a social utility.</p>'        
      },
      {
          title: 'Terms And Condition',
          description: '<p><strong>TERMS OF SERVICE</strong><strong>&nbsp;</strong></p>'+
              '<p>Last updated:&nbsp;11/01/2021</p><ol><li><strong>Introduction</strong></li></ol>'+
              '<p>Welcome to&nbsp;<strong>Pangi, Inc.</strong>&nbsp;(&ldquo;<strong>Company</strong>&rdquo;, &ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>our</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;)! As you have just clicked our Terms of Service, please pause, grab a cup of coffee and carefully read the following pages. It will take you approximately 20&nbsp;minutes.</p>'+
              '<p>These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;, &ldquo;<strong>Terms of Service</strong>&rdquo;) govern your use of&nbsp;our web pages located at http://Pangi.com and our mobile application&nbsp;Pangi (together or individually &ldquo;<strong>Service</strong>&rdquo;)&nbsp;operated by&nbsp;Pangi, Inc.</p>'+
              '<p>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here http://Pangi.com/privacy.</p>'+
              '<p>Your agreement with us includes these Terms&nbsp;and our Privacy Policy&nbsp;(&ldquo;<strong>Agreements</strong>&rdquo;). You acknowledge that you have read and understood Agreements, and agree to be bound of them.</p>'+
              '<p>If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at <a href="mailto:info@Pangi.com">info@Pangi.com</a> so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.</p>'+
              '<p>Thank you for being responsible.</p>'+
              '<ol><li><strong>Communications</strong></li></ol>'+
              '<p>By creating an Account on our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at.</p>'+
              '<ol><li><strong>Purchases</strong></li></ol>'+
              '<p>If you wish to purchase any product or service made available through Service (&ldquo;<strong>Purchase</strong>&rdquo;), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>'+
              '<p>You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.</p>'+
              '<p>We may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties&nbsp;subject to our Privacy Policy.</p>'+
              '<p>We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.</p>'+
              '<p>We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.</p>'+
              '<ol><li><strong>Contests, Sweepstakes and Promotions</strong></li></ol>'+
              '<p>Any contests, sweepstakes or other promotions (collectively, &ldquo;<strong>Promotions</strong>&rdquo;) made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules&nbsp;as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.</p>'+
              '<ol><li><strong>Subscriptions</strong></li></ol>'+
              '<p>Some parts of Service are billed on a subscription basis (&ldquo;<strong>Subscription(s)</strong>&rdquo;). You will be billed in advance on a recurring and periodic basis (&ldquo;<strong>Billing Cycle</strong>&rdquo;). Billing cycles are set&nbsp;either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.</p>'+
              '<p>At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or&nbsp;Pangi, Inc.&nbsp;cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting&nbsp;Pangi, Inc.&nbsp;customer support team.</p>'+
              '<p>A valid payment method, including&nbsp;credit card or PayPal, is required to process the payment for your subscription. You shall provide&nbsp;Pangi, Inc.&nbsp;with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize&nbsp;Pangi, Inc.&nbsp;to charge all Subscription fees incurred through your account to any such payment instruments.</p>'+
              '<p>Should automatic billing fail to occur for any reason,&nbsp;Pangi, Inc.&nbsp;will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.</p>'+
              '<ol><li><strong>Fee Changes</strong></li></ol>'+
              '<p>Pangi, Inc., in its sole discretion and at any time, may modify Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.</p>'+
              '<p>Pangi, Inc.&nbsp;will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.</p>'+
              '<p>Your continued use of Service after Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.</p>'+
              '<ol><li><strong>Refunds</strong></li></ol>'+
              '<p>We issue refunds for Contracts within ten (10) days of the original purchase of the Contract.</p>'+
              '<ol><li><strong>Content</strong></li></ol>'+
              '<p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (&ldquo;<strong>Content</strong>&rdquo;). You are responsible for Content that you post on or through Service, including its legality, reliability, and appropriateness.</p>'+
              '<p>By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.</p>'+
              '<p>You retain any and all of your rights to any Content you submit, post or display on or through Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through Service. However, by posting Content using Service you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through Service. You agree that this license includes the right for us to make your Content available to other users of Service, who may also use your Content subject to these Terms.</p>'+
              '<p>Pangi, Inc.&nbsp;has the right but not the obligation to monitor and edit all Content provided by users.</p>'+
              '<p>In addition, Content found on or through this Service are the property of&nbsp;Pangi, Inc.&nbsp;or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.</p>'+
              '<ol<li><strong>Prohibited Uses</strong></li></ol>'+
              '<p>You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:</p>'+
              '<ul>'+
                  '<li>In any way that violates any applicable national or international law or regulation.</li>'+
                  '<li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>'+
                  '<li>To transmit, or procure the sending of, any advertising or promotional material, including any &ldquo;junk mail&rdquo;, &ldquo;chain letter,&rdquo; &ldquo;spam,&rdquo; or any other similar solicitation.</li>'+
                  '<li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>'+
                  '<li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>'+
                  '<li>To engage in any other conduct that restricts or inhibits anyone&rsquo;s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.</li>'+
              '</ul>'+
              '<p>Additionally, you agree not to:</p>'+
              '<ul>'+
                  '<li>Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party&rsquo;s use of Service, including their ability to engage in real time activities through Service.</li>'+
                  '<li>Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service.</li>'+
                  '<li>Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent.</li>'+
                  '<li>Use any device, software, or routine that interferes with the proper working of Service.</li>'+
                  '<li>Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.</li>'+
                  '<li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service.</li>'+
                  '<li>Attack Service via a denial-of-service attack or a distributed denial-of-service attack.</li>'+
                  '<li>Take any action that may damage or falsify Company rating.</li>'+
                  '<li>Otherwise attempt to interfere with the proper working of Service.</li>'+
              '</ul>'+
              '<ol><li><strong>Analytics</strong></li></ol>'+
              '<p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>'+
              '<p><strong>Google Analytics</strong></p>'+
              '<p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.</p>'+
              '<p>For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>'+
              '<p>We also encourage you to review the Google&rsquo;s policy for safeguarding your data: <a href="https://support.google.com/analytics/answer/6004245">https://support.google.com/analytics/answer/6004245</a>.</p>'+
              '<p><strong>Firebase</strong></p>'+
              '<p>Firebase is analytics service provided by Google Inc.</p>'+
              '<p>You may opt-out of certain Firebase features through your mobile device settings, such as your device advertising settings or by following the instructions provided by Google in their Privacy Policy: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>'+
              '<p>For more information on what type of information Firebase collects, please visit the Google Privacy Terms web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>'+
              '<ol><li><strong>No Use By Minors</strong></li></ol>'+
              '<p>Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using any of Company, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of Service.</p>'+
              '<ol><li><strong>Accounts</strong></li></ol>'+
              '<p>When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service.</p>'+
              '<p>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>'+
              '<p>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene.</p>'+
              '<p>We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.</p>'+
              '<ol><li><strong>Intellectual Property</strong></li></ol>'+
              '<p>Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of&nbsp;Pangi, Inc.&nbsp;and its licensors. Service is protected by copyright, trademark, and other laws of&nbsp;the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of&nbsp;Pangi, Inc..</p>'+
              '<ol><li><strong>Copyright Policy</strong></li></ol>'+
              '<p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights (&ldquo;<strong>Infringement</strong>&rdquo;) of any person or entity.</p>'+
              '<p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to&nbsp;<a href="mailto:legal@Pangi.com">legal@Pangi.com</a>, with the subject line: &ldquo;Copyright Infringement&rdquo; and include in your claim a detailed description of the alleged Infringement as detailed below, under &ldquo;DMCA Notice and Procedure for Copyright Infringement Claims&rdquo;</p>'+
              '<p>You may be held accountable for damages (including costs and attorneys&rsquo; fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.</p>'+
              '<p>&nbsp;</p>'+
              '<ol><li><strong>DMCA Notice and Procedure for Copyright Infringement Claims</strong></li></ol>'+
              '<p>You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):</p>'+
              '<ul>'+
                  '<li>an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright&rsquo;s interest;</li>'+
                  '<li>a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;</li>'+
                  '<li>identification of the URL or other specific location on Service where the material that you claim is infringing is located;</li>'+
                  '<li>your address, telephone number, and email address;</li>'+
                  '<li>a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</li>'+
                  '<li>a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner&rsquo;s behalf.</li>'+
              '</ul>'+
              '<p>You can contact our Copyright Agent via email at&nbsp;<a href="mailto:legal@Pangi.com">legal@Pangi.com</a></p>'+
              '<ol>'+
                  '<li><strong>Error Reporting and Feedback</strong></li>'+
              '</ol>'+
              '<p>You may provide us&nbsp;either directly at <a href="mailto:info@Pangi.com">info@Pangi.com</a> or via third party sites and tools&nbsp;with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (&ldquo;<strong>Feedback</strong>&rdquo;). You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.</p>'+
              '<p>The third party sites and tools mentioned above include the following:</p>'+
              '<p><strong>Firebase Crashlytics</strong></p>'+
              '<p>Firebase Crashlytics is bug reporting service provided by Google Inc.</p>'+
              '<p>You may opt-out of certain Firebase features through your mobile device settings, such as your device advertising settings or by following the instructions provided by Google in their Privacy Policy: https://policies.google.com/privacy?hl=en</p>'+
              '<p>For more information on what type of information Firebase collects, please visit the Google Privacy Terms web page: https://policies.google.com/privacy?hl=en</p>'+
              '<ol>'+
                  '<li><strong>Links To Other Web Sites</strong></li>'+
              '</ol>'+
              '<p>Our Service may contain links to third party web sites or services that are not owned or controlled by&nbsp;Pangi, Inc.</p>'+
              '<p>Pangi, Inc.&nbsp;has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.</p>'+
              '<p>YOU ACKNOWLEDGE AND AGREE THAT&nbsp;Pangi, Inc.&nbsp;SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR SERVICES.</p>'+
              '<p>WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.</p>'+
              '<ol>'+
                  '<li><strong>Disclaimer Of Warranty </strong></li>'+
              '</ol>'+
              '<p>THESE SERVICES ARE PROVIDED BY COMPANY ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.</p>'+
              '<p>NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.</p>'+
              '<p>COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.</p>'+
              '<p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>'+
              '<ol>'+
                  '<li><strong>Limitation Of Liability</strong></li>'+
              '</ol>'+
              '<p>EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS&rsquo; FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.</p>'+
              '<ol>'+
                  '<li><strong>Termination</strong></li>'+
              '</ol>'+
              '<p>We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.</p>'+
              '<p>If you wish to terminate your account, you may simply discontinue using Service.</p>'+
              '<p>All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>'+
              '<ol><li><strong>Governing Law</strong></li></ol>'+
              '<p>These Terms shall be governed and construed in accordance with the laws of&nbsp;State of California&nbsp;without regard to its conflict of law provisions.</p>'+
              '<p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.</p>'+
              '<ol><li><strong>Changes To Service</strong></li></ol>'+
              '<p>We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.</p>'+
              '<ol><li><strong>Amendments To Terms</strong></li></ol>'+
              '<p>We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.</p>'+
              '<p>Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.</p>'+
              '<p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.</p>'+
              '<ol><li><strong>Waiver And Severability</strong></li></ol>'+
              '<p>No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.</p>'+
              '<p>If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.</p>'+
              '<ol><li><strong>Acknowledgement</strong></li></ol>'+
              '<p>BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.</p>'+
              '<ol><li><strong>Contact Us</strong></li></ol>'+
              '<p>Please send your feedback, comments, requests for technical support:</p>'+
              '<p>By email: <a href="mailto:info@Pangi.com">info@Pangi.com</a></p>'+
              '<p>&nbsp;</p>'
      },
      {
          title: 'Help & Feedback',
          description: '<h1><strong>Help &amp; Feedback Pangi.</strong></h1>'+
              '<p>&nbsp;</p>'+        
              '<p>Pangi is a social, all-in-one travel app for local and global travel.</p>'+        
              '<p>When people are planning a trip, they often open the same internet tabs: TripAdvisor, Yelp, Google Maps, maybe AllTrails or some others. Using Pangi, instead of looking at the same lists of places that everyone else is looking at, you are able to perform detailed searches of unique places that other people have already explored and posted (local spots, off the beaten path spots, or even popular spots but with updated, first-hand details).</p>'+        
              '<p>Any spot can be discovered, saved, and used to plan a trip using Pangi&rsquo;s Itinerary feature &ndash; which also allows for trip collaborative planning with friends who use the app. Because every spot is associated with an exact location and tagged so that it becomes searchable, Pangi is serves as a social utility.</p>'
      },
      {
          title: 'Privacy Policy',
          description: '<p><strong>PRIVACY POLICY</strong></p>'+
              '<p>Effective date: 11/01/2021</p>'+
              '<ol><li><strong>Introduction</strong></li></ol>'+
              '<p>Welcome to&nbsp;<strong>Pangi, Inc.</strong></p>'+
              '<p>Pangi, Inc.&nbsp;(&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;) operates&nbsp;https://Pangi.com/ and Pangi mobile application&nbsp;(hereinafter referred to as &ldquo;<strong>Service</strong>&rdquo;).</p>'+
              '<p>Our Privacy Policy governs your visit to&nbsp;https://Pangi.com/ and Pangi mobile application, and explains how we collect, safeguard and disclose information that results from your use of our Service.</p>'+
              '<p>We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.&nbsp;</p>'+
              '<p>Our Terms and Conditions (&ldquo;<strong>Terms</strong>&rdquo;) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (&ldquo;<strong>agreement</strong>&rdquo;).</p>'+
              '<ol><li><strong>Definitions</strong></li></ol>'+
              '<p><strong>SERVICE&nbsp;</strong>means the&nbsp;https://Pangi.com/ website and Pangi mobile application&nbsp;operated by&nbsp;Pangi, Inc.</p>'+
              '<p><strong>PERSONAL DATA</strong>&nbsp;means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p>'+
              '<p><strong>USAGE DATA</strong>&nbsp;is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).</p>'+
              '<p><strong>COOKIES</strong>&nbsp;are small files stored on your device (computer or mobile device).</p>'+
              '<p><strong>DATA CONTROLLER</strong>&nbsp;means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.</p>'+
              '<p><strong>DATA PROCESSORS (OR SERVICE PROVIDERS)</strong>&nbsp;means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.</p>'+
              '<p><strong>DATA SUBJECT&nbsp;</strong>is any living individual who is the subject of Personal Data.</p>'+
              '<p><strong>THE USER&nbsp;</strong>is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.</p>'+
              '<ol><li><strong>Information Collection and Use</strong></li></ol>'+
              '<p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>'+
              '<ol><li><strong>Types of Data Collected</strong></li></ol>'+
              '<p><strong>Personal Data</strong></p>'+
              '<p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&ldquo;<strong>Personal Data</strong>&rdquo;). Personally identifiable information may include, but is not limited to:</p>'+
              '<ul>'+
                  '<li>Email address</li>'+
                  '<li>First name and last name</li>'+
                  '<li>Phone number</li>'+
                  '<li>Cookies and Usage Data</li>'+
              '</ul>'+
              '<p>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us&nbsp;by following the unsubscribe link.</p>'+
              '<p><strong>Usage Data</strong></p>'+
              '<p>We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through a mobile device (&ldquo;<strong>Usage Data</strong>&rdquo;).</p>'+
              '<p>This Usage Data may include information such as your computer&rsquo;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>'+
              '<p>When you access Service with a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</p>'+
              '<p><strong>Location Data</strong></p>'+
              '<p>We may use and store information about your location if you give us permission to do so (&ldquo;<strong>Location Data</strong>&rdquo;). We use this data to provide features of our Service, to improve and customize our Service.</p>'+
              '<p>You can enable or disable location services when you use our Service at any time by way of your device settings.</p>'+
              '<p><strong>Tracking Cookies Data</strong></p>'+
              '<p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p>'+
              '<p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.</p>'+
              '<p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>'+
              '<p>Examples of Cookies we use:</p>'+
              '<ul>'+
                  '<li><strong>Session Cookies:</strong>We use Session Cookies to operate our Service.</li>'+
                  '<li><strong>Preference Cookies:</strong>We use Preference Cookies to remember your preferences and various settings.</li>'+
                  '<li><strong>Security Cookies:</strong>We use Security Cookies for security purposes.</li>'+
                  '<li><strong>Advertising Cookies:</strong>Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.</li>'+
              '</ul>'+
              '<ol><li><strong>Use of Data</strong></li></ol>'+
              '<p>Pangi, Inc.&nbsp;uses the collected data for various purposes:</p>'+
              '<ul>'+
                  '<li>to provide and maintain our Service;</li>'+
                  '<li>to notify you about changes to our Service;</li>'+
                  '<li>to allow you to participate in interactive features of our Service when you choose to do so;</li>'+
                  '<li>to provide customer support;</li>'+
                  '<li>to gather analysis or valuable information so that we can improve our Service;</li>'+
                  '<li>to monitor the usage of our Service;</li>'+
                  '<li>to detect, prevent and address technical issues;</li>'+
                  '<li>to fulfill any other purpose for which you provide it;</li>'+
                  '<li>to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;</li>'+
                  '<li>to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;</li>'+
                  '<li>to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;</li>'+
                  '<li>in any other way we may describe when you provide the information;</li>'+
                  '<li>for any other purpose with your consent.</li>'+
              '</ul>'+
              '<ol><li><strong>Retention of Data</strong></li></ol>'+
              '<p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>'+
              '<p>We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.</p>'+
              '<ol><li><strong>Transfer of Data</strong></li></ol>'+
              '<p>Your information, including Personal Data, may be transferred to &ndash; and maintained on &ndash; computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>'+
              '<p>If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</p>'+
              '<p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>'+
              '<p>Pangi, Inc.&nbsp;will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.</p>'+
              '<p>In certain circumstances, you have the following data protection rights:</p>'+
              '<ul>'+
                  '<li>the right to access, update or to delete the information we have on you;</li>'+
                  '<li>the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;</li>'+
                  '<li>the right to object. You have the right to object to our processing of your Personal Data;</li>'+
                  '<li>the right of restriction. You have the right to request that we restrict the processing of your personal information;</li>'+
                  '<li>the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;</li>'+
                  '<li>the right to withdraw consent.&nbsp;You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;</li>'+
              '</ul>'+
              '<p>Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.</p>'+
              '<p>You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p>'+
              '<ol>'+
                  '<li><strong>Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)</strong></li>'+
              '</ol>'+
              '<p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law&rsquo;s reach stretches well beyond California to require a person or company in the United States (and conceivable the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy. &ndash; See more at: https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/</p>'+
              '<p>According to CalOPPA we agree to the fol`lowing:</p>'+
              '<ul>'+
                  '<li>users can visit our site anonymously;</li>'+
                  '<li>our Privacy Policy link includes the word &ldquo;Privacy&rdquo;, and can easily be found on the page specified above on the home page of our website;</li>'+
                  '<li>users will be notified of any privacy policy changes on our Privacy Policy Page;</li>'+
                  '<li>users are able to change their personal information by emailing us at <a href="mailto:info@Pangi.com">info@Pangi.com</a>.</li>'+
              '</ul>'+
              '<p>Our Policy on &ldquo;Do Not Track&rdquo; Signals:</p>'+
              '<p>We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.</p>'+
              '<p>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>'+
              '<ol>'+
                  '<li><strong>Your Data Protection Rights under the California Consumer Privacy Act (CCPA)</strong></li>'+
              '</ol>'+
              '<p>If you are a California resident, you are entitled to learn what data we collect about you, ask to delete your data and not to sell (share) it. To exercise your data protection rights, you can make certain requests and ask us:</p>'+
              '<ul>'+
                  '<li><strong>What personal information we have about you</strong>. If you make this request, we will return to you:</li>'+
                  '<li>The categories of personal information we have collected about you.</li>'+
                  '<li>The categories of sources from which we collect your personal information.</li>'+
                  '<li>The business or commercial purpose for collecting or selling your personal information.</li>'+
                  '<li>The categories of third parties with whom we share personal information.</li>'+
                  '<li>The specific pieces of personal information we have collected about you.</li>'+
                  '<li>A list of categories of personal information that we have sold, along with the category of any other company we sold it to. If we have not sold your personal information, we will inform you of that fact.</li>'+
                  '<li>A list of categories of personal information that we have disclosed for a business purpose, along with the category of any other company we shared it with.</li>'+
              '</ul>'+
              '<p>Google Analytics</p>'+
              '<p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.</p>'+
              '<p>For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: https://policies.google.com/privacy?hl=en</p>'+
              '<p>We also encourage you to review the Google&rsquo;s policy for safeguarding your data: https://support.google.com/analytics/answer/6004245.</p>'+
              '<p><strong>Firebase</strong></p>'+
              '<p>Firebase is analytics service provided by Google Inc.</p>'+
              '<p>You may opt-out of certain Firebase features through your mobile device settings, such as your device advertising settings or by following the instructions provided by Google in their Privacy Policy: https://policies.google.com/privacy?hl=en</p>'+
              '<p>For more information on what type of information Firebase collects, please visit the Google Privacy Terms web page: https://policies.google.com/privacy?hl=en</p>'+
              '<ol><li><strong>CI/CD tools</strong></li></ol>'+
              '<p>We may use third-party Service Providers to automate the development process of our Service.</p>'+
              '<p>GitLab CI (Continuous Integration) service is a part of GitLab that build and test the software whenever developer pushes code to application.</p>'+
              '<p>GitLab CD (Continuous Deployment) is a software service that places the changes of every code in the production which results in every day deployment of production.</p>'+
              '<p>For more information on what data GitLab CI/CD collects for what purpose and how the protection of the data is ensured, please visit GitLab CI/CD Privacy Policy page: https://about.gitlab.com/privacy/.</p>'+
              '<ol><li><strong>Advertising</strong></li></ol>'+
              '<p>We may use third-party Service Providers to show advertisements to you to help support and maintain our Service.</p>'+
              '<p>Google AdSense DoubleClick Cookie</p>'+
              '<p>Google, as a third party vendor, uses cookies to serve ads on our Service. Google&rsquo;s use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our Service or other websites on the Internet.</p>'+
              '<p>You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting the Google Ads Settings web page: http://www.google.com/ads/preferences/</p>'+
              '<p>AdMob by Google</p>'+
              '<p>AdMob by Google is provided by Google Inc.</p>'+
              '<p>You can opt-out from the AdMob by Google service by following the instructions described by Google: https://support.google.com/ads/answer/2662922?hl=en</p>'+
              '<p>For more information on how Google uses the collected information, please visit the &ldquo;How Google uses data when you use our partners&rsquo; sites or app&rdquo; page: http://www.google.com/policies/privacy/partners/ or visit the Privacy Policy of Google: http://www.google.com/policies/privacy/</p>'+
              '<ol><li><strong>Behavioral Remarketing</strong></li></ol>'+
              '<p>Pangi, Inc.&nbsp;uses remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service.</p>'+
              '<p>Google Ads (AdWords)</p>'+
              '<p>Google Ads (AdWords) remarketing service is provided by Google Inc.</p>'+
              '<p>You can opt-out of Google Analytics for Display Advertising and customize the Google Display Network ads by visiting the Google Ads Settings page: http://www.google.com/settings/ads</p>'+
              '<p>Google also recommends installing the Google Analytics Opt-out Browser Add-on &ndash; https://tools.google.com/dlpage/gaoptout &ndash; for your web browser. Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics.</p>'+
              '<p>For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: https://policies.google.com/privacy?hl=en</p>'+
              '<p>Facebook</p>'+
              '<p>Facebook remarketing service is provided by Facebook Inc.</p>'+
              '<p>You can learn more about interest-based advertising from Facebook by visiting this page: https://www.facebook.com/help/164968693837950</p>'+
              '<p>To opt-out from Facebook&rsquo;s interest-based ads, follow these instructions from Facebook: https://www.facebook.com/help/568137493302217</p>'+
              '<p>Facebook adheres to the Self-Regulatory Principles for Online Behavioural Advertising established by the Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies through the Digital Advertising Alliance in the USA http://www.aboutads.info/choices/, the Digital Advertising Alliance of Canada in Canada http://youradchoices.ca/ or the European Interactive Digital Advertising Alliance in Europe http://www.youronlinechoices.eu/, or opt-out using your mobile device settings.</p>'+
              '<p>For more information on the privacy practices of Facebook, please visit Facebook&rsquo;s Data Policy: https://www.facebook.com/privacy/explanation</p>'+
              '<ol><li><strong>Payments</strong></li></ol>'+
              '<p>We may provide paid products and/or services within Service. In that case, we use third-party services for payment processing (e.g. payment processors).</p>'+
              '<p>We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.</p>'+
              '<p>The payment processors we work with are:</p>'+
              '<p>PayPal or Braintree:</p>'+
              '<p>Their Privacy Policy can be viewed at&nbsp;https://www.paypal.com/webapps/mpp/ua/privacy-full</p>'+
              '<p>Apple Store In-App Payments:</p>'+
              '<p>Their Privacy Policy can be viewed at: https://www.apple.com/legal/privacy/en-ww/ / https://support.apple.com/en-us/HT203027</p>'+
              '<p>Google Play In-App Payments:</p>'+
              '<p>Their Privacy Policy can be viewed at: https://policies.google.com/privacy?hl=en&amp;gl=us / https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&amp;ldt=privacynotice&amp;ldl=en</p>'+
              '<ol><li><strong>Links to Other Sites</strong></li></ol>'+
              '<p>Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party&rsquo;s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>'+
              '<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>'+
              '<ol><li><strong>Children&rsquo;s Privacy</strong></li></ol>'+
              '<p>Our Services are not intended for use by children under the age of 13 (&ldquo;<strong>Children</strong>&rdquo;).</p>'+
              '<p>We do not knowingly collect personally identifiable information from Children under 13. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.</p>'+
              '<ol><li><strong>Changes to This Privacy Policy</strong></li></ol>'+
              '<p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>'+
              '<p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update &ldquo;effective date&rdquo; at the top of this Privacy Policy.</p>'+
              '<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>'+
              '<ol><li><strong>Contact Us</strong></li></ol>'+
              '<p>If you have any questions about this Privacy Policy, please contact us:</p>'+
              '<p>By email: <a href="mailto:info@Pangi.com">info@Pangi.com</a>.</p>'
      },
    ];
    
        // Insert into the database.
        return await this.content.insertMany(json);
    }

    async drop(): Promise<any> {
        return await this.content.deleteMany({});
    }
}