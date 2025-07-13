let arg = process.argv.slice(2);

let input = arg.join(" ");

if (input === ""){
  console.log("No argument");

} else if (input === "Best"){
  console.log("Argument found");

}else if (input === "Best School"){
  console.log("Arguments found");
}