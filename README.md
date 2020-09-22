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