// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';
import { gropen } from './gropen';

// Method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "gropen-vscode" is now active!');

  const success_message = 'Opening file on remote repo...';

  let gropen_file = vscode.commands.registerCommand('gropen-vscode.gropen_file', () => {
    gropen("foo", 1, 2)
    vscode.window.showInformationMessage(success_message);
  });

  let gropen_current_line = vscode.commands.registerCommand('gropen-vscode.gropen_current_line', () => {
    gropen("foo", 1, 2)
    vscode.window.showInformationMessage(success_message);
  });

  context.subscriptions.push(gropen_file);
  context.subscriptions.push(gropen_current_line);
}

// Method is called when the extension is deactivated
export function deactivate() {
  console.log('Your extension "gropen-vscode" was successfully deactivated');
}
