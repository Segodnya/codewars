function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  var obj = {
    status: msg,
  };
  return obj;
}

console.log(getStatus(true).status);
