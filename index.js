function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arguments){
  return fn.call(fn, thisValue, arguments);
  
}