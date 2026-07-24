// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('wslFolderMenu.openInWsl', (uri: vscode.Uri) => {
        if (!uri) {
            vscode.window.showErrorMessage("No folder selected!");
            return;
        }

        // Open a new terminal session running WSL in the right-clicked folder
        const terminal = vscode.window.createTerminal({
            name: "WSL Terminal",
            shellPath: "C:\\Windows\\System32\\wsl.exe",
            shellArgs: ["-d", "Ubuntu"], // Adjust distro name if needed
            cwd: uri.fsPath
        });

        terminal.show();
    });

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
