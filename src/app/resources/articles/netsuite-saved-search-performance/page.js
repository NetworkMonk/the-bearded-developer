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
            NetSuite Saved Search Performance: How to Fix Slow Reports and
            Dashboards
          </h2>
          <p className="mt-10">
            It&apos;s 9:15 AM Monday morning. Your finance director clicks the
            monthly revenue dashboard and watches the loading spinner for 45
            seconds. Your warehouse manager&apos;s inventory reorder report
            times out completely. Your sales team&apos;s customer search takes
            so long they&apos;ve started keeping spreadsheets instead. NetSuite
            saved searches that once loaded in 2-3 seconds now take minutes—or
            don&apos;t complete at all. Sound familiar?
          </p>
          <p className="mt-6">
            Slow saved searches are the most common NetSuite performance
            complaint I encounter. They start fast when you have 10,000
            transactions and 500 customers. Two years later with 500,000
            transactions and 5,000 customers, the same searches become unusable.
            The problem isn&apos;t NetSuite—it&apos;s how the searches are
            built. Small inefficiencies that don&apos;t matter at low volumes
            become crippling at scale.
          </p>
          <p className="mt-6">
            This guide covers proven techniques to diagnose and fix slow
            NetSuite saved searches. These aren&apos;t theoretical best
            practices—they&apos;re optimizations I&apos;ve used to turn
            60-second searches into 3-second searches on production NetSuite
            accounts managing millions of records.
          </p>
          <div>
            <Image
              src="/img/articles/netsuite-saved-search-performance/performance-header.jpg"
              alt="NetSuite Saved Search Performance Optimization"
              width={640}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Understanding Why Saved Searches Get Slow
          </h3>
          <p className="mt-4">
            NetSuite saved searches query a massive relational database. Every
            join, filter, formula, and summary operation requires database
            processing. As your data grows, inefficient queries that once
            completed in milliseconds now scan millions of records
            unnecessarily.
          </p>
          <div className="mt-6 space-y-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-red-900`}>
                Common Performance Killers
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-red-800 text-sm">
                <li>
                  <strong>Inefficient filter order:</strong> NetSuite processes
                  filters sequentially. Wrong order means scanning entire tables
                  unnecessarily.
                </li>
                <li>
                  <strong>Formula fields without optimization:</strong> Complex
                  CASE statements recalculate on every record instead of using
                  indexed fields.
                </li>
                <li>
                  <strong>Multiple joins to same table:</strong> Searching
                  transactions joining to customers three different ways
                  multiplies processing.
                </li>
                <li>
                  <strong>Summary searches without proper grouping:</strong>{" "}
                  Aggregating millions of rows without appropriate GROUP BY
                  creates massive temp tables.
                </li>
                <li>
                  <strong>Non-indexed field filters:</strong> Filtering on
                  custom fields without database indexes forces full table
                  scans.
                </li>
                <li>
                  <strong>Unnecessary columns:</strong> Retrieving 30 columns
                  when you need 5 increases data transfer and processing time.
                </li>
                <li>
                  <strong>No results limits:</strong> Returning 50,000 rows when
                  users only need top 100 wastes resources.
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6">
            Understanding these issues helps you diagnose which optimization to
            apply. A search timing out because of formula complexity needs
            different fixes than one slow because of inefficient joins.
          </p>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Filter Optimization: Order Matters Enormously
          </h3>
          <p className="mt-4">
            The single biggest saved search mistake: wrong filter order.
            NetSuite processes filters top-to-bottom, using each filter to
            narrow the result set before applying the next filter. Putting
            high-selectivity filters first dramatically reduces processing.
          </p>
          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
              Filter Ordering Rules (Most Important First)
            </h4>
            <div className="mt-3 space-y-3 text-blue-800 text-sm">
              <div>
                <strong>1. Internal ID filters:</strong> If searching for
                specific records by ID, put this first. Immediately narrows to
                exact records.
              </div>
              <div>
                <strong>2. Date range filters:</strong> Especially on
                transaction searches. &quot;Last 90 days&quot; eliminates years
                of historical data instantly.
              </div>
              <div>
                <strong>3. Status filters:</strong> Order status, customer
                status, etc. Often eliminates 70%+ of records (e.g., excluding
                closed/cancelled orders).
              </div>
              <div>
                <strong>4. Subsidiary/Location filters:</strong> For
                multi-subsidiary accounts, filtering to specific subsidiary
                first reduces data dramatically.
              </div>
              <div>
                <strong>5. Type filters:</strong> Transaction type, customer
                category, item type. Good selectivity in most accounts.
              </div>
              <div>
                <strong>6. Text/Name filters:</strong> Last. These require
                string matching which is slower than indexed field comparisons.
              </div>
            </div>
          </div>
          <div className="mt-6 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h4 className={`font-semibold ${lexend.className} text-green-900`}>
              Real Example: Transaction Search Optimization
            </h4>
            <p className="mt-2 text-green-800 text-sm">
              <strong>Before (45 seconds):</strong> Filter order was:
              <br />
              1. Customer name contains &quot;Ltd&quot;
              <br />
              2. Transaction type = Sales Order
              <br />
              3. Date within last 90 days
              <br />
              4. Status = Pending Approval
            </p>
            <p className="mt-3 text-green-800 text-sm">
              This scanned EVERY customer matching &quot;Ltd&quot; (thousands),
              retrieved all their transactions (millions), THEN filtered by date
              and status.
            </p>
            <p className="mt-3 text-green-800 text-sm">
              <strong>After (3 seconds):</strong> Reordered filters:
              <br />
              1. Date within last 90 days
              <br />
              2. Transaction type = Sales Order
              <br />
              3. Status = Pending Approval
              <br />
              4. Customer name contains &quot;Ltd&quot;
            </p>
            <p className="mt-3 text-green-800 text-sm">
              Now only scans 90 days of sales orders with pending status
              (hundreds), THEN filters by customer name. Same results, 93%
              faster.
            </p>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Formula Field Performance: When to Use and When to Avoid
          </h3>
          <p className="mt-4">
            Formula fields are powerful but dangerous for performance. They
            recalculate on every single record returned. A simple formula on a
            search returning 10,000 rows means 10,000 calculations. Complex CASE
            statements with nested logic can make this unbearable.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-red-900`}>
                Slow Formula Patterns
              </h4>
              <div className="mt-3 space-y-3 text-red-800 text-sm">
                <div>
                  <strong>Nested CASE statements:</strong>
                  <br />
                  <code className="text-xs bg-red-100 px-1">
                    CASE WHEN &#123;&apos;field1&apos;&#125; = &apos;A&apos;
                    THEN (CASE WHEN...)
                  </code>
                  <br />
                  Each nested level multiplies processing time.
                </div>
                <div>
                  <strong>String concatenation:</strong>
                  <br />
                  <code className="text-xs bg-red-100 px-1">
                    &#123;&apos;firstname&apos;&#125; || &apos; &apos; ||
                    &#123;&apos;lastname&apos;&#125; || &apos; - &apos; ||
                    &#123;&apos;company&apos;&#125;
                  </code>
                  <br />
                  Simple but slow on large result sets.
                </div>
                <div>
                  <strong>Mathematical calculations:</strong>
                  <br />
                  <code className="text-xs bg-red-100 px-1">
                    (&#123;&apos;amount&apos;&#125; * 1.2) /
                    &#123;&apos;quantity&apos;&#125;
                  </code>
                  <br />
                  Better to calculate in scripts that consume the search.
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4
                className={`font-semibold ${lexend.className} text-green-900`}
              >
                Performance-Friendly Alternatives
              </h4>
              <div className="mt-3 space-y-3 text-green-800 text-sm">
                <div>
                  <strong>Use custom fields instead:</strong> Create custom
                  transaction fields populated by workflow or user event script.
                  Indexed fields are infinitely faster than formula
                  calculations.
                </div>
                <div>
                  <strong>Move logic to scripts:</strong> Retrieve raw data via
                  saved search, calculate formulas in SuiteScript. Especially
                  for complex logic.
                </div>
                <div>
                  <strong>Pre-aggregate data:</strong> For complex calculations
                  on historical data, use scheduled scripts to pre-calculate and
                  store results in custom records.
                </div>
                <div>
                  <strong>Simplify formula logic:</strong> Replace nested CASE
                  with simpler IF statements or direct field comparisons when
                  possible.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-yellow-900`}>
              When Formulas ARE Appropriate
            </h4>
            <p className="mt-2 text-yellow-800 text-sm">
              Formula fields work fine when result sets are small (&lt;1,000
              rows) or formulas are simple (single field references, basic
              comparisons). The performance hit on simple formulas with
              reasonable result sizes is negligible. Reserve custom field
              alternatives for high-volume or complex scenarios.
            </p>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Join Optimization: Minimizing Table Relationships
          </h3>
          <p className="mt-4">
            Every join in a saved search adds processing overhead. NetSuite must
            match records across tables, which becomes expensive with large
            datasets. Multiple joins to the same parent table multiply the
            performance impact.
          </p>
          <div className="mt-6 bg-indigo-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-indigo-900`}>
              Join Optimization Techniques
            </h4>
            <ul className="mt-3 space-y-3 text-indigo-800 text-sm">
              <li>
                <strong>Minimize join depth:</strong> Avoid joining from
                transactions → customer → sales rep → department → subsidiary if
                you can join directly to what you need. Each step adds overhead.
              </li>
              <li>
                <strong>Consolidate filters on joined tables:</strong> If
                filtering on customer status AND customer category, combine into
                single customer join rather than two separate joins.
              </li>
              <li>
                <strong>Use summary joins carefully:</strong> Summarized fields
                on joined records (e.g., SUM of related transactions) can be
                extremely slow. Consider separate searches or pre-calculated
                custom fields.
              </li>
              <li>
                <strong>Avoid unnecessary joined columns:</strong> Don&apos;t
                retrieve customer address fields if you only need customer name.
                Each joined field adds data retrieval overhead.
              </li>
              <li>
                <strong>Be cautious with many-to-many joins:</strong> Items to
                transactions to locations creates multiplicative result sets.
                Use EXISTS-style filters when you can.
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/img/articles/netsuite-saved-search-performance/optimization-diagram.jpg"
              alt="NetSuite Search Optimization Workflow"
              width={640}
              height={400}
              className="mx-auto my-8 rounded-lg shadow-md"
            />
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Summary Searches: Aggregation Performance
          </h3>
          <p className="mt-4">
            Summary searches (GROUP BY operations) can be slow when aggregating
            millions of records or using complex grouping logic. Proper
            configuration makes the difference between usable and unusable.
          </p>
          <div className="mt-6 space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
                Summary Search Best Practices
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-blue-800 text-sm">
                <li>
                  Filter BEFORE summarizing—use criteria to reduce records
                  before GROUP BY
                </li>
                <li>
                  Group by indexed fields when possible (Internal ID, standard
                  fields)
                </li>
                <li>
                  Limit summary functions (COUNT, SUM, MAX) to what&apos;s
                  actually needed
                </li>
                <li>
                  Avoid HAVING clauses with complex logic—filter in criteria
                  instead
                </li>
                <li>
                  Use appropriate aggregation granularity (daily vs monthly
                  totals)
                </li>
                <li>
                  Consider scheduled saved searches for complex
                  monthly/quarterly aggregations
                </li>
              </ul>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Custom Field Indexing Strategy
          </h3>
          <p className="mt-4">
            NetSuite&apos;s standard fields are database-indexed automatically.
            Custom fields you create are NOT indexed by default, which means
            filtering on them requires full table scans. For frequently-filtered
            custom fields, requesting database indexes from NetSuite support
            dramatically improves performance.
          </p>
          <div className="mt-6 bg-purple-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-purple-900`}>
              When to Request Custom Field Indexing
            </h4>
            <p className="mt-2 text-purple-800 text-sm">
              NetSuite limits how many custom fields can be indexed (typically
              20-40 per record type depending on SKU). Prioritize indexing for:
            </p>
            <ul className="mt-3 list-disc list-inside space-y-2 text-purple-800 text-sm">
              <li>Custom fields used in saved search filters frequently</li>
              <li>
                Fields filtered in high-volume searches (transaction searches
                especially)
              </li>
              <li>Custom status or type fields replacing workflow states</li>
              <li>
                Integration reference fields (external system IDs for syncing)
              </li>
              <li>Custom date fields used for reporting date ranges</li>
            </ul>
            <p className="mt-3 text-purple-800 text-sm">
              <strong>How to request:</strong> Open NetSuite support case
              requesting database index on specific custom field. Provide use
              case and search examples. Approval typically takes 1-2 weeks.
              Performance improvement is immediate once applied.
            </p>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Results Management: Pagination and Limits
          </h3>
          <p className="mt-4">
            Returning thousands of rows when users only need dozens wastes
            resources and slows rendering. Proper results management improves
            both search performance and user experience.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4
                className={`font-semibold ${lexend.className} text-green-900`}
              >
                Set Appropriate Result Limits
              </h4>
              <p className="mt-2 text-green-800 text-sm">
                Under &quot;Available Filters&quot; tab, set maximum results.
                For user-facing searches, 1,000 results is typically more than
                sufficient. For dashboards, often 100 or fewer.
              </p>
              <p className="mt-2 text-green-800 text-sm">
                If users need access to more records, teach them to use filters
                rather than scrolling through thousands of results.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4
                className={`font-semibold ${lexend.className} text-green-900`}
              >
                Use Pagination in Scripts
              </h4>
              <p className="mt-2 text-green-800 text-sm">
                When consuming saved searches in SuiteScript, use .getRange() to
                retrieve results in batches of 1,000 rather than
                .run().getResults() which loads everything into memory.
              </p>
              <p className="mt-2 text-green-800 text-sm">
                Better memory management and allows processing enormous result
                sets that would otherwise exceed script governance limits.
              </p>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Scheduled vs On-Demand Searches
          </h3>
          <p className="mt-4">
            Not every search needs real-time results. For heavy aggregations or
            historical reporting, scheduled searches that run overnight and
            cache results dramatically improve user experience.
          </p>
          <div className="mt-6 bg-orange-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-orange-900`}>
              When to Use Scheduled Searches
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-orange-800 text-sm">
              <li>
                <strong>Monthly/quarterly reports:</strong> Executive dashboards
                don&apos;t need real-time data—schedule nightly
              </li>
              <li>
                <strong>Complex aggregations:</strong> Year-over-year
                comparisons across millions of transactions
              </li>
              <li>
                <strong>Data exports:</strong> Scheduled CSV exports for
                external systems or data warehouse loading
              </li>
              <li>
                <strong>Alerting triggers:</strong> Run searches hourly to
                trigger notifications rather than real-time monitoring
              </li>
            </ul>
            <p className="mt-3 text-orange-800 text-sm">
              <strong>Implementation:</strong> Save search as public, set
              schedule under &quot;Scheduling &amp; Email&quot; tab. Results
              cached for instant access when users open report. Can email
              results automatically.
            </p>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Monitoring Saved Search Performance
          </h3>
          <p className="mt-4">
            You can&apos;t optimize what you don&apos;t measure. NetSuite
            provides tools to identify slow searches and track performance over
            time.
          </p>
          <div className="mt-6 space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
                Built-in Performance Monitoring
              </h4>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Performance Dashboard:</strong> Setup → Company → Enable
                Features → SuiteCloud tab → Enable &quot;SuiteAnalytics
                Workbook&quot; if available. Provides saved search performance
                metrics.
              </p>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>Search execution time:</strong> Recent searches show
                execution time in search results header. Anything over 10
                seconds needs optimization.
              </p>
              <p className="mt-2 text-blue-800 text-sm">
                <strong>System Notes:</strong> Track when searches are modified
                and by whom. Useful when performance degrades after changes.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
                Proactive Monitoring Strategy
              </h4>
              <p className="mt-2 text-blue-800 text-sm">
                Create a &quot;slow search&quot; monitoring workflow:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-blue-800 text-xs">
                <li>
                  Inventory critical saved searches used in dashboards,
                  workflows, integrations
                </li>
                <li>Baseline performance (execution time) quarterly</li>
                <li>
                  Set alert thresholds (e.g., 3x slower than baseline triggers
                  review)
                </li>
                <li>
                  Test searches after NetSuite updates or major data migrations
                </li>
                <li>
                  Review top 20 slowest searches quarterly for optimization
                </li>
              </ul>
              <p className="mt-3 text-blue-800 text-sm">
                For businesses relying heavily on saved searches, this
                monitoring prevents performance degradation from becoming a
                crisis. Similar to website monitoring practices covered in our{" "}
                <Link
                  href="/resources/articles/monitoring-and-alerting-website-problems"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  monitoring and alerting guide
                </Link>
                .
              </p>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Advanced Optimization: SuiteScript Search APIs
          </h3>
          <p className="mt-4">
            For searches consumed by scripts rather than users, NetSuite&apos;s
            SuiteScript Search API offers optimization opportunities beyond
            saved search UI capabilities.
          </p>
          <div className="mt-6 bg-indigo-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-indigo-900`}>
              Script-Based Search Optimizations
            </h4>
            <ul className="mt-3 space-y-3 text-indigo-800 text-sm">
              <li>
                <strong>Dynamic filter generation:</strong> Build filter arrays
                programmatically based on actual data needs rather than broad
                saved search filters.
              </li>
              <li>
                <strong>Column selection:</strong> Request only columns needed
                for current operation rather than every field in saved search
                definition.
              </li>
              <li>
                <strong>Parallel processing:</strong> Split large searches into
                smaller chunks processed in parallel (multiple script
                deployments or map/reduce).
              </li>
              <li>
                <strong>Result caching:</strong> Store search results in custom
                records or script storage for frequently-accessed data that
                changes infrequently.
              </li>
            </ul>
            <p className="mt-3 text-indigo-800 text-sm">
              This level of optimization requires SuiteScript expertise but can
              dramatically improve performance for integration workflows or
              complex automation. Our guide on{" "}
              <Link
                href="/resources/articles/netsuite-suitescript-custom-vs-native"
                className="text-indigo-600 hover:underline font-semibold"
              >
                when to use custom SuiteScript vs native features
              </Link>{" "}
              helps determine if this complexity is warranted.
            </p>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Integration-Specific Performance Considerations
          </h3>
          <p className="mt-4">
            If saved searches power integrations (Shopify sync, Celigo flows,
            API endpoints), performance becomes even more critical. Slow
            searches delay inventory updates, order processing, and financial
            reporting.
          </p>
          <div className="mt-6 bg-purple-50 p-6 rounded-lg">
            <h4 className={`font-semibold ${lexend.className} text-purple-900`}>
              Integration Search Optimization
            </h4>
            <ul className="mt-3 list-disc list-inside space-y-2 text-purple-800 text-sm">
              <li>
                Use timestamp-based filters to retrieve only changed records
                since last sync
              </li>
              <li>
                Implement incremental sync patterns rather than full data pulls
              </li>
              <li>
                Batch integration searches to run during off-peak hours when
                possible
              </li>
              <li>
                Monitor search execution time as part of integration health
                checks
              </li>
              <li>
                Set search timeout limits to prevent integration jobs hanging
                indefinitely
              </li>
            </ul>
            <p className="mt-3 text-purple-800 text-sm">
              For Shopify-NetSuite integrations specifically, inventory sync
              searches are the most performance-sensitive. Our{" "}
              <Link
                href="/resources/articles/shopify-netsuite-integration-guide"
                className="text-purple-600 hover:underline font-semibold"
              >
                complete Shopify-NetSuite integration guide
              </Link>{" "}
              covers search optimization in the context of real-time inventory
              sync.
            </p>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            Performance Optimization Checklist
          </h3>
          <p className="mt-4">
            Use this systematic approach when optimizing slow saved searches:
          </p>
          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <ol className="space-y-3 text-blue-800 text-sm">
              <li>
                <strong>1. Measure baseline performance</strong> - Record
                current execution time and typical result count
              </li>
              <li>
                <strong>2. Review filter order</strong> - Move high-selectivity
                filters (dates, IDs, status) to top
              </li>
              <li>
                <strong>3. Audit formula fields</strong> - Replace complex
                formulas with custom fields or script calculations
              </li>
              <li>
                <strong>4. Minimize joins</strong> - Remove unnecessary joins,
                consolidate where possible
              </li>
              <li>
                <strong>5. Reduce columns</strong> - Only retrieve fields
                actually needed for display/processing
              </li>
              <li>
                <strong>6. Set result limits</strong> - Prevent returning
                thousands of rows when hundreds suffice
              </li>
              <li>
                <strong>7. Consider custom field indexing</strong> - Request
                indexes for frequently-filtered custom fields
              </li>
              <li>
                <strong>8. Evaluate scheduled search option</strong> - Cache
                results for non-real-time reporting needs
              </li>
              <li>
                <strong>9. Test and validate</strong> - Verify results match
                original, measure improvement
              </li>
              <li>
                <strong>10. Document changes</strong> - Record optimizations for
                future troubleshooting
              </li>
            </ol>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            When to Get Expert Help
          </h3>
          <p className="mt-4">
            Simple optimizations (filter reordering, reducing columns) are
            straightforward for NetSuite admins. More complex optimizations
            require deeper expertise:
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4
                className={`font-semibold ${lexend.className} text-green-900`}
              >
                Admin-Level Optimizations
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-green-800 text-sm">
                <li>Reordering filters</li>
                <li>Removing unnecessary columns</li>
                <li>Setting result limits</li>
                <li>Simplifying basic formulas</li>
                <li>Scheduling non-critical searches</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className={`font-semibold ${lexend.className} text-blue-900`}>
                Developer-Level Optimizations
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-blue-800 text-sm">
                <li>Custom field architecture design</li>
                <li>Complex SuiteScript search optimization</li>
                <li>Database index planning and requests</li>
                <li>Integration search performance tuning</li>
                <li>Map/reduce for massive data processing</li>
              </ul>
            </div>
          </div>
          <h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
            The Bottom Line
          </h3>
          <p className="mt-4">
            Slow saved searches aren&apos;t inevitable as your NetSuite account
            grows. Proper optimization keeps searches performant even with
            millions of records. The key is understanding how NetSuite processes
            searches and applying optimizations systematically.
          </p>
          <p className="mt-6">
            <strong>Most impactful optimizations:</strong>
          </p>
          <ul className="mt-4 list-disc list-inside space-y-3">
            <li>Reorder filters to process high-selectivity criteria first</li>
            <li>
              Replace formula fields with indexed custom fields for
              frequently-used calculations
            </li>
            <li>Minimize joins and reduce joined columns to essentials</li>
            <li>Set appropriate result limits based on actual user needs</li>
            <li>
              Schedule complex aggregations rather than computing real-time
            </li>
            <li>Request database indexes for custom fields used in filters</li>
            <li>Monitor performance proactively to catch degradation early</li>
          </ul>
          <p className="mt-6">
            Start with simple optimizations (filter order, column reduction)
            which deliver immediate improvements. Graduate to structural changes
            (custom fields, scheduling) for searches that remain slow. Most
            searches can be optimized to sub-5-second execution with methodical
            application of these techniques.
          </p>
          <p className="mt-6">
            Need help diagnosing and fixing slow NetSuite saved searches? The
            Bearded Developer team has optimized hundreds of searches across
            accounts managing millions of transactions. We can audit your
            slowest searches, implement proven optimizations, and establish
            monitoring to prevent future performance degradation. Whether you
            need a one-time performance audit or ongoing NetSuite support, we
            deliver practical improvements that make NetSuite actually usable
            for your team.
          </p>
        </div>
        <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0 md:sticky top-10">
          <h3 className={`text-xl font-semibold ${lexend.className}`}>
            Quick Fixes
          </h3>
          <div className="mt-4 space-y-4 text-sm">
            <div className="border-l-4 border-blue-500 pl-3">
              <strong>Filter Order</strong>
              <br />
              1. Date ranges first
              <br />
              2. Status filters
              <br />
              3. Type/category
              <br />
              4. Text searches last
            </div>
            <div className="border-l-4 border-green-500 pl-3">
              <strong>Performance Targets</strong>
              <br />
              • &lt;3 sec: Excellent
              <br />
              • 3-10 sec: Acceptable
              <br />
              • 10-30 sec: Needs work
              <br />• &gt;30 sec: Critical issue
            </div>
            <div className="border-l-4 border-purple-500 pl-3">
              <strong>Common Mistakes</strong>
              <br />
              ✗ Complex formulas
              <br />
              ✗ Too many joins
              <br />
              ✗ No result limits
              <br />
              ✗ Wrong filter order
              <br />✗ Unindexed custom fields
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              Optimization Checklist
            </h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>□ Reorder filters (date/status first)</li>
              <li>□ Remove unnecessary columns</li>
              <li>□ Simplify or remove formulas</li>
              <li>□ Minimize table joins</li>
              <li>□ Set appropriate result limit</li>
              <li>□ Consider scheduled search</li>
              <li>□ Request custom field indexes</li>
            </ul>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h4 className={`font-semibold ${lexend.className}`}>
              When to Index
            </h4>
            <div className="text-sm mt-2">
              Request database indexes for custom fields that are:
              <ul className="mt-2 space-y-1 text-xs">
                <li>• Used in search filters</li>
                <li>• High-volume record types</li>
                <li>• Integration sync fields</li>
                <li>• Status/type indicators</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm">
            Slow searches hurting productivity?{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact us
            </a>{" "}
            for NetSuite performance audits and optimization services.
          </p>
        </aside>
      </section>
    </ArticleContainer>
  );
}
