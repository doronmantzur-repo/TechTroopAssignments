import fs from "fs";

function readFileWithErrorHandling(filePath, callback) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        callback(`File not found: ${filePath}`);
        return;
      }
      
      if (err.code === "EISDIR") {
        callback(`Path is a directory, not a file: ${filePath}`);
        return;
      }

      callback(`Error reading file: ${err.message}`);
      return;
    }

    const size = data.length;
    callback(`File read successfully. Size: ${size} bytes`);
  });
}

readFileWithErrorHandling("existing.txt", (result) => {
  console.log(result);
});