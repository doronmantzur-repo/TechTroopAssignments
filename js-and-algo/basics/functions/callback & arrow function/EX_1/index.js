
const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

function pushPull(callback)
{
  callback()
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"
