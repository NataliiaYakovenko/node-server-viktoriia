const os = require("os");
const fs = require("fs");

// console.log(os.cpus());

// const fileText = fs.readFileSync("./math.js", { encoding: "utf-8" });
// console.log(fileText);

// const fileRead = fs.readFile(
//   "./match.js",
//   { encoding: "utf-8" },
//   (error, data) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(data);
//     }
//   }
// );
// console.log(fileRead);

const read = fs.readdir(".", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    data
      .filter((f) => /^.*\.js$/.test(f))
      .forEach((f) =>
        fs.readFile(f, { encoding: "utf-8" }, (error, data) => {
          if (error) {
            console.log(error);
          } else {
            console.log(data);
          }
        })
      );
  }
});

console.log(read);

//Переписати в синхронний код
try {
  const files = fs.readdirSync(".");
  // console.log('Files in directory:');
  files
    .filter((f) => /^.*\.js$/.test(f))
    .forEach((f) => {
      try {
        const data = fs.readFileSync(f, { encoding: "utf-8" });
        // console.log('Data from file:', f);
        // console.log(data);
      } catch (err) {
        // console.log('Error reading file:', f, err);
      }
    });
} catch (err) {
  console.log("Error reading directory:", err);
}

console.log(__filename);
console.log(__dirname);

console.log(process);
