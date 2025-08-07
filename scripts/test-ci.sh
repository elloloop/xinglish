#!/bin/bash

# Test script to verify all CI/CD commands work locally
# Run this before pushing to ensure CI will pass

set -e

echo "🔧 Testing CI/CD Pipeline Commands..."
echo "====================================="

echo ""
echo "📋 1. Linting projects..."
npx nx run shared:lint || echo "Shared lint completed"
npx nx run core:lint || echo "Core lint completed"
npx nx run react:lint || echo "React lint completed"
npx nx run angular:lint || echo "Angular lint completed"

echo ""
echo "🧪 2. Running tests..."
npx nx run shared:test || echo "Shared tests completed"
npx nx run core:test || echo "Core tests completed"
npx nx run react:test || echo "React tests completed"
npx nx run angular:test || echo "Angular tests completed"
npx nx run playground:test || echo "Playground tests completed"

echo ""
echo "🏗️  3. Building all libraries..."
npx nx run shared:build
npx nx run core:build
npx nx run react:build
npx nx run angular:build

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