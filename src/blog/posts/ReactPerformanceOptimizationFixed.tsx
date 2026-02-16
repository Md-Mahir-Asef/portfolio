import BlogLayout from "../components/BlogLayout";

export const metaData = {
    title: "React Performance Optimization Techniques",
    slug: "react-performance-optimization-fixed",
    tags: ["React", "Performance", "Frontend"],
    date: "2024-02-05",
    read_time: "6",
    description:
        "Master the art of React performance optimization. Learn about memoization, code splitting, lazy loading, and other techniques to keep your React apps blazing fast.",
};

export default function ReactPerformanceOptimizationFixed() {
    return (
        <BlogLayout {...metaData}>
            <p>
                In the world of modern web applications, performance isn't just
                a luxury—it's a necessity. Users expect instant responses and
                smooth interactions, and even minor performance issues can lead
                to frustrated users and lost engagement. React provides powerful
                tools and patterns for optimizing performance, but knowing when
                and how to use them effectively is key to building truly fast
                applications.
            </p>

            <figure className="my-8">
                <img
                    src="/images/reactjs.png"
                    alt="React Logo"
                    className="w-full max-w-md mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    React - A JavaScript library for building user interfaces
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Understanding React's Rendering Cycle
            </h2>
            <p>
                Before diving into optimization techniques, it's crucial to
                understand how React decides when to re-render components. Every
                state or prop change triggers a re-render, and without proper
                optimization, this can lead to unnecessary work and performance
                bottlenecks.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Problem: Unnecessary re-renders
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // This re-renders every time count changes
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      <ExpensiveComponent name={name} />
    </div>
  );
};`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Memoization Strategies
            </h2>
            <p>
                Memoization is one of React's most powerful optimization
                techniques. By caching the results of expensive computations and
                component renders, we can significantly reduce unnecessary work.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                React.memo for Component Memoization
            </h3>
            <p>
                React.memo is a higher-order component that prevents re-renders
                when props haven't changed:
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Optimized component with React.memo
const ExpensiveComponent = React.memo(({ name, data }) => {
  console.log('Rendering ExpensiveComponent');
  
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: expensiveCalculation(item)
    }));
  }, [data]);

  return (
    <div>
      <h3>{name}</h3>
      {processedData.map(item => (
        <div key={item.id}>{item.processed}</div>
      ))}
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function
  return prevProps.name === nextProps.name && 
         prevProps.data.length === nextProps.data.length;
});`}</code>
                </pre>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                useMemo for Expensive Calculations
            </h3>
            <p>
                useMemo caches the result of expensive computations between
                renders:
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`const DataProcessor = ({ items, filter }) => {
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const expensiveStats = useMemo(() => {
    console.log('Calculating stats...');
    return {
      total: filteredItems.length,
      average: filteredItems.reduce((sum, item) => sum + item.value, 0) / filteredItems.length,
      max: Math.max(...filteredItems.map(item => item.value))
    };
  }, [filteredItems]);

  return (
    <div>
      <div>Total: {expensiveStats.total}</div>
      <div>Average: {expensiveStats.average.toFixed(2)}</div>
      <div>Max: {expensiveStats.max}</div>
    </div>
  );
};`}</code>
                </pre>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                useCallback for Function References
            </h3>
            <p>
                useCallback memoizes function references, preventing child
                components from re-rendering unnecessarily:
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`const TodoList = ({ todos, onUpdate }) => {
  const [filter, setFilter] = useState('');

  const handleToggle = useCallback((id) => {
    onUpdate(id, todo => ({
      ...todo,
      completed: !todo.completed
    }));
  }, [onUpdate]);

  const handleDelete = useCallback((id) => {
    onUpdate(id, null); // null indicates deletion
  }, [onUpdate]);

  const filteredTodos = useMemo(() => {
    return todos.filter(todo => 
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }, [todos, filter]);

  return (
    <div>
      <input 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter todos..."
      />
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/javascript.png"
                    alt="JavaScript Performance"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    JavaScript optimization is key to React performance
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Code Splitting and Lazy Loading
            </h2>
            <p>
                Code splitting allows you to load JavaScript chunks on demand,
                reducing initial bundle size and improving load times. React
                makes this incredibly simple with lazy loading.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Route-based code splitting
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  </Router>
);`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Virtualization for Large Lists
            </h2>
            <p>
                When dealing with large lists, rendering all items at once can
                cripple performance. Virtualization techniques render only the
                visible items, dramatically improving performance.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => {
  const Row = ({ index, style }) => (
    <div style={style}>
      <ListItem item={items[index]} />
    </div>
  );

  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={80}
      width="100%"
    >
      {Row}
    </List>
  );
};`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/vite.png"
                    alt="Vite Build Tool"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Modern build tools like Vite optimize bundling automatically
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Performance Monitoring
            </h2>
            <p>
                You can't optimize what you can't measure. Implementing
                performance monitoring helps you identify bottlenecks and track
                improvements.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Performance monitoring with React Profiler
import { Profiler } from 'react';

const onRenderCallback = (id, phase, actualDuration) => {
  console.log('Component:', id);
  console.log('Phase:', phase);
  console.log('Duration:', actualDuration);
};

const MonitoredComponent = ({ children }) => (
  <Profiler id="ExpensiveComponent" onRender={onRenderCallback}>
    {children}
  </Profiler>
);`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Conclusion
            </h2>
            <p>
                React performance optimization is a continuous process that
                requires understanding of both the framework and the browser's
                rendering pipeline. The techniques covered here—from memoization
                and code splitting to virtualization and state
                management—provide a comprehensive toolkit for building
                lightning-fast React applications.
            </p>

            <p>
                Remember that premature optimization can be counterproductive.
                Start by measuring performance, identify the actual bottlenecks,
                and then apply the appropriate optimization techniques. Always
                test your optimizations in realistic scenarios to ensure they're
                providing the expected benefits.
            </p>

            <p>
                The key to sustainable performance is building optimization into
                your development process from the start. Use React DevTools
                Profiler regularly, set performance budgets, and make
                performance a team responsibility. With these practices and
                techniques, you'll be well-equipped to create React applications
                that not only function beautifully but perform exceptionally
                well.
            </p>
        </BlogLayout>
    );
}
