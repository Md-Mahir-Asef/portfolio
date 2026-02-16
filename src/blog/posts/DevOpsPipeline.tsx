import BlogLayout from "../components/BlogLayout";

export const metaData = {
    title: "Building CI/CD Pipelines: Complete DevOps Guide",
    slug: "cicd-devops-pipeline-guide",
    tags: ["DevOps", "CI/CD", "Automation", "Deployment"],
    date: "2023-12-15",
    read_time: "10",
    description: "Learn how to build robust CI/CD pipelines. Explore continuous integration, deployment strategies, and DevOps best practices.",
};

export default function DevOpsPipeline() {
    return (
        <BlogLayout {...metaData}>
            <p>
                Continuous Integration and Continuous Deployment (CI/CD) pipelines are the backbone of modern software development. They enable teams to deliver code faster, more reliably, and with higher quality through automation and best practices.
            </p>

            <figure className="my-8">
                <img 
                    src="/images/pipeline.png" 
                    alt="Pipeline" 
                    className="w-full max-w-md mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Pipeline - Like CI/CD, flow of automated processes
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Understanding CI/CD Fundamentals</h2>
            <p>
                CI/CD represents a set of practices that automate the building, testing, and deployment of applications. Understanding the core concepts is essential for implementing effective pipelines.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// CI/CD Pipeline Stages
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Commit    │ -> │   Build     │ -> │   Test      │
└─────────────┘    └─────────────┘    └─────────────┘
                                              │
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Deploy    │ <- │   Package   │ <- │   Security  │
└─────────────┘    └─────────────┘    └─────────────┘

// Continuous Integration
- Code commits trigger automated builds
- Automated tests run on every change
- Code quality checks are enforced
- Feedback is provided quickly to developers

// Continuous Deployment
- Successful builds are automatically deployed
- Deployment to staging environments
- Automated acceptance tests
- Production deployment with manual approval`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">GitHub Actions Workflow</h2>
            <p>
                GitHub Actions provides a powerful platform for building CI/CD pipelines directly in your repository. Let's create a comprehensive workflow for a Node.js application.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: test_db
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: \${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run type checking
      run: npm run type-check
    
    - name: Run unit tests
      run: npm run test:unit
      env:
        NODE_ENV: test
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db
    
    - name: Run integration tests
      run: npm run test:integration
      env:
        NODE_ENV: test
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db
    
    - name: Generate coverage report
      run: npm run coverage
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info

  security:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Run security audit
      run: npm audit --audit-level moderate
    
    - name: Run Snyk security scan
      uses: snyk/actions/node@master
      env:
        SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}

  build:
    needs: [test, security]
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
    
    - name: Build Docker image
      run: |
        docker build -t myapp:\${{ github.sha }} .
        docker tag myapp:\${{ github.sha }} myapp:latest
    
    - name: Log in to Docker Hub
      uses: docker/login-action@v2
      with:
        username: \${{ secrets.DOCKER_USERNAME }}
        password: \${{ secrets.DOCKER_PASSWORD }}
    
    - name: Push Docker image
      run: |
        docker push myapp:\${{ github.sha }}
        docker push myapp:latest

  deploy-staging:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/develop'
    environment: staging
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to staging
      run: |
        echo "Deploying to staging environment"
        # Add your deployment commands here
        # kubectl apply -f k8s/staging/
        # or deploy to your cloud provider

  deploy-production:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    environment: production
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to production
      run: |
        echo "Deploying to production environment"
        # Add your production deployment commands here`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img 
                    src="/images/robot.png" 
                    alt="Robot" 
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Robot - Automation at the heart of CI/CD
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Docker and Containerization</h2>
            <p>
                Containerization ensures consistency across different environments and simplifies deployment. Docker is the most popular containerization platform for modern applications.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`# Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Copy built application
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodejs:nodejs /app/package.json ./package.json

# Switch to non-root user
USER nodejs

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

EXPOSE 3000

CMD ["node", "dist/index.js"]

# docker-compose.yml for development
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
      target: builder
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://postgres:password@db:5432/myapp
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - db
      - redis
    command: npm run dev

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Kubernetes Deployment</h2>
            <p>
                Kubernetes provides a powerful platform for orchestrating containerized applications at scale. Understanding Kubernetes manifests and deployment strategies is crucial for production deployments.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`# k8s/namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: myapp

---
# k8s/configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
  namespace: myapp
data:
  NODE_ENV: "production"
  PORT: "3000"

---
# k8s/secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: myapp-secrets
  namespace: myapp
type: Opaque
data:
  DATABASE_URL: <base64-encoded-url>
  JWT_SECRET: <base64-encoded-secret>

---
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  namespace: myapp
  labels:
    app: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 3000
        envFrom:
        - configMapRef:
            name: myapp-config
        - secretRef:
            name: myapp-secrets
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5

---
# k8s/service.yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
  namespace: myapp
spec:
  selector:
    app: myapp
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: ClusterIP

---
# k8s/ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingress
  namespace: myapp
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/rate-limit: "100"
spec:
  tls:
  - hosts:
    - myapp.example.com
    secretName: myapp-tls
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: myapp-service
            port:
              number: 80`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img 
                    src="/images/ship.png" 
                    alt="Ship" 
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Ship - Deploying applications like ships to sea
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Monitoring and Observability</h2>
            <p>
                Effective monitoring is crucial for maintaining production systems. Implementing comprehensive observability helps you detect issues quickly and understand system behavior.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`# Prometheus monitoring configuration
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
  namespace: monitoring
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
      evaluation_interval: 15s
    
    rule_files:
      - "alert_rules.yml"
    
    scrape_configs:
      - job_name: 'kubernetes-pods'
        kubernetes_sd_configs:
        - role: pod
        relabel_configs:
        - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
          action: keep
          regex: true
        - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
          action: replace
          target_label: __metrics_path__
          regex: (.+)
    
    alerting:
      alertmanagers:
      - static_configs:
        - targets:
          - alertmanager:9093

# Grafana dashboard configuration
apiVersion: v1
kind: ConfigMap
metadata:
  name: grafana-dashboard
  namespace: monitoring
  labels:
    grafana_dashboard: "1"
data:
  dashboard.json: |
    {
      "dashboard": {
        "title": "Application Metrics",
        "panels": [
          {
            "title": "Request Rate",
            "type": "graph",
            "targets": [
              {
                "expr": "rate(http_requests_total[5m])",
                "legendFormat": "{{method}} {{status}}"
              }
            ]
          },
          {
            "title": "Response Time",
            "type": "graph",
            "targets": [
              {
                "expr": "histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))",
                "legendFormat": "95th percentile"
              }
            ]
          }
        ]
      }
    }

# Application monitoring with Prometheus
const prometheus = require('prom-client');

// Create metrics
const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
});

const httpRequestTotal = new prometheus.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});

// Middleware to track metrics
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    const labels = {
      method: req.method,
      route: req.route?.path || req.path,
      status_code: res.statusCode
    };
    
    httpRequestDuration.observe(labels, duration);
    httpRequestTotal.inc(labels);
  });
  
  next();
});

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', prometheus.register.contentType);
  res.end(await prometheus.register.metrics());
});`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>
            <p>
                Building effective CI/CD pipelines requires understanding the entire software delivery lifecycle, from code commit to production deployment. By implementing these practices and tools, you can create reliable, automated pipelines that deliver value to users quickly and safely.
            </p>

            <p>
                Remember that CI/CD is not just about tools—it's about culture and processes. Start with simple pipelines, measure your success metrics, and continuously improve your processes. The key is to find the right balance between automation speed and deployment safety for your specific context and requirements.
            </p>
        </BlogLayout>
    );
}
