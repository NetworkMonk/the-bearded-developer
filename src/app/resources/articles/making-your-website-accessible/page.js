import Image from "next/image";
import article from "./meta.json";
import ArticleContainer from "@/components/articles/ArticleContainer";
import { lexend } from "@/app/fonts";
import CodeBlock from "@/components/resources/example-components/CodeBlock";

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
            Making Your Website Accessible: A Practical Guide to WCAG Compliance
          </h2>
          <p className="mt-10">
            Building a website that everyone can use isn&apos;t just a
            nice-to-have—it&apos;s a must in today&apos;s inclusive digital
            world. Accessibility ensures your site is usable by people with
            disabilities, boosts SEO, and can even keep you out of legal hot
            water. The Web Content Accessibility Guidelines (WCAG) are the gold
            standard for making this happen. This guide breaks down practical
            steps to make your website WCAG-compliant, from alt text to keyboard
            navigation, so you can create a welcoming experience for all users.
            At The Bearded Developer, we&apos;ve helped businesses make their
            sites accessible, and we&apos;ll show you how to do it without
            breaking a sweat.
          </p>
          <p className="mt-6">
            Why care about accessibility? Beyond doing the right thing, it
            expands your audience—over 1 billion people worldwide have
            disabilities. WCAG compliance also improves your site&apos;s SEO
            (Google loves accessible sites) and reduces legal risks, as
            non-compliance can lead to lawsuits in some regions. Let&apos;s dive
            into a clear plan to make your site inclusive and user-friendly.
          </p>
          <div>
            <Image
              src="/img/articles/making-your-website-accessible/Gemini_Generated_Image_fzyg6kfzyg6kfzyg.png"
              alt="WCAG Accessibility Workflow"
              width={640}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Your WCAG Compliance Checklist
          </h3>
          <p className="mt-4">
            Follow these steps to make your website accessible and
            WCAG-compliant:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-3">
            <li>
              <strong>Add Descriptive Alt Text:</strong> Include meaningful alt
              text for all images to help screen readers describe visuals. For
              example:
              <CodeBlock
                language="html"
                code={`<img src="product.jpg" alt="Red running shoes on a white background">`}
              />
              Avoid vague text like &quot;image&quot; or skipping alt
              attributes.
            </li>
            <li>
              <strong>Ensure Keyboard Navigation:</strong> Make sure all
              interactive elements (buttons, links, forms) are accessible via
              keyboard. Use semantic HTML and add <code>tabindex</code> where
              needed:
              <CodeBlock
                language="html"
                code={`<button tabindex="0">Submit</button>`}
              />
            </li>
            <li>
              <strong>Use Semantic HTML:</strong> Structure your site with
              proper tags like &lt;header&gt;, &lt;nav&gt;, and &lt;main&gt; to
              aid screen readers. Avoid overusing &lt;div&gt; for everything.
            </li>
            <li>
              <strong>Check Color Contrast:</strong> Ensure text and background
              colors meet WCAG&apos;s minimum contrast ratio (4.5:1 for normal
              text). Use tools like WebAIM&apos;s Contrast Checker to verify.
            </li>
            <li>
              <strong>Test with Accessibility Tools:</strong> Run audits with
              tools like WAVE, axe, or Lighthouse (in Chrome DevTools) to
              identify issues. Fix errors like missing form labels or
              low-contrast elements.
            </li>
          </ul>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Tools to Monitor Accessibility
          </h3>
          <p className="mt-4">
            Use these tools to track and improve your site&apos;s accessibility:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>
              <strong>WAVE:</strong> A browser extension to scan for WCAG
              violations.
            </li>
            <li>
              <strong>axe DevTools:</strong> Integrates with Chrome for detailed
              accessibility reports.
            </li>
            <li>
              <strong>Screen Readers:</strong> Test with NVDA (Windows) or
              VoiceOver (Mac) to simulate user experience.
            </li>
          </ul>
          <p className="mt-6">
            Watch out for common pitfalls. Skipping alt text or using decorative
            images without <code>alt=&quot;&quot;</code> can confuse screen
            readers. Ensure forms have clear labels—unlabeled inputs are a major
            barrier. Don&apos;t forget mobile users; test touch navigation for
            accessibility. Overlooking color contrast can exclude visually
            impaired users, so double-check ratios. Our team at The Bearded
            Developer can run accessibility audits and implement fixes, ensuring
            your site meets WCAG 2.1 standards without hassle.
          </p>
          <p className="mt-6">
            Making your website accessible isn&apos;t just about
            compliance—it&apos;s about creating a better experience for
            everyone. A WCAG-compliant site boosts usability, SEO, and customer
            trust. Follow this checklist, test thoroughly, and make inclusivity
            a priority. Or, let The Bearded Developer handle the heavy
            lifting—we&apos;ll make your site as welcoming as a freshly trimmed
            beard.
          </p>
        </div>
        <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0 md:sticky top-10">
          <h3 className={`text-xl font-semibold ${lexend.className}`}>
            Pro Tips for Website Accessibility
          </h3>
          <ul className="mt-4 list-decimal list-inside space-y-2 text-sm">
            <li>
              Test with real users with disabilities for authentic feedback.
            </li>
            <li>
              Add ARIA landmarks (e.g., <code>role=&quot;navigation&quot;</code>
              ) for complex layouts.
            </li>
            <li>
              Document your accessibility efforts for legal compliance records.
            </li>
            <li>
              Update alt text when content changes to stay WCAG-compliant.
            </li>
            <li>
              Use automated tools alongside manual testing for best results.
            </li>
          </ul>
          <p className="mt-4 text-sm">
            Need help?{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact us
            </a>{" "}
            for a tailored accessibility audit and implementation.
          </p>
        </aside>
      </section>
    </ArticleContainer>
  );
}
