#!/usr/bin/env bash
set -e

REPO_NAME="${1:-NOOB-CODER127.github.io}"
REMOTE_URL="git@github.com:NOOB-CODER127/${REPO_NAME}.git"

echo "==========================================="
echo " Deploying Portfolio to GitHub Pages"
echo " Target Repository: ${REPO_NAME}"
echo " Remote URL:        ${REMOTE_URL}"
echo "==========================================="

# Check remote
if git remote | grep -q "^origin$"; then
  echo "[*] Updating origin remote..."
  git remote set-url origin "${REMOTE_URL}"
else
  echo "[*] Adding origin remote..."
  git remote add origin "${REMOTE_URL}"
fi

echo "[*] Pushing 'main' branch to GitHub..."
git push -u origin main

echo ""
echo "==========================================="
echo " Successfully pushed to GitHub!"
echo " Next: Go to your repository settings on GitHub:"
echo "   https://github.com/NOOB-CODER127/${REPO_NAME}/settings/pages"
echo " Under 'Build and deployment' -> 'Source':"
echo "   Select 'GitHub Actions'"
echo ""
echo " Your site will be live at:"
if [ "${REPO_NAME}" = "NOOB-CODER127.github.io" ]; then
  echo "   https://noob-coder127.github.io/"
else
  echo "   https://noob-coder127.github.io/${REPO_NAME}/"
fi
echo "==========================================="
