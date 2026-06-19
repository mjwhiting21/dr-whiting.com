# dr-whiting.com

Minimal static website starter for Dr Whiting.

## Local preview
Open `index.html` in your browser.

## GitHub
To create a remote repo and push from this folder using the GitHub CLI:

```bash
# create repo named dr-whiting.com, add remote, and push
gh repo create dr-whiting.com --public --source=. --remote=origin --push --confirm
```

If you don't have `gh`, create a new repository on GitHub and run:

```bash
git remote add origin https://github.com/<your-username>/dr-whiting.com.git
git push -u origin main
```
