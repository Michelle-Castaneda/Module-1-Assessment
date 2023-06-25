/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = 'Git is a version control system for tracking changes in software development projects. It provides reliable mechanisms that allow multiple and simultaneous collaborations on the same project, all while allowing trackable changes and version comparisons'
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "GitHub is a cloud-based platform that enables developers to store, manage, and control versions of their code. It functions as a Git repository, allowing users to maintain a comprehensive history of their work."
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = "git init is a command used to initialize a new local repository in a directory"
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition = "git clone is a command used to create a copy of an existing Git repository into a new directory"
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = "git status is a command used to display the current state of a git repository. For example, it provides information about modifications or added files"
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = "git add is a command which adds new or changed files in the working directory to the git staging area "
let gitAddCode = "git add .";
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = "git commit is a command used to save changes to the git repository, it creates a snapshot of the tracked files"
let gitCommitCode = 'git commit -m "initial commit"';

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition = "git push is a command used to upload local repository content to a remote repository"


console.log(gitDefinition, gitHubDefinition, gitInitDefinition, gitCloneDefinition, gitStatusDefinition, gitAddDefinition, gitAddCode, gitCommitDefinition, gitCommitCode, gitPushDefinition)
