function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arguements){
  return fn.call(fn, thisValue, arguements);
  
}