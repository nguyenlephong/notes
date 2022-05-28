---
sidebar_position: 0
---

# ReactJS Project Structure

:::danger DOCUMENTS ARE UNDER CONSTRUCTION...
These documents are highly unstructured and aren't really well-formed. For any further clarification, or (understandable) ranting, please contact us at nguyenlephong1997@gmail.com.
:::


## Overview {#overview}

A typical structure project looks like the below:

```markdown
App Root
├── Dockerfile
├── README.md
├── __tests__
├── babel.config.js
├── coverage
├── cypress
├── cypress.json
├── docs
├── jest.config.js
├── package.json
├── public
├── reports
├── scripts
├── serve.json
├── .env
├── src
├── tsconfig.json
├── webpack.config.js
└── yarn.lock
```



## Source {#overview}

A typical source (/src) folder looks like the below:

```markdown
Source Folder
├── config
├── pages
│   ├── global
│   ├── products
│   ├── cart
│   ├── home
│   ├── ...
├── reduxs
│   ├── home
│   ├── cart
│   ├── products
│   ├── cache
│   ├── ...
├── routers
├── services
│   ├── client                    # in client app (function support)
│   ├── external                  # third party
│   ├── api-service-1
│   └── api-service-2
│   └── api-service-...
├── shared
│   ├── assets
│   ├── components
│   ├── containers
│   ├── styles
│   └── utils
├── statics
└── stories
    ├── components
    ├── containers
    └── examples
```