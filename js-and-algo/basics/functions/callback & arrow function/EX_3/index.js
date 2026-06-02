const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

logData = console.log;
displayData(console.error, logData, "I like to party")
