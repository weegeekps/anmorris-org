---
title: "About this Site"
date: 2018-07-08T22:28:00
---

Every project we work on tends to be a learning experience. Sometimes we learn new technologies, sometimes we learn things about ourselves, and sometimes we learn life lessons. This project that led to the creation of this website fit into the life lessons category.

It's taken 3 years, working on and off, for this simple website to take shape. If that sounds insane, you're absolutely right, it is. In actuality, this is probably the 4th or 5th iteration of the site. You probably didn't expect this site to come with a story, but I'm writing this as a lesson to my future self next time I try to make the same mistakes.

### 2015 &mdash; Time For a Rewrite.

The first iteration of [anmorris.org](/) went up in 2014 with a site written in [Ember](https://www.emberjs.com/) that took about 2 weeks, on and off, to code and deploy. It didn't need to be written in Ember, but I wanted it to be a Single-Page design with routing and transitions between the routes. I recognized at the time that Ember was overkill for a personal website, but it fit most of my needs and I was pining for a project. The end result _was_ well designed and laid out exceptionally well, but I wasn't completely happy with the results going into 2015. In order to practice and improve my writing abilities, I wanted a blog that would allow me to have a medium for that practice.

Suddenly, using Ember seemed like it had turned into a great idea. I would need a dynamic component of this website after all. I made a list at the time of all the pieces I would need to decide on:

* Figure out what database to use. What fits my needs best?
* Write a server side API. Gotta use JSON API _because Ember_.
* Decide what features my blog needs? Do I want tags? What about drafts?

This is a largely innocuous list, and a good starting point for anyone who's ever written a blog before. My site prior to [anmorris.org](/) was a home grown content management system so I assumed I'd be cooking with gas in no time. That was until I fell into the trap of [Parkinson's law of triviality](https://en.wikipedia.org/wiki/Law_of_triviality) often commonly referred to in programming circles as **bikeshedding**.

{{<quote quote="Technical disputes over minor, marginal issues conducted while more serious ones are being overlooked. The implied image is of people arguing over what color to paint the bicycle shed while the house is not finished." author="Definition on Bikeshedding from the Jargon File" link="http://www.catb.org/jargon/html/B/bikeshedding.html">}}

If anyone is curious if it's possible to bikeshed with yourself, I can definitively say from my own experiences the answer is a resounding yes. I would debate, with myself, the merits of everything. MongoDB, Node, Python, Express, Design paradigms and so much more. This was _my_ website, so it had to be perfect. These internalized disputes went on for years and through several different codebases.

It wasn't until late 2017 that I really began to recognize the problem. I sat down, deleted my 3 repositories that I had created up to that point, and decided to start over. I picked some technologies that I was going to work with and made a pact with myself that I would stick with it. It would be an [Aurelia](https://aurelia.io) front-end with a Rust Rocket API backed by Postgres. All good technologies that I had been using in both professional and personal projects. Immediately, I started running into issues and found myself becoming unhappy with my choices.

I absolutely love [Rust](https://www.rust-lang.org/) and [Rocket](https://rocket.rs/). Rust is easily my current favorite regarding programming languages, and Rocket is, in my opinion, the best web framework available for Rust. Despite this, I found myself slowly becoming increasingly frustrated. **I wanted to write _words_, not _code_.** Both Rust and Rocket are currently fairly immature and require a lot of boilerplate. At this point, I decided to ditch Rust and go with another language I like, but don't love, [Go](https://golang.org). Looking at Go from an academics standpoint, it's a rough gem, but Go is a great language for web applications that is quick to get going. Node was also in the running, but I opted against it since I spend most all of my workday writing JavaScript for Node and Browsers.

It was now 2018 and I was making another change. _"Fuck, I'm still bikeshedding."_

### (Finally,) Identifying the Problem

At this point, I realized I needed to step back and look at the reasons why I wanted this website. First and foremost, I wanted a place where I could post various personal projects I have been working on. I wanted a blog space where I could write on various aspects of those projects and other programming related thoughts. Writing helps me significantly in properly analyzying and forming my thoughts and opinions, and while I could simply write in a journal, I prefer to write somewhat publicly. Knowledge should be shared, not kept to ourselves, and perhaps my writings can help someone else. Plus, it gives others a chance to keep me honest: it's important that we share thoughts with peers and get their feedback as well. From these two points, a list of goals took shape:

1. It has to be simple to work with, so I can focus more on writing and less on bikeshedding.
2. Articles absolutely must use Markdown, but it'd be helpful if I could easily extend it as well for custom features.
3. The end result needs to be damn simple to deploy.
4. The design should be simple and minimalist.
5. I have to like working with it.

Another aspect, largely the reason why I've been trying to write my own software for handling this, is that past experiences with prebuilt solutions, like Medium, Ghost, and Wordpress, left me frustrated when trying to make my own themes. It is important to me that this site be unique with my own visual design. Unlike the rest of the site where I couldn't make up my mind, I knew I wanted something simple and minimalist, borderline [brutalist](http://brutalistwebsites.com/). Websites like [Motherfucking Website](http://motherfuckingwebsite.com/) and [Best Motherfucking Website](https://bestmotherfucking.website/) and their anti-design stances are attractive in that much of the web is overdesigned. It aligns heavily with Edward Tufte's views on presenting information, textually or graphically, in as simple a form as possible.

Unlike the design, I was overengineering the solution. A static website would do, but I still wanted to achieve as many of my goals as possible. I knew of [Jekyll](https://jekyllrb.com/) and while I like much of what it offers, I dislike Ruby and wanted something I could enjoy extending or modify if necessary. So I set out on a search for alternatives, but with the pact to myself that I'd use just Jekyll if I didn't find anything else I liked.

### The Solution

I immediately found 3 options that seemed interesting. [Hugo](http://gohugo.io/), written in Go, using gohtml for templates. [Hexo](https://hexo.io/), written in Node and supporting templating in Swig, EJS, Jade, or several others. Finally, [Hakyll](https://jaspervdj.be/hakyll/), which was interesting because it not only supports Markdown but also _TeX_.

I chose Hugo. The others looked good, but Hugo's shortcodes provide a manically easy way of extending Markdown. Plugin extensibility is lacking, but Hugo won out due to features like shortcodes and it's content model. Within a few weeks, I had the site finished and deployed.

### Lessons Learned

Overengineering is a significant problem, and it's a trap that all engineers fall into one time or another. It's largely why we find ourselves bikeshedding, even amongst ourselves with our own solo projects. Another aspect of this whole situation is that _I never wanted to create blog software in the first place_. Rather than being a fun project I wanted to work on, this project was a chore. It was a means to an end to allow me an avenue of expression.

**If you find yourself stuck on trivialities regarding a project, step back and deeply consider your motivations for the project.** You may find that you're attempting to overengineer a simple problem. My failure to correctly identify what I wanted out of this project led me to spending years solving problems I had no interest in fixing. Once identified, I solved the problem in weeks as opposed to years, and now I can get back to projects I care about.