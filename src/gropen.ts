import { exec } from "child_process";

// Wrapper function for running shell commands.
async function shell(command: string) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log(stdout);
        resolve({ stdout, stderr });
      }
    });
  });
}

// Wrapper function for the gropen CLI.
export function gropen(
  filePath: string,
  startLine?: number,
  endLine?: number
): { success: boolean; errorMessage?: any } {
  let paths = filePath.split("/");
  let fileName = paths.pop();
  let directoryPath = paths.join("/");

  if (!directoryPath || !fileName) {
    return { success: false, errorMessage: "Unknown directory or file name" };
  }

  let command = `cd ${directoryPath} && gropen ${fileName}`;

  if (startLine) command += `:${startLine}`;
  if (endLine) command += `,${endLine}`;

  shell(command);
  return { success: true };
}
