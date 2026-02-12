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
            Celigo Error Troubleshooting: How to Fix Common Integration Failures
          </h2>
          <p className="mt-10">
            It&apos;s Monday morning, 8:47 AM. Your warehouse manager calls:
            &quot;Orders aren&apos;t syncing to NetSuite.&quot; Your finance
            team reports inventory counts are frozen. Your customer service
            queue is backing up because order status updates stopped flowing.
            You open Celigo and see red error indicators across multiple flows.
            Your integrations just failed, and every minute costs money.
          </p>
          <p className="mt-6">
            I&apos;ve been woken up at 2 AM to fix broken Celigo integrations.
            I&apos;ve diagnosed hundreds of integration failures ranging from
            simple authentication timeouts to complex data transformation errors
            that took days to unravel. The good news: most Celigo errors fall
            into predictable categories with systematic troubleshooting
            approaches. The bad news: without proper error handling and
            monitoring, you won&apos;t know integrations are broken until
            business operations grind to a halt.
          </p>
          <p className="mt-6">
            This guide covers the most common Celigo integration errors, how to
            diagnose root causes quickly, and proven fixes to get your flows
            running again. Whether you&apos;re troubleshooting your first error
            or the hundredth, these techniques will help you resolve issues
            faster and prevent future failures.
          </p>
          <div>
            <Image
              src="/img/articles/celigo-error-troubleshooting-guide/troubleshooting-header.jpg"
              alt="Celigo Integration Error Troubleshooting"
              width={640}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Understanding Celigo Error Types
          </h3>
          <p className="mt-4">
            Celigo errors appear in different contexts with varying severity.
            Understanding error categories helps you prioritize fixes and
            prevents panic when errors inevitably occur.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-red-900`}>
                Critical Errors (Flow Stops)
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-red-800 text-sm">
                <li>
                  <strong>Authentication failures:</strong> Can&apos;t connect
                  to NetSuite, Shopify, or other systems
                </li>
                <li>
                  <strong>Invalid connection credentials:</strong> Expired
                  passwords, revoked tokens, deleted API keys
                </li>
                <li>
                  <strong>Resource not found:</strong> Missing records, deleted
                  fields, removed endpoints
                </li>
                <li>
                  <strong>Schema validation errors:</strong> Required fields
                  missing, data type mismatches
                </li>
              </ul>
              <p className="mt-3 text-red-800 text-sm">
                <strong>Impact:</strong> Flow execution halts completely. No
                data syncs until fixed.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4
                className={`font-semibold ${lexend.className} text-yellow-900`}
              >
                Warning Errors (Partial Failures)
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-yellow-800 text-sm">
                <li>
                  <strong>Record-level errors:</strong> Some records fail while
                  others succeed
                </li>
                <li>
                  <strong>Data validation issues:</strong> Invalid values for
                  specific fields
                </li>
                <li>
                  <strong>Conditional logic failures:</strong> Lookup
                  mismatches, missing reference data
                </li>
                <li>
                  <strong>Timeout errors:</strong> Individual operations exceed
                  time limits
                </li>
              </ul>
              <p className="mt-3 text-yellow-800 text-sm">
                <strong>Impact:</strong> Flow continues but some records
                don&apos;t sync. Silent data gaps.
              </p>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
              Where Errors Appear in Celigo
            </h4>
            <ul className="mt-3 space-y-2 text-blue-800 text-sm">
              <li>
                <strong>Job History:</strong> Primary error log showing failed
                executions with details
              </li>
              <li>
                <strong>Dashboard alerts:</strong> Red indicators showing flows
                with recent errors
              </li>
              <li>
                <strong>Email notifications:</strong> Automated alerts if
                configured (often not set up properly)
              </li>
              <li>
                <strong>Flow execution logs:</strong> Step-by-step detail of
                what succeeded/failed
              </li>
              <li>
                <strong>Retry queue:</strong> Failed records waiting for manual
                intervention
              </li>
            </ul>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Error Category 1: Authentication and Connection Failures
          </h3>
          <p className="mt-4">
            Authentication errors are the most common cause of complete
            integration failure. Your flow worked yesterday, but today every
            execution fails immediately. This almost always means credentials
            expired or were revoked.
          </p>
          <div className="mt-6 space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className={`font-semibold ${lexend.className} text-red-900`}>
                Common Authentication Error Messages
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-red-800 text-sm">
                <li>
                  &quot;Invalid login credentials&quot; - NetSuite password
                  changed or token revoked
                </li>
                <li>
                  &quot;401 Unauthorized&quot; - API credentials expired or
                  invalid
                </li>
                <li>
                  &quot;403 Forbidden&quot; - Permissions removed from
                  integration user
                </li>
                <li>
                  &quot;Connection refused&quot; - IP restriction blocking
                  Celigo servers
                </li>
                <li>
                  &quot;SSL certificate error&quot; - Endpoint security
                  configuration changed
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4
                className={`font-semibold ${lexend.className} text-green-900`}
              >
                Troubleshooting Steps: Authentication Errors
              </h4>
              <ol className="mt-3 space-y-3 text-green-800 text-sm">
                <li>
                  <strong>1. Verify connection status:</strong> Navigate to
                  Connections in Celigo dashboard. Failed connections show red
                  status indicator.
                </li>
                <li>
                  <strong>2. Test connection manually:</strong> Click &quot;Test
                  Connection&quot; button. Specific error message helps
                  diagnosis.
                </li>
                <li>
                  <strong>3. Check credential expiration:</strong> NetSuite
                  token-based auth requires renewal annually. Shopify admin API
                  tokens can be revoked when apps updated.
                </li>
                <li>
                  <strong>4. Verify user permissions:</strong> Integration user
                  role must have required permissions. Check NetSuite role
                  assignments, Shopify staff permissions.
                </li>
                <li>
                  <strong>5. Review IP allowlists:</strong> If using IP
                  restrictions, ensure Celigo&apos;s IP ranges are whitelisted
                  in NetSuite, Shopify, etc.
                </li>
                <li>
                  <strong>6. Regenerate credentials:</strong> Create new API
                  tokens, update connection with new credentials, test again.
                </li>
              </ol>
            </div>
          </div>
          <div className="mt-6 bg-purple-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-purple-900`}>
              Prevention: Credential Management Best Practices
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-purple-800 text-sm">
              <li>
                Set calendar reminders 30 days before credential expiration
              </li>
              <li>
                Use dedicated integration user accounts (not personal accounts)
              </li>
              <li>Document credential rotation procedures for team handoffs</li>
              <li>Enable connection health monitoring alerts in Celigo</li>
              <li>Maintain backup credentials ready for emergency swaps</li>
              <li>
                Implement credential rotation without downtime (create new,
                test, swap, delete old)
              </li>
            </ul>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Error Category 2: Field Mapping and Data Transformation Errors
          </h3>
          <p className="mt-4">
            Field mapping errors occur when data from source systems
            doesn&apos;t match destination system expectations. These are sneaky
            because they often affect only specific records, allowing flows to
            continue while silently dropping data.
          </p>
          <div className="mt-6 space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className={`font-semibold ${lexend.className} text-red-900`}>
                Common Mapping Error Messages
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-red-800 text-sm">
                <li>
                  &quot;Required field missing&quot; - Source data lacks
                  mandatory field
                </li>
                <li>
                  &quot;Invalid value for field&quot; - Data type mismatch or
                  enum validation failure
                </li>
                <li>
                  &quot;Field not found&quot; - Custom field deleted or renamed
                </li>
                <li>
                  &quot;Value too long&quot; - String exceeds destination field
                  length
                </li>
                <li>
                  &quot;Invalid reference&quot; - Lookup field points to
                  non-existent record
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4
                className={`font-semibold ${lexend.className} text-green-900`}
              >
                Troubleshooting Steps: Mapping Errors
              </h4>
              <ol className="mt-3 space-y-3 text-green-800 text-sm">
                <li>
                  <strong>1. Identify failing records:</strong> Review Job
                  History → Failed Records tab. Export failed record IDs for
                  analysis.
                </li>
                <li>
                  <strong>2. Examine source data:</strong> Look up failed record
                  in source system. Check actual values for mapped fields.
                </li>
                <li>
                  <strong>3. Review field mapping configuration:</strong> Open
                  flow → Mappings section. Verify source field still exists and
                  mapping logic correct.
                </li>
                <li>
                  <strong>4. Check destination field requirements:</strong>{" "}
                  Verify field constraints in destination system (required, data
                  type, max length, allowed values).
                </li>
                <li>
                  <strong>5. Test transformation logic:</strong> Use
                  Celigo&apos;s test feature with actual failing record data.
                  Verify transformations produce expected output.
                </li>
                <li>
                  <strong>6. Add conditional mapping:</strong> Implement
                  fallback values or skip logic for null/invalid source data.
                </li>
                <li>
                  <strong>7. Retry failed records:</strong> After fixing
                  mapping, use retry queue to reprocess failed records.
                </li>
              </ol>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
              Real Example: NetSuite Customer Mapping Failure
            </h4>
            <p className="mt-2 text-blue-800 text-sm">
              <strong>Error:</strong> &quot;Invalid value for field
              &apos;subsidiary&apos;&quot; on 15% of Shopify orders syncing to
              NetSuite.
            </p>
            <p className="mt-2 text-blue-800 text-sm">
              <strong>Root cause:</strong> Shopify orders from new international
              region didn&apos;t map to NetSuite subsidiary. Lookup based on
              country code returned null for new countries.
            </p>
            <p className="mt-2 text-blue-800 text-sm">
              <strong>Fix:</strong> Added conditional mapping with default
              subsidiary for unmapped countries. Also created NetSuite
              subsidiaries for new regions and updated country-to-subsidiary
              lookup table.
            </p>
            <p className="mt-2 text-blue-800 text-sm">
              <strong>Prevention:</strong> Implemented validation alert when new
              countries appear in orders without subsidiary mapping.
            </p>
          </div>
          <div>
            <Image
              src="/img/articles/celigo-error-troubleshooting-guide/error-diagnosis.jpg"
              alt="Celigo Error Diagnosis Process"
              width={640}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Error Category 3: API Rate Limits and Throttling
          </h3>
          <p className="mt-4">
            Both source and destination systems have API rate limits. When your
            integration hits these limits, flows slow down or fail entirely.
            This often appears suddenly when transaction volumes spike.
          </p>
          <div className="mt-6 space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className={`font-semibold ${lexend.className} text-red-900`}>
                Rate Limit Error Messages
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-red-800 text-sm">
                <li>
                  &quot;429 Too Many Requests&quot; - Exceeded API rate limit
                </li>
                <li>
                  &quot;Concurrency limit exceeded&quot; - Too many simultaneous
                  requests
                </li>
                <li>
                  &quot;Throttled&quot; - API throttling due to excessive usage
                </li>
                <li>
                  &quot;SSS_REQUEST_LIMIT_EXCEEDED&quot; - NetSuite governance
                  limit hit
                </li>
                <li>
                  &quot;Retry after X seconds&quot; - Temporary rate limit
                  cooldown
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4
                className={`font-semibold ${lexend.className} text-green-900`}
              >
                Troubleshooting Steps: Rate Limit Errors
              </h4>
              <ol className="mt-3 space-y-3 text-green-800 text-sm">
                <li>
                  <strong>1. Identify which system is rate limiting:</strong>{" "}
                  Error message usually indicates source (NetSuite, Shopify,
                  etc.) that rejected request.
                </li>
                <li>
                  <strong>2. Check current usage against limits:</strong>{" "}
                  NetSuite concurrency dashboard, Shopify API analytics, Celigo
                  usage reports.
                </li>
                <li>
                  <strong>3. Review flow scheduling:</strong> Multiple flows
                  running simultaneously can compound API usage. Stagger flow
                  execution times.
                </li>
                <li>
                  <strong>4. Implement retry logic with backoff:</strong>{" "}
                  Configure Celigo retry settings with exponential backoff for
                  rate-limited requests.
                </li>
                <li>
                  <strong>5. Optimize batch sizes:</strong> Reduce records per
                  batch if hitting concurrency limits. Balance throughput vs API
                  usage.
                </li>
                <li>
                  <strong>6. Implement request caching:</strong> Cache lookup
                  data that doesn&apos;t change frequently instead of querying
                  every execution.
                </li>
                <li>
                  <strong>7. Contact vendor for limit increases:</strong> For
                  legitimate high-volume use cases, request increased API limits
                  from NetSuite/Shopify.
                </li>
              </ol>
            </div>
          </div>
          <div className="mt-6 bg-purple-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-purple-900`}>
              Common API Rate Limits
            </h4>
            <div className="mt-3 space-y-3 text-purple-800 text-sm">
              <div>
                <strong>NetSuite:</strong> 10 concurrent requests per
                integration, varying record-specific limits. SuiteScript
                governance units apply to RESTlet-based integrations.
              </div>
              <div>
                <strong>Shopify:</strong> 2 requests/second for standard API, 40
                requests/second burst capacity. Plus tier increases limits
                significantly.
              </div>
              <div>
                <strong>Celigo platform limits:</strong> Flow execution
                concurrency varies by subscription tier. Check account limits in
                dashboard.
              </div>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Error Category 4: Data Validation and Business Logic Failures
          </h3>
          <p className="mt-4">
            These errors occur when data technically maps correctly but violates
            business rules in destination systems. NetSuite workflows reject
            records, required related records don&apos;t exist, or business
            logic prevents record creation.
          </p>
          <div className="mt-6 space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className={`font-semibold ${lexend.className} text-red-900`}>
                Business Logic Error Examples
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-red-800 text-sm">
                <li>
                  &quot;Invalid item for customer&quot; - Item-to-customer
                  restrictions in NetSuite
                </li>
                <li>
                  &quot;Customer already exists&quot; - Duplicate prevention
                  logic triggered
                </li>
                <li>
                  &quot;Order total mismatch&quot; - Calculated totals
                  don&apos;t match expected
                </li>
                <li>
                  &quot;Workflow validation failed&quot; - Custom NetSuite
                  workflow rejected record
                </li>
                <li>
                  &quot;Insufficient inventory&quot; - Business rule prevents
                  overselling
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4
                className={`font-semibold ${lexend.className} text-green-900`}
              >
                Troubleshooting Steps: Business Logic Errors
              </h4>
              <ol className="mt-3 space-y-3 text-green-800 text-sm">
                <li>
                  <strong>1. Reproduce in destination system UI:</strong> Try
                  creating record manually with same data. Confirms if issue is
                  integration-specific or system-wide business rule.
                </li>
                <li>
                  <strong>2. Review system workflows:</strong> Check NetSuite
                  workflows, Shopify Flow automations that might reject records
                  based on conditions.
                </li>
                <li>
                  <strong>3. Validate related records exist:</strong> Ensure
                  customer records, items, locations exist before creating
                  transactions referencing them.
                </li>
                <li>
                  <strong>4. Check field-level dependencies:</strong> Some
                  fields require specific combinations. Review destination
                  system setup.
                </li>
                <li>
                  <strong>5. Implement pre-validation logic:</strong> Add Celigo
                  flow steps that validate data before attempting destination
                  creation.
                </li>
                <li>
                  <strong>6. Add conditional routing:</strong> Route records to
                  different flows or skip based on validation results.
                </li>
              </ol>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Error Category 5: Timeout and Performance Issues
          </h3>
          <p className="mt-4">
            Timeout errors occur when operations take too long to complete. This
            can be Celigo timing out waiting for NetSuite responses, or
            individual operations exceeding configured time limits.
          </p>
          <div className="mt-6 space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className={`font-semibold ${lexend.className} text-red-900`}>
                Timeout Error Messages
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-red-800 text-sm">
                <li>
                  &quot;Request timeout&quot; - API request exceeded time limit
                </li>
                <li>
                  &quot;Execution timeout&quot; - Flow execution time limit
                  exceeded
                </li>
                <li>
                  &quot;Saved search timeout&quot; - NetSuite search too slow
                </li>
                <li>
                  &quot;Connection timeout&quot; - Couldn&apos;t establish
                  connection
                </li>
                <li>
                  &quot;Read timeout&quot; - Connected but no response received
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4
                className={`font-semibold ${lexend.className} text-green-900`}
              >
                Troubleshooting Steps: Timeout Errors
              </h4>
              <ol className="mt-3 space-y-3 text-green-800 text-sm">
                <li>
                  <strong>1. Identify slow component:</strong> Check execution
                  logs to see which step times out (export, import, lookup,
                  transformation).
                </li>
                <li>
                  <strong>2. Optimize saved searches:</strong> If NetSuite
                  searches timeout, optimize per our{" "}
                  <Link
                    href="/resources/articles/netsuite-saved-search-performance"
                    className="text-green-600 hover:underline font-semibold"
                  >
                    NetSuite saved search performance guide
                  </Link>
                  .
                </li>
                <li>
                  <strong>3. Reduce batch sizes:</strong> Smaller batches
                  process faster. Trade throughput for reliability during peak
                  times.
                </li>
                <li>
                  <strong>4. Increase timeout settings:</strong> Adjust Celigo
                  timeout configuration if operations legitimately need more
                  time.
                </li>
                <li>
                  <strong>5. Schedule during off-peak hours:</strong> Run heavy
                  flows when NetSuite/Shopify load is lower for better
                  performance.
                </li>
                <li>
                  <strong>6. Implement pagination:</strong> For large datasets,
                  page through results instead of retrieving all at once.
                </li>
              </ol>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Systematic Error Diagnosis Framework
          </h3>
          <p className="mt-4">
            When errors occur, use this systematic approach to diagnose
            efficiently rather than guessing at solutions:
          </p>
          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
              The 5-Step Error Diagnosis Process
            </h4>
            <ol className="mt-3 space-y-4 text-blue-800 text-sm">
              <li>
                <strong>Step 1: Identify error scope</strong>
                <ul className="mt-1 ml-5 list-disc space-y-1 text-xs">
                  <li>Is entire flow failing or just some records?</li>
                  <li>When did errors start? (recent change correlation)</li>
                  <li>Which systems are involved?</li>
                  <li>How many records affected?</li>
                </ul>
              </li>
              <li>
                <strong>Step 2: Read actual error messages</strong>
                <ul className="mt-1 ml-5 list-disc space-y-1 text-xs">
                  <li>Job History → Failed execution → Error details</li>
                  <li>Don&apos;t assume - read full error text</li>
                  <li>Note error codes for documentation lookup</li>
                  <li>Check if error consistent or varies by record</li>
                </ul>
              </li>
              <li>
                <strong>Step 3: Reproduce the failure</strong>
                <ul className="mt-1 ml-5 list-disc space-y-1 text-xs">
                  <li>Test flow with known failing record</li>
                  <li>Use Celigo&apos;s test execution feature</li>
                  <li>Try creating record manually in destination system</li>
                  <li>Verify source data still accessible and valid</li>
                </ul>
              </li>
              <li>
                <strong>Step 4: Review recent changes</strong>
                <ul className="mt-1 ml-5 list-disc space-y-1 text-xs">
                  <li>Check flow modification history</li>
                  <li>NetSuite/Shopify updates or customizations</li>
                  <li>Connection credential changes</li>
                  <li>Data model changes (new fields, removed fields)</li>
                </ul>
              </li>
              <li>
                <strong>Step 5: Test fix in isolation</strong>
                <ul className="mt-1 ml-5 list-disc space-y-1 text-xs">
                  <li>Clone flow to test environment if available</li>
                  <li>Test with single record before bulk retry</li>
                  <li>Verify fix doesn&apos;t break working records</li>
                  <li>Document fix for future reference</li>
                </ul>
              </li>
            </ol>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Error Prevention: Proactive Monitoring and Alerting
          </h3>
          <p className="mt-4">
            The best error troubleshooting is preventing errors before they
            impact business operations. Proper monitoring catches issues early
            when they&apos;re easier to fix.
          </p>
          <div className="mt-6 space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4
                className={`font-semibold ${lexend.className} text-green-900`}
              >
                Essential Monitoring Configuration
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-green-800 text-sm">
                <li>
                  <strong>Email alerts for flow failures:</strong> Configure
                  immediate notifications when flows fail (not just daily
                  summaries)
                </li>
                <li>
                  <strong>Connection health monitoring:</strong> Alert when
                  connections fail authentication tests
                </li>
                <li>
                  <strong>Record failure thresholds:</strong> Alert if more than
                  X% of records fail in single execution
                </li>
                <li>
                  <strong>Execution time tracking:</strong> Alert when flows
                  take significantly longer than baseline
                </li>
                <li>
                  <strong>Retry queue monitoring:</strong> Alert when retry
                  queue exceeds threshold indicating persistent issues
                </li>
                <li>
                  <strong>API usage tracking:</strong> Monitor approaching rate
                  limits before hitting them
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
                Scheduled Health Checks
              </h4>
              <p className="mt-2 text-blue-800 text-sm">
                Implement weekly health check routine:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-2 text-blue-800 text-sm">
                <li>Review job history for patterns in intermittent errors</li>
                <li>Check retry queue for stuck records</li>
                <li>
                  Validate connection credentials haven&apos;t been revoked
                </li>
                <li>Test critical flows with sample data</li>
                <li>Review performance trends (execution time increasing?)</li>
                <li>Audit error handling configuration</li>
                <li>Verify alerting systems working (test alert delivery)</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-yellow-900`}>
              Documentation is Critical
            </h4>
            <p className="mt-2 text-yellow-800 text-sm">
              Document every error and resolution. When same error appears
              months later (it will), documentation saves hours of re-diagnosis.
              Include:
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-yellow-800 text-sm">
              <li>Error message and code</li>
              <li>Affected flows and record types</li>
              <li>Root cause analysis</li>
              <li>Fix applied with before/after configuration</li>
              <li>Prevention measures implemented</li>
              <li>Date resolved and who handled it</li>
            </ul>
            <p className="mt-3 text-yellow-800 text-sm">
              Build an internal knowledge base. Future you will thank past you.
            </p>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            When Errors Require Celigo Support
          </h3>
          <p className="mt-4">
            Some errors genuinely require vendor support rather than
            self-service troubleshooting. Knowing when to escalate saves time
            and prevents making problems worse.
          </p>
          <div className="mt-6 bg-purple-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-purple-900`}>
              Escalate to Celigo Support When:
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-purple-800 text-sm">
              <li>
                Platform-level errors (not flow-specific): &quot;System
                unavailable&quot;, widespread failures across multiple flows
              </li>
              <li>
                Suspected Celigo platform bugs: Behavior contradicts
                documentation, inconsistent results from same configuration
              </li>
              <li>
                Performance degradation without changes: Flows suddenly slow
                with no configuration changes or volume increases
              </li>
              <li>
                Connection authentication mysteries: Have verified credentials
                correct but connections still fail
              </li>
              <li>
                Feature behavior questions: Need official confirmation of
                intended behavior vs bugs
              </li>
            </ul>
            <p className="mt-3 text-purple-800 text-sm">
              <strong>How to escalate effectively:</strong> When opening Celigo
              support cases, include flow name/ID, job execution ID showing
              error, complete error message, steps you&apos;ve already
              attempted. This accelerates resolution.
            </p>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Real-World Error Case Studies
          </h3>
          <div className="mt-6 space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
                Case Study 1: Silent Inventory Sync Failure
              </h4>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Symptom:</strong> Customer complaints about orders for
                out-of-stock items. Shopify showed inventory available but
                warehouse had none.
              </p>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Investigation:</strong> NetSuite to Shopify inventory
                flow showing &quot;success&quot; but records not updating. No
                errors in Celigo dashboard.
              </p>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Root cause:</strong> Shopify inventory location IDs
                changed after warehouse system migration. Flow successfully sent
                updates to old location IDs (no error) but changes didn&apos;t
                appear in Shopify UI because locations no longer existed.
              </p>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Fix:</strong> Updated location ID mapping in Celigo
                flow. Added validation step to confirm Shopify location exists
                before sending inventory updates.
              </p>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Prevention:</strong> Implemented daily reconciliation
                report comparing NetSuite vs Shopify inventory. Alerts when
                discrepancies exceed threshold. For more on integration
                monitoring, see our{" "}
                <Link
                  href="/resources/articles/shopify-netsuite-integration-guide"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Shopify-NetSuite integration guide
                </Link>
                .
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
                Case Study 2: Cascading Authentication Failure
              </h4>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Symptom:</strong> All integrations failed simultaneously
                at 3 AM. Multiple flows across different systems broke at once.
              </p>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Investigation:</strong> Every NetSuite connection
                showing authentication errors. Tested credentials
                manually—worked fine in NetSuite UI.
              </p>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Root cause:</strong> IT team updated NetSuite IP
                allowlist, removing Celigo&apos;s IP ranges. Change made during
                maintenance window broke all Celigo connections.
              </p>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Fix:</strong> Worked with IT to restore Celigo IPs to
                allowlist. All connections restored within 20 minutes once
                identified.
              </p>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Prevention:</strong> Added Celigo integration
                requirements to IT change management checklist. Implemented
                Celigo connection health monitoring with 5-minute alert
                interval.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
                Case Study 3: Rate Limit Spiral
              </h4>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Symptom:</strong> Flows increasingly timing out. Success
                rate dropped from 99% to 60% over two weeks.
              </p>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Investigation:</strong> NetSuite concurrency limit
                errors appearing frequently. Same flows worked fine month prior
                with similar volumes.
              </p>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Root cause:</strong> New flows added without considering
                aggregate API usage. Multiple flows scheduled simultaneously
                hitting NetSuite concurrency limits. Failed requests retried,
                compounding the problem.
              </p>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Fix:</strong> Staggered flow schedules 15 minutes apart.
                Reduced batch sizes from 100 to 50 records. Optimized saved
                searches used in flows to reduce NetSuite processing time.
              </p>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Prevention:</strong> Created flow scheduling calendar
                showing all executions. Review API usage impact before adding
                new flows. Monitor NetSuite governance dashboard weekly.
              </p>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Advanced Troubleshooting: Webhook and Real-Time Flow Issues
          </h3>
          <p className="mt-4">
            Real-time webhook-triggered flows have unique failure modes
            different from scheduled flows. Understanding webhook mechanics
            helps diagnose these issues.
          </p>
          <div className="mt-6 space-y-4">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4
                className={`font-semibold ${lexend.className} text-orange-900`}
              >
                Common Webhook Issues
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-orange-800 text-sm">
                <li>
                  <strong>Webhook not firing:</strong> Check webhook still
                  registered in source system (Shopify/NetSuite). Webhooks can
                  be unregistered during updates or app changes.
                </li>
                <li>
                  <strong>Delayed webhook delivery:</strong> Source system
                  queues webhooks during high load. Can cause minutes or hours
                  delay.
                </li>
                <li>
                  <strong>Duplicate webhooks:</strong> Some systems send
                  duplicates when retrying. Implement idempotency checks in
                  flows.
                </li>
                <li>
                  <strong>Webhook authentication failures:</strong> Webhook
                  secret mismatch or signature validation failing.
                </li>
                <li>
                  <strong>Payload structure changes:</strong> Source system
                  updated webhook payload format breaking parsing logic.
                </li>
              </ul>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Emergency Response: Critical Integration Down
          </h3>
          <p className="mt-4">
            When critical integrations fail and business operations are
            impacted, follow this emergency response protocol:
          </p>
          <div className="mt-6 bg-red-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-red-900`}>
              Emergency Response Checklist
            </h4>
            <ol className="mt-3 space-y-3 text-red-800 text-sm">
              <li>
                <strong>
                  Hour 0-1: Immediate assessment and communication
                </strong>
                <ul className="mt-2 ml-5 list-disc space-y-1 text-xs">
                  <li>
                    Confirm scope: which flows affected, which systems, business
                    impact
                  </li>
                  <li>
                    Notify stakeholders: operations, finance, customer service
                  </li>
                  <li>
                    Implement workaround: manual processes, batch imports,
                    temporary holds
                  </li>
                  <li>
                    Preserve evidence: export error logs, job histories,
                    configuration snapshots
                  </li>
                </ul>
              </li>
              <li>
                <strong>Hour 1-4: Diagnosis and fix attempt</strong>
                <ul className="mt-2 ml-5 list-disc space-y-1 text-xs">
                  <li>Follow systematic diagnosis framework above</li>
                  <li>Test fixes in isolation before production deployment</li>
                  <li>Document everything for post-mortem</li>
                  <li>Update stakeholders hourly on progress</li>
                </ul>
              </li>
              <li>
                <strong>Hour 4+: Escalation if needed</strong>
                <ul className="mt-2 ml-5 list-disc space-y-1 text-xs">
                  <li>Open Celigo support case with priority flag</li>
                  <li>Engage vendor technical account manager if available</li>
                  <li>
                    Consider temporary architectural changes (direct API calls,
                    CSV imports)
                  </li>
                  <li>Plan backfill strategy for missed sync period</li>
                </ul>
              </li>
              <li>
                <strong>Post-resolution: Recovery and prevention</strong>
                <ul className="mt-2 ml-5 list-disc space-y-1 text-xs">
                  <li>Backfill missed data systematically</li>
                  <li>Validate data integrity across systems</li>
                  <li>
                    Conduct post-mortem: root cause, timeline, prevention
                    measures
                  </li>
                  <li>
                    Update monitoring and alerting to catch similar issues
                    earlier
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            The Bottom Line: Proactive Beats Reactive
          </h3>
          <p className="mt-4">
            Celigo error troubleshooting skills are essential, but preventing
            errors through proper configuration, monitoring, and maintenance is
            infinitely better than firefighting failures at 3 AM. Most
            integration errors are preventable with:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-3">
            <li>
              <strong>Robust error handling configuration:</strong> Retry logic,
              conditional routing, validation steps
            </li>
            <li>
              <strong>Comprehensive monitoring and alerting:</strong> Know about
              failures before business impact occurs
            </li>
            <li>
              <strong>Regular health checks:</strong> Weekly reviews catch
              issues before they become critical
            </li>
            <li>
              <strong>Proper documentation:</strong> Error resolution knowledge
              base accelerates future troubleshooting
            </li>
            <li>
              <strong>Credential management discipline:</strong> Prevent 90% of
              authentication failures with proactive rotation
            </li>
            <li>
              <strong>Change management processes:</strong> Test configuration
              changes before production deployment
            </li>
            <li>
              <strong>Performance optimization:</strong> Prevent timeout errors
              through efficient flow design
            </li>
          </ul>
          <p className="mt-6">
            The businesses that succeed with Celigo treat integration
            reliability as critical infrastructure, not an afterthought. Proper
            monitoring, maintenance, and rapid error response capabilities
            separate amateur integrations from enterprise-grade reliability.
          </p>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            How We Help: Managed Celigo Support and Monitoring
          </h3>
          <p className="mt-4">
            Tired of troubleshooting Celigo errors yourself? As a Celigo
            Technical Partner, The Bearded Developer provides comprehensive
            managed integration support that prevents errors before they impact
            your business:
          </p>
          <div className="mt-6 bg-green-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-green-900`}>
              Our Celigo Managed Service Includes:
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-green-800 text-sm">
              <li>
                <strong>Continuous monitoring and alerting:</strong> We catch
                integration failures immediately and begin remediation before
                you notice
              </li>
              <li>
                <strong>Proactive error prevention:</strong> Weekly health
                checks, credential management, performance optimization
              </li>
              <li>
                <strong>Priority troubleshooting:</strong> When errors occur,
                expert diagnosis and fixes within SLA timeframes
              </li>
              <li>
                <strong>Flow optimization:</strong> Ongoing improvements to
                reduce errors, improve performance, handle edge cases
              </li>
              <li>
                <strong>Change management:</strong> Safe configuration updates,
                testing, and deployment procedures
              </li>
              <li>
                <strong>Documentation and training:</strong> Knowledge transfer
                for your team, error resolution documentation
              </li>
            </ul>
            <p className="mt-4 text-green-800 text-sm">
              <strong>Pricing:</strong> Managed Celigo support retainers
              starting at £800/month for basic monitoring and support, scaling
              to £2,500+/month for complex multi-flow environments with premium
              SLAs.
            </p>
          </div>
          <p className="mt-6">
            Our clients spend less time firefighting integration failures and
            more time growing their businesses. We handle the complexity of
            maintaining reliable Celigo integrations so you don&apos;t have to.
            For context on why Celigo is the right platform for most NetSuite
            integrations, see our{" "}
            <Link
              href="/resources/articles/celigo-integration-platform-netsuite"
              className="text-blue-600 hover:underline font-semibold"
            >
              guide to choosing Celigo for NetSuite businesses
            </Link>
            .
          </p>
          <p className="mt-6">
            Need help with a current Celigo error or want to discuss proactive
            monitoring services? Contact us for expert Celigo troubleshooting
            and managed integration support that keeps your business running
            smoothly.
          </p>
        </div>
        <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0 md:sticky top-10">
          <h3 className={`text-xl font-semibold ${lexend.className}`}>
            Quick Reference
          </h3>
          <div className="mt-4 space-y-4 text-sm">
            <div className="border-l-4 border-red-500 pl-3">
              <strong>Critical Errors</strong>
              <br />
              • Authentication failures
              <br />
              • Invalid credentials
              <br />
              • Resource not found
              <br />→ Flow stops completely
            </div>
            <div className="border-l-4 border-yellow-500 pl-3">
              <strong>Warning Errors</strong>
              <br />
              • Record-level failures
              <br />
              • Data validation issues
              <br />
              • Conditional logic fails
              <br />→ Some records skip
            </div>
            <div className="border-l-4 border-blue-500 pl-3">
              <strong>Common Causes</strong>
              <br />
              • Expired credentials
              <br />
              • Field mapping changes
              <br />
              • API rate limits
              <br />• Business rule violations
            </div>
          </div>
          <div className="mt-6 p-4 bg-red-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              Emergency Checklist
            </h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>□ Check Job History for errors</li>
              <li>□ Test connections manually</li>
              <li>□ Review recent changes</li>
              <li>□ Verify credentials valid</li>
              <li>□ Check API rate limits</li>
              <li>□ Test with single record</li>
              <li>□ Document resolution</li>
            </ul>
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              Prevention Tips
            </h4>
            <div className="text-sm mt-2 space-y-2">
              <div>✓ Enable email alerts</div>
              <div>✓ Weekly health checks</div>
              <div>✓ Credential calendar</div>
              <div>✓ Monitor API usage</div>
              <div>✓ Document errors</div>
              <div>✓ Test before changes</div>
            </div>
          </div>
          <p className="mt-4 text-sm">
            Integration errors impacting business?{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact us
            </a>{" "}
            for expert Celigo troubleshooting and managed monitoring services.
          </p>
        </aside>
      </section>
    </ArticleContainer>
  );
}
