import BlogLayout from "../components/BlogLayout";

export const metaData = {
    title: "Building Scalable APIs with Node.js and TypeScript",
    slug: "building-scalable-apis-nodejs-typescript",
    tags: ["Node.js", "TypeScript", "API Design"],
    date: "2024-02-15",
    read_time: "8",
    description:
        "Learn how to create robust, type-safe APIs using Node.js and TypeScript. This guide covers best practices for error handling, validation, and architecture patterns that scale.",
};

export default function BuildingScalableApis() {
    return (
        <BlogLayout {...metaData}>
            <p>
                In today's fast-paced development landscape, building APIs that
                can scale with your application's growth is crucial. Combining
                Node.js with TypeScript gives us the perfect blend of
                performance and type safety, allowing us to create robust,
                maintainable APIs that can handle enterprise-level traffic.
            </p>

            <figure className="my-8">
                <img
                    src="/images/nodejs.png"
                    alt="Node.js Logo"
                    className="w-full max-w-md mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Node.js - The backbone of modern JavaScript APIs
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Setting Up the Foundation
            </h2>
            <p>
                Before diving into complex patterns, let's establish a solid
                foundation. A well-structured project starts with proper
                organization and the right tooling. We'll use Express.js as our
                web framework, combined with TypeScript for type safety.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// project structure
src/
├── controllers/
├── middleware/
├── routes/
├── services/
├── types/
├── utils/
└── app.ts`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Type Safety First
            </h2>
            <p>
                TypeScript's strength lies in its ability to catch errors at
                compile-time rather than runtime. Let's define our data
                structures and API contracts upfront:
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CreateUserRequest {
  email: string;
  name: string;
  password: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/typescript.png"
                    alt="TypeScript Logo"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    TypeScript provides compile-time type safety
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Middleware Architecture
            </h2>
            <p>
                A robust middleware chain is essential for scalable APIs. We'll
                implement authentication, validation, logging, and error
                handling as separate, composable middleware functions:
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Validation middleware
export const validateRequest = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.details[0].message
      });
    }
    next();
  };
};

// Authentication middleware
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Access token required'
    });
  }
  
  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        error: 'Invalid token'
      });
    }
    req.user = user;
    next();
  });
};`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Error Handling Strategy
            </h2>
            <p>
                Consistent error handling is crucial for API reliability. We'll
                implement a centralized error handling middleware that provides
                meaningful error responses while maintaining security:
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = { ...err };
  error.message = err.message;

  // Log error
  console.error(err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = new AppError(message, 404);
  }

  // Mongoose duplicate key
  if (err.name === 'MongoError' && (err as any).code === 11000) {
    const message = 'Duplicate field value entered';
    error = new AppError(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/express.png"
                    alt="Express.js Logo"
                    className="w-full max-w-md mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Express.js provides a robust foundation for REST APIs
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Service Layer Pattern
            </h2>
            <p>
                Separating business logic from controllers makes our code more
                testable and maintainable. The service layer handles all
                business operations:
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`export class UserService {
  async createUser(userData: CreateUserRequest): Promise<User> {
    // Check if user already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new AppError('User already exists', 400);
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    // Create user
    const user = new User({
      ...userData,
      password: hashedPassword
    });

    return await user.save();
  }

  async getUserById(id: string): Promise<User> {
    const user = await User.findById(id);
    if (!user) {
      throw new AppError('User not found', 404);
    }
    return user;
  }

  async updateUser(id: string, updateData: Partial<User>): Promise<User> {
    const user = await this.getUserById(id);
    Object.assign(user, updateData);
    return await user.save();
  }
}`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Performance Optimization
            </h2>
            <p>
                Scaling APIs requires attention to performance. Here are key
                optimization strategies:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>
                    <strong>Database Indexing:</strong> Proper indexes can
                    dramatically improve query performance
                </li>
                <li>
                    <strong>Caching:</strong> Implement Redis caching for
                    frequently accessed data
                </li>
                <li>
                    <strong>Connection Pooling:</strong> Manage database
                    connections efficiently
                </li>
                <li>
                    <strong>Compression:</strong> Use gzip compression for
                    response payloads
                </li>
                <li>
                    <strong>Rate Limiting:</strong> Protect against abuse with
                    rate limiting middleware
                </li>
            </ul>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Rate limiting middleware
import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    error: 'Too many requests from this IP'
  }
});

// Apply to all routes
app.use('/api/', apiLimiter);`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Testing Strategy
            </h2>
            <p>
                Comprehensive testing ensures API reliability. We'll use Jest
                and Supertest for unit and integration tests:
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`describe('User API', () => {
  beforeEach(async () => {
    await setupTestDatabase();
  });

  afterEach(async () => {
    await cleanupTestDatabase();
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const userData = {
        email: 'test@example.com',
        name: 'Test User',
        password: 'password123'
      };

      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.email).toBe(userData.email);
    });

    it('should return 400 for invalid data', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({ email: 'invalid-email' })
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });
});`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/jest.png"
                    alt="Jest Testing Framework"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Jest provides comprehensive testing capabilities
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Deployment Considerations
            </h2>
            <p>When deploying to production, consider these best practices:</p>

            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>
                    <strong>Environment Variables:</strong> Never hardcode
                    sensitive information
                </li>
                <li>
                    <strong>Health Checks:</strong> Implement health check
                    endpoints for monitoring
                </li>
                <li>
                    <strong>Logging:</strong> Use structured logging with
                    Winston or similar
                </li>
                <li>
                    <strong>Containerization:</strong> Dockerize your
                    application for consistent deployments
                </li>
                <li>
                    <strong>CI/CD Pipeline:</strong> Automate testing and
                    deployment processes
                </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Conclusion
            </h2>
            <p>
                Building scalable APIs with Node.js and TypeScript requires
                careful planning and adherence to best practices. By
                implementing proper type safety, middleware architecture, error
                handling, and performance optimizations, you can create APIs
                that not only work well today but can also grow with your
                application's needs.
            </p>

            <p>
                Remember that scalability is not just about handling more
                traffic—it's about maintaining code quality, performance, and
                reliability as your application evolves. Start with these
                patterns, adapt them to your specific needs, and always keep an
                eye on performance metrics and user feedback.
            </p>
        </BlogLayout>
    );
}
