/**
 * Create the play area.
 */
 function createPlayArea() {
    let dieWrapper = document.getElementById("play-area");

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
            element.setAttribute("class", "space available valid-space");
            if (r < 10) {
                if (i < 10) {
                    element.setAttribute("id", "v0"+r+"0"+i);
                } else {
                    element.setAttribute("id", "v0"+r+i);
                }
            } else {
                if (i < 10) {
                    element.setAttribute("id", "v"+r+"0"+i);
                } else {
                    element.setAttribute("id", "v"+r+i);
                }
            }
            elementWrapper.appendChild(element);
        }
    }

    return;
}

/**
 * Mark out the blank spaces.
 */
function markOutOfBounds() {
    const outOfBoundsArray = [
        'v0105', 'v0115', 'v0116', 'v0117', 'v0118', 'v0119', 'v0120',
        'v0205', 'v0215', 'v0216', 'v0217', 'v0218', 'v0219', 'v0220',
        'v0305', 'v0315', 'v0316', 'v0317', 'v0318', 'v0319', 'v0320',
        'v0405', 'v0406', 'v0407', 'v0408', 'v0411', 'v0412', 'v0413', 'v0414', 'v0415', 'v0416', 'v0417', 'v0418', 'v0419', 'v0420',
        'v0505', 'v0516', 'v0517', 'v0518', 'v0519', 'v0520',
        'v0601', 'v0602', 'v0603', 'v0616', 'v0617', 'v0618', 'v0619', 'v0620',
        'v0701', 'v0702', 'v0703', 'v0705', 'v0706', 'v0709', 'v0716', 'v0717', 'v0718', 'v0719', 'v0720',
        'v0806', 'v0809', 'v0810', 'v0811', 'v0812', 'v0813', 'v0816', 'v0817', 'v0818', 'v0819', 'v0820',
        'v0906', 'v0916',
        'v1006',
        'v1106', 'v1116',
        'v1206', 'v1212', 'v1213', 'v1216', 'v1217', 'v1218',
        'v1306',
        'v1406', 'v1420',
        'v1501', 'v1519', 'v1520',
        'v1601', 'v1602', 'v1612', 'v1613', 'v1614', 'v1615', 'v1616', 'v1617', 'v1618', 'v1619', 'v1620',
    ]
    for (x of outOfBoundsArray) {
        let blankout = document.getElementById(x);
        blankout.classList.remove("available");
        blankout.classList.add("empty");
    }
    return;
}

/**
 * Mark out the prefilled spaces.
 */
function markPreFilled() {
    const preFilledArray = ['v0202', 'v0213', 'v0310', 'v0514', 'v0611', 'v0914', 'v1008', 'v1019', 'v1102', 'v1108', 'v1109', 'v1202', 'v1203', 'v1208', 'v1311', 'v1513',]
    for (x of preFilledArray) {
        let blankout = document.getElementById(x);
        blankout.classList.remove("available");
        blankout.classList.add("filled");
    }
    return;
}

/**
 * Create round tracker.
 */
function createRoundTracker() {
    let roundTrackerWrapper = document.getElementById("v0117");
    let roundTracker = document.createElement("div");
    // roundTracker.setAttribute("class", "");
    roundTracker.setAttribute("id", "round-tracker");
    roundTrackerWrapper.appendChild(roundTracker);
    roundTracker.textContent = "Round 1 of 6";
}

/**
 * Create confirm and cancel shape buttons.
 */
function createConfirmButtons() {
    let confirmButtonWrapper = document.getElementById("v0317");
    let cancelButtonWrapper = document.getElementById("v0517");

    let confirmButton = document.createElement("button");
    var confirmText = document.createTextNode("Confirm");
    confirmButton.appendChild(confirmText);
    confirmButton.setAttribute("id", "confirm-button");
    confirmButton.setAttribute("class", "hidden confirm-cancel-buttons");
    confirmButtonWrapper.appendChild(confirmButton);

    let cancelButton = document.createElement("button");
    var cancelText = document.createTextNode("Cancel");
    cancelButton.appendChild(cancelText);
    cancelButton.setAttribute("id", "cancel-button");
    cancelButton.setAttribute("class", "hidden confirm-cancel-buttons");
    cancelButtonWrapper.appendChild(cancelButton);
}

/**
 * Present tutorial and story.
 */
// function createTutorial() {
//     let tutorialWrapper = document.getElementById("page-default");

//     let tutorial = document.createElement("div");
//     tutorial.setAttribute("id", "tutorial-div");
//     // tutorial.setAttribute("class", "");
//     tutorialWrapper.appendChild(tutorial);
// }