#!/bin/bash

# Test script to verify all CI/CD commands work locally
# Run this before pushing to ensure CI will pass

set -e

echo "🔧 Testing CI/CD Pipeline Commands..."
echo "====================================="

echo ""
echo "📋 1. Linting all projects..."
npx nx run-many -t lint --all --parallel=3

echo ""
echo "🧪 2. Running all tests..."
npx nx run-many -t test --all --parallel=3

echo ""
echo "🏗️  3. Building all libraries..."
npx nx run-many -t build -p shared,core,react,angular --parallel=3

echo ""
echo "🎮 4. Building playground app..."
npx nx build playground

echo ""
echo "✅ All CI/CD pipeline tests passed!"
echo ""
echo "📦 Available commands:"
echo "  - npm run test-ci    # Run this script"
echo "  - npx nx affected -t lint,test,build  # Test only affected projects"
echo "  - git tag v1.0.0 && git push origin v1.0.0  # Trigger package publish"
echo ""
echo "🚀 Ready for deployment!"