let arg = process.argv.slice(2);
let user = arg.join(" ")
let firstWord = user.split(" ")[0];

if (!firstWord){
  console.log("No argument")
}else{
  console.log(firstWord);
}