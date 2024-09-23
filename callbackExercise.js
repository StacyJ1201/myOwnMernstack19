function printAccountDetails(description, userClasses){
    console.log(description, userClasses)
}

var classes = {
    "DSA": "10am",
    "MERN": "11am",
    "Spring": "12pm",
    "Devops": "1pm"
}


function callback(doSomething, data){
    doSomething("Your class schedule is: ",data)
}

callback(printAccountDetails, classes)

var newSchedule = {
    "MERN": "10Am",
    "Spring_Project": "12pm",
    "Spring_Class": "6pm"
}

callback(printAccountDetails, newSchedule)