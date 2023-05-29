# Contributing

When providing samples, please provide snippets of code rather than screen shots. Failure to do so will probably result in extended debugging.

If the formatter is working, but doesn't seem to working _properly_:

1. Take a look at the `.jsbeautifyrc` [settings help](https://github.com/vsce-toolroom/vscode-beautify/blob/master/Settings.md) file.
2. It may be an issue with `js-beautify` itself. Have a look at the [issues](https://github.com/beautify-web/js-beautify/issues) for that repo.

If this isn't the problem, go ahead and log an issue. Or better yet, if you know how to fix the problem, submit a pull request.

If you want to start hacking away, please check out [js-beautify for VS Code](https://github.com/vsce-toolroom/vscode-beautify) first. The first steps to editing this extensions are:

1. Fork this repo!
2. git clone your repo into your working project directory
3. Npm install
4. Start up debugging with F5

Pull requests are accepted and encouraged - we have a "let your code do the talking" policy.

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
2. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).