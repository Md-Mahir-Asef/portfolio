import BlogLayout from "../components/BlogLayout";

export const metaData = {
    title: "Building Cloud-Native Applications: Architecture and Best Practices",
    slug: "cloud-native-applications-guide",
    tags: ["Cloud Native", "Microservices", "Kubernetes", "DevOps"],
    date: "2023-12-10",
    read_time: "12",
    description:
        "Learn how to build cloud-native applications. Explore containerization, orchestration, and modern cloud architecture patterns.",
};

export default function CloudNativeApps() {
    return (
        <BlogLayout {...metaData}>
            <p>
                Cloud-native applications are designed specifically to leverage
                the advantages of cloud computing. They embrace microservices,
                containerization, dynamic orchestration, and continuous delivery
                to build scalable, resilient, and maintainable systems.
            </p>

            <figure className="my-8">
                <img
                    src="/images/cloud.png"
                    alt="Cloud"
                    className="w-full max-w-md mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Cloud - The foundation of cloud-native architecture
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Cloud-Native Principles
            </h2>
            <p>
                Cloud-native development follows a set of principles that enable
                applications to fully utilize cloud capabilities. These
                principles guide architectural decisions and technology choices.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Cloud-Native Architecture Principles

1. Microservices Architecture
   - Single responsibility per service
   - Independent deployment and scaling
   - Technology diversity per service

2. Containerization
   - Immutable infrastructure
   - Consistent environments
   - Resource isolation

3. Dynamic Orchestration
   - Automatic scaling
   - Self-healing capabilities
   - Resource optimization

4. Continuous Delivery
   - Automated testing
   - Immutable deployments
   - Rollback capabilities

5. Observability
   - Comprehensive monitoring
   - Distributed tracing
   - Centralized logging

6. DevOps Culture
   - Infrastructure as Code
   - Automation first
   - Shared responsibility`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Container Orchestration with Kubernetes
            </h2>
            <p>
                Kubernetes has become the de facto standard for container
                orchestration. Understanding its core concepts and patterns is
                essential for building cloud-native applications.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`# Kubernetes Deployment Patterns

# 1. Rolling Update Strategy
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webapp
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: webapp
  template:
    metadata:
      labels:
        app: webapp
    spec:
      containers:
      - name: webapp
        image: webapp:v2.0
        ports:
        - containerPort: 8080
        readinessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 10
          periodSeconds: 5

# 2. Blue-Green Deployment
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: webapp-bluegreen
spec:
  replicas: 3
  strategy:
    blueGreen:
      activeService: webapp-active
      previewService: webapp-preview
      autoPromotionEnabled: false
      scaleDownDelaySeconds: 30
      prePromotionAnalysis:
        templates:
        - templateName: success-rate
        args:
        - name: service-name
          value: webapp-preview
      postPromotionAnalysis:
        templates:
        - templateName: success-rate
        args:
        - name: service-name
          value: webapp-active
  selector:
    matchLabels:
      app: webapp
  template:
    metadata:
      labels:
        app: webapp
    spec:
      containers:
      - name: webapp
        image: webapp:v2.0
        ports:
        - containerPort: 8080

# 3. Canary Deployment
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: webapp-canary
spec:
  replicas: 5
  strategy:
    canary:
      steps:
      - setWeight: 20
      - pause: {duration: 10m}
      - setWeight: 40
      - pause: {duration: 10m}
      - setWeight: 60
      - pause: {duration: 10m}
      - setWeight: 80
      - pause: {duration: 10m}
      canaryService: webapp-canary
      stableService: webapp-stable
      trafficRouting:
        istio:
          virtualService:
            name: webapp-vsvc
            routes:
            - primary
          destinationRule:
            name: webapp-destrule
            canarySubsetName: canary
            stableSubsetName: stable
  selector:
    matchLabels:
      app: webapp
  template:
    metadata:
      labels:
        app: webapp
    spec:
      containers:
      - name: webapp
        image: webapp:v2.0
        ports:
        - containerPort: 8080`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/kubernetes.png"
                    alt="Kubernetes Logo"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Kubernetes - Container orchestration platform
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Service Mesh Architecture
            </h2>
            <p>
                Service meshes provide a dedicated infrastructure layer for
                handling service-to-service communication. They offer advanced
                traffic management, security, and observability features.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`# Istio Service Mesh Configuration

# Virtual Service for Traffic Management
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: reviews
spec:
  hosts:
  - reviews
  http:
  - match:
    - headers:
        end-user:
          exact: jason
    route:
    - destination:
        host: reviews
        subset: v2
  - route:
    - destination:
        host: reviews
        subset: v1

# Destination Rule for Subsets
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: reviews
spec:
  host: reviews
  trafficPolicy:
    loadBalancer:
      simple: LEAST_CONN
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
    labels:
      version: v2

# Gateway for Ingress Traffic
apiVersion: networking.istio.io/v1beta1
kind: Gateway
metadata:
  name: httpbin-gateway
spec:
  selector:
    istio: ingressgateway
  servers:
  - port:
      number: 80
      name: http
      protocol: HTTP
    hosts:
    - "*"

# Security Policies
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: allow-viewer
  namespace: default
spec:
  selector:
    matchLabels:
      app: products
  action: ALLOW
  rules:
  - from:
    - source:
        principals: ["cluster.local/ns/default/sa/viewer"]
  to:
    - operation:
        methods: ["GET"]

# Telemetry Configuration
apiVersion: telemetry.istio.io/v1alpha1
kind: Telemetry
metadata:
  name: default
  namespace: istio-system
spec:
  tracing:
  - providers:
    - name: jaeger
  metrics:
  - providers:
    - name: prometheus
  accessLogging:
  - providers:
    - name: envoy`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Cloud-Native Design Patterns
            </h2>
            <p>
                Cloud-native applications require specific design patterns to
                handle distributed systems challenges. These patterns address
                scalability, resilience, and data management concerns.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Circuit Breaker Pattern
class CircuitBreaker {
  constructor(options = {}) {
    this.failureThreshold = options.failureThreshold || 5;
    this.resetTimeout = options.resetTimeout || 60000;
    this.monitoringPeriod = options.monitoringPeriod || 10000;
    
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.failureCount = 0;
    this.lastFailureTime = null;
    this.successCount = 0;
  }
  
  async execute(operation) {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime > this.resetTimeout) {
        this.state = 'HALF_OPEN';
        this.successCount = 0;
      } else {
        throw new Error('Circuit breaker is OPEN');
      }
    }
    
    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  onSuccess() {
    this.failureCount = 0;
    if (this.state === 'HALF_OPEN') {
      this.successCount++;
      if (this.successCount >= 3) {
        this.state = 'CLOSED';
      }
    }
  }
  
  onFailure() {
    this.failureCount++;
    this.lastFailureTime = Date.now();
    
    if (this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN';
    }
  }
}

// Retry Pattern with Exponential Backoff
class RetryPolicy {
  constructor(options = {}) {
    this.maxAttempts = options.maxAttempts || 3;
    this.baseDelay = options.baseDelay || 1000;
    this.maxDelay = options.maxDelay || 30000;
    this.backoffMultiplier = options.backoffMultiplier || 2;
  }
  
  async execute(operation) {
    let lastError;
    
    for (let attempt = 1; attempt <= this.maxAttempts; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;
        
        if (attempt === this.maxAttempts) {
          throw lastError;
        }
        
        const delay = Math.min(
          this.baseDelay * Math.pow(this.backoffMultiplier, attempt - 1),
          this.maxDelay
        );
        
        await this.sleep(delay + Math.random() * 1000);
      }
    }
    
    throw lastError;
  }
  
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Bulkhead Pattern for Resource Isolation
class Bulkhead {
  constructor(options = {}) {
    this.maxConcurrent = options.maxConcurrent || 10;
    this.maxQueue = options.maxQueue || 100;
    this.queue = [];
    this.running = 0;
  }
  
  async execute(operation) {
    return new Promise((resolve, reject) => {
      if (this.queue.length >= this.maxQueue) {
        reject(new Error('Bulkhead queue is full'));
        return;
      }
      
      this.queue.push({ operation, resolve, reject });
      this.process();
    });
  }
  
  async process() {
    if (this.running >= this.maxConcurrent || this.queue.length === 0) {
      return;
    }
    
    this.running++;
    const { operation, resolve, reject } = this.queue.shift();
    
    try {
      const result = await operation();
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.running--;
      this.process();
    }
  }
}`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/mesh.png"
                    alt="Network Mesh"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Service Mesh - Interconnected microservices
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Serverless and Functions-as-a-Service
            </h2>
            <p>
                Serverless computing abstracts away infrastructure management,
                allowing developers to focus on code. FaaS platforms
                automatically scale and manage compute resources based on
                demand.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`# AWS Lambda Function
import json
import boto3
import os

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['TABLE_NAME'])

def lambda_handler(event, context):
    try:
        # Process event
        http_method = event['httpMethod']
        path = event['path']
        
        if http_method == 'POST' and path == '/orders':
            return create_order(event['body'])
        elif http_method == 'GET' and path == '/orders':
            return get_orders(event['queryStringParameters'])
        else:
            return {
                'statusCode': 404,
                'body': json.dumps({'error': 'Not found'})
            }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }

def create_order(order_data):
    order = json.loads(order_data)
    
    # Validate order
    if not order.get('user_id') or not order.get('items'):
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid order data'})
        }
    
    # Save to DynamoDB
    order['id'] = str(uuid.uuid4())
    order['status'] = 'pending'
    order['created_at'] = datetime.utcnow().isoformat()
    
    table.put_item(Item=order)
    
    # Publish event
    sns = boto3.client('sns')
    sns.publish(
        TopicArn=os.environ['ORDER_TOPIC_ARN'],
        Message=json.dumps({
            'type': 'ORDER_CREATED',
            'order': order
        })
    )
    
    return {
        'statusCode': 201,
        'body': json.dumps(order)
    }

# Serverless Framework Configuration
service: order-service

provider:
  name: aws
  runtime: python3.9
  region: us-east-1
  environment:
    TABLE_NAME: \${self:custom.tableName}
    ORDER_TOPIC_ARN: \${self:custom.orderTopicArn}
  iamRoleStatements:
    - Effect: Allow
      Action:
        - dynamodb:PutItem
        - dynamodb:GetItem
        - dynamodb:Query
        - dynamodb:Scan
      Resource: arn:aws:dynamodb:\${self:provider.region}:*:table/\${self:custom.tableName}
    - Effect: Allow
      Action:
        - sns:Publish
      Resource: \${self:custom.orderTopicArn}

functions:
  orderApi:
    handler: handler.lambda_handler
    events:
      - httpApi:
          path: /orders
          method: post
      - httpApi:
          path: /orders
          method: get

plugins:
  - serverless-python-requirements

custom:
  tableName: orders-\${self:provider.stage}
  orderTopicArn: arn:aws:sns:\${self:provider.region}:\${aws:accountId}:orders-\${self:provider.stage}`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Infrastructure as Code
            </h2>
            <p>
                Infrastructure as Code (IaC) enables you to manage and provision
                infrastructure through machine-readable definition files. This
                approach brings consistency, repeatability, and version control
                to infrastructure management.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`# Terraform Configuration

# provider.tf
provider "aws" {
  region = var.aws_region
}

terraform {
  backend "s3" {
    bucket = "myapp-terraform-state"
    key    = "production/terraform.tfstate"
    region = "us-east-1"
  }
}

# variables.tf
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "app_name" {
  description = "Application name"
  type        = string
  default     = "myapp"
}

variable "environment" {
  description = "Environment"
  type        = string
  default     = "production"
}

# main.tf - EKS Cluster
resource "aws_eks_cluster" "main" {
  name     = "\${var.app_name}-\${var.environment}"
  role_arn = aws_iam_role.eks_cluster.arn
  version  = "1.27"

  vpc_config {
    subnet_ids = concat(
      aws_subnet.private[*].id,
      aws_subnet.public[*].id
    )
  }

  depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_policy,
  ]
}

resource "aws_eks_node_group" "main" {
  cluster_name    = aws_eks_cluster.main.name
  node_group_name = "\${var.app_name}-nodes"
  node_role_arn   = aws_iam_role.eks_node.arn
  subnet_ids      = aws_subnet.private[*].id

  scaling_config {
    desired_size = 3
    max_size     = 10
    min_size     = 1
  }

  instance_types = ["t3.medium"]

  depends_on = [
    aws_iam_role_policy_attachment.eks_worker_node_policy,
    aws_iam_role_policy_attachment.eks_cni_policy,
    aws_iam_role_policy_attachment.eks_container_registry_policy,
  ]
}

# outputs.tf
output "eks_cluster_endpoint" {
  description = "EKS cluster endpoint"
  value       = aws_eks_cluster.main.endpoint
}

output "eks_cluster_certificate_authority_data" {
  description = "EKS cluster certificate authority data"
  value       = aws_eks_cluster.main.certificate_authority[0].data
}

# Kubernetes Provider Configuration
provider "kubernetes" {
  host                   = aws_eks_cluster.main.endpoint
  cluster_ca_certificate = base64decode(aws_eks_cluster.main.certificate_authority[0].data)
  token                  = data.aws_eks_cluster_auth.main.token
}

data "aws_eks_cluster_auth" "main" {
  name = aws_eks_cluster.main.name
}

# Deploy Kubernetes Resources
resource "kubernetes_namespace" "app" {
  metadata {
    name = var.app_name
  }
}

resource "kubernetes_deployment" "app" {
  metadata {
    name      = var.app_name
    namespace = kubernetes_namespace.app.metadata[0].name
  }

  spec {
    replicas = 3

    selector {
      match_labels = {
        app = var.app_name
      }
    }

    template {
      metadata {
        labels = {
          app = var.app_name
        }
      }

      spec {
        container {
          name  = var.app_name
          image = "myapp:latest"

          port {
            container_port = 8080
          }

          resources {
            limits = {
              cpu    = "500m"
              memory = "512Mi"
            }
            requests = {
              cpu    = "250m"
              memory = "256Mi"
            }
          }
        }
      }
    }
  }
}`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/terraform.png"
                    alt="Terraform Logo"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Terraform - Infrastructure as Code tool
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Conclusion
            </h2>
            <p>
                Building cloud-native applications requires a fundamental shift
                in how we design, develop, and deploy software. By embracing
                cloud-native principles and patterns, you can create
                applications that are truly scalable, resilient, and
                maintainable.
            </p>

            <p>
                The journey to cloud-native is not just about adopting new
                technologies—it's about changing your mindset and processes.
                Start with small, incremental changes, measure your success, and
                continuously improve your practices. With the right approach,
                cloud-native architecture can transform your ability to deliver
                value to users quickly and reliably.
            </p>
        </BlogLayout>
    );
}
