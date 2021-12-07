---
title: "The Perfect Blog, Attempt #2"
date: 2021-12-06T22:30:00
author:
    given_name: Adam
    family_name: Morris
    display_name: Adam Morris
tags:
- site updates
---

I like writing, and for many years I've wanted a simple way for me to both post personal research essays, programming thoughts, game reviews, and project updates without much overhead. One of the most important parts to me is that the design needed to be extremely minimalist, almost brutalist, and it needed to use as little JavaScript as possible. Enter my [my first attempt in 2018]({{<ref "/blog/about_this_site_2018">}}). If you read that post, you'll notice that a core piece I keep touching on is a need to make the site as simple as possible to avoid my propencity to bikeshed. That post was written in 2018 and it's now 2021. I think you can guess how it went.

{{<image class="sm:w-80" src="/memes/benedict-cumberbatch-complete-failure.gif" alt="it's an utter and complete failure" caption="Ok, maybe not a complete failure...">}}

Many of my goals with the original writing of this site were achieved, but both ignorance and potentially hubris led to me failing on several of the most important fronts:

- Adding new [shortcodes](https://gohugo.io/content-management/shortcodes/#readout) without pulling my hair out was nearly impossible. Especially if I wanted to be able to do CSS stuff with them.
- Images never worked.
- Deployment sucked. It was completely manual, and I never sorted out automatic deployments.
- It wasn't exactly small even after the Sass files were purged.

Additionally, I kept reading things about how great Zola is and how so many people are moving from Hugo to it. I figured after 3 years of letting this site sit and bitrot it was time to update it and actually try to do it right this time, starting with a rewrite into Zola. I ended up rewriting my site from Hugo and honestly, that was the right decision. 

I do want to stress that I think Zola is a fine static site generator. Zola simply didn't work out for me. The biggest gripe I have with Zola is the author's decision to only support TOML front matter. On the surface this seems like a small issue, but in practice it sucks. Tool support for TOML front matter is poor outside of select programmer oriented text editors. The truth of the matter is that YAML has sort of become the defacto standard for front matter metadata, and Zola's requirement to TOML very much feels, "get in my way," after wrangling it for the first attempt at this rewrite.

Staying with Hugo has turned out to be the right choice. After more than 20 years of software development I can definitely say that familiarity with a technology goes a long way with keeping it out of one's way. Hugo has been the least of my problem's with this website. I don't hate the Go HTML templating system it uses and it has support for things such as AsciiDoctor and handling JavaScript and PostCSS builds, although I want to keep the use of JavaScript to a bare minimum as much as possible. Plus, as aformentioned, I am already familiar with Hugo, having used it for slightly more than 3 years.

Rewrites are one of the riskiest things you can do in software, but sometimes they're the right choice. To minimize the risk and keep the matter focused, I sat down and put on paper the following goals:

- Get rid of the complex styling system I was using before, and replace it with something easier and more straightforward that takes advantage of Hugo Pipes.
- Fix images, and create an image shortcode.
- Set up automatic deployments when changes are pushed to the `main` branch.
- Put the site in a state where it can be extended in the future for other ideas.

As of writing, all except the automatic deployments are done. If you're reading this post on [anmorris.org](https://anmorris.org/) then automatic deployments are done as well. I'm hopeful that this puts me into a place where I can actually properly write about the projects I have ongoing. I have several in the fires at the moment:

- Horreum, a configurable and lightweight server API written in Rust to provide a data store for various experiments.
- Extra Life Overlay, an overlay for streamers participating in Extra Life Fundraising.
- A few more that I'm not ready to announce yet.

Since 2018, I've wanted this site to be the nexus of where I can write about the projects I'm working on and other thoughts. I'm hopeful that with this latest version of the site will last me for several years to come.
