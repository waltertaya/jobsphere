#!/bin/bash

# Check for changes in the frontend (e.g., src, public, etc.)
if git diff --quiet HEAD^ HEAD ./src ./public ./package.json; then
  echo "No changes in the frontend, skipping build."
  exit 0
else
  echo "Changes detected in the frontend, proceeding with build."
  exit 1
fi
