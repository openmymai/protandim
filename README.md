# Deploy a Gatsby Site on GitHub Pages for Free

### Getting Started with Gatsby
Since Gatsby is developed in JavaScript and React, some knowledge of JavaScript is good to have to troubleshoot potential bottlenecks in the process of setting up and deployment. Before installing Gatsby, you need to install its pre-requisites, Git and NodeJS. NodeJS is required as Gatsby is built on JavaScript. Git is needed for code management in all of Gatsby’s sites.
To install Git, head over to the downloads section of the Git website and select your operating system. Alternately, if you are running Linux, you can install Git through a package installer like apt or yum by running the following command.
```
apt install git
```
In a Mac, you can install Git through Homebrew too.
```
brew install git
```
If you are on Windows or Mac, you can install NodeJS and npm from the installer from the downloads page of the NodeJS website. If you are on Linux, you can install NodeJS through apt.
```
apt install nodejs
```
In a Mac, you can install NodeJS through Homebrew too.
```
brew install nodejs
```
Once you have completed the installation of Git and NodeJS, you are ready to install Gatsby (Finally!) If you are on Linux or Mac, the npm command in available on the terminal. If you are running Windows, you need to launch the NodeJS command line to install NodeJS packages through npm commands.
```
npm install -g gatsby-cli
```
npm installs Gatsby and its requirements in this process. The gatsby command is now available for you to use. To start a new Gatsby site from the default starter template, use the following command.
```
gatsby new gh-pages-site
```
It creates a directory named gh-pages-site which contains all relevant files. Next, change the directory to gh-pages-site and start the development server with the following command.
```
cd gh-pages-site
gatsby develop
```
The development server is available on the 8000 port of localhost. To create a static version of the site, use the following command.
gatsby build
A public directory is created within the gh-pages-site directory which contains all the files for the site. You can essentially upload the files in this directory to the root directory of any server. In this post, we will see how to deploy seamlessly to GitHub pages.

### GitHub Pages: Basics
Before you deploy your static site through GitHub pages, let us review the basics of how GitHub Pages works. Though not mandatory, it is a good idea to have some idea about Git and GitHub.
GitHub Pages is a service provided by GitHub that allows you to host a static website directly from a GitHub repository. There are two types of static sites — a personal or organizational site that is associated with a GitHub account and a project site, which is associated with a GitHub repository. In this post, we will deal with only project sites.
To create a project site, push the static site contents to the gh-pages branch of your repository. You can activate the GitHub pages in the “GitHub Pages” section of the Settings page of your repository in GitHub. If the URL to your repository is ```username.github.com/my_project,``` your site would be available at ```username.github.io/my_project.``` If you are using a free account on GitHub, you would only be able to use GitHub Pages for public repositories.
Configuring Gatsby for Github Pages
Without using any additional plugins, you can simply push the contents of the public directory of your Gatsby site to the gh-pages branch of your repository. This will start serving the site through GitHub Pages. However, this creates an additional dependency to push the changes to GitHub every time you build your Gatsby site.
To integrate your Gatsby site to GitHub pages, install the gh-pages pages plugin.
```
npm install gh-pages
```
Once you have installed the plugin, you need to make two changes to your Gatsby site. First, add the GitHub repository name to your gatsby-config.js file. In this example, we will assume that your GitHub repository is my_project.
```
module.exports = {
  pathPrefix: "/my_project",
}
```
Next, add a custom command deploy to your package.json file.
```
{
  "scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  }
}
```
This creates a deploy command which first creates the static version of your site with the prefix of /my_project/ for every URL and then pushes the public directory using the gh-pages plugin.
Next, add the GitHub repository as the origin remote to your Gatsby Git repository by running the following command:
git remote add origin ```https://username.github.com/my_project```
Thereafter, you need to run the custom script to build the site and push it to GitHub.
```
npm run deploy
```
This will push the data to the gh-pages branch of your repository, without adding any commits to other branches. Almost instantly after the push, you can view your served pages on ```username.github.io/my_project.```
