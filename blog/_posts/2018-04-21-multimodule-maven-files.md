---
layout: post
title:  "Dependabot now supports multimodule Java projects"
date:   2018-04-21 18:00:00 +0000
---

Dependabot can now help you keen multimodule Java (Maven) project dependencies
up-to-date.

We released alpha [support for Java (Maven)][release-post] back in January, and
have been steadily improving Dependabot's handling of `pom.xml` files since.
Last week we made some big improvements which we think are worth calling out.

Firstly, Dependabot now implements Maven's versions comparison specification in
full. That means it knows that `1.0.0` is less than `1.0.0u2`, but greater than
`1.0.0.milestone`, and you can rely on it to pick the latest version to update
you to.

Secondly, we've added support for multimodule Maven projects. If you add the
base POM of a multimodule project, Dependabot will automatically get to work on
the full tree of dependency files, keeping your project consistent and
up-to-date.

We still have some [work to do][required-improvements] to get Maven support to full release status, but
at this point it should already be useful for a lot of projects. We'd love your
[feedback][feedback-link] on it, and will be prioritizing improvements to our
Maven support over the coming week.
[feedback-link]!

Enjoy!

🍸

[release-post]: announcing-maven-support
[required-improvements]: java-support-is-getting-better
[feedback-link]: https://github.com/dependabot/feedback
