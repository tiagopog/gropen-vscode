// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';
import { gropen } from './gropen';

// Method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
  const successMessage = 'Opening file on remote repo...';

  let gropen_file = vscode.commands.registerCommand('gropen-vscode.gropen_file', () => {
    let filePath = vscode.window.activeTextEditor?.document.fileName;
    if (!filePath) return;

    let {success, errorMessage} = gropen(filePath);

    if (success) {
      vscode.window.showInformationMessage(successMessage);
    } else {
      vscode.window.showErrorMessage(errorMessage);
    }
  });

  let gropenCurrentLine = vscode.commands.registerCommand('gropen-vscode.gropen_current_line', () => {
    // TODO
  });

  context.subscriptions.push(gropen_file);
  context.subscriptions.push(gropenCurrentLine);
}

// Method is called when the extension is deactivated
export function deactivate() {
  console.log('Your extension "gropen-vscode" was successfully deactivated');
}
