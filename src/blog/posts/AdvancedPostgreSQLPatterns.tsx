import BlogLayout from "../components/BlogLayout";

export const metaData = {
    title: "Advanced PostgreSQL Patterns for High Performance",
    slug: "advanced-postgresql-patterns",
    tags: ["PostgreSQL", "Database", "Performance"],
    date: "2024-02-10",
    read_time: "12",
    description:
        "Discover advanced PostgreSQL techniques including indexing strategies, query optimization, and database design patterns that will help you build lightning-fast applications.",
};

export default function AdvancedPostgreSQLPatterns() {
    return (
        <BlogLayout {...metaData}>
            <p>
                PostgreSQL is a powerhouse when it comes to relational
                databases, but unlocking its full potential requires
                understanding advanced patterns and optimization techniques. In
                this comprehensive guide, we'll explore sophisticated PostgreSQL
                strategies that can transform your application's performance
                from good to exceptional.
            </p>

            <figure className="my-8">
                <img
                    src="/images/postgresql.png"
                    alt="PostgreSQL Logo"
                    className="w-full max-w-md mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    PostgreSQL - The world's most advanced open source database
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Advanced Indexing Strategies
            </h2>
            <p>
                While basic B-tree indexes are essential, PostgreSQL offers
                several advanced indexing options that can dramatically improve
                query performance for specific use cases.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                Partial Indexes
            </h3>
            <p>
                Partial indexes are perfect for queries that frequently filter
                on a subset of data. They're smaller and more efficient than
                full-table indexes:
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`-- Index only active users
CREATE INDEX idx_active_users_email 
ON users(email) 
WHERE status = 'active';

-- Index recent orders for faster reporting
CREATE INDEX idx_recent_orders 
ON orders(created_at, customer_id) 
WHERE created_at > CURRENT_DATE - INTERVAL '30 days';`}</code>
                </pre>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                Expression Indexes
            </h3>
            <p>
                When you frequently query on computed values, expression indexes
                can eliminate the need for expensive calculations at query time:
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`-- Case-insensitive search
CREATE INDEX idx_users_lower_email 
ON users(LOWER(email));

-- JSON field extraction
CREATE INDEX idx_products_price_range 
ON products(((metadata->>'price')::numeric));

-- Full-text search
CREATE INDEX idx_articles_search 
ON articles USING gin(to_tsvector('english', title || ' ' || content));`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/mongodb.png"
                    alt="Database Performance"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Proper indexing is crucial for database performance
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Query Optimization Techniques
            </h2>
            <p>
                Understanding how PostgreSQL executes queries is key to
                optimization. Let's explore advanced techniques for writing
                efficient queries.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                Window Functions for Analytics
            </h3>
            <p>
                Window functions can eliminate complex self-joins and
                dramatically improve performance for analytical queries:
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`-- Running totals without self-joins
SELECT 
    order_date,
    customer_id,
    amount,
    SUM(amount) OVER (
        PARTITION BY customer_id 
        ORDER BY order_date 
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) as running_total
FROM orders;

-- Ranking with gaps for ties
SELECT 
    product_id,
    category,
    sales,
    RANK() OVER (PARTITION BY category ORDER BY sales DESC) as rank
FROM product_sales;`}</code>
                </pre>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                CTEs vs Subqueries
            </h3>
            <p>
                Common Table Expressions (CTEs) can improve readability and
                sometimes performance, but understanding when to use them is
                crucial:
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`-- Recursive CTE for hierarchical data
WITH RECURSIVE category_tree AS (
    SELECT id, name, parent_id, 0 as level
    FROM categories 
    WHERE parent_id IS NULL
    
    UNION ALL
    
    SELECT c.id, c.name, c.parent_id, ct.level + 1
    FROM categories c
    JOIN category_tree ct ON c.parent_id = ct.id
)
SELECT * FROM category_tree ORDER BY level, name;

-- Materialized CTE for complex calculations
WITH monthly_sales AS MATERIALIZED (
    SELECT 
        DATE_TRUNC('month', order_date) as month,
        SUM(amount) as total_sales,
        COUNT(*) as order_count
    FROM orders
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT 
    month,
    total_sales,
    LAG(total_sales) OVER (ORDER BY month) as prev_month_sales,
    (total_sales - LAG(total_sales) OVER (ORDER BY month)) / 
        LAG(total_sales) OVER (ORDER BY month) * 100 as growth_rate
FROM monthly_sales;`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Advanced Data Modeling
            </h2>
            <p>
                Proper data modeling is the foundation of a performant database.
                Let's explore sophisticated patterns for complex relationships.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                JSONB for Semi-Structured Data
            </h3>
            <p>
                PostgreSQL's JSONB support offers the flexibility of NoSQL with
                the reliability of relational databases:
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`-- Table with JSONB column
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    base_price DECIMAL(10,2),
    attributes JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

-- GIN index for efficient JSON queries
CREATE INDEX idx_products_attributes 
ON products USING gin(attributes);

-- Querying JSONB data
SELECT name, base_price, attributes->>'color' as color
FROM products 
WHERE attributes->>'category' = 'electronics'
  AND (attributes->>'price')::decimal > 100;

-- JSON path queries
SELECT name, attributes
FROM products 
WHERE attributes @@ '$.features[*] ? (@ > "warranty")';`}</code>
                </pre>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                Partitioning for Large Tables
            </h3>
            <p>
                Table partitioning can dramatically improve performance for
                large datasets by breaking them into manageable chunks:
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`-- Partitioned table by date
CREATE TABLE orders (
    id BIGSERIAL,
    customer_id INTEGER,
    order_date DATE,
    amount DECIMAL(10,2),
    status VARCHAR(50)
) PARTITION BY RANGE (order_date);

-- Create monthly partitions
CREATE TABLE orders_2024_01 
PARTITION OF orders 
FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

CREATE TABLE orders_2024_02 
PARTITION OF orders 
FOR VALUES FROM ('2024-02-01') TO ('2024-03-01');

-- Automatically create partitions
CREATE OR REPLACE FUNCTION create_monthly_partition()
RETURNS void AS $$
DECLARE
    start_date DATE;
    end_date DATE;
    partition_name TEXT;
BEGIN
    start_date := date_trunc('month', CURRENT_DATE + INTERVAL '1 month');
    end_date := start_date + INTERVAL '1 month';
    partition_name := 'orders_' || to_char(start_date, 'YYYY_MM');
    
    EXECUTE format('CREATE TABLE IF NOT EXISTS %I PARTITION OF orders FOR VALUES FROM (%L) TO (%L)',
                   partition_name, start_date, end_date);
END;
$$ LANGUAGE plpgsql;`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/mysql.png"
                    alt="Database Schema"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Proper schema design is essential for performance
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Performance Monitoring
            </h2>
            <p>
                Monitoring database performance is crucial for maintaining
                optimal operation. PostgreSQL provides powerful tools for this
                purpose.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                Query Performance Analysis
            </h3>
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`-- Enable query statistics
ALTER SYSTEM SET track_activities = on;
ALTER SYSTEM SET track_timing = on;
ALTER SYSTEM SET log_min_duration_statement = 1000; -- Log queries > 1s

-- Find slow queries
SELECT 
    query,
    calls,
    total_time,
    mean_time,
    rows
FROM pg_stat_statements 
ORDER BY mean_time DESC 
LIMIT 10;

-- Analyze specific query
EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) 
SELECT * FROM orders 
WHERE customer_id = 12345 
  AND order_date >= '2024-01-01';`}</code>
                </pre>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                Index Usage Monitoring
            </h3>
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`-- Find unused indexes
SELECT 
    schemaname,
    tablename,
    indexname,
    idx_scan,
    idx_tup_read,
    idx_tup_fetch
FROM pg_stat_user_indexes 
WHERE idx_scan = 0
ORDER BY schemaname, tablename;

-- Index size analysis
SELECT 
    schemaname,
    tablename,
    indexname,
    pg_size_pretty(pg_relation_size(indexrelid)) as index_size
FROM pg_stat_user_indexes 
ORDER BY pg_relation_size(indexrelid) DESC;`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Connection Pooling and Scaling
            </h2>
            <p>
                As your application grows, managing database connections
                efficiently becomes critical. PgBouncer and connection pooling
                strategies can help.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`-- PgBouncer configuration
[databases]
myapp = host=localhost port=5432 dbname=myapp

[pgbouncer]
listen_port = 6432
listen_addr = 127.0.0.1
auth_type = md5
auth_file = /etc/pgbouncer/userlist.txt
logfile = /var/log/pgbouncer/pgbouncer.log
pidfile = /var/run/pgbouncer/pgbouncer.pid
admin_users = postgres
stats_users = stats, postgres

# Pool settings
pool_mode = transaction
max_client_conn = 100
default_pool_size = 20
min_pool_size = 5
reserve_pool_size = 5
reserve_pool_timeout = 5
max_db_connections = 50
max_user_connections = 50`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/redis.png"
                    alt="Redis Caching"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Caching with Redis can reduce database load significantly
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Backup and Recovery Strategies
            </h2>
            <p>
                Robust backup strategies are essential for data safety.
                PostgreSQL offers several approaches for different requirements.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`-- Continuous archiving setup
-- postgresql.conf
wal_level = replica
archive_mode = on
archive_command = 'cp %p /backup/archive/%f'
max_wal_senders = 3
wal_keep_segments = 64

-- Physical backup with pg_basebackup
pg_basebackup -h localhost -D /backup/base -U replication -v -P -W

-- Point-in-time recovery
-- recovery.conf
restore_command = 'cp /backup/archive/%f %p'
recovery_target_time = '2024-02-15 10:30:00'`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Conclusion
            </h2>
            <p>
                Mastering PostgreSQL's advanced features requires continuous
                learning and experimentation. The patterns and techniques
                covered here represent just the beginning of what's possible
                with this powerful database system.
            </p>

            <p>
                Remember that database optimization is an iterative process.
                Start with proper indexing, monitor performance metrics, and
                gradually implement more advanced patterns as your application's
                needs evolve. The key is to balance performance gains with
                maintenance complexity.
            </p>

            <p>
                Always test optimization strategies in a staging environment
                before applying them to production, and keep detailed
                performance baselines to measure the impact of your changes.
                With these advanced PostgreSQL patterns, you're well-equipped to
                build applications that can scale efficiently while maintaining
                data integrity and performance.
            </p>
        </BlogLayout>
    );
}
