let roundNumber = 1;

// The die the player has clicked.
let dieValue = "";

// The player's chosen shape.
let currentShape = "";

// Spaces that the shape will occupy. Horizontal and vertical values to adjust these spaces.
let spacesToCheck = [];
let vertical = 0;
let horizontal = 0;

createPlayArea();
markOutOfBounds();
markPreFilled();
createRoundTracker();
createConfirmButtons();
availableDice = [];

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
        document.getElementById("available"+x).classList.remove("used-rolled-dice");
        document.getElementById("available"+x).classList.add("unused-rolled-dice");
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
        if (clickDice.classList.contains("unused-rolled-dice")) {
            console.log(`Event listener clicked dice ${x}`);
            clickDie(x);
        }
    });
}

/**
 * Player can click on an available die.
 */
function clickDie(clickedDice) {
    let uncolourDice = document.getElementsByClassName("die-roller");
    for (let x = 0; x < uncolourDice.length; x++) {
        uncolourDice[x].classList.remove("clicked-die");
    }

    let dieChosen = document.getElementById('available'+clickedDice);
    // Read the text on the chosen die.
    dieValue = parseInt(dieChosen.innerText);
    dieChosen.classList.add("clicked-die");
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

/**
 * Shapes and abilities deactivate when relevant.
 */
function deactivateSpaces() {
    let shapes = document.getElementsByClassName('shape-picker');
    for (let i = 0; i < shapes.length; i++) {
        let makeUnavailable = shapes[i];
        makeUnavailable.classList.remove("shape-available");
        makeUnavailable.classList.remove("shape-picked");
        makeUnavailable.classList.add("shape-unavailable");
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

    // Define each shape.
    shapeDefiner();

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
        let confirmation = "no";
        paintSpaces(confirmation);
        confirmPopUp();
    }
}

// Event listener for confirm button.
let confirmButtonClick = document.getElementById("confirm-button")
confirmButtonClick.addEventListener("click", function() {
    console.log("User clicked confirm button.");
    let confirmation = "yes";
    paintSpaces(confirmation);
});

// Event listener for cancel button.
let cancelButtonClick = document.getElementById("cancel-button")
cancelButtonClick.addEventListener("click", function() {
    console.log("User clicked cancel button.");
    let confirmation = "cancel";
    paintSpaces(confirmation);
});

/**
 * Pop up a confirm and cancel buttons when placing a shape.
 */
function confirmPopUp() {
    let confirmCancelButtons = document.getElementsByClassName("confirm-cancel-buttons");
    for (let x = 0; x < confirmCancelButtons.length; x++) {
        confirmCancelButtons[x].classList.remove("hidden");
    }
}

/**
 * Pop up a confirm and cancel buttons when placing a shape.
 */
function removePopUp() {
    let confirmCancelButtons = document.getElementsByClassName("confirm-cancel-buttons");
    for (let x = 0; x < confirmCancelButtons.length; x++) {
        confirmCancelButtons[x].classList.add("hidden");
    }
}

/**
 * Fill in spaces.
 */
function paintSpaces(confirmation) {
    console.log(`confirmtation reads ${confirmation}`)
    if (confirmation === "yes") {
        // Player has clicked "confirm", so change spaces to contain-shape.
        for (let x = 0; x < spacesToCheck.length; x++) {
            let paint = document.getElementById(spacesToCheck[x]);
            paint.classList.remove("available");
            paint.classList.remove("unconfirmed-shape");
            paint.classList.add("contains-shape");
            deactivateDice();
            deactivateSpaces();
            removePopUp();
        }
    } else if (confirmation === "no") {
        // Player has not yet chosen "confirm" or "cancel", so shapes are greyed out.
        for (let x = 0; x < spacesToCheck.length; x++) {
            let paint = document.getElementById(spacesToCheck[x]);
            paint.classList.remove("available");
            paint.classList.add("unconfirmed-shape");
        }
    } else if (confirmation === "cancel") {
        // Player has clicked "cancel", so remove the unconfirmed-shape.
        for (let x = 0; x < spacesToCheck.length; x++) {
            let paint = document.getElementById(spacesToCheck[x]);
            paint.classList.remove("unconfirmed-shape");
            paint.classList.add("available");
            removePopUp();
        }
    }
    return;
}

/**
 * Deactivate the used dice.
 */
function deactivateDice() {
    for (let x = 1; x < 3; x++) {
        let deactivate = document.getElementById("available"+x);
        if (deactivate.classList.contains("clicked-die")) {
            deactivate.classList.remove("clicked-die");
            deactivate.classList.remove("unused-rolled-dice");
            deactivate.classList.add("used-rolled-dice");
            deactivate.textContent = "";
        }
    };
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
