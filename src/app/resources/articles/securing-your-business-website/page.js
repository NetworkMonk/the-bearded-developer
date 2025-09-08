import Image from "next/image";
import article from "./meta.json";
import ArticleContainer from "@/components/articles/ArticleContainer";
import { lexend } from "@/app/fonts";

export const metadata = {
  title: article.metadata.title,
  description: article.metadata.description,
};

export default function ArticlePage() {
  return (
    <ArticleContainer article={article}>
      <section className="md:p-12 relative grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className={`text-4xl md:text-5xl font-bold ${lexend.className}`}>
            Securing Your Business Website: HTTPS and Beyond Without the
            Headache
          </h2>
          <p className="mt-10">
            Your business website is your digital storefront, but without proper
            security, it&apos;s like leaving the front door wide open. Cyber
            threats are real—hackers, data breaches, and even Google&apos;s SEO
            penalties for unsecured sites can hit hard. Thankfully, securing
            your site with HTTPS and other essentials doesn&apos;t have to feel
            like defusing a bomb. This guide walks you through practical steps
            to lock down your website, boost customer trust, and keep Google
            happy. Whether you&apos;re running a Shopify store or a custom-built
            site, our team at The Bearded Developer has you covered with tips
            that are easier to implement than growing a perfect beard.
          </p>
          <p className="mt-6">
            Let&apos;s start with HTTPS—the foundation of a secure website.
            HTTPS encrypts data between your site and its visitors, protecting
            sensitive info like passwords or payment details. It&apos;s not
            optional anymore; Google Chrome flags non-HTTPS sites as &quot;Not
            Secure,&quot; scaring off customers and hurting your rankings.
            Beyond HTTPS, you&apos;ll need to tackle updates, backups, and other
            defenses to keep hackers at bay. Let&apos;s break it down into a
            clear, actionable plan.
          </p>
          <div>
            <Image
              src="/img/articles/securing-your-business-website/philipp-katzenberger-iIJrUoeRoCQ-unsplash.jpg"
              alt="HTTPS and SSL Setup Diagram"
              width={640}
              height={420}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Your Website Security Checklist
          </h3>
          <p className="mt-4">
            Follow these steps to secure your site and keep it running smoothly:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-3">
            <li>
              <strong>Enable HTTPS with an SSL Certificate:</strong> Purchase or
              get a free SSL certificate (e.g., Let&apos;s Encrypt) through your
              hosting provider. Install it to switch your site from HTTP to
              HTTPS. For Shopify users, SSL is built-in—double-check it&apos;s
              active in your admin settings.
            </li>
            <li>
              <strong>Redirect HTTP to HTTPS:</strong> Set up 301 redirects to
              ensure all traffic uses the secure protocol. This avoids duplicate
              content issues and keeps SEO intact.
            </li>
            <li>
              <strong>Keep Software Updated:</strong> Regularly update your CMS
              (e.g., WordPress, Shopify), themes, and plugins. Outdated software
              is a hacker&apos;s favorite entry point.
            </li>
            <li>
              <strong>Implement Strong Passwords and 2FA:</strong> Enforce
              complex passwords and two-factor authentication for all admin
              accounts to prevent unauthorized access.
            </li>
            <li>
              <strong>Back Up Regularly:</strong> Schedule automated backups
              through your host or plugins like UpdraftPlus (WordPress). Store
              backups off-site for quick recovery.
            </li>
          </ul>
          <p className="mt-6">
            These steps form the core of your security strategy, but don&apos;t
            stop there. Advanced measures like a Web Application Firewall (WAF)
            or regular security audits can add extra layers of protection. For
            example, Cloudflare offers WAF and DDoS protection, which is great
            for small businesses.
          </p>
          <Image
            src="/img/articles/securing-your-business-website/flyd-63Sg6s3EocE-unsplash.jpg"
            alt="Website Security Audit Process"
            width={640}
            height={420}
            className="mx-auto my-8 rounded-lg shadow-md"
          />
          <p className="mt-6">
            Of course, security isn&apos;t foolproof. Common pitfalls include
            misconfigured SSL certificates, which can trigger browser warnings,
            or neglecting plugin updates, which can expose vulnerabilities. If
            you&apos;re on WordPress, avoid free themes from untrusted
            sources—they often hide malicious code. And don&apos;t forget about
            your users—train your team to spot phishing emails that could
            compromise admin access. Our team can run a full security audit,
            from SSL setup to penetration testing, to ensure your site is locked
            tight.
          </p>
          <p className="mt-6">
            Securing your website isn&apos;t just about avoiding
            disasters—it&apos;s about building trust. Customers want to know
            their data is safe, and a secure site signals professionalism. Plus,
            Google rewards HTTPS sites with better rankings, so it&apos;s a
            win-win. Ready to lock down your digital storefront? Follow these
            steps, test thoroughly, and keep monitoring. Or, if you&apos;d
            rather focus on your business, let The Bearded Developer handle the
            techy bits—we&apos;ll make your site as secure as a fortress and
            twice as friendly.
          </p>
        </div>
        <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0">
          <div className="sticky top-10">
            <h3 className={`text-xl font-semibold ${lexend.className}`}>
              Pro Tips for Website Security
            </h3>
            <ul className="mt-4 list-decimal list-inside space-y-2 text-sm">
              <li>
                Use a reputable hosting provider with built-in security
                features, like SiteGround or WP Engine.
              </li>
              <li>
                Monitor your site with tools like Sucuri or Wordfence for
                real-time threat detection.
              </li>
              <li>
                Limit login attempts to block brute-force attacks—plugins like
                Login Lockdown can help.
              </li>
              <li>
                Regularly scan for malware, especially after adding new plugins
                or themes.
              </li>
              <li>
                Consider a CDN like Cloudflare to boost speed and security in
                one go.
              </li>
            </ul>
            <p className="mt-4 text-sm">
              Need help?{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact us
              </a>{" "}
              for a custom security plan tailored to your site.
            </p>
          </div>
        </aside>
      </section>
    </ArticleContainer>
  );
}
