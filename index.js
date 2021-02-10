/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let createEmployeeRecord = function (array){
    const [firstName, familyName, title, payPerHour] = array
    return {
        firstName, 
        familyName, 
        title, 
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(records) {
    return records.map(record => createEmployeeRecord(record))
}

let createTimeInEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ")
    this.timeInEvents.push({type: "TimeIn", hour: parseInt(hour, 10), date})
    return this
}

let createTimeOutEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ")
    this.timeOutEvents.push({type: "TimeOut", hour: parseInt(hour, 10), date})
    return this
}

let hoursWorkedOnDate = function (date) {
    let inDate = this.timeInEvents.find(element => {
    return element.date === date})
    
   let outDate = this.timeOutEvents.find(element => {
    return element.date === date})

   return (outDate.hour - inDate.hour)/100
}

let wagesEarnedOnDate = function (date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

let calculatePayroll = function (employeeArray){
    let payroll = employeeArray.reduce(function(total, currentRecord){
        return total + allWagesFor.call(currentRecord)
    }, 0)
    return payroll
}

function findEmployeeByFirstName(sourceArray, firstName){
    return sourceArray.find(employee => employee.firstName === firstName)
 }