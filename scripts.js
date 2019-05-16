const gen_number_raw = (low, high) => {
    return Math.floor(
        Math.random() * (high - low) + low
    )
};



const gen_number = () => {

    // Grab the numbers from the page to get the low and high range
    var low_end = parseInt(document.getElementById("low-end").value)
    var high_end = parseInt(document.getElementById("high-end").value) + 1


    // Ensure all input is valid
    if (confirm_input(low_end, high_end)) {
        return
    }


    let random_number = gen_number_raw(low_end, high_end);


    // Display which # was chosen
    document.getElementById("main-alert").innerHTML = "Chosen Number:  " + random_number

};



const confirm_input = (low_end, high_end) => {

    var response = ""
    var errored = false


    // Ensure that high > low
    if (high_end - 1 <= low_end) {
        if (errored) {response += "<br>"}
        response += "ALERT: High end cannot be less than or equal to low end."
        errored = true
    };


    // Ensure low is a positive integer
    if (low_end < 0) {
        if (errored) {response += "<br>"}
        response += "ALERT: Lower end of range cannot be less than 0."
        errored = true
    };


    // Ensure low is not NaN
    if (isNaN(low_end)) {
        if (errored) {response += "<br>"}
        response += "ALERT: Lower end of range must have an input"
        errored = true
    }


    // Ensure high is a positive integer
    if (high_end - 1 < 0) {
        if (errored) {response += "<br>"}
        response += "ALERT: Higher end of range cannot be less than 0."
        errored = true
    };


    // Ensure high is not NaN
    if (isNaN(high_end)) {
        if (errored) {response += "<br>"}
        response += "ALERT: Higher end of range must have an input"
        errored = true
    }


    document.getElementById("main-alert").innerHTML = response

    return errored
}