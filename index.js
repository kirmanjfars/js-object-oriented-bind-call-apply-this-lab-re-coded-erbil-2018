function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, value, arguement){
  return fn.call(fn, value, arguement);
  
}