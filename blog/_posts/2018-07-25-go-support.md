---
layout: post
title:  "Announcing Go support"
date:   2018-07-25 08:00:00 +0100
---

Using Go? If you're using `dep` for your dependency management then Dependabot
can now help you keep your `Gopkg.toml` and `Gopkg.lock` files up-to-date.

<p class="image-medium">
  <img src="/images/dependabot-logo-square.svg" alt="Dependabot" height="100px" style="max-width: 100px;" />
  <img src="/images/blog/go-gopher.svg" alt="Go" height="100px" style="max-width: 100px;" />
</p>

Here's how it works:
- **Dependabot looks for a `Gopkg.toml` and a `Gopkg.lock`** in your repo, pulls
  them down and parses them. It doesn't clone your repo, ever.
- **Dependabot checks each dependency for updates** by looking at its source
  repo and checking whether any available updates are resolvable.
- **Dependabot creates individual PRs** for each of your outdated dependencies.
  Each PR will contain links to the relevant changelog, release notes and
  commits.

We wanted to launch Go support as early as possible, so have released it
in alpha. As such, there are a couple of caveats you should be aware of:
- **Dependabot will generate an incorrect `inputs-hash` in your lockfile** which
  is annoying, but the `inputs-hash` field is being removed in dep 0.5.0, which
  is being released in less than 24 hours. 🎉
- **Dependabot will always widen `Gopkg.toml` ranges** if they need to be
  updated. That's the right behaviour for libraries, but not for applications,
  and we can't tell them apart. We'll make it configurable soon.
- **Dependabot doesn't yet support vendoring for Go dependencies** so if you
  commit a vendor folder Dependabot won't update it for you.

We'll be working to fix all of the above over the next few weeks, as well as
ironing out any bugs.

We'd love your help to get Dependabot's Go support perfect. If you have any
suggestions, or if you experience any issues, please don't hesitate to
[let us know][feedback-link]!

🤖

[feedback-link]: https://github.com/dependabot/feedback
