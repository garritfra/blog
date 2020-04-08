---
title: Building a private cloud environment for fun and profit
date: 2020-04-08
---

It all started with the ambition to throw any docker image at a service that will happily host it for me. This ambition quickly grew into what I would call an enterprise-ready, easily portable, hyper-scalable amusement park. Let me share what I learned.

## From `docker run` to Kubernetes real quick

**Disclaimer**: Chances are, you will never ever need a system that is as complex and overkill as the one I built for myself. If you need a simple service like nextcloud that is always running and accessible anywhere, by all means, set up an EC2-micro instance on AWS and host your container there. Easy as cake (and free!). But where's the fun in that? By gradually increasing the complexity over time, you learn to tackle more challenging scenarios in a production-like environment.

Once the number of running containers grows - say, you want to set up a selfhosted notetaking solution - it becomes harder and harder to migrate your well thought out system to a new environment. This is where `Docker Compose` comes into play.

# ToDo

- Overview
  - Miniature Railway Example
- Why?
- Basic Setup
  - Server renting
    - KVM!
  - Kubernetes Setup
- Kubernetes fundamentals
  - Kubernetes vs docker compose
- Adding and managing services
  - Infrastructure as code
  - Port Managing
- Managing application data
- Personal Dashboard
- Future ambitions
  - Distributed file system
  -
- Resources
  - Awesome Selfhosted
  - r/selfhosted
