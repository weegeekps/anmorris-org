---
title: "Announcing Donations Dashboard"
date: 2018-10-21T23:28:00-05:00
author:
  given_name: Adam
  family_name: Morris
  display_name: Adam Morris
tags:
- projects
- open source
- charity
draft: false
---

As mentioned in the forward of my [review of Black Ops 4]({{< ref "/blog/a_brief_review_of_bo4.md" >}}), I had a project that I was preparing to announce. At that point it was in a nascent stage and was not much more than an idea that I had written down on paper, but was unsure if it was fully feasible without screen scraping. I'm glad to report that it is indeed feasible and I am now ready to announce the **Donations Dashboard**.

[Extra Life](https://www.extra-life.org/) uses some software called [Donor Drive][1] in order to manage the Extra Life website and user pages. The website alone is very powerful and provides you with great tools to manage your own Extra Life efforts. In the four years that I've taken part in Extra Life, they've improved the site every year, including allowing participants to add a [Twitch.tv](https://www.twitch.tv/) embedded player to their own Extra Life page. It even comes with a fantastic dashboard for managing your donations recieved and whether or not you've sent a thank you email to your donors yet.

What the site doesn't have, is a good, stream-safe dashboard. With **Donations Dashboard**,  I hope to remedy this problem. Fortunately, [Donor Drive][1] has a well documented [public API](https://github.com/DonorDrive/PublicAPI) that will serve as the data source for this project.

My timeline for this project, as of today, is to have it ready before game day on November 3rd. I've created a [project repository on Github][2] and a [kanban board on Trello][3]. 

On the [kanban board][3] there are three labels that may be relevant to the reader. Anything marked with an orange label is something that is required to be done before game day. Anything marked with a pink label is something that still needs design. The blue label are tasks that I have marked as being good for others to help with. Tasks are already sorted by priority.

_However_, I am not yet ready to start accepting outside PRs. There are a few tasks I need to complete first before others can help. They are:

1. I need to finish the design mockup and provide a public link to my Adobe XD document, including the design specs.
2. I have to complete the tasks that I've marked with a red label, indicating that they are blockers. This is basically infrastructure and API stuff.
3. I need to fill in the description for the "Help Wanted" stories. This is mostly waiting on me to finish the design as well.
4. I need to finish a `Contributing.md` document in the repository with guidelines on contributions.

If you're an inexperienced developer looking to contribute to an open-source project on Github, this might be a good start. Feel free to head over to the [project repo][2] or [trello][3] and let me know you're interested.

[1]: https://www.donordrive.com/
[2]: https://github.com/weegeekps/donations-dashboard
[3]: https://trello.com/b/6mk0VWCj/donation-dashboard