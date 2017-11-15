---
layout: post
title:  "GitHub Marketplace's effect on signups/revenue"
date:   2017-11-15 17:00:00 +0000
---

It's been a month since Dependabot was added to the
[GitHub Marketplace][marketplace] and a new cohort of apps are being added now.
Time to crunch some numbers on the effect it's had on Dependabot.

### GitHub Marketplace drives a lot of signups

<img alt="Signups over time" src="/images/blog/signups-graph.png" style="margin-top: 0;">

It's not hard to guess when Dependabot went into the GitHub Marketplace from the
graph above. In the previous month we had 45 signups, in the subsequent one we
had 457. **That's literally a 10x increase!**

### Around half those signups are good quality

<img alt="Conversion rate" src="/images/blog/signups-conversion-graph.png" style="margin-top: 0;">

Unsurprising, not all of those new signups are as high-value as the ones that
sought Dependabot out before it were part of GitHub Marketplace. To actually try
Dependabot you need to install it on a repo from within our UI, which takes
about 3 clicks. Post-marketplace, 55% of people didn't manage that
(pre-marketplace is was 9%, mainly driven by me bullying non-dev friends into
signing up).

The good news, however, is that the signups who did add a repo look like they're
of just the same quality as before Dependabot was in the marketplace. 80% of
them are still using the service.

(As an aside, many of the accounts that never added a repo appear to be fake
users. I have no idea what their motivation is, but we see signups from "users"
who only signed up for GitHub moments before and have completely unintelligible
handles.)

### It's working for other apps, too

<img alt="Percentage of app installs" src="/images/blog/app-installs-percentage.png" style="margin-top: 0;">

GitHub uses integer IDs for app installations, so we can calculate how many app
installs occurred in a given period. From that, we can tell what percentage of
app installs were Dependabot.

That 6% number looks great, but it probably overstates Dependabot's share of
Marketplace installs. Whilst Dependabot is currently 6% of all *app* installs,
some of the biggest members of the Marketplace still integrate with GitHub
through OAuth, which won't be being picked up.

### They're willing to pay

<img alt="Percentage of app installs" src="/images/blog/revenue-graph.png" style="margin-top: 0;">

Dependabot doesn't charge personal accounts at all, and only charges
organisations for private repos. As such, **we don't expect most people to ever
pay us.**

Further, we do no sales or marketing. We don't sponsor anything, don't do PPC,
and don't send cold emails. All we do is build a great product.

Despite that, we've not only seen increased signup numbers from GitHub
Marketplace, but real revenue. Almost every day, a new organisation finds us and
starts paying for the service. In almost every case we've had no previous
contact with.

### Conclusion: GitHub Marketplace is a great distribution channel

For a simple, low-cost product that requires very little setup, like Dependabot,
GitHub Marketplace is a great distribution channel. It's driven a lot of high
quality signups to us, many of whom have evangelised us to organisations who now
pay us.

If you're building an app that can operate a similar model then we can't
recommend GitHub Marketplace highly enough!

[dependabot]: https://dependabot.com
[marketplace]: https://github.com/marketplace
