# projectBlog
An if-else coding project.

# How to Clone this Repository
Follow these steps to get the code inside this repo onto your local working area (computer). You can also watch [this](https://www.youtube.com/watch?v=pbPE4Dodn3o) YouTube video which takes you through these six steps.

## 1. Navigate to Project Location on PC
On your computer, find a sensible place to save the project code once you've cloned it. If you're unsure where to do this, create a folder titled "projects" on your desktop and open this folder. When you clone the remote repository, Git will create a folder inside your projects folder, so there is no need to create another folder for this.

## 2. Navigate to Project Location in Terminal
In your terminal, make sure your "working directory" is pointing to the folder you created in step one. To check what your terminal is looking at, type `pwd` into your terminal and hit enter (this stands for print working directory). The last folder listed should be the folder you just created in step one. If it isn't, then you'll need to use terminal commands like `cd <foldername>` to go into a folder or `cd ..` to go up a directory.

## 3. Copy URL
In GitHub, click the green "Code" button and copy the URL that is shown in the little box. This is the URL that refers to this remote repo.

## 4. Clone the Repo in Git
In your terminal, type this command: `git clone <URL>`. The <URL> is the URL you copied from GitHub. Paste that into the command and then hit enter. Well done, you've cloned this repo!

## 5. Check that the Files Have Been Successfully Cloned
In the folder you created (called projects, in the suggestion we gave), you should now see another folder that was previously not there, called projectBlog. Open this folder and compare what you see here with the files and folders you see listed in the remote repo on GitHib.

## 6. Summary
You now have a local clone of the remote repo. Changing the code that you've cloned won't effect the remote repo unless you push to it. But be careful when doing this, as you should run any major changes by your team members before changing the remote repo.

# How to Run projectBlog
Follow these steps to ensure you have all the correct packages/modules installed. You can also watch [this video]() to see what to do in action.

## 1. Make Sure You Have Cloned projectBlog to Your Computer
If you haven't yet cloned the projectBlog repo to your computer, follow the steps listed under "How to Clone This Repository". To make sure this has been done correctly, compare what you see in your projectBlog folder with what you see in this remote repo.

## 2. Open projectBlog in Your Text Editor
Open the projectBlog folder in your text editor. This will allow you to see all the files and folders within projectBlog in your text editor's working area.

## 3. Navigate to projectBlog in Your Terminal
In your terminal, make sure your "working directory" is pointing to the projectBlog folder, wherever you have placed this. This will be the same as step 2 in "How to Clone This Repoisitory".

## 4. Install NPM Packages
In your terminal, type the command `npm install` and then hit enter/return. This will install all the modules/packages that this project depends on. You'll see a folder titled "node_modules" in your projectBlog folder if this has been done succesfully. There is no need for you to enter this folder or edit any files here.

## 5. Run the Project
To ensure that everything installed correctly, type `npm run dev` in your terminal and hit enter. Your terminal will return "Server is running on http://localhost:3000". Then, open your browser and type "localhost:3000". This will navigate to the home page of projectBlog and means that your computer is hosting this app/site, which your browser is accessing locally. Any changes you then save will restart the server and reflect after you have refreshed your browser.

## 6. Make Changes to projectBlog
To make sure that projectBlog is working as it should, make some changes to a file and save these. Refresh your browser and you will see the changes that you made. If this doesn't work, you may have to go back to step 4.

# Git Workflow
Note: everything within angled brackets (eg, `<filename>`) refers to text that you will change depending on the context. They serve as a placeholder. In this tutorial, the name **feature/myBranch** is a generic term we have given for the sake of this tutorial. You will want to check with your team what system you have in place for naming your branches. To see this in action, watch [this video]().

## 1. Pull Master Branch
To make sure you're working with the latest code, ensure you've got the latest code in the **master** branch. To do this, type `git pull origin master` while on the **master** branch. Only then should you create you own branch.

## 2. Create **feature/myBranch**
After pulling the latest code, you'll want to branch off **master**. To do so, type `git checkout -b feature/myBranch`. That will create a branch titled "**feature/myBranch**" and will check it out for you. Now you're ready to make changes to the code without effecting the **master** branch. (Of course, you'll want to name your branch something more descriptive than "**feature/myBranch**". Speak to your team members about how best to do this).

## 3. Commit to **feature/myBranch** and *Push*
Once you're finished coding and ready to submit, you'll need to *add* it to the staging area and then *commit* it to your repo before *pushing* it to GitHub.

To *add* it to staging, you can either type `git add <filename>` to add a single file, or you can type `git add .` to add every modified file to the staging area. We'll use this latter command (`git add .`) more often.

Once you've added it to the staging area, you'll then make a *commit* to **feature/myBranch**. To do this, enter `git commit -m "<message describing the commit>"`. Make your commit message short but descriptive. Now your working tree is clean.

Once you've done that, *push* **feature/myBranch** to GitHub by typing `git push origin feature/myBranch`.

## 4. Checkout and Pull Master
Move from **feature/myBranch** and checkout the **master** branch by typing `git checkout master`. Once you're on the **master branch**, *pull* the latest master branch from GitHub by typing `git pull origin master`. Since you started working on **feature/myBranch**, there may have been some recent changes to the **master** branch.

## 5. Checkout my Branch, Merge Master Branch Into my Branch and Push my Branch Again
Now that you have the latest version of the **master branch**, you'll want to *merge* it into **feature/myBranch**, to see if there are any conflicts.

*Checkout* your branch by typing `git checkout feature/myBranch`.

Then, to *merge* the **master** branch into **feature/myBranch**, enter `git merge master`. This will ensure that **feature/myBranch** is up to date with the latest **master** branch and that it has your code included without any conflicts.

Once you have done this, *push* **feature/myBranch** by entering `git push origin feature/myBranch`.

## 6. Open a Pull Request Between **feature/myBranch** and **master**
In GitHub, find **feature/myBranch** and click "*Pull request*". This will open a page where you can *Open a pull request*.

The initial title of this will be whatever the message you put down for your latest *commit* to **feature/myBranch**. You can leave a comment to add a more lengthy description of what you will be adding with this pull request. Once you've clicked "*Create pull request*", you will be taken to a page that will show you that your pull request needs to be approved by someone else before the pull request is completed. This is important because the pull request will merge **feature/myBranch** into **master**, which we do not want to mess up!

Once someone else has reviewed and approved your pull request, you (or the person who approved) can complet the pull request (see step 11).

## 7. Checkout **staging**, then *pull* **staging**
Back in your terminal, *checkout* the **staging** branch by entering `git checkout staging`. Once you're on **staging**, *pull* the latest version of it by entering `git pull origin staging`.

## 8. Merge **feature/myBranch** into **staging**
While on the **staging** branch, you'll want to merge **feature/myBranch** into **staging**. Do this by entering `git merge feature/myBranch`, and make sure there are no conflicts.

## 9. Push **staging**
Now you'll want to *push* **staging** to GitHub so that others can see how **feature/myBranch** interacts with everything else, without the risk of upsetting the **master** branch.

## 10. If Overlords are Happy with **staging**, then Complete the Pull Request Between **feature/myBranch** and **master**
Your peers can now pull **staging** to see how your new code interacts with everything else. If they are happy with this, then they will review and approve your pull request which was opened in step 6.

## 11. Complete Pull Request and Delete Branch
Once your pull request has been approved, delete **feature/myBranch** in GitHub and on your PC.

After the pull request, you'll find a button to delete **feature/myBranch**.

Back in your terminal, to delete **feature/myBranch**, first make sure you are not currently checking out **feature/myBranch**. Then, enter `git branch -d feature/myBranch`. One final step to clean things up: enter `git fetch -p` to make sure you have deleted **feature/myBranch**.