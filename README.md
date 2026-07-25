# WSL Here

A VS Code extension that adds an **"Open in WSL Terminal"** context menu item for folders in the Explorer view.

## Features

- **Open in WSL Terminal**: Right-click any folder in the VS Code File Explorer and select **"Open in WSL Terminal"** to launch an integrated terminal opened at that directory in WSL.

## Requirements

- Windows Subsystem for Linux (WSL) configured and installed.
- VS Code running on Windows or WSL.

## Usage

1. Open the File Explorer in VS Code.
2. Right-click on any folder.
3. Click **Open in WSL Terminal**.

## Extension Settings

This extension contributes the following settings (`wslHere.*`):

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `wslHere.shellPath` | `string` | `C:\Windows\System32\wsl.exe` | Path to the WSL executable executable. |
| `wslHere.shellArgs` | `array` | `["-d", "Ubuntu"]` | Arguments passed when starting WSL (e.g. distro specified with `["-d", "<distro>"]`). |
| `wslHere.customCwd` | `string` | `""` | Optional working directory path override. Leave empty to default to the selected folder. |

## License

[MIT](LICENSE)


