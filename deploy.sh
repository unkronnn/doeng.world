#!/bin/bash

# Build script for Doeng World landing page
echo "🎮 Building Doeng World..."

# Install dependencies
npm install

# Build production bundle
npm run build

echo "✅ Build complete! Files are in the 'dist' folder"
echo ""
echo "📦 Next steps:"
echo "1. Upload the 'dist' folder to your VPS"
echo "2. Configure Nginx/Apache for the new domain"
echo "3. Done! 🚀"
