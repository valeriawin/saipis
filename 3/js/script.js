function getStorageLength() {
    return Object.keys(localStorage).length;
}

if (document.getElementById("opros")) {
    document.getElementById("opros").addEventListener("submit", submitAnswers);
}

function submitAnswers() {
    writeToLocalStorage();
}

function writeToLocalStorage() {
    let answers = {};
    answers.fullName = document.getElementById("fullname").value
    let radio = document.getElementsByName("radio");
    if (radio[0].checked) {
        answers.pol = radio[0].value;
    }
    else if (radio[1].checked) {
        answers.pol = radio[1].value;
    }
    answers.date = document.getElementById("date").value

    answers.instrument = document.getElementById("instrument").value

    answers.textarea = document.getElementById("textarea").value

    answers.month = document.getElementById("month").value

    answers.email = document.getElementById("email").value

    localStorage.setItem(getStorageLength(), JSON.stringify(answers))
}


if (document.getElementById("cleanUp")) {
    document.getElementById("cleanUp").addEventListener("click", cleanDatabase);
}

let openedWindow;

if (document.getElementById("closeTab")) {
    document.getElementById("closeTab").addEventListener("click", function () {
        openedWindow = window.close();
    })
}

function cleanDatabase() {
    localStorage.clear();
}



