function anotherAddEventListner(typeOfEvent, callback){
    var eventThatHappened = {
        eventType : "keypress",
        key : "p",
        durationOfKeypress : 2
    }

    if (eventThatHappened.eventType === typeOfEvent){
        callback(eventThatHappened);
    }
}

document.addEventListener("keypress", function(event){
    console.log(event);
})

// anotherAddEventListner("keypress", function(event){
//     console.log(event);
// })