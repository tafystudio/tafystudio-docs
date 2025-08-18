#!/usr/bin/env bash
set -euo pipefail

# Extract documentation from the tafystudio monorepo
# Usage: ./extract-docs.sh <source-dir> <output-dir>

SOURCE_DIR="${1:-tafystudio-main}"
OUTPUT_DIR="${2:-extracted-docs}"

echo "Extracting documentation from $SOURCE_DIR to $OUTPUT_DIR"

# Ensure output directory exists
mkdir -p "$OUTPUT_DIR"

# Run the monorepo's extraction script
if [ -f "$SOURCE_DIR/scripts/extract-docs.sh" ]; then
    cd "$SOURCE_DIR"
    ./scripts/extract-docs.sh "../$OUTPUT_DIR"
    cd ..
else
    echo "ERROR: Extraction script not found at $SOURCE_DIR/scripts/extract-docs.sh"
    exit 1
fi

echo "Documentation extraction complete"