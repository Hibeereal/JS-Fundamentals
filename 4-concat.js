let arg = process.argv.slice(2);

if (arg.length === 2){
  console.log(`${arg[0]} is ${arg[1]}`);
}else if(arg.length !== 2){
  console.log(`${undefined} is ${undefined}`);
}