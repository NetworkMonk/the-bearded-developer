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
            What to Do When You Find a Security Hole in Your Business
          </h2>
          <p className="mt-8">
            Finding a security vulnerability—whether it was discovered by an
            automated scanner, a pen-test, or an observant developer—can be
            alarming. The right response is calm, methodical, and prioritises
            safety over speed. This article walks through immediate steps,
            containment, communication, remediation, and post-incident review
            from three perspectives: the technician doing the fix, a
            consultant advising the client, and an IT director coordinating the
            organisation.
          </p>

          <div className="mt-6">
            <Image
              src="/img/articles/what-to-do-when-you-find-a-security-hole/hero.jpg"
              alt="Security incident response"
              width={800}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            First Principles: Stay Calm, Preserve Evidence
          </h3>
          <p className="mt-4">
            Do not panic. Quick, uncoordinated changes can destroy the very
            evidence you’ll need to understand the root cause. Your two highest
            priorities are to contain the issue and preserve forensic data so
            the vulnerability can be analysed and remediated correctly.
          </p>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Immediate Technician Steps (first 0–2 hours)
          </h3>
          <ul className="mt-4 list-disc list-inside space-y-3">
            <li>
              <strong>Isolate, don’t delete:</strong> If the vulnerability is in
              a running service, consider isolating the host or service from
              the network rather than removing files. Snapshots and memory
              captures may be needed for analysis.
            </li>
            <li>
              <strong>Collect evidence:</strong> Save relevant logs, take system
              snapshots, preserve timestamps, copy config files, and note who
              discovered the issue and how. Use read-only methods where
              possible to avoid altering state.
            </li>
            <li>
              <strong>Apply temporary mitigations:</strong> If a safe, reversible
              mitigation exists (WAF rule, firewall block, feature toggle),
              apply it while preserving evidence. Avoid changes that obfuscate
              the vulnerability before it’s analysed.
            </li>
            <li>
              <strong>Inform the incident owner:</strong> Notify your security
              lead or the person responsible for incidents with an initial
              summary and list of actions you’ve taken.
            </li>
          </ul>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Consultant / External Advisor Approach
          </h3>
          <p className="mt-4">
            When advising a client, prioritise clear communication and risk
            framing. Give them an actionable plan: short-term containment,
            medium-term remediation, and longer-term hardening. Be explicit
            about what data may have been exposed and recommend whether to
            involve legal counsel or data protection officers.
          </p>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            IT Director / Leadership Checklist
          </h3>
          <p className="mt-4">
            Coordinate stakeholders and make triage decisions: determine the
            business impact, decide on public disclosure or notification, and
            allocate engineering and communications resources. Ensure the
            incident response team has a single source of truth (ticket or
            incident channel) and that decisions are logged.
          </p>

          <div className="mt-6 bg-red-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-red-900`}>
              Quick Do / Don’t
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-red-800">
              <li>
                <strong>Do:</strong> Preserve logs and evidence; isolate the
                issue; inform your incident lead.
              </li>
              <li>
                <strong>Don’t:</strong> Publicly disclose details without
                legal/PR review; overwrite logs or hurriedly patch in a way
                that prevents root-cause analysis.
              </li>
              <li>
                <strong>Do:</strong> Use reversible mitigations (feature flags,
                network blocks) where possible.
              </li>
            </ul>
          </div>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Remediation & Verification
          </h3>
          <p className="mt-4">
            Once evidence is collected and the threat is contained, move to a
            controlled remediation: patch the code, update dependencies,
            rotate credentials, and remove backdoors. After fixes, validate
            with tests, scans, and a staged deploy before returning systems to
            normal operation.
          </p>

          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Post-Incident: Learn and Harden
          </h3>
          <p className="mt-4">
            Conduct a blameless post-mortem that documents the timeline,
            root cause, decisions made, and follow-up actions. Update runbooks
            and automation so the same issue is faster to detect and contain
            next time.
          </p>

          <p className="mt-6">
            If you’re unsure about scope or evidence handling, consult a
            professional incident responder. Mishandling an incident can
            increase risk and complicate legal or compliance requirements.
            Need help? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a>.
          </p>
        </div>

        <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0 md:sticky top-10">
          <h3 className={`text-xl font-semibold ${lexend.className}`}>
            Rapid Response Checklist
          </h3>
          <ul className="mt-4 list-decimal list-inside space-y-2 text-sm">
            <li>Preserve logs and system snapshots (don’t overwrite).</li>
            <li>Isolate the affected service or host from the network.</li>
            <li>Apply temporary mitigations (WAF, firewall rules).</li>
            <li>Rotate credentials and invalidate exposed tokens.</li>
            <li>Notify your security lead / incident owner.</li>
            <li>Engage legal / PR if sensitive data or customers are affected.</li>
            <li>Schedule a post-incident review within 7 days.</li>
          </ul>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              Emergency Contacts
            </h4>
            <p className="text-sm mt-2">
              <strong>Incident Lead:</strong> Your internal security lead
              <br />
              <strong>External:</strong> A trusted incident response partner
              <br />
              <strong>Legal/Comms:</strong> Data protection officer / PR
            </p>
          </div>
        </aside>
      </section>
    </ArticleContainer>
  );
}
