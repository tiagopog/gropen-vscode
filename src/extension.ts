// The module 'vscode' contains the VS Code extensibility API
import * as vscode from "vscode";
import { gropen } from "./gropen";

// Method called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
  // 1) Open file in remote repo:
  let gropenFile = vscode.commands.registerCommand(
    "gropen-vscode.gropen_file",
    () => {
      let filePath = vscode.window.activeTextEditor?.document.fileName;
      if (!filePath) return;
      callGropen(filePath);
    }
  );

  // 2) Open current line in remote repo:
  let gropenCurrentLine = vscode.commands.registerCommand(
    "gropen-vscode.gropen_current_line",
    () => {
      let filePath = vscode.window.activeTextEditor?.document.fileName;
      let activeEditor = vscode.window.activeTextEditor;

      if (!filePath || !activeEditor) return;

      let currentLine: number = activeEditor.selection.active.line;
      callGropen(filePath, currentLine);
    }
  );

  // 3) Open line range in remote repo:
  let gropenLineRange = vscode.commands.registerCommand(
    "gropen-vscode.gropen_line_range",
    () => {
      let filePath = vscode.window.activeTextEditor?.document.fileName;
      let activeEditor = vscode.window.activeTextEditor;

      if (!filePath || !activeEditor) return;

      let startLine: number = activeEditor.selection.start.line;
      let endLine: number = activeEditor.selection.end.line;

      callGropen(filePath, startLine, endLine);
    }
  );

  context.subscriptions.push(gropenFile);
  context.subscriptions.push(gropenCurrentLine);
  context.subscriptions.push(gropenLineRange);
}

// Method called when the extension is deactivated
export function deactivate() {
  console.log('Your extension "gropen-vscode" was successfully deactivated');
}

// Controller function for preparing data, calling the gropen wrapper and
// showing related error|success messages.
function callGropen(filePath: string, startLine?: number, endLine?: number) {
  let successMessage = "Opening file on remote repo...";

  if (startLine) startLine += 1;
  if (endLine) endLine += 1;

  let { success, errorMessage } = gropen(filePath, startLine, endLine);

  if (success) {
    vscode.window.showInformationMessage(successMessage);
  } else {
    vscode.window.showErrorMessage(errorMessage);
  }
}
