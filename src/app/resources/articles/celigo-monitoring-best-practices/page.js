import Image from "next/image";
import article from "./meta.json";
import ArticleContainer from "@/components/articles/ArticleContainer";
import { lexend } from "@/app/fonts";
import Link from "next/link";

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
            Celigo Monitoring Best Practices: Catch Integration Issues Before
            They Break
          </h2>
          <p className="mt-10">
            Here&apos;s a question: how do you currently know when your Celigo
            integrations fail? If your answer is &quot;when someone tells me
            orders aren&apos;t syncing,&quot; you&apos;re not alone—but
            you&apos;re also discovering problems hours or days too late. By the
            time your warehouse manager notices NetSuite inventory is wrong,
            you&apos;ve already oversold products you don&apos;t have. By the
            time finance reports missing revenue, you&apos;ve lost visibility
            into your business.
          </p>
          <p className="mt-6">
            Proper Celigo monitoring isn&apos;t about watching dashboards all
            day. It&apos;s about configuring intelligent alerts that catch
            problems immediately, implementing regular health checks that detect
            issues before they cause failures, and establishing proactive
            maintenance routines that prevent errors from happening in the first
            place.
          </p>
          <p className="mt-6">
            This guide covers the essential monitoring practices that separate
            amateur Celigo implementations from enterprise-grade reliability.
            Whether you&apos;re managing integrations yourself or evaluating
            managed services, understanding these best practices ensures your
            integrations run smoothly and your business operations stay
            uninterrupted.
          </p>
          <div>
            <Image
              src="/img/articles/celigo-monitoring-best-practices/monitoring-header.jpg"
              alt="Celigo Integration Monitoring Best Practices"
              width={640}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            The Cost of Poor Monitoring
          </h3>
          <p className="mt-4">
            Before diving into monitoring best practices, it&apos;s worth
            understanding what poor monitoring actually costs your business.
            These aren&apos;t hypothetical scenarios—these are real problems
            I&apos;ve seen at businesses running Celigo without proper
            monitoring:
          </p>
          <div className="mt-6 space-y-4">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className={`font-semibold ${lexend.className} text-red-900`}>
                Revenue Loss from Missed Orders
              </h4>
              <p className="mt-2 text-red-800 text-sm">
                Shopify to NetSuite integration fails on Friday evening. No
                monitoring alerts configured. Orders continue flowing through
                Shopify all weekend, but nothing syncs to NetSuite. Monday
                morning: 127 orders missing from your fulfillment queue.
                Customers start calling Tuesday asking where their orders are.{" "}
                <strong>Result:</strong> £18,000 in delayed shipments, angry
                customers, and expedited shipping costs to apologize.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4
                className={`font-semibold ${lexend.className} text-yellow-900`}
              >
                Inventory Overselling
              </h4>
              <p className="mt-2 text-yellow-800 text-sm">
                NetSuite inventory sync to e-commerce stops updating. Without
                monitoring, you don&apos;t notice for 3 days. Shopify shows 47
                units available when you actually have 3. You sell 44 units you
                don&apos;t have. <strong>Result:</strong> Order cancellations,
                refund processing time, damaged customer relationships, and
                marketplace penalties.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h4
                className={`font-semibold ${lexend.className} text-orange-900`}
              >
                Financial Reporting Gaps
              </h4>
              <p className="mt-2 text-orange-800 text-sm">
                Payment processor integration silently fails. Orders show in
                NetSuite but payment records don&apos;t sync. Month-end arrives
                and your revenue reports are £67,000 short. Finance team spends
                2 days manually reconciling transactions.{" "}
                <strong>Result:</strong> Delayed financial close, manual
                reconciliation costs, and questions from leadership about data
                accuracy.
              </p>
            </div>
          </div>
          <p className="mt-6">
            Every one of these scenarios is preventable with proper monitoring.
            The question isn&apos;t whether monitoring is worth the
            effort—it&apos;s whether you can afford not to implement it.
          </p>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            The Three Levels of Celigo Monitoring
          </h3>
          <p className="mt-4">
            Not all businesses need the same level of monitoring. A small
            business with simple Shopify-NetSuite sync has different needs than
            an enterprise running 15 complex multi-step flows. Here&apos;s how
            to think about monitoring maturity:
          </p>
          <div className="mt-6 grid gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4
                className={`font-semibold text-xl ${lexend.className} text-blue-900`}
              >
                Level 1: Essential Monitoring (Minimum Viable)
              </h4>
              <p className="mt-3 text-blue-800 text-sm">
                <strong>For:</strong> Small businesses, 1-3 simple flows, stable
                integrations
              </p>
              <ul className="mt-3 list-disc list-inside space-y-2 text-blue-800 text-sm">
                <li>Email alerts when flows fail completely</li>
                <li>Weekly manual health check review</li>
                <li>Credential expiration calendar reminders</li>
                <li>Basic error log review during business hours</li>
                <li>Monthly performance spot checks</li>
              </ul>
              <p className="mt-3 text-blue-800 text-sm">
                <strong>Investment:</strong> ~2 hours/week of staff time, or
                £800/month managed service
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4
                className={`font-semibold text-xl ${lexend.className} text-green-900`}
              >
                Level 2: Proactive Monitoring (Recommended)
              </h4>
              <p className="mt-3 text-green-800 text-sm">
                <strong>For:</strong> Growing businesses, 4-10 flows,
                business-critical integrations
              </p>
              <ul className="mt-3 list-disc list-inside space-y-2 text-green-800 text-sm">
                <li>Continuous monitoring with intelligent alerting</li>
                <li>Health checks twice per week with trend analysis</li>
                <li>Proactive error pattern detection</li>
                <li>Performance degradation alerts</li>
                <li>Automated credential expiration warnings</li>
                <li>
                  Record failure threshold monitoring (alert if &gt;5% fail)
                </li>
                <li>Flow optimization recommendations</li>
              </ul>
              <p className="mt-3 text-green-800 text-sm">
                <strong>Investment:</strong> ~8 hours/week specialized staff
                time, or £1,500/month managed service
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4
                className={`font-semibold text-xl ${lexend.className} text-purple-900`}
              >
                Level 3: Enterprise Monitoring (Maximum Reliability)
              </h4>
              <p className="mt-3 text-purple-800 text-sm">
                <strong>For:</strong> Enterprise, 10+ complex flows,
                zero-tolerance for downtime
              </p>
              <ul className="mt-3 list-disc list-inside space-y-2 text-purple-800 text-sm">
                <li>
                  Real-time monitoring dashboards with 1-hour response SLA
                </li>
                <li>Dedicated Slack channel for immediate alerts</li>
                <li>Predictive analytics for failure prevention</li>
                <li>Automated remediation for common issues</li>
                <li>Weekly strategic reviews with optimization planning</li>
                <li>Disaster recovery testing and planning</li>
                <li>On-call emergency support for critical failures</li>
                <li>Integration performance SLA tracking</li>
              </ul>
              <p className="mt-3 text-purple-800 text-sm">
                <strong>Investment:</strong> Dedicated integration specialist,
                or £2,500+/month managed service
              </p>
            </div>
          </div>
          <p className="mt-6">
            Most businesses should aim for Level 2 (Proactive Monitoring). It
            catches problems before business impact while remaining
            cost-effective. Level 1 is acceptable for very simple, non-critical
            integrations. Level 3 is necessary when integration downtime costs
            thousands per hour.
          </p>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Alert Configuration Best Practices
          </h3>
          <p className="mt-4">
            Alerts are your early warning system. Configure them poorly and
            you&apos;ll either miss critical failures or drown in false alarms.
            Here&apos;s how to set up effective alerting:
          </p>
          <div className="mt-6 space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4
                className={`font-semibold ${lexend.className} text-green-900`}
              >
                Critical Alert Configuration
              </h4>
              <p className="mt-2 text-green-800 text-sm">
                These alerts indicate complete flow failure. Send immediately to
                primary contacts via email AND Slack:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-2 text-green-800 text-sm">
                <li>
                  <strong>Flow execution failure:</strong> Any flow that fails
                  to execute at all
                </li>
                <li>
                  <strong>Connection authentication failure:</strong> Can&apos;t
                  connect to NetSuite/Shopify/etc.
                </li>
                <li>
                  <strong>100% record failure rate:</strong> Flow runs but every
                  single record fails
                </li>
                <li>
                  <strong>Zero records processed:</strong> Flow expects records
                  but finds none (potential data source issue)
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4
                className={`font-semibold ${lexend.className} text-yellow-900`}
              >
                Warning Alert Configuration
              </h4>
              <p className="mt-2 text-yellow-800 text-sm">
                These indicate partial failures or degrading performance. Send
                to monitoring team for investigation:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-2 text-yellow-800 text-sm">
                <li>
                  <strong>High failure rate:</strong> More than 5% of records
                  failing (adjust threshold per flow)
                </li>
                <li>
                  <strong>Execution time increase:</strong> Flow taking 50%+
                  longer than baseline
                </li>
                <li>
                  <strong>Retry queue buildup:</strong> More than 50 records in
                  retry queue
                </li>
                <li>
                  <strong>API rate limit warnings:</strong> Approaching but not
                  exceeding limits
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
                Informational Alert Configuration
              </h4>
              <p className="mt-2 text-blue-800 text-sm">
                These provide visibility without requiring immediate action.
                Daily digest format works well:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-2 text-blue-800 text-sm">
                <li>
                  <strong>Low failure rates:</strong> 1-5% record failures
                  (track but don&apos;t panic)
                </li>
                <li>
                  <strong>Successful execution summaries:</strong> Daily digest
                  of what ran successfully
                </li>
                <li>
                  <strong>Performance metrics:</strong> Execution time trends,
                  record volumes
                </li>
                <li>
                  <strong>Credential expiration warnings:</strong> 30/60/90 day
                  advance notice
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-red-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-red-900`}>
              Common Alerting Mistakes to Avoid
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-red-800 text-sm">
              <li>
                <strong>Alert fatigue:</strong> Sending too many low-priority
                alerts trains people to ignore all alerts. Be selective about
                what deserves immediate notification.
              </li>
              <li>
                <strong>Single channel alerting:</strong> Email-only alerts get
                buried. Use Slack for critical alerts to ensure visibility.
              </li>
              <li>
                <strong>No alert ownership:</strong> Sending alerts to generic
                email addresses means nobody feels responsible. Assign clear
                ownership.
              </li>
              <li>
                <strong>No alert testing:</strong> Configure alerts then never
                verify they actually work. Test your alerting regularly.
              </li>
              <li>
                <strong>Ignoring business hours:</strong> Non-critical alerts at
                2 AM cause unnecessary stress. Route by severity and time of
                day.
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/img/articles/celigo-monitoring-best-practices/health-check-dashboard.jpg"
              alt="Celigo Integration Health Check Dashboard"
              width={640}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Health Check Routines
          </h3>
          <p className="mt-4">
            Alerts catch failures as they happen. Health checks catch problems
            before they cause failures. Here&apos;s what to include in regular
            health check routines:
          </p>
          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
              Weekly Health Check Checklist
            </h4>
            <p className="mt-2 text-blue-800 text-sm mb-3">
              For essential monitoring (Level 1), complete this weekly. For
              proactive monitoring (Level 2), complete twice per week. Time
              required: 20-30 minutes.
            </p>
            <ol className="space-y-3 text-blue-800 text-sm">
              <li>
                <strong>1. Review job history:</strong>
                <ul className="mt-1 ml-5 list-disc space-y-1 text-xs">
                  <li>Check last 7 days of executions across all flows</li>
                  <li>
                    Note any patterns in failures (specific times, record types)
                  </li>
                  <li>Review retry queue for stuck records</li>
                </ul>
              </li>
              <li>
                <strong>2. Test critical connections:</strong>
                <ul className="mt-1 ml-5 list-disc space-y-1 text-xs">
                  <li>Manually test NetSuite connection</li>
                  <li>Test Shopify/e-commerce connections</li>
                  <li>Verify API credentials haven&apos;t been revoked</li>
                </ul>
              </li>
              <li>
                <strong>3. Review performance metrics:</strong>
                <ul className="mt-1 ml-5 list-disc space-y-1 text-xs">
                  <li>Compare execution times to baseline</li>
                  <li>Check for increased record processing times</li>
                  <li>Monitor batch size vs completion time trends</li>
                </ul>
              </li>
              <li>
                <strong>4. Check error patterns:</strong>
                <ul className="mt-1 ml-5 list-disc space-y-1 text-xs">
                  <li>Group similar errors to identify systemic issues</li>
                  <li>Verify known intermittent errors still acceptable</li>
                  <li>Document new error types for investigation</li>
                </ul>
              </li>
              <li>
                <strong>5. Verify data accuracy spot checks:</strong>
                <ul className="mt-1 ml-5 list-disc space-y-1 text-xs">
                  <li>Pick 3-5 random recent orders</li>
                  <li>Verify data matches between source and destination</li>
                  <li>
                    Check edge cases (international orders, multiple items,
                    etc.)
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="mt-6 bg-green-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-green-900`}>
              Monthly Deep Health Check
            </h4>
            <p className="mt-2 text-green-800 text-sm mb-3">
              Deeper analysis to catch trends and plan proactive improvements.
              Time required: 1-2 hours.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-2 text-green-800 text-sm">
              <li>
                <strong>Performance trend analysis:</strong> Compare current
                month execution times to previous 3 months. Identify degrading
                performance.
              </li>
              <li>
                <strong>Failure rate trends:</strong> Calculate overall success
                rates by flow and record type. Target 99%+ success for critical
                flows.
              </li>
              <li>
                <strong>Capacity planning:</strong> Review record volumes vs
                current batch sizes. Adjust for growth.
              </li>
              <li>
                <strong>Error category analysis:</strong> Group errors by type
                and frequency. Plan fixes for recurring issues.
              </li>
              <li>
                <strong>Connection audit:</strong> Review all connection
                credentials, permissions, IP allowlists. Update expiration
                calendars.
              </li>
              <li>
                <strong>Documentation review:</strong> Verify flow documentation
                current, update troubleshooting notes, document configuration
                changes.
              </li>
              <li>
                <strong>Disaster recovery test:</strong> Verify backup
                connections work, test credential rotation procedures, validate
                recovery runbooks.
              </li>
            </ul>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Credential and Connection Management
          </h3>
          <p className="mt-4">
            Authentication failures are the #1 cause of complete integration
            failure. Preventing them requires disciplined credential management:
          </p>
          <div className="mt-6 space-y-4">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4
                className={`font-semibold ${lexend.className} text-purple-900`}
              >
                Credential Lifecycle Management
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-purple-800 text-sm">
                <li>
                  <strong>Dedicated integration accounts:</strong> Never use
                  personal accounts for integrations. Create dedicated service
                  accounts that won&apos;t be disabled when employees leave.
                </li>
                <li>
                  <strong>Expiration tracking:</strong> Maintain a calendar of
                  all credential expiration dates. Set reminders 30, 14, and 7
                  days before expiration.
                </li>
                <li>
                  <strong>Rotation procedures:</strong> Document step-by-step
                  credential rotation that minimizes downtime (create new → test
                  → swap → delete old).
                </li>
                <li>
                  <strong>Backup credentials:</strong> Maintain secondary
                  credentials ready for emergency failover if primary
                  credentials fail.
                </li>
                <li>
                  <strong>Permission audits:</strong> Quarterly review that
                  integration accounts still have required permissions.
                  Permission changes break integrations.
                </li>
                <li>
                  <strong>IP allowlist monitoring:</strong> If using IP
                  restrictions, maintain documented list of Celigo IP ranges
                  that must remain whitelisted.
                </li>
              </ul>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Performance Monitoring and Baselines
          </h3>
          <p className="mt-4">
            Integration performance degrades gradually. Without baselines, you
            won&apos;t notice until flows timeout. Establish and track these
            metrics:
          </p>
          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
              Key Performance Metrics to Track
            </h4>
            <div className="mt-3 space-y-4 text-blue-800 text-sm">
              <div>
                <strong>Flow Execution Time:</strong> Track average, min, max
                execution time per flow. Alert when average increases 50%+ above
                baseline.
              </div>
              <div>
                <strong>Records Per Minute:</strong> Processing throughput for
                each flow. Decreasing throughput indicates performance issues.
              </div>
              <div>
                <strong>API Response Times:</strong> How long NetSuite/Shopify
                take to respond to requests. Increasing response times suggest
                system load issues.
              </div>
              <div>
                <strong>Success Rate:</strong> Percentage of records
                successfully processed. Target 99%+ for critical flows. Track
                trends over time.
              </div>
              <div>
                <strong>Retry Queue Depth:</strong> Number of records waiting
                for retry. Growing queue indicates persistent problems.
              </div>
            </div>
          </div>
          <p className="mt-6">
            For detailed performance optimization techniques when monitoring
            reveals issues, see our guide on{" "}
            <Link
              href="/resources/articles/netsuite-saved-search-performance"
              className="text-blue-600 hover:underline font-semibold"
            >
              optimizing NetSuite saved search performance
            </Link>
            .
          </p>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Monitoring Tools and Dashboards
          </h3>
          <p className="mt-4">
            Celigo provides built-in monitoring tools. Here&apos;s how to use
            them effectively:
          </p>
          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className}`}>
                Celigo Dashboard
              </h4>
              <p className="mt-2 text-sm">
                <strong>Best for:</strong> Quick overview of current status
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
                <li>Color-coded flow status (green = healthy, red = errors)</li>
                <li>Last execution timestamp for each flow</li>
                <li>Quick access to recent job executions</li>
                <li>Active alerts and notifications</li>
              </ul>
              <p className="mt-3 text-sm">
                <strong>Check frequency:</strong> Daily for proactive
                monitoring, weekly for essential monitoring
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className}`}>
                Job History
              </h4>
              <p className="mt-2 text-sm">
                <strong>Best for:</strong> Detailed execution analysis and
                troubleshooting
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
                <li>Complete execution logs with timestamps</li>
                <li>Record-level success/failure details</li>
                <li>Error messages and stack traces</li>
                <li>Data transformation preview</li>
              </ul>
              <p className="mt-3 text-sm">
                <strong>Check frequency:</strong> After any alert, during health
                checks, when investigating issues
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className}`}>
                Connection Health
              </h4>
              <p className="mt-2 text-sm">
                <strong>Best for:</strong> Proactive connection monitoring
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
                <li>Test connection functionality on demand</li>
                <li>Last successful connection timestamp</li>
                <li>Authentication status for each connection</li>
                <li>API quota usage (if available)</li>
              </ul>
              <p className="mt-3 text-sm">
                <strong>Check frequency:</strong> Weekly during health checks,
                immediately after authentication errors
              </p>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            The Monitoring Checklist
          </h3>
          <p className="mt-4">
            Here&apos;s your complete monitoring checklist. Print this, save it
            to your wiki, or better yet—hire someone to handle it for you:
          </p>
          <div className="mt-6 bg-green-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-green-900`}>
              Daily Monitoring Tasks (5-10 minutes)
            </h4>
            <ul className="mt-3 space-y-1 text-green-800 text-sm">
              <li>□ Check Celigo dashboard for red status indicators</li>
              <li>□ Review any overnight alerts or errors</li>
              <li>□ Verify critical flows executed successfully</li>
              <li>
                □ Check Slack channel for any automated alerts (if configured)
              </li>
            </ul>
          </div>
          <div className="mt-4 bg-blue-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
              Weekly Monitoring Tasks (20-30 minutes)
            </h4>
            <ul className="mt-3 space-y-1 text-blue-800 text-sm">
              <li>□ Review full job history for all flows</li>
              <li>□ Test all connection health manually</li>
              <li>□ Review and clear retry queue</li>
              <li>□ Spot check data accuracy (3-5 sample records)</li>
              <li>□ Review error patterns and trends</li>
              <li>□ Check execution time trends vs baseline</li>
              <li>□ Document any issues or observations</li>
            </ul>
          </div>
          <div className="mt-4 bg-purple-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-purple-900`}>
              Monthly Monitoring Tasks (1-2 hours)
            </h4>
            <ul className="mt-3 space-y-1 text-purple-800 text-sm">
              <li>□ Performance trend analysis (compare to previous months)</li>
              <li>□ Calculate overall success rates by flow</li>
              <li>□ Review and update credential expiration calendar</li>
              <li>□ Capacity planning based on volume trends</li>
              <li>□ Connection permission audit</li>
              <li>□ Update flow documentation</li>
              <li>□ Test disaster recovery procedures</li>
              <li>□ Review and optimize alerting configuration</li>
            </ul>
          </div>
          <div className="mt-4 bg-yellow-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-yellow-900`}>
              Quarterly Monitoring Tasks (2-4 hours)
            </h4>
            <ul className="mt-3 space-y-1 text-yellow-800 text-sm">
              <li>□ Comprehensive performance review (3-month trends)</li>
              <li>□ Flow architecture optimization assessment</li>
              <li>□ Security audit (credentials, permissions, access)</li>
              <li>□ Integration roadmap planning</li>
              <li>□ Vendor relationship review (Celigo support usage)</li>
              <li>□ Cost analysis (compute usage, licensing, staff time)</li>
              <li>□ Stakeholder satisfaction survey</li>
            </ul>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Common Monitoring Pitfalls
          </h3>
          <p className="mt-4">
            Even with good intentions, monitoring implementations often fail.
            Here are the most common mistakes and how to avoid them:
          </p>
          <div className="mt-6 space-y-4">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className={`font-semibold ${lexend.className} text-red-900`}>
                Pitfall #1: Set and Forget
              </h4>
              <p className="mt-2 text-red-800 text-sm">
                Configuring monitoring once then never reviewing effectiveness.
                Alert thresholds that made sense at 100 orders/day don&apos;t
                work at 1,000 orders/day.
              </p>
              <p className="mt-2 text-red-800 text-sm">
                <strong>Solution:</strong> Quarterly review of monitoring
                configuration. Adjust alert thresholds based on actual volume
                and failure patterns.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className={`font-semibold ${lexend.className} text-red-900`}>
                Pitfall #2: No Ownership
              </h4>
              <p className="mt-2 text-red-800 text-sm">
                Monitoring configured but nobody clearly responsible for acting
                on alerts or performing health checks. &quot;Someone else will
                handle it&quot; means nobody handles it.
              </p>
              <p className="mt-2 text-red-800 text-sm">
                <strong>Solution:</strong> Assign specific people to monitoring
                responsibilities with backup coverage. Make it part of job
                descriptions.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className={`font-semibold ${lexend.className} text-red-900`}>
                Pitfall #3: Monitoring Without Action
              </h4>
              <p className="mt-2 text-red-800 text-sm">
                Collecting metrics and receiving alerts but never fixing
                underlying issues. Monitoring becomes noise instead of insight.
              </p>
              <p className="mt-2 text-red-800 text-sm">
                <strong>Solution:</strong> Every alert should trigger
                investigation. Every health check should produce action items.
                Track and close items.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className={`font-semibold ${lexend.className} text-red-900`}>
                Pitfall #4: Technical Debt Accumulation
              </h4>
              <p className="mt-2 text-red-800 text-sm">
                Accepting &quot;expected failures&quot; without fixing root
                causes. Over time, baseline failure rate creeps from 0.1% to 5%
                as you normalize dysfunction.
              </p>
              <p className="mt-2 text-red-800 text-sm">
                <strong>Solution:</strong> Maintain aggressive success rate
                targets (99%+). Any consistent failure pattern deserves root
                cause investigation and permanent fix.
              </p>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            When to Consider Managed Monitoring
          </h3>
          <p className="mt-4">
            Implementing proper monitoring requires specialized knowledge and
            consistent effort. Here&apos;s when outsourcing makes sense:
          </p>
          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
              Signs You Need Managed Monitoring
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-blue-800 text-sm">
              <li>
                <strong>Integration downtime is costly:</strong> If failures
                cost hundreds or thousands per hour, professional monitoring
                pays for itself immediately.
              </li>
              <li>
                <strong>No internal Celigo expertise:</strong> Your team knows
                NetSuite or Shopify but not Celigo specifically. Monitoring
                requires platform knowledge.
              </li>
              <li>
                <strong>Health checks aren&apos;t happening:</strong> You intend
                to do weekly checks but it&apos;s been 6 weeks. Consistency
                matters more than perfection.
              </li>
              <li>
                <strong>Growing complexity:</strong> Started with 2 flows, now
                have 8, and monitoring is overwhelming internal resources.
              </li>
              <li>
                <strong>After-hours coverage gaps:</strong> Weekend/evening
                failures aren&apos;t discovered until Monday morning. Business
                operates outside 9-5.
              </li>
              <li>
                <strong>Reactive firefighting mode:</strong> You only think
                about integrations when they break. Proactive monitoring
                prevents fires.
              </li>
            </ul>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            How We Help: Managed Celigo Monitoring Services
          </h3>
          <p className="mt-4">
            As a Celigo Technical Partner, The Bearded Developer provides
            comprehensive managed monitoring that implements all these best
            practices so you don&apos;t have to:
          </p>
          <div className="mt-6 bg-green-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-green-900`}>
              What Our Managed Monitoring Includes
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-green-800 text-sm">
              <li>
                <strong>Dedicated Slack channel:</strong> Direct communication
                line for alerts and updates. No ticket systems, instant access
                to your integration team.
              </li>
              <li>
                <strong>
                  Continuous monitoring with intelligent alerting:
                </strong>{" "}
                Configure alerts properly based on your business requirements.
                We only alert on what matters.
              </li>
              <li>
                <strong>Regular health checks:</strong> Weekly or twice-weekly
                systematic reviews of all flows, connections, and performance
                metrics.
              </li>
              <li>
                <strong>Proactive issue detection:</strong> Catch degrading
                performance, credential expiration, and potential failures
                before they impact operations.
              </li>
              <li>
                <strong>Performance optimization:</strong> Monthly
                recommendations for improving flow efficiency and handling
                growth.
              </li>
              <li>
                <strong>Credential management:</strong> Track expiration dates,
                manage rotation procedures, maintain backup credentials.
              </li>
              <li>
                <strong>Detailed reporting:</strong> Monthly performance reports
                with trends, incidents, and optimization recommendations.
              </li>
              <li>
                <strong>Expert troubleshooting:</strong> When issues occur,
                rapid diagnosis and fixes by Celigo specialists. See our{" "}
                <Link
                  href="/resources/articles/celigo-error-troubleshooting-guide"
                  className="text-green-600 hover:underline font-semibold"
                >
                  error troubleshooting guide
                </Link>{" "}
                for our approach.
              </li>
            </ul>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className={`font-semibold text-lg ${lexend.className} mb-3`}>
                Essential Monitoring
              </h4>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                £800/month
              </div>
              <ul className="text-sm space-y-1 mb-4">
                <li>✓ Dedicated Slack channel</li>
                <li>✓ Alert configuration</li>
                <li>✓ Weekly health checks</li>
                <li>✓ Monthly reporting</li>
              </ul>
              <p className="text-xs text-gray-600">
                Perfect for stable integrations with 1-3 simple flows
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg border-2 border-blue-500">
              <div className="text-center mb-2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </span>
              </div>
              <h4 className={`font-semibold text-lg ${lexend.className} mb-3`}>
                Proactive Support
              </h4>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                £1,500/month
              </div>
              <ul className="text-sm space-y-1 mb-4">
                <li>✓ Everything in Essential</li>
                <li>✓ Health checks twice per week</li>
                <li>✓ Performance optimization</li>
                <li>✓ 5 hours development included</li>
              </ul>
              <p className="text-xs text-gray-600">
                Recommended for growing businesses with 4-10 flows
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className={`font-semibold text-lg ${lexend.className} mb-3`}>
                Enterprise Management
              </h4>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                £2,500+/month
              </div>
              <ul className="text-sm space-y-1 mb-4">
                <li>✓ Everything in Proactive</li>
                <li>✓ Dedicated specialist</li>
                <li>✓ 1-hour response SLA</li>
                <li>✓ On-call emergency support</li>
              </ul>
              <p className="text-xs text-gray-600">
                For enterprise with 10+ complex business-critical flows
              </p>
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stop Firefighting Integration Failures
            </h3>
            <p className="mb-6">
              Let us handle the complexity of monitoring your Celigo
              integrations. You focus on growing your business while we ensure
              your integrations run smoothly behind the scenes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services/celigo"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                View Celigo Services
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block border-2 border-white"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            The Bottom Line
          </h3>
          <p className="mt-4">
            Proper Celigo monitoring isn&apos;t optional for businesses that
            depend on integrations. The question isn&apos;t whether to implement
            monitoring—it&apos;s whether you handle it in-house or outsource to
            specialists.
          </p>
          <p className="mt-6">
            If you have the expertise and consistent time to maintain monitoring
            routines, the checklists in this guide will serve you well. If
            monitoring keeps falling to the bottom of your priority list (it
            always does), managed monitoring services ensure it happens
            consistently.
          </p>
          <p className="mt-6">
            Either way, don&apos;t wait for a critical failure to implement
            proper monitoring. The time to set up monitoring is before you need
            it, not after you&apos;ve lost revenue to integration downtime. For
            more detail on our Celigo services and how we help businesses
            maintain reliable integrations, see our{" "}
            <Link
              href="/services/celigo"
              className="text-blue-600 hover:underline font-semibold"
            >
              Celigo integration services page
            </Link>
            .
          </p>
        </div>
        <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0 md:sticky top-10">
          <h3 className={`text-xl font-semibold ${lexend.className}`}>
            Quick Reference
          </h3>
          <div className="mt-4 space-y-4 text-sm">
            <div className="border-l-4 border-blue-500 pl-3">
              <strong>Daily Tasks</strong>
              <br />
              • Check dashboard
              <br />
              • Review alerts
              <br />
              • Verify critical flows
              <br />⏱ 5-10 minutes
            </div>
            <div className="border-l-4 border-green-500 pl-3">
              <strong>Weekly Tasks</strong>
              <br />
              • Job history review
              <br />
              • Test connections
              <br />
              • Check performance
              <br />⏱ 20-30 minutes
            </div>
            <div className="border-l-4 border-purple-500 pl-3">
              <strong>Monthly Tasks</strong>
              <br />
              • Trend analysis
              <br />
              • Credential audit
              <br />
              • Documentation update
              <br />⏱ 1-2 hours
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              Monitoring Levels
            </h4>
            <div className="text-sm mt-2 space-y-2">
              <div>
                <strong>Level 1:</strong> Essential
                <br />
                <span className="text-xs">1-3 flows | £800/mo</span>
              </div>
              <div>
                <strong>Level 2:</strong> Proactive
                <br />
                <span className="text-xs">4-10 flows | £1,500/mo</span>
              </div>
              <div>
                <strong>Level 3:</strong> Enterprise
                <br />
                <span className="text-xs">10+ flows | £2,500+/mo</span>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              Critical Alerts
            </h4>
            <div className="text-sm mt-2 space-y-1">
              <div>✗ Flow execution failure</div>
              <div>✗ Authentication failure</div>
              <div>✗ 100% record failure</div>
              <div>✗ Zero records processed</div>
            </div>
          </div>
          <p className="mt-4 text-sm">
            Need help with monitoring?{" "}
            <a
              href="/services/celigo"
              className="text-blue-600 hover:underline"
            >
              View our managed services
            </a>{" "}
            or{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              schedule a consultation
            </a>
            .
          </p>
        </aside>
      </section>
    </ArticleContainer>
  );
}
