import BlogLayout from "../components/BlogLayout";

export const metaData = {
    title: "CSS Grid Layout: Complete Guide for Modern Web Design",
    slug: "css-grid-layout-guide",
    tags: ["CSS", "Web Design", "Frontend", "Layout"],
    date: "2024-01-18",
    read_time: "10",
    description: "Master CSS Grid Layout with this comprehensive guide. Learn grid properties, responsive design patterns, and advanced techniques for modern web layouts.",
};

export default function CSSGridLayout() {
    return (
        <BlogLayout {...metaData}>
            <p>
                CSS Grid Layout has revolutionized how we create complex layouts on the web. Gone are the days of floats and positioning hacks. With Grid, you can create two-dimensional layouts with ease and precision.
            </p>

            <figure className="my-8">
                <img 
                    src="/images/sunset.png" 
                    alt="Sunset" 
                    className="w-full max-w-md mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Sunset - Like CSS Grid, beautiful when properly aligned
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Grid Fundamentals</h2>
            <p>
                Understanding the basic concepts of CSS Grid is essential for mastering this powerful layout system. Let's start with the core terminology and properties.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`/* Basic grid container */
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
}

/* Grid item placement */
.item {
    grid-column: 1 / 3;
    grid-row: 2;
}

/* Named grid lines */
.grid {
    grid-template-columns: [start] 1fr [middle] 2fr [end];
    grid-template-rows: [header] auto [main] 1fr [footer] auto;
}`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Responsive Grid Patterns</h2>
            <p>
                CSS Grid makes responsive design incredibly intuitive. You can create layouts that adapt seamlessly to different screen sizes without complex media queries.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`/* Auto-fit responsive grid */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

/* Responsive with media queries */
.layout {
    display: grid;
    grid-template-areas: 
        "header header"
        "sidebar main"
        "footer footer";
    grid-template-columns: 200px 1fr;
}

@media (max-width: 768px) {
    .layout {
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "footer";
        grid-template-columns: 1fr;
    }
}`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img 
                    src="/images/mountain.png" 
                    alt="Mountain" 
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Mountain - Like CSS Grid, requires a solid foundation
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Advanced Grid Techniques</h2>
            <p>
                Once you master the basics, you can explore advanced techniques that will take your layouts to the next level.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`/* Subgrid for nested layouts */
.card {
    display: grid;
    grid-template-rows: auto 1fr auto;
}

.card-content {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
}

/* Grid with intrinsic sizing */
.adaptive-grid {
    display: grid;
    grid-template-columns: 
        minmax(200px, 1fr) 
        minmax(300px, 2fr) 
        minmax(200px, 1fr);
}

/* Dense packing algorithm */
.masonry {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(3, 1fr);
}

.tall-item {
    grid-row: span 2;
}`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Grid vs Flexbox</h2>
            <p>
                Understanding when to use Grid versus Flexbox is crucial for modern web design. Each has its strengths and ideal use cases.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`/* Use Grid for 2D layouts */
.page-layout {
    display: grid;
    grid-template-areas: 
        "header header"
        "nav main"
        "footer footer";
}

/* Use Flexbox for 1D layouts */
.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

/* Combining Grid and Flexbox */
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.flex-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img 
                    src="/images/forest.png" 
                    alt="Forest" 
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Forest - Like CSS Grid, many elements working together
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Practical Examples</h2>
            <p>
                Let's explore some real-world examples of CSS Grid in action, from simple card layouts to complex dashboard designs.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`/* Holy Grail Layout */
.holy-grail {
    display: grid;
    grid-template: 
        "header header header" 60px
        "nav    main   aside" 1fr
        "footer footer footer" 60px / 
        200px  1fr    200px;
    min-height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Dashboard Layout */
.dashboard {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 20px;
}

.widget-1 { grid-column: span 4; grid-row: span 2; }
.widget-2 { grid-column: span 8; }
.widget-3 { grid-column: span 4; }
.widget-4 { grid-column: span 8; grid-row: span 2; }`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>
            <p>
                CSS Grid Layout is a powerful tool that has fundamentally changed how we approach web layout design. By mastering these techniques, you'll be able to create complex, responsive layouts with clean, maintainable code.
            </p>

            <p>
                The key to success with CSS Grid is practice and experimentation. Start with simple layouts and gradually work your way up to more complex designs. Don't be afraid to combine Grid with other layout methods like Flexbox to create truly flexible and powerful layouts.
            </p>
        </BlogLayout>
    );
}
