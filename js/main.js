function evensAndOdds(num) {
    // if(num % 2 === 0) {
    //    console.log(num.toString(2));
    // } else {
    //     console.log(num.toString(16));
    // }

    let numbers = num % 2 === 0 ? num.toString(2) : num.toString(16);
    console.log(numbers);
}

evensAndOdds(2);
evensAndOdds(13);