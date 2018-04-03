---
layout: post
title:  "Automatically respond to security advisories"
date:   2018-04-03 08:00:00 +0100
---

Dependabot now creates pull requests immediately in response to security
advisories for Ruby, PHP and Rust (more languages coming soon). It can also
automatically merge those PRs for you.

<p class="image-medium">
  <a href="https://github.com/ministryofjustice/bba/pull/42">
    <img src="/images/blog/security-pr.png" style="max-width: 700px;" alt="Security PR" />
  </a>
</p>

Here's how it works:
- Dependabot polls The Ruby Advisory Database, The RustSec Advisory Database,
  and The PHP Security Advisory Database looking for new advisories
- If it finds any, Dependabot kicks off update runs to update that specific
  dependency immediately for any users who have it
- Dependabot prefixes the titles of the created PRs with `[Security]` and
  includes details of the vulnerabilities fixed in the PR message

If you want to automatically merge security updates, there's an option for that:

<p class="image-medium">
  <img src="/images/blog/security-automerge.png" style="max-width: 700px;" alt="Automerge options" />
</p>

Over the coming weeks we'll be adding more security advisory sources, and where
a public source doesn't exist for a language we'll consider creating one
ourselves. We'll also be adding an option to only receive security updates
(for legacy projects).

Stay safe out there!

🍸
