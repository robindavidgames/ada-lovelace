let roundNumber = 1;

// The die the player has clicked.
let dieValue = "";

createPlayArea();
markOutOfBounds();
markPreFilled();
availableDice = [];
randomiseDice();

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
            element.setAttribute("class", "space available");
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
 * Randomises the 6 dice values, between 1 and 6.
 */
function randomiseDice() {
    for (let i = 1; i < 3; i++) {
        let num = Math.floor(Math.random() * 6) + 1;
        availableDice.push(num);
    }
    console.log(`Dice rolled: ${availableDice}`);
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
        console.log(activeShapes[i]);
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
            console.log(`Event listener clicked available shape ${x}`);
            // pickShape(clickShape);
        } else {
            console.log(`Event listener clicked unavailable shape ${x}`);
        }
    });
}

/**
 * Player can select an appropriate shape.
 */
function pickShape(chosenShape) {

}

/**
 * Player can place a shape on the board.
 */
function placeShape() {

}

/**
 * Check if shape placement is valid.
 */
function checkShape() {

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
