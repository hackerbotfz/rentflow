import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-10">Last updated: February 11, 2026</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and RentFlow Inc. ("Company", "we", "us", or "our"), concerning your access to and use of the RentFlow website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto. You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">3. User Representations</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">By using the Site, you represent and warrant that:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You are not a minor in the jurisdiction in which you reside.</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Prohibited Activities</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user, you agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Systematically retrieve data or other content from the Site to create or compile a collection, compilation, database, or directory without written permission from us.</li>
                <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means.</li>
                <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
                <li>Upload or transmit (or attempt to upload or transmit) viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Site.</li>
                <li>Engage in any automated use of the system, such as using scripts to send comments or messages.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <div className="bg-slate-50 rounded-xl p-6 border border-border space-y-2">
                <p className="text-muted-foreground"><strong className="text-foreground">RentFlow Inc.</strong></p>
                <p className="text-muted-foreground">123 Real Estate Blvd, Suite 100</p>
                <p className="text-muted-foreground">New York, NY 10001</p>
                <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
                <p className="text-muted-foreground">Email: legal@rentflow.com</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
