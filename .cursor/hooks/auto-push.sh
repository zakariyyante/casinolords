#!/bin/bash

cd "$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0

# Nothing to do if working tree is clean
if git diff --quiet && git diff --cached --quiet && [ -z "$(git status --porcelain)" ]; then
  exit 0
fi

git add -A

# Build commit message from changed file names
CHANGED=$(git diff --cached --name-only | head -10 | tr '\n' ', ' | sed 's/,$//')
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
MSG="auto: update $CHANGED [$TIMESTAMP]"

git commit -m "$MSG" --quiet

git push github main --quiet 2>&1

exit 0
