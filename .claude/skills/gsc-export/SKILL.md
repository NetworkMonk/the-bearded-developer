---
name: gsc-export
description: Connects to google search console for the website hosted at thebeardeddeveloper.co.uk. Used when the user is requesting a new report.
---

When the user requests that we export data from GSC (google search console) we want to do the following.

Pre: Check data files, if we have up to date data (within a couple of days), no need to connect to GSC again, just use local data

1. Connect to GSC and inspect the thebeardeddeveloper.co.uk site.
2. Extract daily site summary information and store in ".claude/skills/gsc-export/daily.csv". Collect the following data points. (Do not create entries for duplicate days, update with latest information).

- date
- clicks
- impressions
- ctr
- avg_position

3. Extract daily snapshot of top 10 pages and store in ".claude/skills/gsc-export/pages.csv", collect the following data points. (Do not create entries for duplicate days, update with latest information).

- date
- page
- clicks
- impressions
- ctr
- position

Once exported look at recent data and changes that we have made in recent session. Assess any opportunities for improvements and review success of recent changes. Make sure we review our recent changes in project memory.

Try to ignore any queries that look like bot traffic. We get a lot of queries to "evaluate the ...." these all look like AI or bot traffic and never convert.

Make 3 suggestions for ways we can improve SEO and the biggest opportunities and discuss with the user.
