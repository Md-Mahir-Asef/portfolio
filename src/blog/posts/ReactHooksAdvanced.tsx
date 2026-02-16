import BlogLayout from "../components/BlogLayout";

export const metaData = {
    title: "Advanced React Hooks: Patterns and Best Practices",
    slug: "react-hooks-advanced-patterns",
    tags: ["React", "Hooks", "JavaScript", "Frontend"],
    date: "2023-12-20",
    read_time: "9",
    description: "Master advanced React hooks patterns. Learn custom hooks, performance optimization, and complex state management techniques.",
};

export default function ReactHooksAdvanced() {
    return (
        <BlogLayout {...metaData}>
            <p>
                React Hooks have revolutionized how we write React components, enabling us to use state and other React features without writing classes. Understanding advanced hook patterns is essential for building sophisticated, maintainable React applications.
            </p>

            <figure className="my-8">
                <img 
                    src="/images/fishing.png" 
                    alt="Fishing Hook" 
                    className="w-full max-w-md mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Fishing Hook - Like React hooks, catch what you need
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Custom Hook Patterns</h2>
            <p>
                Custom hooks are the key to reusing stateful logic between components. They follow the same rules as built-in hooks and can encapsulate complex behavior into reusable units.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Data fetching hook with loading and error states
function useApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        let cancelled = false;
        
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(url);
                const result = await response.json();
                
                if (!cancelled) {
                    setData(result);
                    setError(null);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err);
                    setData(null);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        
        fetchData();
        
        return () => {
            cancelled = true;
        };
    }, [url]);
    
    return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
    const { data: user, loading, error } = useApi(\`/api/users/\${userId}\`);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!user) return <div>User not found</div>;
    
    return <div>{user.name}</div>;
}

// Local storage hook with sync
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Error reading localStorage:', error);
            return initialValue;
        }
    });
    
    const setValue = useCallback((value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error('Error setting localStorage:', error);
        }
    }, [key, storedValue]);
    
    return [storedValue, setValue];
}`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">State Management Patterns</h2>
            <p>
                Complex state management requires careful consideration of performance and maintainability. These patterns help you manage state effectively across your application.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Reducer hook for complex state
function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, {
                    id: Date.now(),
                    text: action.text,
                    completed: false
                }]
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        case 'SET_FILTER':
            return { ...state, filter: action.filter };
        default:
            return state;
    }
}

function useTodos() {
    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        filter: 'ALL'
    });
    
    const actions = useMemo(() => ({
        addTodo: (text) => dispatch({ type: 'ADD_TODO', text }),
        toggleTodo: (id) => dispatch({ type: 'TOGGLE_TODO', id }),
        setFilter: (filter) => dispatch({ type: 'SET_FILTER', filter })
    }), []);
    
    const filteredTodos = useMemo(() => {
        const { todos, filter } = state;
        switch (filter) {
            case 'ACTIVE':
                return todos.filter(todo => !todo.completed);
            case 'COMPLETED':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    }, [state.todos, state.filter]);
    
    return { todos: filteredTodos, filter: state.filter, actions };
}

// Context hook for global state
const AppContext = createContext();

function AppProvider({ children }) {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');
    
    const value = useMemo(() => ({
        user,
        login: setUser,
        logout: () => setUser(null),
        theme,
        toggleTheme: () => setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }), [user, theme]);
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
}`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img 
                    src="/images/puzzle.png" 
                    alt="Puzzle Pieces" 
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Puzzle - Hooks fit together to create complete solutions
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Performance Optimization</h2>
            <p>
                Optimizing React applications with hooks requires understanding when and how to use memoization, lazy loading, and other performance techniques.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Debounced search hook
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    
    return debouncedValue;
}

// Usage in search component
function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    const { data: results, loading } = useApi(
        \`/api/search?q=\${debouncedSearchTerm}\`
    );
    
    return (
        <div>
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
            />
            {loading && <div>Searching...</div>}
            <SearchResults results={results} />
        </div>
    );
}

// Infinite scroll hook
function useInfiniteScroll(fetchMore) {
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    
    const observer = useRef();
    
    const lastElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setLoading(true);
                fetchMore().then(newItems => {
                    setHasMore(newItems.length > 0);
                    setLoading(false);
                });
            }
        });
        
        if (node) observer.current.observe(node);
    }, [loading, hasMore, fetchMore]);
    
    return { lastElementRef, loading, hasMore };
}

// Virtual scrolling hook for large lists
function useVirtualScroll(items, itemHeight, containerHeight) {
    const [scrollTop, setScrollTop] = useState(0);
    
    const visibleItems = useMemo(() => {
        const startIndex = Math.floor(scrollTop / itemHeight);
        const endIndex = Math.min(
            startIndex + Math.ceil(containerHeight / itemHeight) + 1,
            items.length
        );
        
        return items.slice(startIndex, endIndex).map((item, index) => ({
            item,
            index: startIndex + index,
            top: (startIndex + index) * itemHeight
        }));
    }, [items, itemHeight, containerHeight, scrollTop]);
    
    const totalHeight = items.length * itemHeight;
    
    return { visibleItems, totalHeight, setScrollTop };
}`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Animation and Gesture Hooks</h2>
            <p>
                Creating smooth animations and handling user gestures requires careful state management and performance considerations. These hooks help you create engaging user interactions.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Spring animation hook
function useSpring(to, config = {}) {
    const [value, setValue] = useState(to);
    const [velocity, setVelocity] = useState(0);
    
    useEffect(() => {
        let animationFrame;
        
        const animate = () => {
            setValue(currentValue => {
                const newVelocity = (to - currentValue) * 0.1 + velocity * 0.9;
                const newValue = currentValue + newVelocity;
                
                setVelocity(newVelocity);
                
                if (Math.abs(to - newValue) < 0.01 && Math.abs(newVelocity) < 0.01) {
                    return to;
                }
                
                animationFrame = requestAnimationFrame(animate);
                return newValue;
            });
        };
        
        animate();
        
        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [to, config]);
    
    return value;
}

// Drag and drop hook
function useDragDrop() {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    
    const handleMouseDown = useCallback((e) => {
        setIsDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    }, [position]);
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        };
        
        const handleMouseUp = () => {
            setIsDragging(false);
        };
        
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }
        
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragStart]);
    
    return {
        position,
        isDragging,
        onMouseDown: handleMouseDown
    };
}`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img 
                    src="/images/rocket.png" 
                    alt="Rocket" 
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Rocket - Advanced hooks can launch your app performance
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Testing Custom Hooks</h2>
            <p>
                Testing custom hooks requires special considerations since they can't be rendered directly. React provides utilities specifically for testing hooks in isolation.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Testing custom hooks with @testing-library/react-hooks
import { renderHook, act } from '@testing-library/react-hooks';

describe('useApi', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });
    
    it('should fetch data successfully', async () => {
        const mockData = { id: 1, name: 'Test User' };
        fetch.mockResponseOnce(JSON.stringify(mockData));
        
        const { result, waitForNextUpdate } = renderHook(() => 
            useApi('/api/users/1')
        );
        
        expect(result.current.loading).toBe(true);
        expect(result.current.data).toBe(null);
        expect(result.current.error).toBe(null);
        
        await waitForNextUpdate();
        
        expect(result.current.loading).toBe(false);
        expect(result.current.data).toEqual(mockData);
        expect(result.current.error).toBe(null);
    });
    
    it('should handle fetch errors', async () => {
        fetch.mockRejectOnce(new Error('Network error'));
        
        const { result, waitForNextUpdate } = renderHook(() => 
            useApi('/api/users/1')
        );
        
        await waitForNextUpdate();
        
        expect(result.current.loading).toBe(false);
        expect(result.current.data).toBe(null);
        expect(result.current.error).toBeInstanceOf(Error);
    });
    
    it('should refetch when URL changes', async () => {
        fetch.mockResponseOnce(JSON.stringify({ id: 1 }));
        fetch.mockResponseOnce(JSON.stringify({ id: 2 }));
        
        const { result, rerender, waitForNextUpdate } = renderHook(
            ({ url }) => useApi(url),
            { initialProps: { url: '/api/users/1' } }
        );
        
        await waitForNextUpdate();
        expect(result.current.data.id).toBe(1);
        
        act(() => {
            rerender({ url: '/api/users/2' });
        });
        
        expect(result.current.loading).toBe(true);
        await waitForNextUpdate();
        expect(result.current.data.id).toBe(2);
    });
});`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>
            <p>
                Advanced React hooks patterns enable you to build sophisticated, maintainable applications with clean, reusable logic. By mastering these patterns, you can create components that are more predictable, testable, and performant.
            </p>

            <p>
                Remember that hooks are just tools—the real value comes from understanding when and how to use them effectively. Focus on creating small, focused hooks that do one thing well, and compose them together to build complex functionality. With these patterns in your toolkit, you'll be well-equipped to tackle any React challenge that comes your way.
            </p>
        </BlogLayout>
    );
}
