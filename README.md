# Welcome to AUDIOPHILE Project.

## *Contributing to this project*.

#### please carefully read all the instructions before you start contributing to the project.

## Clone

#### 1. clone the repo to your local machine and pull to update ``git clone``

#### 2. Update all the dependencies with ``git install``

#### 3. Ensure to do git pull ``git pull``

#### switch to another branch by following the branch naming convention stated below.

# Branches

## Main

#### 2. The default branch is the ``main`` branch, that is the branch that will go to production, so no direct check in is allowed. You can only merged it after code review. All the team members are responsible for keeping this stable. In summary Do not push to this branch.

## Develop

#### This is the main development branch. making changing are allowed here to restrict making changes in the ``Main`` branch. Each PR raised will be merged after been reviewed to the ``develop`` branch. So after cloning the repository make sure to first create your own ``branch``.

## Temporary

#### All the temporary branch you will be creating must follow the branch naming convention for this project.

## Branch Naming Convention

#### Start your branch name with a group word such as :
- Bug
- WIP (work in progress)
**example:** ``Bug-034-login-aligment`` 

#### The branch should be named after what ``issue`` you are working on.
**example:** ``wip-034-add-login-module `` 
**034 is your issue number here**

#### The branch name should be separated with hyphens (-) for readability purpose

#### The branch should include feature of the current project you are working on however this must be concised to prevent long branch name

**example:** use ``wip-037-testing-module `` not   ``wip-034-add-testing-module-to-ensure-that-project-passed``

## Pattern of commit message

#### 3. When commiting, for uniformity sake  your ``commit message`` should follow this pattern **git commit -m ** ``"Issue #issueNumber 034-add-testing-module-to-ensure-that-project-passed" ``. e.g if my issue number #034, my commit message will look like this ``git commit -m "Issue #034 add testing module to ensure that project passed " ``. This will ensure uniformity and will make tracking easy.

#### 4. When commiting, if your commit does not fall or fit under any issues you can start your commit message in the following format **git commit -m ** ``Issue #999 corrected a readme documentation error``

## Note:

### Any PR that doesnt conform to the pattern stated above will not be attended to.

## Project Work Flow.

#### Each member of the team will be assigned a ticket, this ticket will contain the task description in form of a ``user story``, ticket number ``(issue number)`` and duration.

#### When assigned with a ticket, and you have started working on it, you are to move the ticket to ``in progress``.

#### When you are done with the ticket, move it from ``in porgress`` to ``done``, attach the PR link and live link if possible to such ticket for testing and review sake. The PM will comment on it when done reviewing and testing.

#### If the duration of a ticket expires before you are done, it is expected of you to request for addition time of not more than ``24 hours`` with a cogent reason.

## Project Folder Structure ##
   
  ### Files ###
  -- ``config.js``: This file contains middlewares, base urls, and other endpoints that will be consumed
  --  `` data.json`` : This is a mimick API file listing all products details and path to the product image.
  #### structure ####
      ````
          {
            "id": 1,
            "category":"headphones",
            "productName": "XX59 Headphones",
            "image": "../assets/images/XX59 Headphones.png"
        }
      ````

  ### Folders ###
   -- ``__test__`` contains test files for the application.
   