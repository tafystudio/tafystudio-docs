#!/usr/bin/env bash
set -euo pipefail

# Prepare extracted documentation for Docusaurus
# Usage: ./prepare-docs.sh <input-dir>

INPUT_DIR="${1:-extracted-docs}"

echo "Preparing documentation from $INPUT_DIR"

# Create Docusaurus directory structure
mkdir -p docs
mkdir -p static/api

# Copy content files
if [ -d "$INPUT_DIR/content" ]; then
    cp -r "$INPUT_DIR/content/"* docs/ 2>/dev/null || true
fi

# Copy static assets
if [ -d "$INPUT_DIR/api" ]; then
    cp -r "$INPUT_DIR/api/"* static/api/ 2>/dev/null || true
fi

if [ -d "$INPUT_DIR/schemas" ]; then
    mkdir -p static/schemas
    cp -r "$INPUT_DIR/schemas/"* static/schemas/ 2>/dev/null || true
fi

# Create simple API reference pages
mkdir -p docs/api

cat > docs/api/index.md << 'EOF'
---
title: API Reference
---

# API Reference

- [TypeScript API](/api/typescript/)
- [Python API](/api/python/html/)
- [Go API](https://pkg.go.dev/github.com/tafystudio/tafystudio)
EOF

echo "Documentation preparation complete"