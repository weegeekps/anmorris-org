---
title: "About this Site"
date: 2018-07-06T15:38:00
---

By now you've likely already asked yourself, "Why the hell is this site so bland?" It's a valid question. For someone who
takes pride in their abilities in user experience, this looks like a rather odd website to have designed. In truth, this
website fits perfectly with many exceedingly important goals of mine regarding my personal website:

1. It has to be simple to work with, so I can focus more on writing and less on bikeshedding.
2. Articles absolutely must use Markdown, but it'd be helpful if I could extend it as well for custom features.
3. The end result needs to be damn simple to deploy.
4. The design should be simple and minimalist.
5. I have to like working with it.

I didn't think up these goals overnight. In fact, it's taken 3 years for these goals to fully present and mature themselves.
How we got here though started in 2015, when I started on the first rewrite of the site. You probably didn't expect this site to 
come with a story, but I'm writing this as a lesson to others and my future self next time I try to make the same mistakes.

### 2015 &mdash; Time For a Rewrite.

The first iteration of [anmorris.org](/) went up in 2014 with a site written in [Ember](https://www.emberjs.com/) that took about 2 weeks, on 
and off, to code and deploy. It didn't need to be written in Ember, but I wanted it to be a Single-Page design with routing
and transitions between the routes. I recognized at the time that Ember was overkill for a personal website, but it fit 
most of my needs and I was pining for a project. The end result _was_ well designed and laid out exceptionally well, but 
I wasn't completely happy with the results going into 2015. In order to practice and improve my writing abilities, I 
wanted a blog that would allow me to have a medium for that practice.

Suddenly, using Ember seemed like a great idea. I would need a dynamic component of this website after all. I made a list
at the time of all the pieces I would need to decide on:

* Figure out what database to use. What fits my needs best?
* Write a server side API. Gotta use JSON API _because Ember_.
* Decide what features my blog needs? Do I want tags? What about drafts?

This is a largely innocuous list, and a good starting point for anyone who's ever written a blog before. My site prior 
to [anmorris.org](/) was a home grown content management system so I assumed I'd be cooking with gas in no time. That was
until I fell into the trap of [Parkinson's law of triviality](https://en.wikipedia.org/wiki/Law_of_triviality) often 
commonly referred to in programming circles as **bikeshedding**.

{{<quote quote="Technical disputes over minor, marginal issues conducted while more serious ones are being overlooked. The implied image is of people arguing over what color to paint the bicycle shed while the house is not finished." author="Definition on Bikeshedding from the Jargon File" link="http://www.catb.org/jargon/html/B/bikeshedding.html">}}

If anyone is curious if it's possible to bikeshed with yourself, I can definitively say from my own experiences the answer
is a resounding yes. I would debate, with myself, the merits of everything. MongoDB, Node, Python, Express, Design paradigms
and so much more. This was _my_ website, so it had to be perfect. For a brief moment in 2016, I even began writing my 
own Node.js framework before I realized how stupid that was.

It wasn't until 2017 that I really began to recognize my problem. I sat down, deleted my 3 repositories that I had created
up to that point, and decided to start over. I picked some technologies that I was going to work with and made a pact with
myself that I would stick with it. It would be an Aurelia front-end with a Rust Rocket API backed by Postgres. All good
technologies that I had been using in both professional and personal projects. Immediately, I started running into issues
and found myself becoming unhappy with my choices.

I absolutely love [Rust](https://www.rust-lang.org/) and [Rocket](https://rocket.rs/). Rust is easily my current favorite
regarding programming languages, and Rocket is, in my opinion, the best web framework available for Rust. Despite this, 
I found myself slowly becoming increasingly frustrated. **I wanted to write _words_, not _code_.** Both Rust and Rocket 
are currently fairly immature and require a lot of boilerplate. At this point, I decided to ditch Rust and go with another language I 
like, but don't love, [Go](https://golang.org). Looking at Go from an academics standpoint, it's a rough gem, but Go is 
a great language for web applications that is quick to get going. Node was also in the running, but I opted against it 
since I spend most all of my workday writing JavaScript for Node and Browsers.

Another change. _"Fuck, I'm still bikeshedding."_

### Enter Hugo


