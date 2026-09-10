#!/bin/bash
source "$HOME/.nvm/nvm.sh"
cd "$(dirname "$0")"
rm -f debug-log.txt
echo "=== Girl Life Debug Launcher ==="
echo "Debug log: $(pwd)/debug-log.txt"
echo "Starting dev server..."
npx vite --open
