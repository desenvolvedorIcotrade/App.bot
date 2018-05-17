---
layout: post
title:  "Limiting the number of open Dependabot PRs"
date:   2018-05-17 09:00:00 +0000
---

Dependabot now limits the number of open pull requests it has for any
repo/language combination to 10.

Previously, if you left a repo for a while, Dependabot would keep generating
more and more PRs as it became out of date. Then, when you came back to it and
merged one of those PRs Dependabot would automatically rebase all the others,
creating a heavy CI workload.

Now, if you take a break from merging Dependabot PRs, Dependabot will limit the
number it has open to 10, with the exception of PRs that fix a security
vulnerability. We think it's a better flow, but if you prefer the old behaviour
for any reason you can disable the limit in your account settings.

🍸

