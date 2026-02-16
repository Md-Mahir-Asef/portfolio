import BlogLayout from "../components/BlogLayout";

export const metaData = {
    title: "Web Security Basics: Protecting Your Applications",
    slug: "web-security-basics",
    tags: ["Security", "Web Development", "Cybersecurity", "Best Practices"],
    date: "2024-01-08",
    read_time: "9",
    description:
        "Learn essential web security practices to protect your applications from common vulnerabilities. Covering authentication, authorization, and secure coding practices.",
};

export default function WebSecurityBasics() {
    return (
        <BlogLayout {...metaData}>
            <p>
                Web security is crucial in today's digital landscape.
                Understanding common vulnerabilities and implementing proper
                security measures can protect your applications and users from
                malicious attacks.
            </p>

            <figure className="my-8">
                <img
                    src="/images/lock.png"
                    alt="Lock"
                    className="w-full max-w-md mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Lock - Essential for web security
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Understanding Common Vulnerabilities
            </h2>
            <p>
                The OWASP Top 10 provides a comprehensive list of the most
                critical web application security risks. Understanding these
                vulnerabilities is the first step toward protecting your
                applications.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// SQL Injection Prevention
// Bad: Vulnerable to SQL injection
const query = \`SELECT * FROM users WHERE email = '\${email}'\`;

// Good: Using parameterized queries
const query = 'SELECT * FROM users WHERE email = ?';
db.query(query, [email]);

// XSS Prevention
// Bad: Vulnerable to XSS
div.innerHTML = userInput;

// Good: Sanitize user input
div.textContent = userInput;
// or use a library like DOMPurify
div.innerHTML = DOMPurify.sanitize(userInput);

// CSRF Protection
// Use CSRF tokens in forms
<input type="hidden" name="csrf_token" value="\${csrfToken}">

// Validate tokens on the server
if (req.body.csrf_token !== req.session.csrfToken) {
    return res.status(403).send('CSRF token mismatch');
}`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Authentication Best Practices
            </h2>
            <p>
                Proper authentication is the foundation of web security.
                Implementing strong authentication mechanisms prevents
                unauthorized access to your application.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Password hashing with bcrypt
const bcrypt = require('bcrypt');

async function hashPassword(password) {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
}

async function verifyPassword(password, hash) {
    return await bcrypt.compare(password, hash);
}

// JWT implementation
const jwt = require('jsonwebtoken');

function generateToken(user) {
    return jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
}

function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

// Rate limiting to prevent brute force
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests
    message: 'Too many login attempts'
});`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/shield.png"
                    alt="Shield"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Shield - Protect your applications from threats
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Secure Communication
            </h2>
            <p>
                Encrypting data in transit prevents man-in-the-middle attacks
                and ensures the confidentiality and integrity of sensitive
                information.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// HTTPS enforcement in Express
app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
        res.redirect(\`https://\${req.header('host')}\${req.url}\`);
    } else {
        next();
    }
});

// Secure headers with Helmet
const helmet = require('helmet');
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"]
        }
    },
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    }
}));

// Cookie security
app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: {
        secure: true, // HTTPS only
        httpOnly: true, // Prevent client-side access
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        sameSite: 'strict'
    }
}));`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Input Validation and Sanitization
            </h2>
            <p>
                Validating and sanitizing all user input is crucial for
                preventing injection attacks and ensuring data integrity.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Input validation with Joi
const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).pattern(
        new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])')
    ).required(),
    age: Joi.number().integer().min(18).max(120)
});

// Validation middleware
function validateInput(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                error: error.details[0].message
            });
        }
        next();
    };
}

// File upload security
const multer = require('multer');
const path = require('path');

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type'), false);
    }
};

const upload = multer({
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img
                    src="/images/key.png"
                    alt="Key"
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Key - Access control is fundamental to security
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Error Handling and Logging
            </h2>
            <p>
                Proper error handling and logging help you detect security
                incidents and prevent information leakage through error
                messages.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Secure error handling
app.use((err, req, res, next) => {
    // Log the error for debugging
    console.error(err);
    
    // Don't expose stack traces in production
    if (process.env.NODE_ENV === 'production') {
        res.status(500).json({
            error: 'Something went wrong'
        });
    } else {
        res.status(500).json({
            error: err.message,
            stack: err.stack
        });
    }
});

// Security logging
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'security.log' })
    ]
});

// Log security events
function logSecurityEvent(event, details) {
    logger.info({
        event,
        details,
        timestamp: new Date().toISOString(),
        ip: details.ip,
        userAgent: details.userAgent
    });
}`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Security Testing
            </h2>
            <p>
                Regular security testing helps identify vulnerabilities before
                they can be exploited by attackers.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Security testing with Jest
describe('Security Tests', () => {
    test('should prevent SQL injection', async () => {
        const maliciousInput = "'; DROP TABLE users; --";
        const result = await getUserByEmail(maliciousInput);
        expect(result).toBeNull();
    });
    
    test('should sanitize XSS attempts', () => {
        const xssInput = '&lt;script&gt;alert("xss")&lt;/script&gt;';
        const sanitized = sanitizeInput(xssInput);
        expect(sanitized).not.toContain('&lt;script&gt;');
    });
    
    test('should enforce rate limiting', async () => {
        for (let i = 0; i < 6; i++) {
            await request(app).post('/login').send({
                email: 'test@example.com',
                password: 'wrong'
            });
        }
        const response = await request(app).post('/login').send({
            email: 'test@example.com',
            password: 'wrong'
        });
        expect(response.status).toBe(429);
    });
});

// Dependency vulnerability scanning
// Use npm audit or tools like Snyk
// npm audit
// npm audit fix`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                Conclusion
            </h2>
            <p>
                Web security is an ongoing process that requires constant
                vigilance and improvement. By implementing these best practices,
                you can significantly reduce the risk of security
                vulnerabilities in your applications.
            </p>

            <p>
                Remember that security is not a one-time implementation but a
                continuous process of monitoring, testing, and improving your
                defenses. Stay informed about the latest security threats and
                best practices, and always prioritize the security of your
                applications and users.
            </p>
        </BlogLayout>
    );
}
