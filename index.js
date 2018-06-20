// Write your code in this file!

function getUKTime() {
  hours = new Date().getHours() + 7
  return hours
}

function discountTicket(ogPrice) {
  newPrice = Number.parseInt(ogPrice) * 0.8
  return newPrice
}

function tweetReply(handle) {
  return `Hey ${handle}, thanks so much for the support! I really appreciate it!`
}