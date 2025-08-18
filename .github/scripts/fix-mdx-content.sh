#!/usr/bin/env bash
set -euo pipefail

# Fix MDX compilation issues in documentation files
# Usage: ./fix-mdx-content.sh <docs-dir>

DOCS_DIR="${1:-docs}"

echo "Fixing MDX content issues in $DOCS_DIR"

# Fix less-than signs that look like HTML tags
find "$DOCS_DIR" -name "*.md" -type f | while read -r file; do
    # Create temp file
    temp_file="${file}.tmp"
    
    # Replace problematic patterns
    sed -E \
        -e 's/<([0-9]+[a-zA-Z]+)/\&lt;\1/g' \
        -e 's/<(http[s]?:\/\/[^>]+)>/[\1](\1)/g' \
        -e 's/: <([0-9])/: \&lt;\1/g' \
        "$file" > "$temp_file"
    
    # Only update if changes were made
    if ! cmp -s "$file" "$temp_file"; then
        mv "$temp_file" "$file"
        echo "Fixed: $file"
    else
        rm "$temp_file"
    fi
done

echo "MDX content fixes complete"