import BlogLayout from "../components/BlogLayout";

export const metaData = {
    title: "TypeScript Advanced Types and Patterns",
    slug: "typescript-advanced-types-patterns",
    tags: ["TypeScript", "Programming", "Types"],
    date: "2024-01-20",
    read_time: "10",
    description:
        "Dive deep into TypeScript's advanced type system. Learn about conditional types, template literals, and advanced patterns that will level up your TypeScript skills.",
};

export default function TypeScriptAdvancedTypes() {
    return (
        <BlogLayout {...metaData}>
            <p>
                TypeScript's type system is one of the most powerful features
                that sets it apart from JavaScript. While basic types get you
                started, the advanced type system is where TypeScript truly
                shines, enabling you to create expressive, type-safe code that
                catches errors at compile-time rather than runtime. This
                comprehensive guide will take you through the most advanced
                TypeScript features and patterns that will transform how you
                write type-safe applications.
            </p>

            <figure className="my-8">
                <img
                    src="/images/typescript.png"
                    alt="TypeScript Logo"
                    className="w-full max-w-md mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    TypeScript - JavaScript with syntax for types
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Conditional Types
            </h2>
            <p>
                Conditional types are one of TypeScript's most powerful
                features, allowing you to create types that depend on other
                types. They follow the syntax `T extends U ? X : Y`.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Basic conditional type
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>;  // false

// Practical example: API response types
type ApiResponse<T> = T extends 'success' 
  ? { status: 'success'; data: unknown }
  : { status: 'error'; message: string };

type SuccessResponse = ApiResponse<'success'>; // { status: 'success'; data: unknown }
type ErrorResponse = ApiResponse<'error'>;   // { status: 'error'; message: string }

// Conditional type with infer
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type FunctionReturnType = ReturnType<() => string>; // string
type ArrayElementType = ReturnType<() => number[]>; // number[]`}</code>
                </pre>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                Distributive Conditional Types
            </h3>
            <p>
                When conditional types act on union types, they become
                distributive, applying to each member of the union.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Distributive conditional type
type ToArray<T> = T extends any ? T[] : never;

type Result = ToArray<string | number>; // string[] | number[]

// Practical example: Filter out unwanted types
type NonNullable<T> = T extends null | undefined ? never : T;

type Filtered = NonNullable<string | null | undefined | number>; // string | number

// Extract properties of certain type
type PropertiesOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never
}[keyof T];

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

type StringProperties = PropertiesOfType<User, string>; // 'name' | 'email'
type NumberProperties = PropertiesOfType<User, number>; // 'id'`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Template Literal Types
            </h2>
            <p>
                Template literal types allow you to create string types by
                combining other types using template string syntax.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Basic template literal types
type Greeting<T extends string> = \`Hello, \${T}!\`;

type TestGreeting = Greeting<'World'>; // 'Hello, World!'

// Combining with unions
type Color = 'red' | 'green' | 'blue';
type Shade = 'light' | 'dark';
type ColorShade = \`\${Shade}-\${Color}\`;

// 'light-red' | 'light-green' | 'light-blue' | 'dark-red' | 'dark-green' | 'dark-blue'

// Practical example: CSS-in-JS properties
type CSSProperty = \`margin\${'Top' | 'Bottom' | 'Left' | 'Right'}\` | 
                  \`padding\${'Top' | 'Bottom' | 'Left' | 'Right'}\`;

// 'marginTop' | 'marginBottom' | 'marginLeft' | 'marginRight' | 
// 'paddingTop' | 'paddingBottom' | 'paddingLeft' | 'paddingRight'

// Event handler names
type EventHandler<T extends string> = \`on\${Capitalize<T>}\`;

type ClickHandler = EventHandler<'click'>; // 'onClick'
type ChangeHandler = EventHandler<'change'>; // 'onChange'`}</code>
                </pre>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                Advanced Template Patterns
            </h3>
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Recursive template literal types
type Split<S extends string, D extends string> = 
  S extends \`\${infer T}\${D}\${infer U}\` ? [T, ...Split<U, D>] : [S];

type PathSegments = Split<'user.profile.settings', '.'>; 
// ['user', 'profile', 'settings']

// Join paths back together
type Join<T extends string[], D extends string> = 
  T extends [] ? never :
  T extends [infer F] ? F :
  T extends [infer F, ...infer R] ? 
    F extends string ? \`\${F}\${D}\${Join<Extract<R, string[]>, D>}\` : never :
  never;

type Rejoined = Join<['user', 'profile', 'settings'], '.'>; // 'user.profile.settings'

// Nested object path types
type GetPath<T, P extends string> = 
  P extends \`\${infer K}.\${infer Rest}\` 
    ? K extends keyof T 
      ? GetPath<T[K], Rest> 
      : never 
    : P extends keyof T 
      ? T[P] 
      : never;

interface Config {
  database: {
    connection: {
      host: string;
      port: number;
    };
  };
}

type HostType = GetPath<Config, 'database.connection.host'>; // string`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/zod.png"
                    alt="Type Validation"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Advanced types enable powerful validation patterns
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Mapped Types with Modifiers
            </h2>
            <p>
                Mapped types allow you to transform existing types by applying
                modifiers to their properties.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Basic mapped type
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Required<T> = {
  [K in keyof T]-?: T[K];
};

type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

// Practical example: Partial update type
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserUpdate = Optional<Pick<User, Exclude<keyof User, 'id'>>>;
// { name?: string; email?: string; age?: number; }

// Deep partial type
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface NestedConfig {
  database: {
    host: string;
    port: number;
  };
  api: {
    timeout: number;
  };
}

type PartialConfig = DeepPartial<NestedConfig>;
// {
//   database?: {
//     host?: string;
//     port?: number;
//   };
//   api?: {
//     timeout?: number;
//   };
// }`}</code>
                </pre>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                Advanced Mapped Type Patterns
            </h3>
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Create getter/setter types
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

type Setters<T> = {
  [K in keyof T as \`set\${Capitalize<string & K>}\`]: (value: T[K]) => void;
};

interface Person {
  name: string;
  age: number;
}

type PersonAccessors = Getters<Person> & Setters<Person>;
// {
//   getName: () => string;
//   getAge: () => number;
//   setName: (value: string) => void;
//   setAge: (value: number) => void;
// }

// Filter properties by condition
type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never
}[keyof T];

type StringKeys<T> = KeysOfType<T, string>;
type NumberKeys<T> = KeysOfType<T, number>;

type StringProperties<T> = Pick<T, StringKeys<T>>;
type NumberProperties<T> = Pick<T, NumberKeys<T>>;`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Utility Types and Combinations
            </h2>
            <p>
                TypeScript provides built-in utility types that can be combined
                to create powerful type transformations.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Extract and Exclude
type Extract<T, U> = T extends U ? T : never;
type Exclude<T, U> = T extends U ? never : T;

type Numbers = Extract<string | number | boolean, number>; // number
type NotNumbers = Exclude<string | number | boolean, number>; // string | boolean

// Custom utility types
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type NonNullable<T> = T extends null | undefined ? never : T;

// Advanced: Deep Omit
type DeepOmit<T, K extends string> = T extends object
  ? K extends \`\${infer P}.\${infer Rest}\`
    ? P extends keyof T
      ? { [Q in Exclude<keyof T, P>]: T[Q] } & 
        { [R in P]: DeepOmit<T[P], Rest> }
      : T
    : K extends keyof T
      ? Omit<T, K>
      : T
  : T;

// Example usage
interface ComplexConfig {
  api: {
    version: string;
    endpoint: string;
  };
  database: {
    host: string;
    port: number;
  };
  debug: boolean;
}

type WithoutApiVersion = DeepOmit<ComplexConfig, 'api.version'>;
// {
//   api: { endpoint: string };
//   database: { host: string; port: number };
//   debug: boolean;
// }`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Branded Types and Nominal Typing
            </h2>
            <p>
                TypeScript uses structural typing, but sometimes you need
                nominal typing to distinguish between types that have the same
                structure.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Branded type pattern
type Branded<T, B> = T & { __brand: B };

type UserId = Branded<string, 'UserId'>;
type ProductId = Branded<string, 'ProductId'>;

// Helper functions to create branded types
const createUserId = (id: string): UserId => id as UserId;
const createProductId = (id: string): ProductId => id as ProductId;

// Usage example
function getUserById(id: UserId): User {
  // Implementation
  return {} as User;
}

function getProductById(id: ProductId): Product {
  // Implementation
  return {} as Product;
}

// This would cause a compile error
const userId = createUserId('user-123');
const productId = createProductId('product-456');

// getUserById(productId); // Error: ProductId is not assignable to UserId
// getProductById(userId); // Error: UserId is not assignable to ProductId

// More sophisticated branded types
type PositiveNumber = Branded<number, 'Positive'>;

const createPositive = (n: number): PositiveNumber => {
  if (n <= 0) throw new Error('Must be positive');
  return n as PositiveNumber;
};

function calculateArea(radius: PositiveNumber): number {
  return Math.PI * radius * radius;
}`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/jwt.png"
                    alt="Type Safety"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Branded types provide additional type safety
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Function Overloading and Variadic Types
            </h2>
            <p>
                Advanced function typing allows you to create flexible APIs
                while maintaining type safety.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Function overloading
function createElement(tag: 'div'): HTMLDivElement;
function createElement(tag: 'span'): HTMLSpanElement;
function createElement(tag: 'button'): HTMLButtonElement;
function createElement(tag: string): HTMLElement {
  return document.createElement(tag);
}

const div = createElement('div'); // HTMLDivElement
const span = createElement('span'); // HTMLSpanElement

// Variadic tuple types
function tuple<T extends any[]>(...args: T): T {
  return args;
}

const numbers = tuple(1, 2, 3); // [number, number, number]
const mixed = tuple('hello', 42, true); // [string, number, boolean]

// Head and Tail utility types
type Head<T extends any[]> = T extends [infer H, ...any] ? H : never;
type Tail<T extends any[]> = T extends [any, ...infer T] ? T : never;

type First = Head<[string, number, boolean]>; // string
type Rest = Tail<[string, number, boolean]>; // [number, boolean]

// Reverse tuple type
type Reverse<T extends any[]> = T extends [...infer Rest, infer Last]
  ? [Last, ...Reverse<Rest>]
  : [];

type Reversed = Reverse<[1, 2, 3, 4]>; // [4, 3, 2, 1]`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Recursive Types and Patterns
            </h2>
            <p>
                Recursive types allow you to define types that reference
                themselves, essential for modeling tree structures and other
                recursive data.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Basic recursive type
type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

// JSON type definition
type JSONValue = 
  | string 
  | number 
  | boolean 
  | null 
  | JSONObject 
  | JSONArray;

interface JSONObject {
  [key: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> {}

// Recursive utility types
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type DeepMutable<T> = {
  -readonly [P in keyof T]: T[P] extends object ? DeepMutable<T[P]> : T[P];
};

// Flatten nested arrays
type Flatten<T extends any[]> = T extends [infer Head, ...infer Tail]
  ? Head extends any[]
    ? [...Flatten<Head>, ...Flatten<Tail>]
    : [Head, ...Flatten<Tail>]
  : [];

type FlatArray = Flatten<[[1, 2], [3, [4, 5]], 6]>; // [1, 2, 3, 4, 5, 6]`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Type-Level Programming
            </h2>
            <p>
                Advanced TypeScript allows you to perform computations at the
                type level, enabling powerful compile-time validations.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Type-level arithmetic
type Add<A extends number, B extends number> = 
  [...Tuple<A>, ...Tuple<B>]['length'] extends number 
    ? [...Tuple<A>, ...Tuple<B>]['length'] 
    : never;

type Tuple<N extends number, T extends any[] = []> = 
  T['length'] extends N ? T : Tuple<N, [...T, any]>;

type Result = Add<3, 4>; // 7

// Type-level string manipulation
type Length<S extends string> = S extends \`\\\${infer _}\${infer Rest}\` 
  ? 1 + Length<Rest> 
  : 0;

type StringLength = Length<'hello'>; // 5

// Reverse string at type level
type ReverseString<S extends string> = 
  S extends \`\${infer First}\${infer Rest}\`
    ? \`\${ReverseString<Rest>}\${First}\`
    : '';

type Reversed = ReverseString<'hello'>; // 'olleh'

// Type validation
type ValidateEmail<T extends string> = 
  T extends \`\${string}@\${string}.\${string}\` ? T : never;

type ValidEmail = ValidateEmail<'user@example.com'>; // 'user@example.com'
type InvalidEmail = ValidateEmail<'invalid-email'>; // never`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Practical Patterns and Use Cases
            </h2>
            <p>
                Let's explore real-world applications of these advanced
                TypeScript features.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                Type-Safe API Client
            </h3>
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Type-safe API client with path inference
type ApiRoutes = {
  '/users': {
    get: { response: User[] };
    post: { body: CreateUserRequest; response: User };
  };
  '/users/:id': {
    get: { params: { id: string }; response: User };
    put: { params: { id: string }; body: UpdateUserRequest; response: User };
    delete: { params: { id: string }; response: void };
  };
};

type ApiClient<T> = {
  [K in keyof T]: T[K] extends { get: any } 
    ? (params?: T[K]['get']['params']) => Promise<T[K]['get']['response']>
    : never;
} & {
  [K in keyof T]: T[K] extends { post: any }
    ? (body: T[K]['post']['body']) => Promise<T[K]['post']['response']>
    : never;
} & {
  [K in keyof T]: T[K] extends { put: any }
    ? (params: T[K]['put']['params'], body: T[K]['put']['body']) => 
      Promise<T[K]['put']['response']>
    : never;
};

// Usage
const api: ApiClient<ApiRoutes> = {
  '/users': async () => [], // User[]
  '/users/:id': async (params) => ({ id: params.id, name: 'John' }) // User
};`}</code>
                </pre>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                State Machine Types
            </h3>
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Type-safe state machine
type StateTransitions<T extends Record<string, string[]>> = {
  [K in keyof T]: {
    state: K;
    transitions: T[K];
  };
}[keyof T];

type MachineStates<T> = StateTransitions<T>['state'];
type MachineTransitions<T, S extends MachineStates<T>> = 
  Extract<StateTransitions<T>, { state: S }>['transitions'];

type TrafficLightStates = {
  red: ['green'];
  yellow: ['red'];
  green: ['yellow'];
};

type TrafficLightState = MachineStates<TrafficLightStates>; // 'red' | 'yellow' | 'green'
type RedTransitions = MachineTransitions<TrafficLightStates, 'red'>; // ['green']

class StateMachine<T extends Record<string, string[]>> {
  private currentState: MachineStates<T>;
  
  constructor(initialState: MachineStates<T>) {
    this.currentState = initialState;
  }
  
  transition<S extends MachineStates<T>>(
    newState: MachineTransitions<T, S>[number]
  ): void {
    const currentTransitions = this.getCurrentTransitions();
    if (currentTransitions.includes(newState)) {
      this.currentState = newState as MachineStates<T>;
    } else {
      throw new Error(\`Invalid transition from \${this.currentState} to \${newState}\`);
    }
  }
  
  private getCurrentTransitions(): string[] {
    // Implementation would extract transitions for current state
    return [];
  }
}`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/vscode.png"
                    alt="TypeScript Development"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Modern IDEs provide excellent TypeScript support
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Performance Considerations
            </h2>
            <p>
                While advanced types are powerful, they can impact compilation
                performance. Here are some best practices.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>
                    <strong>Avoid Excessive Recursion:</strong> Deep recursive
                    types can slow down compilation
                </li>
                <li>
                    <strong>Use Type Aliases Sparingly:</strong> Complex type
                    aliases can be hard to debug
                </li>
                <li>
                    <strong>Leverage Type Assertions:</strong> Sometimes type
                    assertions are more practical
                </li>
                <li>
                    <strong>Profile Complex Types:</strong> Use TypeScript's
                    performance tracing when needed
                </li>
                <li>
                    <strong>Break Down Complex Types:</strong> Split large types
                    into smaller, composable pieces
                </li>
            </ul>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Performance-friendly alternative to complex recursive types
// Instead of this (potentially slow):
type DeepOmit<T, K> = T extends object
  ? K extends \`\${infer P}.\${infer Rest}\`
    ? P extends keyof T
      ? Omit<T, P> & { [R in P]: DeepOmit<T[P], Rest> }
      : T
    : K extends keyof T
      ? Omit<T, K>
      : T
  : T;

// Use this (faster for most cases):
type FastDeepOmit<T, K extends string> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Conclusion
            </h2>
            <p>
                TypeScript's advanced type system opens up incredible
                possibilities for creating type-safe, self-documenting code that
                catches errors at compile-time. From conditional types and
                template literals to recursive patterns and type-level
                programming, these features enable you to build robust
                applications with confidence.
            </p>

            <p>
                Remember that with great power comes great responsibility. Use
                advanced types judiciously, prioritize readability and
                maintainability, and always consider the trade-offs between type
                safety and developer productivity. The goal is to write code
                that is not just type-safe but also clear, maintainable, and
                performant.
            </p>

            <p>
                As you continue your TypeScript journey, experiment with these
                patterns, share your discoveries with the community, and
                contribute to the ever-growing ecosystem of type-safe JavaScript
                development. The future of TypeScript is bright, and mastering
                these advanced features will position you at the forefront of
                modern web development.
            </p>
        </BlogLayout>
    );
}
