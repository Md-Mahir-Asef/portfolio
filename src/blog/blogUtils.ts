import type { BlogPost } from "../components/BlogCard";

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Building Scalable APIs with Node.js and TypeScript",
        excerpt:
            "Learn how to create robust, type-safe APIs using Node.js and TypeScript. This guide covers best practices for error handling, validation, and architecture patterns that scale.",
        date: "2024-02-15",
        readTime: 8,
        slug: "building-scalable-apis-nodejs-typescript",
        tags: ["Node.js", "TypeScript", "API Design"],
    },
    {
        id: "2",
        title: "Advanced PostgreSQL Patterns for High Performance",
        excerpt:
            "Discover advanced PostgreSQL techniques including indexing strategies, query optimization, and database design patterns that will help you build lightning-fast applications.",
        date: "2024-02-10",
        readTime: 12,
        slug: "advanced-postgresql-patterns",
        tags: ["PostgreSQL", "Database", "Performance"],
    },
    {
        id: "3",
        title: "React Performance Optimization Techniques",
        excerpt:
            "Master the art of React performance optimization. Learn about memoization, code splitting, lazy loading, and other techniques to keep your React apps blazing fast.",
        date: "2024-02-05",
        readTime: 6,
        slug: "react-performance-optimization",
        tags: ["React", "Performance", "Frontend"],
    },
    {
        id: "4",
        title: "Microservices Architecture: A Practical Guide",
        excerpt:
            "Explore the world of microservices architecture. From design principles to implementation patterns, learn how to build and maintain distributed systems effectively.",
        date: "2024-01-28",
        readTime: 15,
        slug: "microservices-architecture-guide",
        tags: ["Architecture", "Microservices", "System Design"],
    },
    {
        id: "5",
        title: "TypeScript Advanced Types and Patterns",
        excerpt:
            "Dive deep into TypeScript's advanced type system. Learn about conditional types, template literals, and advanced patterns that will level up your TypeScript skills.",
        date: "2024-01-20",
        readTime: 10,
        slug: "typescript-advanced-types-patterns",
        tags: ["TypeScript", "Programming", "Types"],
    },
    {
        id: "6",
        title: "Building Real-time Applications with WebSockets",
        excerpt:
            "Learn how to implement real-time features in your applications using WebSockets. From chat apps to live dashboards, discover the power of real-time communication.",
        date: "2024-01-15",
        readTime: 9,
        slug: "realtime-applications-websockets",
        tags: ["WebSockets", "Real-time", "Backend"],
    },
    {
        id: "7",
        title: "Docker Containerization Best Practices",
        excerpt:
            "Master Docker containerization with industry best practices. Learn how to optimize images, manage multi-stage builds, and implement proper security measures.",
        date: "2024-01-10",
        readTime: 7,
        slug: "docker-containerization-best-practices",
        tags: ["Docker", "DevOps", "Containerization"],
    },
    {
        id: "8",
        title: "GraphQL vs REST: When to Use Which",
        excerpt:
            "A comprehensive comparison of GraphQL and REST APIs. Understand the trade-offs, use cases, and when to choose one over the other for your projects.",
        date: "2024-01-05",
        readTime: 11,
        slug: "graphql-vs-rest-comparison",
        tags: ["GraphQL", "REST", "API Design"],
    },
];

export const getBlogPosts = (): BlogPost[] => {
    return blogPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find((post) => post.slug === slug);
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
    return blogPosts.filter((post) => post.tags.includes(tag));
};
