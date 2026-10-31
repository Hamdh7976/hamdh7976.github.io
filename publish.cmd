@echo off
rem Publishes this site to https://hamdh7976.github.io
rem Double-click to run. Safe to run again later to update the live site.
cd /d "%~dp0"

git remote get-url origin >nul 2>&1
if errorlevel 1 (
  echo Creating the GitHub repository hamdh7976.github.io ...
  gh repo create hamdh7976.github.io --public --source=. --remote=origin --push --description "Personal site and blog"
  if errorlevel 1 goto failed
) else (
  echo Saving latest changes to GitHub ...
  git add -A
  git commit -m "Update site" >nul 2>&1
  git push
)

echo.
echo Building and publishing the site ...
call npm run deploy
if errorlevel 1 goto failed

echo.
echo Turning on GitHub Pages (an "already exists" message here is fine) ...
gh api -X POST repos/Hamdh7976/hamdh7976.github.io/pages -f "source[branch]=gh-pages" -f "source[path]=/" >nul 2>&1

echo.
echo ============================================================
echo  Done! In 1-2 minutes your site will be live at:
echo  https://hamdh7976.github.io
echo ============================================================
pause
exit /b 0

:failed
echo.
echo Something went wrong. Copy the messages above and paste them to Claude.
pause
exit /b 1
