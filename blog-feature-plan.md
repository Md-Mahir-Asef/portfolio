# Blog Feature Implementation Plan

**Project:** Personal Portfolio Blog\
**Stack:** React (Vite) + TypeScript + Material UI

------------------------------------------------------------------------

# 1. Goal

The goal of this blog system is to:

-   Build a scalable personal brand content engine
-   Maintain full control (no backend, no CMS)
-   Keep the system fully static and platform-independent
-   Ensure clean architecture and long-term maintainability
-   Enable pagination, SEO optimization, and performance efficiency
-   Allow future expansion (tags, search, RSS, filtering)

This blog is designed as an engineering-driven content system, not just
a UI feature.

------------------------------------------------------------------------

# 2. Technology Stack

## Core Technologies

-   React (Vite)
-   TypeScript (.tsx posts)
-   React Router
-   Material UI (Pagination component)
-   Lazy loading via React.lazy()

## Supporting Tools

-   Metadata-driven configuration
-   URL-based pagination
-   Client-side sorting and slicing
-   Code splitting for performance optimization

------------------------------------------------------------------------

# 3. Architecture Overview

The blog is structured into four logical layers:

## 3.1 Content Layer

Each blog post: - Is a separate `.tsx` file - Exports metadata (title,
description, date, tags) - Uses a shared `BlogLayout` wrapper

Example Structure:

    /src/blog/posts/scroll-height.tsx

------------------------------------------------------------------------

## 3.2 Registry Layer

`posts.config.ts` serves as the single source of truth.

Responsibilities: - Collect all post metadata - Map slug → component -
Enable sorting - Enable pagination - Enable future filtering

------------------------------------------------------------------------

## 3.3 Routing Layer

Routes:

    /blog
    /blog/page/:pageNumber
    /blog/:slug

-   Page-based navigation
-   Dynamic post rendering
-   URL-driven pagination
-   SEO-safe routing

------------------------------------------------------------------------

## 3.4 UI Layer

Handled by: - BlogIndex.tsx (list + pagination) - BlogLayout.tsx (post
wrapper) - BlogCard.tsx (preview component) - Material UI Pagination
component

------------------------------------------------------------------------

# 4. Folder Structure

    /src
      /blog
        /components
          BlogLayout.tsx
          BlogCard.tsx
        /posts
          post-one.tsx
          post-two.tsx
        posts.config.ts
        BlogIndex.tsx
        BlogRouter.tsx

------------------------------------------------------------------------

# 5. Step-by-Step Execution Plan

## Step 1: Create Blog Folder Structure

-   Create `/blog` directory
-   Add `/components`
-   Add `/posts`
-   Create `posts.config.ts`

------------------------------------------------------------------------

## Step 2: Create BlogLayout Component

Responsibilities: - Wrap post content - Display title, date, reading
time - Control typography and spacing - Inject meta tags - Provide
scroll progress logic (optional)

------------------------------------------------------------------------

## Step 3: Create Post Template Pattern

Each post must:

1.  Export metadata object
2.  Export default functional component
3.  Be wrapped inside BlogLayout

------------------------------------------------------------------------

## Step 4: Implement posts.config.ts

-   Import all posts
-   Build posts array
-   Sort by date descending
-   Export sorted posts

------------------------------------------------------------------------

## Step 5: Setup Dynamic Routing

Define routes:

-   `/blog`
-   `/blog/page/:pageNumber`
-   `/blog/:slug`

Create a BlogRouter component to: - Extract slug - Match post from
registry - Render correct component

------------------------------------------------------------------------

## Step 6: Implement Pagination Logic

Inside BlogIndex.tsx:

1.  Define POSTS_PER_PAGE
2.  Get page number from URL
3.  Sort posts
4.  Slice posts using array slicing
5.  Render paginated posts

------------------------------------------------------------------------

## Step 7: Add Material UI Pagination

-   Install MUI
-   Use `<Pagination />`
-   Handle page change with navigation
-   Sync page state with URL
-   Scroll to top on page change

------------------------------------------------------------------------

## Step 8: Add Performance Optimization

-   Use React.lazy() for each post
-   Ensure posts are code-split
-   Keep metadata lightweight
-   Avoid unnecessary imports

------------------------------------------------------------------------

## Step 9: SEO Setup

Each blog post must include:

-   Unique title
-   Meta description
-   Open Graph tags
-   Canonical link
-   Proper H1 hierarchy

------------------------------------------------------------------------

## Step 10: Future-Proofing (Optional)

Prepare architecture for:

-   Tag filtering
-   Search system
-   RSS feed generation
-   Sitemap generation
-   Structured data (JSON-LD)
-   Dark mode compatibility

------------------------------------------------------------------------

# 6. Engineering Principles Followed

-   Single source of truth
-   Separation of concerns
-   URL-driven state
-   Scalable folder structure
-   Lazy loading for performance
-   Metadata-driven architecture

------------------------------------------------------------------------

# 7. Final Outcome

This blog system functions as:

-   A content engine
-   A branding platform
-   A scalable technical module
-   A production-ready architecture
-   A future-expandable system

It is fully static, React-driven, and optimized for long-term
maintainability.
