# Change Log

All notable changes to the "wsl-here" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [1.0.2]

- Added configuration settings (`wslHere.shellPath`, `wslHere.shellArgs`, `wslHere.customCwd`) to allow customizing the WSL executable path, shell arguments, and working directory.
- Automatically resolve to the parent directory when triggered on a file instead of a folder.
- Configured GitHub Actions workflow for automatic versioning and attached packaged `.vsix` releases.
- Cleaned up unused boilerplate files, quickstart guide, and test suite dependencies.

## [1.0.0]

- Initial release