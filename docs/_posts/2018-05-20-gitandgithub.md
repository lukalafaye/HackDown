---
title: Git and GitHub
layout: post
categories: Programming
---

# Git and GitHub

## Introduction

**Git** is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.

**GitHub** is a web-based hosting service for version control using git. It is mostly used for computer code. It offers all of the distributed version control and source code management functionality of Git as well as adding its own features.

This blog post describes how to use **git** to work on **github** projects.

## Git Commands

## 1. Open **Terminal** (CTRL + ALT + T)

## 2. Change directory to your github project (on local)

```bash
cd /home/lukalafaye/Documents/GitHub/NewProject
```

## 3. Type: `git init` to initialize git in the folder

## 4. Add the files you want to upload on GitHub

```bash
Type: `git add file.md`
Type: `git add '*.txt'` (to add all txt files)
Type: `git add --all` (to add all files in folder)
```

## 5. Type: `git status` to verify what you added

## 6. Type: `git commit -m "Description of commit"` to commit the changes

## 7. Type: `git log` to display all the changes you committed in order

## 8. Remote the repository by typing `git remote add origin (URLofGitHubRepository)`

**Here, the remote name is origin. When you create a remote, you establish a link between the GitHub repository and origin**

```bash
git remote add origin https://github.com/reponame/reponame.git
```

## 9. Push master to origin by typing `git push -u origin master`

**The push command tells Git where to put our commits. `git push -u origin master` pushes your local changes to origin repository on GitHub. The remote name is origin and the local branch name is master (by default). The `-u` option tells Git to remember the parameters so that the next push, you only need git push origin master.**

*Other people are working on the "reponame" on GitHub. They have pulled your changes, created new commits and pushed them.*

## 10. Type: `git pull origin master` to pull (= check) all changes made on the GitHub repository

## 11. Type: `Git stash`

Sometimes when you go to pull you may have changes you don't want to commit just yet. One option you have, other than commiting, is to stash the changes.
Use the command 'git stash' to stash your changes, and `git stash apply` to re-apply your changes after your pull.

## 12. Type: `git diff HEAD` to list all differences from last commits

**`git diff` is used to display all differences with previous commits. HEAD is a pointer that holds your position within all your different commits. By default HEAD points to your most recent commit, so it can be used as a quick way to reference that commit.**

You want to try to keep related changes together in separate commits. Using 'git diff' gives you a good overview of changes you have made and lets you add files or directories one at a time and commit them separately.

## 13. Another great use for diff is looking at changes within files that have already been staged. Remember, staged files are files we have told git that are ready to be committed.

Type: `git diff --staged` to list all changes you staged

## 14. You can unstage files by using typing `git reset`

```bash
git reset remove.txt
```

## 15. Files can be changed back to how they were at the last commit by using the command: `git checkout -- <target>`

```bash
git checkout -- reverse.txt
```

**So you may be wondering, why do I have to use this '--' thing? git checkout seems to work fine without it. It's simply promising the command line
that there are no more options after the '--'. This way if you happen to have a branch named octocat.txt, it will still revert the file, instead
of switching to the branch of the same name.**

## 16. Branching out: `git branch temp`

When developers are working on a feature or bug they'll often create a copy (aka. branch) of their code they can make separate commits to for testing.
Then when they're done they can merge this branch back into their main master branch.

**Branches are what naturally happens when you want to work on multiple features at the same time. You wouldn't want to end up with a master branch which has Feature A half done and Feature B half done.
Rather you'd separate the code base into two "snapshots" (branches) and work on and commit to them separately. As soon as one was ready, you might merge this branch back into the master branch and push it to the remote server.**

## 17. Type `git branch` to list local branches

**Master is the main branch**

## 18. Switch branches with `git checkout <branch>`

```bash
git checkout temp
```

**You can use: `git checkout -b new_branch` to checkout and create a branch at the same time.
This is the same thing as doing: `git branch new_branch`**

## 19. Removing files inside a branch: `git rm file`

**Git rm command which will not only remove the actual files from disk, but will also stage the removal of the files**

To remove all txt files:

```bash
git rm '*.txt'
```

**You can use the recursive option on `git rm`: `git rm -r folder`
This will recursively remove all folders and files from the given directory.**

## 20. Type: `git commit -am` to skip `git rm` of manually deleted files

If you happen to delete a file without using `git rm` you'll find that you still have to `git rm`
the deleted files from the working tree. You can save this step by using the `-a` option on `git commit`,
which auto removes deleted files with the commit.

```bash
git commit -am "Delete stuff"
```

## 21. Pull requests

**If you're hosting your repo on GitHub, you can do something called a pull request.
A pull request allows the boss of the project to look through your changes and make comments before deciding to merge in the change.
It's a really great feature that is used all the time for remote workers and open-source projects.**

## 22. Type: `git merge branch` to merge that branch into the `master` branch

```bash
git merge temp
```

**Merge Conflicts can occur when changes are made to a file at the same time.
A lot of people get really scared when a conflict happens, but fear not!
They aren't that scary, you just need to decide which code to keep.**

## 23. Delete a branch with: `git branch -d <branch>`

You should delete a brach after merging it or you'll use all your work.

```bash
git branch -d temp
```

**If you have been working on a feature branch and you decide you don't want this feature anymore,
you might decide to delete the branch since you're scrapping the idea.
You'll notice that `git branch -d bad_feature` doesn't work. This is because `-d`
won't let you delete something that hasn't been merged.

You can either add the `--force` (`-f`) option or use `-D` which combines `-d` `-f` together into one command.**

## Acknowledgments

All the content can be found and tested at:
[https://try.github.io/](https://try.github.io/)

