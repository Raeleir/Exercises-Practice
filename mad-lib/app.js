var name = prompt("Please enter your name.");

function genNouns() {
  var noun = [];
  for(i=0;i<5;i++){
    noun.push(prompt("Please input a noun."));
  }
  return noun;
}

function genVerbs() {
  var verb = [];
  for(i=0;i<5;i++){
    verb.push(prompt("Please input a verb."));
  }
  return verb;
}

function genAdjs() {
  var adj = [];
  for(i=0;i<5;i++){
    adj.push(prompt("Please input an adjective."));
  }
  return adj;
}

function madLib(name, noun, verb, adj) {
  console.log(`Pizza was invented by a ${adj[0]} chef named ${name}.
  To ${verb[0]} a pizza, you need to ${verb[1]} a lump of ${noun[0]}, and ${verb[2]} a thin, round ${adj[1]} ${noun[1]}. 
  Then you ${verb[3]} it with ${adj[2]} sauce, ${adj[3]} cheese, and fresh chopped ${noun[2]}s. 
  Next you have to ${verb[4]} it in a very hot ${noun[3]}. 
  When it is done, cut it into ${adj[4]} slices. 
  ${name} likes ${noun[4]} pizza the best.`);
}

madLib(name, genNouns(), genVerbs(), genAdjs());