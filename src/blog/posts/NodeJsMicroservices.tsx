import BlogLayout from "../components/BlogLayout";

export const metaData = {
    title: "Building Microservices with Node.js: Architecture and Best Practices",
    slug: "nodejs-microservices-architecture",
    tags: ["Node.js", "Microservices", "Architecture", "Backend"],
    date: "2023-12-28",
    read_time: "11",
    description: "Learn how to build scalable microservices with Node.js. Explore service architecture, communication patterns, and deployment strategies.",
};

export default function NodeJsMicroservices() {
    return (
        <BlogLayout {...metaData}>
            <p>
                Microservices architecture has transformed how we build and scale applications. Node.js, with its event-driven nature and lightweight runtime, is an excellent choice for building microservices that are efficient, scalable, and maintainable.
            </p>

            <figure className="my-8">
                <img 
                    src="/images/city.png" 
                    alt="City Skyline" 
                    className="w-full max-w-md mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    City - Like microservices, many independent structures working together
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Understanding Microservices Architecture</h2>
            <p>
                Microservices architecture breaks down applications into small, independent services that communicate over well-defined APIs. Each service focuses on a specific business capability and can be developed, deployed, and scaled independently.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Monolith vs Microservices
// Monolith Structure
┌─────────────────────────────┐
│        Application          │
│  ┌─────┐ ┌─────┐ ┌─────┐    │
│  │Auth │ │User │ │Prod │    │
│  └─────┘ └─────┘ └─────┘    │
│  ┌─────┐ ┌─────┐ ┌─────┐    │
│  │Order│ │Pay  │ │Notif│    │
│  └─────┘ └─────┘ └─────┘    │
└─────────────────────────────┘

// Microservices Structure
┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐
│Auth │ │User │ │Prod │ │Ord │
└─────┘ └─────┘ └─────┘ └─────┘
    │       │       │       │
    └────────┼───────────────┘
             │
        ┌─────┐ ┌─────┐
        │API  │ │Msg  │
        │Gate │ │Bus  │
        └─────┘ └─────┘`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Service Communication Patterns</h2>
            <p>
                Services need to communicate with each other to fulfill business requirements. Understanding different communication patterns helps you choose the right approach for your use case.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Synchronous Communication (REST/gRPC)
const express = require('express');
const axios = require('axios');

const app = express();

// Order Service calling User Service
app.post('/orders', async (req, res) => {
    try {
        // Validate user
        const userResponse = await axios.get(
            \`http://user-service/users/\${req.body.userId}\`
        );
        
        if (!userResponse.data.active) {
            return res.status(400).json({ error: 'Inactive user' });
        }
        
        // Create order
        const order = await createOrder(req.body);
        
        // Notify user service
        await axios.post(
            'http://notification-service/notify',
            { userId: req.body.userId, message: 'Order created' }
        );
        
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Service unavailable' });
    }
});

// Asynchronous Communication (Message Queue)
const amqp = require('amqplib');

class OrderService {
    async createOrder(orderData) {
        const order = await saveOrder(orderData);
        
        // Publish events
        await this.publishEvent('order.created', {
            orderId: order.id,
            userId: order.userId,
            total: order.total
        });
        
        return order;
    }
    
    async publishEvent(eventType, data) {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        
        await channel.assertQueue('events');
        channel.sendToQueue('events', Buffer.from(JSON.stringify({
            type: eventType,
            data,
            timestamp: new Date().toISOString()
        })));
    }
}`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img 
                    src="/images/network.png" 
                    alt="Network" 
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Network - Services connected like nodes in a network
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Service Discovery and Load Balancing</h2>
            <p>
                In a dynamic microservices environment, services need to discover and communicate with each other without hardcoding network locations. Service discovery and load balancing are critical for resilience and scalability.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Service Registry with Consul
const Consul = require('consul');

class ServiceRegistry {
    constructor() {
        this.consul = new Consul();
    }
    
    async registerService(serviceName, serviceId, port) {
        await this.consul.agent.service.register({
            name: serviceName,
            id: serviceId,
            address: this.getIPAddress(),
            port: port,
            check: {
                http: \`http://\${this.getIPAddress()}:\${port}/health\`,
                interval: '10s'
            }
        });
    }
    
    async discoverService(serviceName) {
        const services = await this.consul.health.service({
            service: serviceName,
            passing: true
        });
        
        if (services.length === 0) {
            throw new Error('No healthy instances found');
        }
        
        // Simple round-robin load balancing
        const service = services[Math.floor(Math.random() * services.length)];
        return {
            host: service.Service.Address,
            port: service.Service.Port
        };
    }
    
    async deregisterService(serviceId) {
        await this.consul.agent.service.deregister(serviceId);
    }
}

// Usage in microservice
class UserService {
    constructor() {
        this.registry = new ServiceRegistry();
        this.serviceId = \`user-service-\${process.pid}\`;
    }
    
    async start(port) {
        await this.registry.registerService('user-service', this.serviceId, port);
        
        // Handle graceful shutdown
        process.on('SIGINT', async () => {
            await this.registry.deregisterService(this.serviceId);
            process.exit(0);
        });
    }
}`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Data Management Patterns</h2>
            <p>
                Each microservice should own its own data to maintain autonomy and avoid tight coupling. Understanding data management patterns is crucial for designing consistent and scalable systems.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Database per Service Pattern
class OrderService {
    constructor() {
        this.orderDB = new Database('orders_db');
        this.eventPublisher = new EventPublisher();
    }
    
    async createOrder(orderData) {
        // Create order in own database
        const order = await this.orderDB.create({
            ...orderData,
            status: 'pending',
            createdAt: new Date()
        });
        
        // Publish event for other services
        await this.eventPublisher.publish('OrderCreated', {
            orderId: order.id,
            userId: order.userId,
            items: order.items
        });
        
        return order;
    }
}

// Saga Pattern for Distributed Transactions
class OrderSaga {
    async execute(orderData) {
        const saga = new Saga();
        
        // Step 1: Create order
        saga.addStep(
            () => this.orderService.createOrder(orderData),
            (order) => this.orderService.cancelOrder(order.id)
        );
        
        // Step 2: Reserve inventory
        saga.addStep(
            (order) => this.inventoryService.reserveItems(order.items),
            (reservation) => this.inventoryService.releaseReservation(reservation.id)
        );
        
        // Step 3: Process payment
        saga.addStep(
            (reservation) => this.paymentService.processPayment({
                amount: reservation.total,
                method: orderData.paymentMethod
            }),
            (payment) => this.paymentService.refundPayment(payment.id)
        );
        
        return await saga.execute();
    }
}`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img 
                    src="/images/gears.png" 
                    alt="Gears" 
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Gears - Microservices working together like interconnected gears
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">API Gateway Implementation</h2>
            <p>
                An API gateway acts as a single entry point for all client requests, handling cross-cutting concerns like authentication, rate limiting, and request routing.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// API Gateway with Express
const express = require('express');
const httpProxy = require('http-proxy-middleware');
const jwt = require('jsonwebtoken');

class APIGateway {
    constructor() {
        this.app = express();
        this.setupMiddleware();
        this.setupRoutes();
    }
    
    setupMiddleware() {
        // Authentication middleware
        this.app.use((req, res, next) => {
            if (req.path.startsWith('/public')) {
                return next();
            }
            
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                return res.status(401).json({ error: 'No token provided' });
            }
            
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                req.user = decoded;
                next();
            } catch (error) {
                res.status(401).json({ error: 'Invalid token' });
            }
        });
        
        // Rate limiting
        this.app.use(rateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100 // limit each IP to 100 requests
        }));
    }
    
    setupRoutes() {
        // Route to user service
        this.app.use('/api/users', httpProxy.createProxyMiddleware({
            target: 'http://user-service:3001',
            changeOrigin: true
        }));
        
        // Route to order service
        this.app.use('/api/orders', httpProxy.createProxyMiddleware({
            target: 'http://order-service:3002',
            changeOrigin: true
        }));
        
        // Route to product service
        this.app.use('/api/products', httpProxy.createProxyMiddleware({
            target: 'http://product-service:3003',
            changeOrigin: true
        }));
    }
}`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Monitoring and Observability</h2>
            <p>
                Monitoring distributed systems requires a different approach than monolithic applications. Implementing proper observability helps you understand system behavior and troubleshoot issues effectively.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Distributed Tracing with OpenTelemetry
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

// Initialize tracing
const sdk = new NodeSDK({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: 'order-service',
        [SemanticResourceAttributes.SERVICE_VERSION]: '1.0.0'
    })
});

sdk.start();

// Metrics collection
const { MeterProvider } = require('@opentelemetry/sdk-metrics-base');
const meter = new MeterProvider().getMeter('order-service');

const orderCounter = meter.createCounter('orders_created', {
    description: 'Number of orders created'
});

const orderProcessingTime = meter.createHistogram('order_processing_time', {
    description: 'Time taken to process orders'
});

class OrderService {
    async createOrder(orderData) {
        const startTime = Date.now();
        
        try {
            const order = await this.processOrder(orderData);
            orderCounter.add(1, { status: 'success' });
            return order;
        } catch (error) {
            orderCounter.add(1, { status: 'error' });
            throw error;
        } finally {
            orderProcessingTime.record(Date.now() - startTime);
        }
    }
}

// Health check endpoint
app.get('/health', async (req, res) => {
    const health = {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        checks: {
            database: await this.checkDatabase(),
            messageQueue: await this.checkMessageQueue(),
            externalServices: await this.checkExternalServices()
        }
    };
    
    const isHealthy = Object.values(health.checks).every(check => check.healthy);
    health.status = isHealthy ? 'healthy' : 'unhealthy';
    
    res.status(isHealthy ? 200 : 503).json(health);
});`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>
            <p>
                Building microservices with Node.js requires careful planning and understanding of distributed systems principles. By implementing these patterns and best practices, you can create scalable, resilient, and maintainable microservices architectures.
            </p>

            <p>
                Remember that microservices introduce complexity in terms of deployment, monitoring, and debugging. Start simple, focus on business value, and gradually adopt more sophisticated patterns as your needs grow. The key is to find the right balance between architectural benefits and operational complexity.
            </p>
        </BlogLayout>
    );
}
