---
layout: post
title:  "Dependabot now eats thorny Ruby dependency updates for breakfast"
date:   2017-11-27 13:00:00 +0000
---

Since launching Dependabot for Ruby six months ago, we've had a guilty secret:
Dependabot couldn't handle the most difficult updates. Specifically, it couldn't
hack updates where multiple dependencies needed to be updated at the same time.

Now it can.

Want an example? Check out [this pull request][brew_pull_request]. Here, the
Gemfile specified version constraints on both `bootstrap` and `popper_js`. Since
the `bootstrap` gem also depended on `popper_js` with quite a tight version
requirement the only way to update was to bump both gems at the same time.

Want another example? We see situations like [this][rspec_pull_request] a lot.

There used to be a name for these kinds to difficult updates - it was
"dependency hell". With it's new multi-dependency updating powers, Dependabot
should be able to make that a thing of the past.

✌️

[brew_pull_request]: https://github.com/zedtux/brewformulas.org/pull/156
[rspec_pull_request]: https://github.com/ontohub/ontohub-backend/pull/315
