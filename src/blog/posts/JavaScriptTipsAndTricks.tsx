import BlogLayout from "../components/BlogLayout";

export const metaData = {
    title: "JavaScript Tips and Tricks Every Developer Should Know",
    slug: "javascript-tips-tricks",
    tags: ["JavaScript", "Programming", "Web Development"],
    date: "2024-01-25",
    read_time: "7",
    description: "Discover essential JavaScript tips and tricks that will make you a more productive developer. From array methods to debugging techniques.",
};

export default function JavaScriptTipsAndTricks() {
    return (
        <BlogLayout {...metaData}>
            <p>
                JavaScript is a versatile language that continues to evolve with new features and patterns. Whether you're a beginner or an experienced developer, these tips and tricks will help you write cleaner, more efficient code.
            </p>

            <figure className="my-8">
                <img 
                    src="/images/coffee.png" 
                    alt="Coffee Cup" 
                    className="w-full max-w-md mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Coffee - Essential for JavaScript debugging sessions
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Array Manipulation Magic</h2>
            <p>
                Modern JavaScript provides powerful array methods that can transform the way you handle data collections. Let's explore some lesser-known but incredibly useful techniques.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Flatten nested arrays
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.flat(); // [1, 2, 3, 4, 5, 6]

// Remove duplicates efficiently
const unique = [...new Set([1, 2, 2, 3, 3, 4])]; // [1, 2, 3, 4]

// Group objects by property
const grouped = data.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || []).concat(item);
    return acc;
}, {});`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Destructuring Excellence</h2>
            <p>
                Destructuring is one of JavaScript's most elegant features. It allows you to extract values from arrays and objects in a clean, readable way.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Object destructuring with defaults
const { name = 'Anonymous', age = 0 } = user;

// Array destructuring with rest
const [first, ...rest] = items;

// Nested destructuring
const { user: { profile: { name } } } = data;

// Swapping variables without temp
[a, b] = [b, a];`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img 
                    src="/images/pizza.png" 
                    alt="Pizza Slice" 
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Pizza - Like JavaScript, best when properly structured
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Async/Await Mastery</h2>
            <p>
                Asynchronous JavaScript doesn't have to be complicated. With async/await, you can write asynchronous code that looks and feels synchronous.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Parallel async operations
const [users, posts, comments] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
]);

// Error handling with try-catch
try {
    const result = await riskyOperation();
    return result;
} catch (error) {
    console.error('Operation failed:', error);
    return null;
}

// Timeout with Promise.race
const result = await Promise.race([
    fetchData(),
    new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), 5000)
    )
]);`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Memory Management Tips</h2>
            <p>
                Understanding JavaScript's memory management can help you write more performant applications and avoid common pitfalls.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// WeakMap for private data
const privateData = new WeakMap();

class MyClass {
    constructor(data) {
        privateData.set(this, data);
    }
    
    getData() {
        return privateData.get(this);
    }
}

// Clean up event listeners
const cleanup = () => {
    element.removeEventListener('click', handler);
    // Other cleanup tasks
};

// Use WeakSet to track object references
const tracked = new WeakSet();
if (!tracked.has(obj)) {
    tracked.add(obj);
    // Process object only once
}`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img 
                    src="/images/bicycle.png" 
                    alt="Bicycle" 
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Bicycle - Like JavaScript performance, requires regular maintenance
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Debugging Like a Pro</h2>
            <p>
                Effective debugging is a skill that separates good developers from great ones. These techniques will help you find and fix bugs faster.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Console debugging with style
console.log('%c Important Message', 'color: red; font-size: 16px');

// Table logging for objects
console.table(users);

// Performance timing
console.time('operation');
// ... code to measure
console.timeEnd('operation');

// Conditional breakpoints
debugger; // Pauses execution if dev tools are open

// Object inspection
console.dir(document.body);`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>
            <p>
                These JavaScript tips and tricks are just the beginning of what's possible with this powerful language. The key to becoming a better JavaScript developer is continuous learning and practice. Experiment with these techniques, adapt them to your projects, and don't be afraid to explore new patterns and approaches.
            </p>

            <p>
                Remember that the best code is not always the most clever code. Write code that is readable, maintainable, and solves the problem effectively. With these tools in your arsenal, you'll be well-equipped to tackle any JavaScript challenge that comes your way.
            </p>
        </BlogLayout>
    );
}
