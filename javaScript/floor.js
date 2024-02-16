function whosPaying(name){
        var noofPeople = name.length;
        var randomPersonPosition =  math.floor(math.random()* noofPeople);
        var randomPerson = name[randomPersonPosition];

    return randomPerson + " buying the lunch today!";
}