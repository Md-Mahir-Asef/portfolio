import BlogLayout from "../components/BlogLayout";

export const metaData = {
    title: "Git Workflow Best Practices for Team Collaboration",
    slug: "git-workflow-best-practices",
    tags: ["Git", "Version Control", "DevOps", "Team Collaboration"],
    date: "2024-01-05",
    read_time: "8",
    description: "Master Git workflows for effective team collaboration. Learn branching strategies, commit conventions, and best practices for version control.",
};

export default function GitWorkflow() {
    return (
        <BlogLayout {...metaData}>
            <p>
                Git is more than just a version control system—it's a powerful collaboration tool that enables teams to work together efficiently. Understanding proper Git workflows is essential for maintaining clean, manageable codebases.
            </p>

            <figure className="my-8">
                <img 
                    src="/images/tree.png" 
                    alt="Tree" 
                    className="w-full max-w-md mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Tree - Like Git branches, growing in different directions
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Branching Strategies</h2>
            <p>
                Choosing the right branching strategy is crucial for team productivity and code stability. Different strategies work better for different team sizes and project requirements.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Git Flow branching model
main (production)
├── develop (integration)
│   ├── feature/user-authentication
│   ├── feature/payment-gateway
│   └── feature/dashboard-ui
├── release/v1.2.0
└── hotfix/critical-bug-fix

// GitHub Flow (simplified)
main
├── feature/new-feature
├── bugfix/issue-123
└── hotfix/emergency-patch

// GitLab Flow (environment-based)
main
├── develop
│   ├── feature/api-endpoints
│   └── feature/frontend-redesign
├── staging
└── production`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Commit Message Conventions</h2>
            <p>
                Consistent commit messages make your project history readable and maintainable. Following established conventions helps with automated changelog generation and code reviews.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Conventional Commits format
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

// Examples
feat(auth): add JWT token refresh mechanism
fix(api): handle null response from user endpoint
docs(readme): update installation instructions
style(css): fix button alignment on mobile
refactor(utils): simplify date formatting function
test(user): add unit tests for validation logic
chore(deps): update lodash to version 4.17.21

// Breaking changes
feat(api)!: change user endpoint response format
BREAKING CHANGE: The user endpoint now returns a different JSON structure

// Detailed commit with body
feat(payment): integrate Stripe payment gateway

Add support for one-time and recurring payments using Stripe.
This includes:
- Client-side payment form validation
- Server-side webhook handling
- Error handling for failed payments
- Email notifications for successful payments

Closes #123, #124`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img 
                    src="/images/bridge.png" 
                    alt="Bridge" 
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Bridge - Like Git merges, connecting different branches
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Pull Request Best Practices</h2>
            <p>
                Pull requests (or merge requests) are the heart of collaborative development. Following best practices ensures smooth code reviews and high-quality merges.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// PR Template Example
## Description
Brief description of changes and motivation.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No sensitive data committed

## Screenshots (if applicable)
Add screenshots for UI changes.

## Related Issues
Closes #123, Fixes #456

// PR Review Guidelines
1. Review the code, not the author
2. Focus on logic, not style (use linters)
3. Ask questions, don't just point out problems
4. Suggest improvements, don't just criticize
5. Be constructive and respectful`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Advanced Git Techniques</h2>
            <p>
                Mastering advanced Git techniques will help you handle complex scenarios and maintain a clean commit history.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Interactive rebase for clean history
git rebase -i HEAD~3

# Rebase options:
# pick: use commit as-is
# reword: edit commit message
# edit: stop for amending
# squash: combine with previous commit
# fixup: combine with previous, discard message
# drop: remove commit

// Fixing common issues
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Fix commit author
git commit --amend --author="Name <email>"

# Stash changes temporarily
git stash push -m "Work in progress"
git stash pop

# Cherry-pick specific commits
git cherry-pick <commit-hash>

# Bisect to find problematic commit
git bisect start
git bisect bad  # current state
git bisect good <good-commit-hash>
git bisect run npm test`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img 
                    src="/images/compass.png" 
                    alt="Compass" 
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Compass - Like Git, helps navigate your code history
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Git Hooks and Automation</h2>
            <p>
                Git hooks allow you to automate tasks at different points in the Git workflow, ensuring code quality and consistency across your team.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Pre-commit hook (.git/hooks/pre-commit)
#!/bin/sh
# Run linting and tests before commit
npm run lint
npm run test

# Check for sensitive data
if git diff --cached --name-only | xargs grep -l "password\|secret\|key"; then
    echo "Error: Potential sensitive data found!"
    exit 1
fi

// Pre-push hook (.git/hooks/pre-push)
#!/bin/sh
# Run full test suite before push
npm run test:coverage

# Check if build passes
npm run build

// Commit message hook (.git/hooks/commit-msg)
#!/bin/sh
# Validate commit message format
commit_regex='^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{1,50}'
if ! grep -qE "$commit_regex" "$1"; then
    echo "Invalid commit message format!"
    echo "Use: type(scope): description"
    exit 1
fi`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Team Collaboration Tips</h2>
            <p>
                Effective Git collaboration goes beyond technical knowledge—it's about communication, coordination, and establishing team norms.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Team Guidelines Document
# Git Workflow Guidelines

## Branch Naming
- feature/description
- bugfix/description
- hotfix/description
- release/version

## Commit Frequency
- Commit small, logical changes
- Commit at least daily
- Never commit broken code

## Code Review Process
1. Assign at least one reviewer
2. Respond to reviews within 24 hours
3. Require approval before merge
4. Keep discussions professional

## Merge Strategy
- Use squash merge for feature branches
- Use merge commit for release branches
- Never force push to shared branches
- Delete merged branches promptly

## Conflict Resolution
1. Communicate before resolving conflicts
2. Understand both sides of the conflict
3. Test thoroughly after resolution
4. Document complex resolution decisions`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>
            <p>
                Mastering Git workflows is an investment in your team's productivity and code quality. By implementing these best practices, you'll create a more efficient, collaborative development environment.
            </p>

            <p>
                Remember that the best Git workflow is one that your team actually follows. Start with simple guidelines and gradually introduce more advanced practices as your team grows comfortable with the process. The key is consistency, communication, and continuous improvement.
            </p>
        </BlogLayout>
    );
}
