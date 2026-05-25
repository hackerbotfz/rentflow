import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: February 11, 2026</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Collection of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Use of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                <li>Increase the efficiency and operation of the Site.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                <li>Notify you of updates to the Site.</li>
                <li>Send you a newsletter.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Disclosure of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Security of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
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
