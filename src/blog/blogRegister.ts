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
import AutoResizingTextareaBlog, {
    metaData as AutoResizingTextareaBlogMetaData,
} from "./posts/AutoResizingTextareaBlog";

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
    AutoResizingTextareaBlogMetaData,
];

// Add New Post Here
export const postComponents = {
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
    "cloud-native-applications-guide": CloudNativeApps,
    "auto-resizing-textareas": AutoResizingTextareaBlog,
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
