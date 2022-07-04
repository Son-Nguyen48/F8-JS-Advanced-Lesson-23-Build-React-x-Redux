const files = ["foo.txt ", ".bar", "   ", "baz.foo"];
let filePaths = [];

for (let file of files) {
  const fileName = file.trim();
  if (fileName) {
    const filePath = `~/cool_app/${fileName}`;
    filePaths = [...filePaths, filePath];
  }
}

console.log(filePaths);
