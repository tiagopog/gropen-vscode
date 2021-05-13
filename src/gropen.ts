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

export async function gropen(file_path: string, start_line: number, end_line: number) {
  console.log(file_path);
  console.log(start_line);
  console.log(end_line);
  shell("gropen .");
}
