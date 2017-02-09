# Yet another JavaScript Development Environment

This repository holds yet another freaking JavaScript dev environment, ready for you to check out and be freaking awesome with.
- EditorConfig for consistent coding styles
- NPM as package manager
- Security Scanning on each start using nsp check
- Express Server
- Localtunnel for easy work sharing
- NPM Scripts for automation
- Babel for transpiling

**I am not actively maintaining it so if it is broken you are on your own buddy.**

## You know the drill

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/Sarel-Esterhuizen/yet-another-js-dev-env  my-proj
cd my-proj
```

Assume I have no intention of updating the source on `Sarel-Esterhuizen/yet-another-js-dev-env `.
Discard the `.git` folder..
```shell
rm -rf .git  # OS/X (bash)
rd .git /S/Q # windows
```
### Delete _non-essential_ files (optional)

You can quickly delete the _non-essential_ files that concern testing and QuickStart repository maintenance
(***including all git-related artifacts*** such as the `.git` folder and `.gitignore`!)
by entering the following commands while in the project folder:

##### OS/X (bash)
```shell
xargs rm -rf < non-essential-files.osx.txt
rm src/app/*.spec*.ts
rm non-essential-files.osx.txt
```

##### Windows
```shell
for /f %i in (non-essential-files.txt) do del %i /F /S /Q
rd .git /s /q
```
## Create a new git repo
You could [start writing code](#start-development) now and throw it all away when you're done.
If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a *local git repo* and make the first commit:
```shell
git init
git add .
git commit -m "Initial commit"
```

>Recover the deleted `.gitignore` from the yet-another-js-dev-env repository 
if you lost it in the _Delete non-essential files_ step.

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```shell
git remote add origin <repo-address>
git push -u origin master
```
## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```
