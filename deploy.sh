#!/bin/bash

# Deployment script for Bennie Williams AI Consulting website
set -e

echo "🚀 Bennie Williams AI - Deployment Script"
echo "========================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Error: Docker is not installed"
    echo "Please install Docker: https://docs.docker.com/engine/install/"
    exit 1
fi

# Check if Docker Compose is available
if ! command -v docker compose &> /dev/null; then
    echo "❌ Error: Docker Compose is not available"
    echo "Please install Docker Compose: https://docs.docker.com/compose/install/"
    exit 1
fi

# Menu
echo "Select deployment option:"
echo "1) Build and deploy"
echo "2) Deploy only (use existing image)"
echo "3) Stop and remove containers"
echo "4) View logs"
echo "5) Rebuild from scratch"
echo ""
read -p "Enter option [1-5]: " option

case $option in
    1)
        echo ""
        echo "🔨 Building and deploying..."
        docker compose up -d --build
        echo ""
        echo "✅ Deployment complete!"
        echo "🌐 Application is running at: http://localhost"
        echo "📊 View logs: docker compose logs -f"
        echo "🏥 Health check: curl http://localhost/health"
        ;;
    2)
        echo ""
        echo "🚀 Deploying with existing image..."
        docker compose up -d
        echo ""
        echo "✅ Deployment complete!"
        echo "🌐 Application is running at: http://localhost"
        ;;
    3)
        echo ""
        echo "🛑 Stopping and removing containers..."
        docker compose down
        echo "✅ Containers stopped and removed"
        ;;
    4)
        echo ""
        echo "📋 Showing logs (Ctrl+C to exit)..."
        docker compose logs -f
        ;;
    5)
        echo ""
        echo "🧹 Cleaning up old images and containers..."
        docker compose down
        docker rmi bennie-williams-ai 2>/dev/null || true
        echo ""
        echo "🔨 Rebuilding from scratch..."
        docker compose up -d --build --force-recreate
        echo ""
        echo "✅ Rebuild complete!"
        echo "🌐 Application is running at: http://localhost"
        ;;
    *)
        echo "❌ Invalid option"
        exit 1
        ;;
esac

# Show container status
echo ""
echo "📊 Container Status:"
docker ps --filter name=bennie-williams-ai

echo ""
echo "💡 Useful commands:"
echo "  - View logs: docker compose logs -f"
echo "  - Stop: docker compose down"
echo "  - Restart: docker compose restart"
echo "  - Health check: curl http://localhost/health"
