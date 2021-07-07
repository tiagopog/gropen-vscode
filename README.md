# gropen.vscode

A Vs Code extension for quickly opening local files and directories on remote git repositories.

This plugin was thought out to make it a breeze to share code from a codebase with your coworkers.

![gropen usage example](https://github.com/tiagopog/gropen-vscode/blob/a5b7f0c3c293ba9990f35d3062fb835619a0d1ba/usage.gif?raw=true)

## Features

| Feature                          | Keybindings (windows / mac) | Command Palette       |
| -------------------------------- |:---------------------------:| :--------------------:|
| Open current file on remote repo | ctrl+alt+g / alt+cmd+g      | > Gropen File         |
| Open current line on remote repo | ctrl+alt+l / alt+cmd+l      | > Gropen Current Line |
| Open line range on remote repo   | ctrl+alt+r / alt+cmd+r      | > Gropen Line Range   |

## Requirements

1. Python >= 3.6
2. Git
3. [gropen](https://github.com/tiagopog/gropen) (`pip install gropen`)

## Release Notes

### 0.1.0

Initial release of `gropen-vscode`.

## Following extension guidelines

If you want to contribute with this extension please make sure that you've read through the extensions guidelines
and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)
