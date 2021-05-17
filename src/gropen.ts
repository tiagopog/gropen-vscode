import { exec } from 'child_process';

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

export function gropen(filePath: string, startLine?: number, endLine?: number): {success: boolean, errorMessage?: any} {
  let paths = filePath.split('/');
  let fileName = paths.pop();
  let directoryPath = paths.join('/');

  if (!directoryPath || !fileName) {
    return {success: false, errorMessage: 'Unknown directory or file name'};
  }

  shell(`cd ${directoryPath} && gropen ${fileName}`)
  return {success: true};
}
