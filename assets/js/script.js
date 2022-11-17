let roundNumber = 1;

// The die the player has clicked.
let dieValue = "";

// The player's chosen shape.
let currentShape = "";

let spacesToCheck = [];
let vertical = 0;
let horizontal = 0;

createPlayArea();
markOutOfBounds();
markPreFilled();
availableDice = [];
// randomiseDice();

/**
 * Create the play area.
 */
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

// Event listener for rolling dice.
let diceRoller = document.getElementById("roll-dice-button");
diceRoller.addEventListener("click", function() {
    availableDice = [];
    randomiseDice();
});

/**
 * Randomises the 2 dice values, between 1 and 6.
 */
function randomiseDice() {
    for (let i = 1; i < 3; i++) {
        let num = Math.floor(Math.random() * 6) + 1;
        availableDice.push(num);
    }
    placeRolledDice(availableDice);
    reduceReserveSpaces();
    return;
}

/**
 * Places each die value in the correct space.
 */
function placeRolledDice(availableDice) {
    for (let x = 1; x < 3; x++) {
        dieValue = availableDice[x-1];
        document.getElementById("available"+x).textContent = dieValue;
    }
    return;
}

/**
 * Reduce dice in the reserve. Make rolled dice clickable.
 */
function reduceReserveSpaces() {
    let numberOfDiceRolled = 0;
    for (let x = 1; x < 7; x++) {
        // Ensure that only 2 dice are changed.
        // Possible bug: what if only 1 dice remains?
        if (numberOfDiceRolled == 2) {
            continue;
        }
        let checkAvailable = document.getElementById("reserve"+x);
        // Start checking the lowest value reserve dice. If they are "filled", empty them and fill 2 of the used dice with the corresponding ids.
        if (checkAvailable.classList.contains("filled")) {
            checkAvailable.classList.remove("filled");
            checkAvailable.classList.add("empty");
            usedDice = document.getElementById("used"+x)
            usedDice.classList.remove("empty");
            usedDice.classList.add("filled");
            numberOfDiceRolled += 1;
            console.log(`numberOfDiceRolled is equal to ${numberOfDiceRolled}`);
        }
    }
    // Remove roll dice button if all dice are in used space.
    let checkUsed = document.getElementsByClassName("used");
    if (checkUsed[1].classList.contains("filled") && checkUsed[2].classList.contains("filled") && checkUsed[3].classList.contains("filled") && checkUsed[4].classList.contains("filled") && checkUsed[5].classList.contains("filled") && checkUsed[0].classList.contains("filled")) {
        document.getElementById("roll-dice-button").classList.add("hidden");
        document.getElementById("new-round-button").classList.remove("hidden");
    } else {
        document.getElementById("roll-dice-button").classList.remove("hidden");
        document.getElementById("new-round-button").classList.add("hidden");
    }
}

// Event listener for clicking each die.
for (let x = 1; x < 3; x++) {
    let clickDice = document.getElementById("available"+x);
    clickDice.addEventListener("click", function() {
        console.log(`Event listener clicked dice ${x}`);
        clickDie(x);
    });
}

/**
 * Player can click on an available die.
 */
function clickDie(clickedDice) {
    dieChosen = document.getElementById('available'+clickedDice);
    // Read the text on the chosen die.
    dieValue = parseInt(dieChosen.innerText);
    console.log(`dieValue variable is ${dieValue}`);
    deactivateSpaces();
    activateSpaces();
    return;
}

/**
 * Shapes and abilities deactivate.
 */
function deactivateSpaces() {
    let inactiveShapes = document.getElementsByClassName('shape-picker');
    for (let i = 0; i < inactiveShapes.length; i++) {
        let makeUnavailable = inactiveShapes[i];
        makeUnavailable.classList.remove("shape-available");
        makeUnavailable.classList.add("shape-unavailable");
    }
    return;
}

/**
 * Shapes and abilities activate if they are available for the chosen die.
 */
function activateSpaces() {
    let activeShapes = document.getElementsByClassName('d'+dieValue);
    for (let i = 0; i < activeShapes.length; i++) {
        let makeAvailable = activeShapes[i];
        makeAvailable.classList.remove("shape-unavailable");
        makeAvailable.classList.add("shape-available");
    }
    return;
}

// Event listener for rotating shapes.
let rotateShape = document.getElementById("rotate-shapes");
rotateShape.addEventListener("click", function() {rotate90Degrees();});

/**
 * Check current shape rotation and rotate by 90 degrees CW.
 */
function rotate90Degrees() {
    let checkRotation = document.getElementById("shape1");
    if (checkRotation.classList.contains("rotate-0")) {
        for (let x = 1; x < 10; x++) {
            let adjustShape = document.getElementById("shape"+x);
            adjustShape.classList.remove("rotate-0");
            adjustShape.classList.add("rotate-90");
        }
    } else if (checkRotation.classList.contains("rotate-90")) {
        for (let x = 1; x < 10; x++) {
            let adjustShape = document.getElementById("shape"+x);
            adjustShape.classList.remove("rotate-90");
            adjustShape.classList.add("rotate-180");
        }
    } else if (checkRotation.classList.contains("rotate-180")) {
        for (let x = 1; x < 10; x++) {
            let adjustShape = document.getElementById("shape"+x);
            adjustShape.classList.remove("rotate-180");
            adjustShape.classList.add("rotate-270");
        }
    } else if (checkRotation.classList.contains("rotate-270")) {
        for (let x = 1; x < 10; x++) {
            let adjustShape = document.getElementById("shape"+x);
            adjustShape.classList.remove("rotate-270");
            adjustShape.classList.add("rotate-0");
        }
    }
}

// Event listener for flipping shapes.
let flipShape = document.getElementById("flip-shapes");
flipShape.addEventListener("click", function() {flipHorizontal();});

/**
 * Check current shape flip and flip horizontal.
 */
function flipHorizontal() {
    let checkFlip = document.getElementById("shape1");
    if (checkFlip.classList.contains("flip-0")) {
        for (let x = 1; x < 10; x++) {
            let adjustShape = document.getElementById("shape"+x);
            adjustShape.classList.remove("flip-0");
            adjustShape.classList.add("flip-1");
        } 
    } else if (checkFlip.classList.contains("flip-1")) {
        for (let x = 1; x < 10; x++) {
            let adjustShape = document.getElementById("shape"+x);
            adjustShape.classList.remove("flip-1");
            adjustShape.classList.add("flip-0");
        }
    }
}

// Event listener for clicking shapes.
for (let x = 1; x < 10; x++) {
    let clickShape = document.getElementById("shape"+x);
    clickShape.addEventListener("click", function() {
        if (clickShape.classList.contains("shape-available")) {
            // Remove styling on previously clicked elements.
            let removeClicked = document.getElementsByClassName("shape-picked")
            for (let i = 0; i < removeClicked.length; i++) {
                removeClicked[i].classList.add("shape-available");
                removeClicked[i].classList.remove("shape-picked");
            }
            console.log(`Event listener clicked available shape ${x}`);
            clickShape.classList.remove("shape-available");
            clickShape.classList.add("shape-picked");
            pickShape(clickShape, x);
        } else {
            console.log(`Event listener clicked unavailable shape ${x}`);
        }
    });
}

/**
 * Player can select an appropriate shape.
 * Argument is the chosenShape and x is the shape number.
 */
function pickShape(chosenShape, x) {
    console.log(`User has chosen ${chosenShape}`);
    if (chosenShape.classList.contains("rotate-0") && chosenShape.classList.contains("flip-0")) {
        currentShape = x+"-0-0";
    } else if (chosenShape.classList.contains("rotate-90") && chosenShape.classList.contains("flip-0")) {
        currentShape = x+"-90-0";
    } else if (chosenShape.classList.contains("rotate-180") && chosenShape.classList.contains("flip-0")) {
        currentShape = x+"-180-0";
    } else if (chosenShape.classList.contains("rotate-270") && chosenShape.classList.contains("flip-0")) {
        currentShape = x+"-270-0";
    } else if (chosenShape.classList.contains("rotate-0") && chosenShape.classList.contains("flip-1")) {
        currentShape = x+"-0-1";
    } else if (chosenShape.classList.contains("rotate-90") && chosenShape.classList.contains("flip-1")) {
        currentShape = x+"-90-1";
    } else if (chosenShape.classList.contains("rotate-180") && chosenShape.classList.contains("flip-1")) {
        currentShape = x+"-180-1";
    } else if (chosenShape.classList.contains("rotate-270") && chosenShape.classList.contains("flip-1")) {
        currentShape = x+"-270-1";
    }
    console.log(`Chosen shape ${x} - ${currentShape}`);
}

// Event listener for clicking spaces on the board.
let boardSpace = document.getElementsByClassName("valid-space")
for (let x = 1; x < boardSpace.length; x++) {
    boardSpace[x].addEventListener("click", function() {
        console.log(`User clicked space ${boardSpace[x]}`);
        if (currentShape !== "") {
            console.log("currentShape is not empty.")
            checkShape(boardSpace[x]);
        }
    });
}

/**
 * Check if shape placement is valid.
 * Argument is the currently clicked space.
 */
function checkShape(boardSpace) {
    console.log("checkSpace is running.");
    console.log(boardSpace);
    let checkValue = boardSpace.id;

    // Get horizontal and vertical values as integers.
    horizontal = parseInt(checkValue.slice(1, 3));
    vertical = parseInt(checkValue.slice(3, 5));
    console.log(checkValue);
    console.log(`Horizontal value: ${horizontal}`);
    console.log(`Vertical value: ${vertical}`);

    // Clear out spacesToCheck
    spacesToCheck = [checkValue];

    // Add values that need to be checked for each space and each space variation. The first space is automatic. The others need to be inputted counting from the original clicked space.
    // First figure - shape number.
    // Second figure - rotation in degrees.
    // Third figure - 0 = unflipped; 1 = flipped.
    if (currentShape == "1-0-0") {
        adjustSpace(-1, 1);
        adjustSpace(0, 1);
        adjustSpace(1, 1);
        adjustSpace(2, 1);
    } else if (currentShape == "2-0-0") {
        adjustSpace(0, 1);
        adjustSpace(1, 1);
        adjustSpace(2, 1);
    } else if (currentShape == "3-0-0") {
        adjustSpace(1, 0);
        adjustSpace(1, 1);
        adjustSpace(2, 1);
    } else if (currentShape == "4-0-0") {
        adjustSpace(1, 0);
        adjustSpace(1, 1);
        adjustSpace(1, 2);
        adjustSpace(2, 2);
    } else if (currentShape == "5-0-0" || currentShape == "5-0-1") {
        adjustSpace(-1, 1);
        adjustSpace(0, 1);
        adjustSpace(1, 1);
    } else if (currentShape == "6-0-0") {
        adjustSpace(0, 1);
        adjustSpace(0, 2);
        adjustSpace(1, 2);
        adjustSpace(2, 2);
    } else if (currentShape == "7-0-0" || currentShape == "7-0-1") {
        adjustSpace(0, 1);
    } else if (currentShape == "8-0-0" || currentShape == "8-0-1") {
        adjustSpace(0, 1);
        adjustSpace(0, 2);
    } else if (currentShape == "9-0-0") {
        adjustSpace(0, 1);
        adjustSpace(1, 1);
    } else if (currentShape == "1-90-0") {
        adjustSpace(-1, -1);
        adjustSpace(-1, 0);
        adjustSpace(-1, 1);
        adjustSpace(-1, 2);
    } else if (currentShape == "2-90-0") {
        adjustSpace(-1, 0);
        adjustSpace(-1, 1);
        adjustSpace(-1, 2);
    } else if (currentShape == "3-90-0") {
        adjustSpace(0, 1);
        adjustSpace(-1, 1);
        adjustSpace(-1, 2);
    } else if (currentShape == "4-90-0") {
        adjustSpace(0, 1);
        adjustSpace(-1, 1);
        adjustSpace(-2, 1);
        adjustSpace(-2, 2);
    } else if (currentShape == "5-90-0" || currentShape == "5-90-1") {
        adjustSpace(-1, -1);
        adjustSpace(-1, 0);
        adjustSpace(-1, 1);
    } else if (currentShape == "6-90-0") {
        adjustSpace(-1, 0);
        adjustSpace(-2, 0);
        adjustSpace(-2, 1);
        adjustSpace(-2, 2);
    } else if (currentShape == "7-90-0" || currentShape == "7-90-1") {
        adjustSpace(-1, 0);
    } else if (currentShape == "8-90-0" || currentShape == "8-90-1") {
        adjustSpace(-1, 0);
        adjustSpace(-2, 0);
    } else if (currentShape == "9-90-0") {
        adjustSpace(-1, 0);
        adjustSpace(-1, 1);
    } else if (currentShape == "1-180-0") {
        adjustSpace(-2, -1);
        adjustSpace(-1, -1);
        adjustSpace(0, -1);
        adjustSpace(1, -1);
    } else if (currentShape == "2-180-0") {
        adjustSpace(-2, -1);
        adjustSpace(-1, -1);
        adjustSpace(0, -1);
    } else if (currentShape == "3-180-0") {
        adjustSpace(-1, 0);
        adjustSpace(-1, -1);
        adjustSpace(-2, -1);
    } else if (currentShape == "4-180-0") {
        adjustSpace(-1, 0);
        adjustSpace(-1, -1);
        adjustSpace(-1, -2);
        adjustSpace(-2, -2);
    } else if (currentShape == "5-180-0" || currentShape == "5-180-1") {
        adjustSpace(-1, -1);
        adjustSpace(0, -1);
        adjustSpace(1, -1);
    } else if (currentShape == "6-180-0") {
        adjustSpace(0, -1);
        adjustSpace(0, -2);
        adjustSpace(-1, -2);
        adjustSpace(-2, -2);
    } else if (currentShape == "7-180-0" || currentShape == "7-180-1") {
        adjustSpace(0, -1);
    } else if (currentShape == "8-180-0" || currentShape == "8-180-1") {
        adjustSpace(0, -1);
        adjustSpace(0, -2);
    } else if (currentShape == "9-180-0") {
        adjustSpace(0, -1);
        adjustSpace(-1, -1);
    } else if (currentShape == "1-270-0") {
        adjustSpace(1, -2);
        adjustSpace(1, -1);
        adjustSpace(1, 0);
        adjustSpace(1, 1);
    } else if (currentShape == "2-270-0") {
        adjustSpace(1, -2);
        adjustSpace(1, -1);
        adjustSpace(1, 0);
    } else if (currentShape == "3-270-0") {
        adjustSpace(0, -1);
        adjustSpace(1, -1);
        adjustSpace(1, -2);
    } else if (currentShape == "4-270-0") {
        adjustSpace(0, -1);
        adjustSpace(1, -1);
        adjustSpace(2, -1);
        adjustSpace(2, -2);
    } else if (currentShape == "5-270-0" || currentShape == "5-270-1") {
        adjustSpace(1, -1);
        adjustSpace(1, 0);
        adjustSpace(1, 1);
    } else if (currentShape == "6-270-0") {
        adjustSpace(1, 0);
        adjustSpace(2, 0);
        adjustSpace(2, -1);
        adjustSpace(2, -2);
    } else if (currentShape == "7-270-0" || currentShape == "7-270-1") {
        adjustSpace(1, 0);
    } else if (currentShape == "8-270-0" || currentShape == "8-270-1") {
        adjustSpace(1, 0);
        adjustSpace(2, 0);
    } else if (currentShape == "9-270-0") {
        adjustSpace(1, 0);
        adjustSpace(1, -1);
    }

    // New method (fewer lines but harder to debug.)
    // if (currentShape == "3-270-0" || currentShape == "3-90-1" || currentShape == "2-180-0" || currentShape == "2-180-1" || currentShape == "1-180-0" || currentShape == "1-180-1" || currentShape == "6-180-0" || currentShape == "6-180-1" || currentShape == "5-180-0" || currentShape == "5-180-1" || currentShape == "4-270-0" || currentShape == "4-90-1" || currentShape == "7-180-0" || currentShape == "7-180-1" || currentShape == "8-180-0" || currentShape == "8-180-1" || currentShape == "9-180-0" || currentShape == "9-180-1") {
        // 12 oclock, inner square.
    //     adjustSpace(0, -1);
    // }

    console.log(`spacesToCheck: ${spacesToCheck}`);

    // Check if the spaces are null or if they include unavailable spaces.
    let approve = true;
    for (let x = 0; x < spacesToCheck.length; x++) {
        let check = document.getElementById(spacesToCheck[x]);
        // This if line won't be needed once these spaces are checked.
        if (check == null) {
            console.log("null space");
            approve = false;
        } else if (!check.classList.contains("available")) {
            console.log("not available");
            approve = false;
        }
    }
    if (approve == true) {
        // This needs to be pop up approval button. Which has an event listener to go to paint spaces.
        paintSpaces();
    }
}

/**
 * Adjust horizontal and vertical values and make them strings.
 * Add the final values to the spacesToCheck array.
 * Arguments are how much to adjust the horizontal by and how much to adjust the vertical by. Can be 0 or negative numbers.
 */
function adjustSpace(verticalAdjustment, horizotalAdjustment) {
    let newHorizontal = horizontal + horizotalAdjustment;
    let newVertical = vertical + verticalAdjustment;
    if (newHorizontal < 10) {
        let string = newHorizontal.toString();
        newHorizontal = "0"+string;
    } else {
        newHorizontal = newHorizontal.toString();
    }
    if (newVertical < 10) {
        let string = newVertical.toString();
        newVertical = "0"+string;
    } else {
        newVertical = newVertical.toString();
    }
    spacesToCheck.push("v"+newHorizontal+newVertical);
    return;
}

/**
 * Fill in spaces.
 */
function paintSpaces() {
    for (let x = 0; x < spacesToCheck.length; x++) {
        let paint = document.getElementById(spacesToCheck[x]);
        paint.classList.remove("available");
        paint.classList.add("contains-shape");
    }
}

/**
 * Check if a piece of evidence is surrounded.
 */
function checkSurround() {

}

/**
 * Enable a piece of evidence.
 */
function enableEvidence() {

}

/**
 * Check if a room has been filled.
 */
function checkRoom() {

}

/**
 * Check if an evidence ability has been activated.
 */
function checkAbilityActivation() {

}

/**
 * Remove the used die.
 */
function removeDie() {

}

/**
 * Check if unused dice remain.
 */
function checkRemainingDice() {

}

/**
 * Enable next turn button.
 */
function createNewTurnButton() {

}

/**
 * Start a new turn. Update the round number and roll dice.
 */
function newTurn() {
    randomiseDice();
}

/**
 * Check if all rounds have been played.
 */
function checkGameOver() {

}

/**
 * Present scoring information.
 */
 function presentScoring() {

}
