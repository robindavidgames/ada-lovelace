createPlayArea();

function createPlayArea() {
    let dieWrapper = document.getElementById("dice-area");

    // Create 16 rows.
    for (let r = 1; r < 17; r++) {

        let divElement = document.createElement("div");
        divElement.setAttribute("class", "clear");
        divElement.setAttribute("id", "row"+r);
        dieWrapper.appendChild(divElement);

        // In each row, create 20 containers.
        for (let i = 1; i < 21; i++) {
            let elementWrapper = document.getElementById("row"+r);
            let element = document.createElement("div");
            element.setAttribute("class", "space available");
            if (r < 10) {
                if (i < 10) {
                    element.setAttribute("id", "0"+r+"0"+i);
                } else {
                    element.setAttribute("id", "0"+r+i);
                }
            } else {
                if (i < 10) {
                    element.setAttribute("id", +r+"0"+i);
                } else {
                    element.setAttribute("id", +r+i);
                }
            }
            elementWrapper.appendChild(element);
        }
    }

    markoutSpaces();
}

function markoutSpaces() {
    const outOfBoundsArray = ['0105', '0115', '0116', '0117', '0118', '0119', '0120', '0205', '0215', '0216', '0217', '0218', '0219', '0220', '0305', '0315', '0316', '0317', '0318', '0319', '0320',]
    for (x of outOfBoundsArray) {
        console.log(x);
        let blankout = document.getElementById(x);
        blankout.classList.remove("available");
        blankout.classList.add("empty");
    }
    // let blankout = document.getElementById("dice-area");
}