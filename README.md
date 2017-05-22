# 4devops

#### Add courses

Go to the folder `source/courses` and add markdown posts here.

#### Add events

Go to the folder `source/data` and edit `events.yaml` file.

#### Add site metadata infos

Go to the folder `source/data` and edit `site.yaml` file.

---

# Update website

Just push your commit to the repo to update the website.
If you need to be sure of what you do locally first, follow next infos.

---

# Local node commands

To watch locally changes, you need to install nodejs.

#### Build

```
npm run build
```

#### Watch build

This command will show you your changes into the browser with a localhost URL.

```
npm run build --watch
```

#### Deploy

Leave this command to the push hook to avoid additional local configurations to enable the deploy script.

```
npm run build --go
```
