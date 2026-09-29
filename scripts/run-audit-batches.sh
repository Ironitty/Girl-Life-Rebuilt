#!/bin/bash
# Run comprehensive audit in 5 batches to avoid memory leak
set -e

BATCHES=(
  "^[a-cA-C]"
  "^[d-hD-H]"
  "^[i-mI-M]"
  "^[n-rN-R]"
  "^[s-zS-Z]"
)

for i in "${!BATCHES[@]}"; do
  FILTER="${BATCHES[$i]}"
  echo ""
  echo "========================================"
  echo "BATCH $((i+1))/${#BATCHES[@]}: filter=$FILTER"
  echo "========================================"
  npx tsx scripts/comprehensive-audit.ts --filter "$FILTER" 2>&1 | grep -E "Render targets|MEM|FAIL|PASS|failure|BROWSER"
done

echo ""
echo "=== ALL BATCHES COMPLETE ==="
