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
            Website Backup & Disaster Recovery: A Practical Guide for Small Businesses
          </h2>

          <p className="mt-8">
            Losing your website to a hack, hosting outage, or accidental
            deletion is stressful—and expensive. Backups and a clear recovery
            playbook reduce downtime, protect revenue, and make incident
            response far less painful. This guide is practical and platform
            conscious: Shopify, self-hosted sites (WordPress/Magento), and
            cloud servers.
          </p>

          <div className="mt-6">
            <Image
              src="/img/articles/website-backups-disaster-recovery/hero.png"
              alt="Backup and disaster recovery concept illustration"
              width={800}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            What to back up (and what to think about)
          </h3>
          <p className="mt-4">
            At a minimum: website files, databases, user uploads, DNS records,
            SSL certificates, and any configuration / environment variables.
            For SaaS platforms like Shopify, focus on theme files, product
            exports, and order/customer exports—understand platform limits.
          </p>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Backup strategies that work
          </h3>
          <ul className="mt-4 list-disc list-inside space-y-3">
            <li>
              <strong>3-2-1 rule:</strong> Keep 3 copies, on 2 different media,
              with 1 copy offsite (eg. S3, remote object storage).
            </li>
            <li>
              <strong>Versioning + retention:</strong> Keep incremental backups
              and sensible retention windows (30–90 days for most SMBs).
            </li>
            <li>
              <strong>Automate and monitor:</strong> Scheduled jobs with
              notifications on failure are essential—manual backups fail when
              they’re needed most.
            </li>
          </ul>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Quick restore examples
          </h3>
          <p className="mt-4">
            Here are minimal examples for common cases—adapt to your platform
            and test them in staging first.
          </p>
          <div className="mt-4">
            <CodeBlock code={`# Export MySQL database
mysqldump -u user -p mydb > backup-$(date +%F).sql

# Upload to S3 (Linux)
aws s3 cp backup-2025-11-03.sql s3://my-backups/website/ --storage-class STANDARD_IA

# Restore DB
mysql -u user -p mydb < backup-2025-11-03.sql`} />
          </div>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Platform notes
          </h3>
          <ul className="mt-4 list-disc list-inside space-y-3">
            <li>
              <strong>Shopify:</strong> Use an app or export product/customer/order
              CSVs regularly. Theme code can be versioned with Git (use a local
              copy) but some platform data requires API exports.
            </li>
            <li>
              <strong>Self-hosted (WordPress/Magento):</strong> Combine file
              sync (rsync) and DB dumps; consider managed backup solutions that
              support easy restores.
            </li>
            <li>
              <strong>Cloud servers:</strong> Use cloud snapshots for quick
              full-system restores; keep separate incremental backups for data
              stores and S3-style object storage for assets.
            </li>
          </ul>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Disaster recovery playbook (summary)
          </h3>
          <ol className="mt-4 list-decimal list-inside space-y-3">
            <li>
              <strong>Triage:</strong> Determine scope (is site down, data
              loss, or data leak?).
            </li>
            <li>
              <strong>Choose restore target:</strong> staging first, verify
              integrity, then plan DNS/traffic cutover.
            </li>
            <li>
              <strong>Rotate credentials:</strong> After restore, rotate API
              keys, admin passwords, and any exposed secrets.
            </li>
            <li>
              <strong>Post-incident review:</strong> Document timeline,
              root cause, and update runbooks/tests.
            </li>
          </ol>

          <p className="mt-6">
            Regularly test restores—backups are only useful if they work. If
            you would like, we can help create a restore drill tailored to your
            platform and recovery objectives.
          </p>
        </div>

        <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0 md:sticky top-10">
          <h3 className={`text-xl font-semibold ${lexend.className}`}>
            Backup Quick Checklist
          </h3>
          <ul className="mt-4 list-decimal list-inside space-y-2 text-sm">
            <li>Do you have at least 3 copies of critical data?</li>
            <li>Are backups automated with alerting on failure?</li>
            <li>Have you tested a full restore in staging in the last 90 days?</li>
            <li>Are backups encrypted and access-controlled?</li>
            <li>Do you track RTO (time to recover) and RPO (data loss window)?</li>
          </ul>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>Need a hand?</h4>
            <p className="text-sm mt-2">
              We run restore drills and design backup infra for small businesses.
              <a href="/contact" className="text-blue-600 hover:underline">Contact us</a> to discuss a recovery plan.
            </p>
          </div>
        </aside>
      </section>
    </ArticleContainer>
  );
}
