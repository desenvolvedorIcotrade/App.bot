---
layout: post
title:  "Helping test Bundler 1.16.0"
date:   2017-09-07 7:30:11 +0100
---

Dependabot is currently helping test the latest pre-release candidate of
Bundler 1.16.0. If you see anything odd in any of the pull requests we generate,
let us know.

We've had the privilege of working with the Bundler team on
[improving the algorithm for dependency resolution][improving-resolution] in
Bundler 1.16.0. Now we're helping test it by using a pre-release to generate
Dependabot's pull requests.

We hope the above will mean Bundler's updated resolver is bug-free when it's
released (and we already caught two regressions!). However, Dependabot doesn't
interact with Bundler CLI at all, so we'd love to encourage others to help test
that. If you're game, just update to the latest Bundler locally and report back
any issues you have [here][bundler-github]:

```
gem update bundler --pre
```

In the future, we're planning to roll out a way for Dependabot users to opt-in
to running pre-releases of other dependencies against their test suites to
generate feedback for maintainers. Done right, we hope we can catch more bugs
early, and save everyone some time. That's a story for another day, though.

✌️

[improving-resolution]: https://dependabot.com/blog/improving-dependency-resolution-in-bundler
[bundler-github]: https://github.com/bundler/bundler
