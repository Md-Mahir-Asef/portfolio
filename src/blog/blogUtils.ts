import type React from "react";
import type { BlogPost } from "./components/BlogCard";
import AdvancedPostgreSQLPatterns, {
    metaData as AdvancedPostgreSQLPatternsMetaData,
} from "./posts/AdvancedPostgreSQLPatterns";
import BuildingScalableApis, {
    metaData as BuildingScalableApisMetaData,
} from "./posts/BuildingScalableApis";
import MicroservicesArchitecture, {
    metaData as MicroservicesArchitectureMetaData,
} from "./posts/MicroservicesArchitecture";
import ReactPerformanceOptimizationClean, {
    metaData as ReactPerformanceOptimizationCleanMetaData,
} from "./posts/ReactPerformanceOptimizationClean";
import ReactPerformanceOptimization, {
    metaData as ReactPerformanceOptimizationMetaData,
} from "./posts/ReactPerformanceOptimization";
import ReactPerformanceOptimizationFixed, {
    metaData as ReactPerformanceOptimizationFixedMetaData,
} from "./posts/ReactPerformanceOptimizationFixed";
import TypeScriptAdvancedTypes, {
    metaData as TypeScriptAdvancedTypesMetaData,
} from "./posts/TypeScriptAdvancedTypes";
import JavaScriptTipsAndTricks, {
    metaData as JavaScriptTipsAndTricksMetaData,
} from "./posts/JavaScriptTipsAndTricks";
import CSSGridLayout, {
    metaData as CSSGridLayoutMetaData,
} from "./posts/CSSGridLayout";
import PythonDataScience, {
    metaData as PythonDataScienceMetaData,
} from "./posts/PythonDataScience";
import WebSecurityBasics, {
    metaData as WebSecurityBasicsMetaData,
} from "./posts/WebSecurityBasics";
import GitWorkflow, {
    metaData as GitWorkflowMetaData,
} from "./posts/GitWorkflow";
import NodeJsMicroservices, {
    metaData as NodeJsMicroservicesMetaData,
} from "./posts/NodeJsMicroservices";
import ReactHooksAdvanced, {
    metaData as ReactHooksAdvancedMetaData,
} from "./posts/ReactHooksAdvanced";
import DevOpsPipeline, {
    metaData as DevOpsPipelineMetaData,
} from "./posts/DevOpsPipeline";
import CloudNativeApps, {
    metaData as CloudNativeAppsMetaData,
} from "./posts/CloudNativeApps";

// Add New Post Here
export const postMetaDatas = [
    AdvancedPostgreSQLPatternsMetaData,
    BuildingScalableApisMetaData,
    MicroservicesArchitectureMetaData,
    ReactPerformanceOptimizationMetaData,
    ReactPerformanceOptimizationCleanMetaData,
    ReactPerformanceOptimizationFixedMetaData,
    TypeScriptAdvancedTypesMetaData,
    JavaScriptTipsAndTricksMetaData,
    CSSGridLayoutMetaData,
    PythonDataScienceMetaData,
    WebSecurityBasicsMetaData,
    GitWorkflowMetaData,
    NodeJsMicroservicesMetaData,
    ReactHooksAdvancedMetaData,
    DevOpsPipelineMetaData,
    CloudNativeAppsMetaData,
];

// Add New Post Here
const postComponents = {
    "advanced-postgresql-patterns": AdvancedPostgreSQLPatterns,
    "building-scalable-apis-nodejs-typescript": BuildingScalableApis,
    "microservices-architecture-guide": MicroservicesArchitecture,
    "react-performance-optimization": ReactPerformanceOptimization,
    "react-performance-optimization-clean": ReactPerformanceOptimizationClean,
    "react-performance-optimization-fixed": ReactPerformanceOptimizationFixed,
    "typescript-advanced-types-patterns": TypeScriptAdvancedTypes,
    "javascript-tips-tricks": JavaScriptTipsAndTricks,
    "css-grid-layout": CSSGridLayout,
    "python-data-science": PythonDataScience,
    "web-security-basics": WebSecurityBasics,
    "git-workflow": GitWorkflow,
    "nodejs-microservices": NodeJsMicroservices,
    "react-hooks-advanced": ReactHooksAdvanced,
    "devops-pipeline": DevOpsPipeline,
    "cloud-native-apps": CloudNativeApps,
};

export const blogPosts: BlogPost[] = [];

for (const post of postMetaDatas) {
    blogPosts.push({
        id: post.slug,
        title: post.title,
        excerpt: post.description,
        date: post.date,
        readTime: post.read_time,
        slug: post.slug,
        tags: post.tags,
    });
}

export const getBlogPosts = (): BlogPost[] => {
    return blogPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
};

export const getBlogPostBySlug = (
    slug: string,
): React.ComponentType | undefined => {
    return postComponents[slug as keyof typeof postComponents];
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
    return blogPosts.filter((post) => post.tags.includes(tag));
};

export const getBlogPostsByPage = (
    page: number,
    postsPerPage: number,
): BlogPost[] | undefined => {
    try {
        const sortedPosts = getBlogPosts();
        const startIndex = (page - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        return sortedPosts.slice(startIndex, endIndex);
    } catch (err) {
        console.log(err);
    }
};

export const getTotalPages = (postsPerPage: number): number => {
    return Math.ceil(getBlogPosts().length / postsPerPage);
};
