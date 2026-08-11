// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('wslFolderMenu.openInWsl', (uri: vscode.Uri) => {
        if (!uri) {
            vscode.window.showErrorMessage("No folder selected!");
            return;
        }

        // Read user/workspace settings
        const config = vscode.workspace.getConfiguration('wslHere');
        const shellPath = config.get<string>('shellPath', 'C:\\Windows\\System32\\wsl.exe');
        const shellArgs = config.get<string[]>('shellArgs', ['-d', 'Ubuntu']);
        const customCwd = config.get<string>('customCwd', '');

        let targetPath = uri.fsPath;
        try {
            const stat = fs.statSync(targetPath);
            if (!stat.isDirectory()) {
                targetPath = path.dirname(targetPath);
            }
        } catch {
            // If stat fails for any reason, fallback to dirname if extension exists
            if (path.extname(targetPath)) {
                targetPath = path.dirname(targetPath);
            }
        }

        const cwd = customCwd || targetPath;

        // Open a new terminal session running WSL in the right-clicked folder (or custom cwd)
        const terminal = vscode.window.createTerminal({
            name: "WSL Terminal",
            shellPath: shellPath,
            shellArgs: shellArgs,
            cwd: cwd
        });

        terminal.show();
    });

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
