---
title: Contribution
description: Learn on how to contribute to psyui.
---

## Introduction

Thanks for your interest in contributing to **psyui**. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to [@psycarlo](https://x.com/MindsetPsy).

## About this repository

- We use [pnpm](https://pnpm.io/), [workspaces](https://pnpm.io/workspaces) and [turborepo](https://turbo.build/repo)

## Structure

This repository is structured as follows:

todo

## Development

Start by cloning the repository:

```bash
git clone https://github.com/Psycarlo/psyui.git
```

```bash
pnpm install
```

## Run

Run the following command at the root of the repository:

```bash
pnpm dev
```

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category: message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat: add loading prop to button component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/.

## Test

todo
