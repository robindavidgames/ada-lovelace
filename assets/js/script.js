let roundNumber = 1;

// The die the player has clicked.
let dieValue = "";

// The player's chosen shape.
let currentShape = "";

// Spaces that the shape will occupy. Horizontal and vertical values to adjust these spaces.
let spacesToCheck = [];
let vertical = 0;
let horizontal = 0;

// Let the "confirm" and "cancel" buttons know what they are referring to.
let confirmType = "none";

// If there is currently a temporary placement shape on the board.
let tempPlacement = false;

// Track completion of evidence, filling of rooms, if abilities have been completed with dice.
let evidenceComplete = [false, false, false, false, false, false, false, false, false, false, false];
let roomComplete = [false, false, false, false, false, false, false, false, false];
let abilityFinished = [false, false, false, false, false, false, false, false, false, false, false];

// If the user has clicked wild
let wildAbilityUse = false;

// If user has clicked reroll
let rerollAbilityUse = false;

// If user has clicked ability shape
let abilityShapeUse = false;

// If the user is just adjusting the shape
// let shapeAdjustment = false;

createPlayArea();
markOutOfBounds();
markPreFilled();
createRoundTracker();
createConfirmButtons();
let availableDice = [];
// createTutorial();

// Event listener for beginning the game.
let beginButton = document.getElementById("begin");
beginButton.addEventListener("click", function() {
    let tutorialDiv = document.getElementById("tutorial-div");
    tutorialDiv.remove();
    let rollDiceButton = document.getElementById("roll-dice-button");
    rollDiceButton.classList.remove("hidden");
});

// Event listener for x button.
let closeButton = document.getElementById("x-button");
closeButton.addEventListener("click", function() {
    let tutorialDiv = document.getElementById("tutorial-div");
    tutorialDiv.remove();
    let rollDiceButton = document.getElementById("roll-dice-button");
    rollDiceButton.classList.remove("hidden");
});


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

    // Remove clicked dice styling if any remain.
    dieValue = "";
    for (let x = 1; x < 3; x++) {
        let dice = document.getElementById("available"+x);
        dice.classList.remove("clicked-die");
    }
    deactivateSpaces();
    deactivateAbilitySpaces();
    uncolourElements();

    confirmation = "cancel";
    paintSpaces(confirmation);
    removePopUp;

    placeRolledDice(availableDice);

    if (rerollAbilityUse == false) {
        reduceReserveSpaces();
    }

    rerollAbilityUse = false;
    return;
}

/**
 * Places each die value in the correct space.
 */
function placeRolledDice(availableDice) {
    for (let x = 1; x < 3; x++) {
        let rolledDieValue = availableDice[x-1];
        document.getElementById("available"+x).textContent = rolledDieValue;
        if (rerollAbilityUse == false) {
            document.getElementById("available"+x).classList.remove("used-rolled-dice");
            document.getElementById("available"+x).classList.add("unused-rolled-dice");
        }
    }

    if ((document.getElementById("reserve5").classList.contains("empty")) && (document.getElementById("reserve6").classList.contains("filled"))) {
        // If only 1 dice available, make the second dice unavailable.
        document.getElementById("available2").textContent = "";
        if (rerollAbilityUse == false) {
            document.getElementById("available2").classList.remove("unused-rolled-dice");
            document.getElementById("available2").classList.add("used-rolled-dice");
        }
    }
    return;
}

/**
 * Reduce dice in the reserve. Make rolled dice clickable.
 */
function reduceReserveSpaces() {
    let numberOfDiceRolled = 0;

    // If only 1 dice left to roll, indicate this.
    if ((document.getElementById("reserve5").classList.contains("empty")) && (document.getElementById("reserve6").classList.contains("filled"))) {
        numberOfDiceRolled += 1;
    }
    
    for (let x = 1; x < 7; x++) {
        // Ensure that only 2 dice are changed.
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
        }
    }
    // Remove roll dice button if all dice are in used space.
    let checkUsed = document.getElementsByClassName("used");
    if (checkUsed[1].classList.contains("filled") && checkUsed[2].classList.contains("filled") && checkUsed[3].classList.contains("filled") && checkUsed[4].classList.contains("filled") && checkUsed[5].classList.contains("filled") && checkUsed[0].classList.contains("filled")) {
        document.getElementById("roll-dice-button").classList.add("hidden");
        document.getElementById("new-round-button").classList.remove("hidden");
        if (roundNumber == 6) {
            document.getElementById("new-round-button").innerText = "End Game (Two unused dice)";
        } else {
            document.getElementById("new-round-button").innerText = "Begin Next Round (Two unused dice)";
        }
    } else {
        document.getElementById("roll-dice-button").classList.remove("hidden");
        document.getElementById("new-round-button").classList.add("hidden");
        document.getElementById("roll-dice-button").innerText = "Roll Two Dice (Two unused dice)";
    }
}

// Event listener for new round button.
let newRoundButton = document.getElementById("new-round-button");
newRoundButton.addEventListener("click", function() {
    if (roundNumber < 6) {
        setUpNewRound();
    } else {
        presentScoring();
    }
});

/**
 * Sets up a new round.
 */
function setUpNewRound() {
    deactivateAbilitySpaces();
    deactivateSpaces();
    uncolourElements();
    confirmation = "cancel";
    paintSpaces(confirmation);

    // Empty unused dice.
    dieValue = "";
    for (let x = 1; x < 3; x++) {
        let dice = document.getElementById("available"+x);
        dice.textContent = "";
        dice.classList.remove("used-rolled-dice");
        dice.classList.remove("unused-rolled-dice");
        dice.classList.remove("clicked-die");
    }

    // Update the tracking boxes.
    for (let x = 1; x < 7; x++) {
        let checkAvailable = document.getElementById("reserve"+x);
        checkAvailable.classList.add("filled");
        checkAvailable.classList.remove("empty");
        usedDice = document.getElementById("used"+x)
        usedDice.classList.add("empty");
        usedDice.classList.remove("filled");
    }

    // Update the round number.
    roundNumber++;
    document.getElementById("round-tracker").textContent = "Round "+roundNumber+" of 6";
    
    // Reset the buttons.
    document.getElementById("new-round-button").classList.add("hidden");
    document.getElementById("roll-dice-button").classList.remove("hidden");
}

// Event listener for clicking each die.
for (let x = 1; x < 3; x++) {
    let clickDice = document.getElementById("available"+x);
    clickDice.addEventListener("click", function() {
        if (clickDice.classList.contains("unused-rolled-dice")) {
            clickDie(x);
        }
    });
}

/**
 * Player can click on an available die.
 */
function clickDie(clickedDice) {
    // Uncolour previously clicked dice/abilities.
    uncolourElements();
    wildAbilityUse = false;
    abilityShapeUse = false;

    let dieChosen = document.getElementById('available'+clickedDice);
    // Read the text on the chosen die.
    dieValue = parseInt(dieChosen.innerText);
    dieChosen.classList.add("clicked-die");
    confirmation = "cancel";
    paintSpaces(confirmation);
    removePopUp;
    deactivateSpaces();
    deactivateAbilitySpaces();
    activateSpaces();
    activateAbilitySpaces(dieValue);
    return;
}

/**
 * Any elements or abilities that are previously in use are uncoloured.
 */
function uncolourElements() {
    let uncolourDice = document.getElementsByClassName("die-roller");
    for (let x = 0; x < uncolourDice.length; x++) {
        uncolourDice[x].classList.remove("clicked-die");
    }

    let uncolourWild = document.getElementsByClassName("active-wild-space");
    if (uncolourWild.length == 1) {
        uncolourWild[0].classList.add("wild-space");
        uncolourWild[0].classList.remove("active-wild-space");
    }

    let uncolourAbilityShape = document.getElementsByClassName("active-ability-shape");
    if (uncolourAbilityShape.length == 1) {
        uncolourAbilityShape[0].classList.add("ability-shape-space");
        uncolourAbilityShape[0].classList.remove("active-ability-shape");
    }

    abilityShapeUse = false;
}

// Event listener for clicking ability spaces.
for (let x = 0; x < 11; x++) {
    let clickSpace1 = document.getElementById("ability"+x+"-space1");
    clickSpace1.addEventListener("click", function() {
        if (clickSpace1.classList.contains("ability-space-available")) {
            abilitySpaceClicked(clickSpace1);
        }
    });
    let clickSpace2 = document.getElementById("ability"+x+"-space2");
    clickSpace2.addEventListener("click", function() {
        if (clickSpace2.classList.contains("ability-space-available")) {
            abilitySpaceClicked(clickSpace2);
        }
    });
}

/**
 * Add dice value to the ability space, pop up confirmation. Then check if both have been filled in. If so, redirect to the ability specific function.
 */
function abilitySpaceClicked(clickSpace) {
    // // Remove other ability/shapes/spaces clicked.
    removeClickedSpaces();

    clickSpace.classList.remove("ability-space-available");
    clickSpace.classList.add("ability-space-picked");
    clickSpace.textContent = dieValue;
    let confirmation = "no";
    confirmType = "ability";
    confirmPopUp();
}

/**
 * Updo any painted spaces, remove clicked abilities and shapes.
 */
function removeClickedSpaces() {
    // Undo any painted spaces.
    confirmation = "cancel";
    paintSpaces(confirmation);

    // Remove other ability clicked.
    let priorClickedAbility = document.getElementsByClassName("ability-space-picked");
    if (priorClickedAbility.length != 0) {
        priorClickedAbility[0].textContent = "";
        priorClickedAbility[0].classList.add("ability-space-available");
        priorClickedAbility[0].classList.remove("ability-space-picked");
    }
    // Remove other shapes clicked.
    let priorClickedShape = document.getElementsByClassName("shape-picked")
    if (priorClickedShape.length != 0) {
        priorClickedShape[0].classList.add("shape-available");
        priorClickedShape[0].classList.remove("shape-picked");
    }
}

/**
 * Ability spaces deactivate when changing dice selection.
 */
function deactivateAbilitySpaces() {
    let inactiveAbilitySpaces = document.getElementsByClassName('ability-die-space');
    for (let i = 0; i < inactiveAbilitySpaces.length; i++) {
        if (inactiveAbilitySpaces[i].classList.contains("ability-space-available")) {
            let makeUnavailable = inactiveAbilitySpaces[i];
            makeUnavailable.classList.remove("ability-space-available");
            makeUnavailable.innerText = "";
        }
        
    }
    return;
}

/**
 * Shapes deactivate.
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
 * Shapes activate if they are available for the chosen die.
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
 * Shapes deactivate when relevant.
 */
function deactivateSpaces() {
    let shapes = document.getElementsByClassName('shape-picker');
    for (let i = 0; i < shapes.length; i++) {
        let makeUnavailable = shapes[i];
        makeUnavailable.classList.remove("shape-available");
        makeUnavailable.classList.remove("shape-picked");
        makeUnavailable.classList.add("shape-unavailable");
    }
    // Remove current shape selection.
    if (currentShape !== "") {
        currentShape = "";
    }
    return;
}

// Event listener for rotating shapes.
let rotateShape = document.getElementById("rotate-shapes");
rotateShape.addEventListener("click", function() {rotate90Degrees();});

// Event listener for flipping shapes.
let flipShape = document.getElementById("flip-shapes");
flipShape.addEventListener("click", function() {flipHorizontal();});

// Event listener for clicking shapes.
for (let x = 1; x < 10; x++) {
    let clickShape = document.getElementById("shape"+x);
    clickShape.addEventListener("click", function() {
        if (clickShape.classList.contains("shape-available")) {
            // Clear any other clicked spaces/shapes/abilities.
            removeClickedSpaces();

            clickShape.classList.remove("shape-available");
            clickShape.classList.add("shape-picked");
            pickShape(clickShape, x);
        }
    });
}

/**
 * Player can select an appropriate shape.
 * Argument is the chosenShape and x is the shape number.
 */
function pickShape(chosenShape, x) {
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
}

// Event listener for clicking spaces on the board.
let boardSpace = document.getElementsByClassName("valid-space")
for (let x = 0; x < boardSpace.length; x++) {
    boardSpace[x].addEventListener("click", function() {
        if (currentShape !== "" && tempPlacement == false) {
            checkShape(boardSpace[x]);
        }
    });
}

/**
 * Check if shape placement is valid.
 * Argument is the currently clicked space.
 */
function checkShape(boardSpace) {
    let checkValue = boardSpace.id;

    // Get horizontal and vertical values as integers.
    horizontal = parseInt(checkValue.slice(1, 3));
    vertical = parseInt(checkValue.slice(3, 5));

    // Clear out spacesToCheck
    spacesToCheck = [checkValue];

    // Define each shape.
    shapeDefiner();

    // Check if the spaces are null or if they include unavailable spaces.
    let approve = true;
    for (let x = 0; x < spacesToCheck.length; x++) {
        let check = document.getElementById(spacesToCheck[x]);
        // This if line won't be needed once these spaces are checked.
        if (check == null) {
            console.log("null space");
            approve = false;
        } else if ((!check.classList.contains("available")) || (check.classList.contains("filled")) || (check.classList.contains("contains-shape"))) {
        // } else if (!check.classList.contains("available")) {
            console.log("not available");
            approve = false;
        }
    }
    if (approve == true) {
        let confirmation = "no";
        paintSpaces(confirmation);
        confirmType = "shape";
        confirmPopUp();
    }
}

// Event listener for confirm button.
let confirmButtonClick = document.getElementById("confirm-button")
confirmButtonClick.addEventListener("click", function() {
    let confirmation = "yes";
    if (confirmType === "shape") {
        paintSpaces(confirmation);
    } else if (confirmType === "ability") {
        confirmAbilityPlacement();
    } else {
        console.log("Unknown confirm type.");
    }
    updateRollButton();
});

/**
 * Reduce number of unused dice displayed on roll button / new round button.
 */
function updateRollButton() {
    let checkRolled1 = document.getElementById("available1");
    let checkRolled2 = document.getElementById("available2");

    if (checkRolled1.classList.contains("used-rolled-dice") && checkRolled2.classList.contains("used-rolled-dice")) {
        // Both dice are used
        document.getElementById("roll-dice-button").innerText = "Roll Two Dice";
        document.getElementById("new-round-button").innerText = "Begin Next Round";
        if (roundNumber == 6) {
            document.getElementById("new-round-button").innerText = "End Game"
        }
    } else if (checkRolled1.classList.contains("used-rolled-dice") || checkRolled2.classList.contains("used-rolled-dice")) {
        // One die is used
        document.getElementById("roll-dice-button").innerText = "Roll Two Dice (One unused die)";
        document.getElementById("new-round-button").innerText = "Begin Next Round (One unused die)";
        if (roundNumber == 6) {
            document.getElementById("new-round-button").innerText = "End Game (One unused die)"
        }
    }
}

// Event listener for cancel button.
let cancelButtonClick = document.getElementById("cancel-button")
cancelButtonClick.addEventListener("click", function() {
    let confirmation = "cancel";
    if (confirmType === "shape") {
        // paintSpaces(confirmation);
        removeClickedSpaces();
    } else if (confirmType === "ability") {
        cancelAbilityPlacement();
    } else {
        console.log("Unknown confirm type.");
    }
    currentShape = "";
});

/**
 * Confirm placing a die in the abilities section.
 */
function confirmAbilityPlacement() {
    let chosenAbilitySpace = document.getElementsByClassName("ability-space-picked");
    chosenAbilitySpace[0].classList.add("ability-space-confirmed");
    chosenAbilitySpace[0].classList.remove("ability-space-picked");
    deactivateDice();
    deactivateSpaces();
    deactivateAbilitySpaces();
    removePopUp();
    checkAbilityActivated();
}

/**
 * Cancel placing a die in the abilities section.
 */
function cancelAbilityPlacement() {
    let chosenAbilitySpace = document.getElementsByClassName("ability-space-picked");
    // Some errors suggesting this function was called when unnecessary. So only adjust classes if required.
    if (chosenAbilitySpace.length == 1) {
        chosenAbilitySpace[0].textContent = ""; 
        chosenAbilitySpace[0].classList.add("ability-space-available");
        chosenAbilitySpace[0].classList.remove("ability-space-picked");
    }
    removePopUp();
}

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
 * Remove confirm and cancel buttons when placing a shape.
 */
function removePopUp() {
    let confirmCancelButtons = document.getElementsByClassName("confirm-cancel-buttons");
    for (let x = 0; x < confirmCancelButtons.length; x++) {
        confirmCancelButtons[x].classList.add("hidden");
    }
    confirmType = "none";
}

/**
 * Fill in spaces.
 */
function paintSpaces(confirmation) {
    if (confirmation === "yes") {
        // Player has clicked "confirm", so change spaces to contain-shape.
        for (let x = 0; x < spacesToCheck.length; x++) {
            let paint = document.getElementById(spacesToCheck[x]);
            if (paint != null) {
                paint.classList.remove("available");
                paint.classList.remove("unconfirmed-shape");
                paint.classList.add("contains-shape");
            }
        }
        spacesToCheck = [];
        tempPlacement = false;
        deativateShapeAbilitySpace(); // Moved this to the top because it might be getting effected by other functions.
        deactivateDice();
        deactivateSpaces();
        deactivateAbilitySpaces();
        removePopUp();
        checkSurround();
        checkRoom();
    } else if (confirmation === "no") {
        // Player has not yet chosen "confirm" or "cancel", so shapes are greyed out.
        for (let x = 0; x < spacesToCheck.length; x++) {
            let paint = document.getElementById(spacesToCheck[x]);
            if (paint != null) {
                paint.classList.remove("available");
                paint.classList.add("unconfirmed-shape");
            }
        }
        tempPlacement = true;
    } else if (confirmation === "cancel") {
        // Player has clicked "cancel", so remove the unconfirmed-shape.
        for (let x = 0; x < spacesToCheck.length; x++) {
            let paint = document.getElementById(spacesToCheck[x]);
            if (paint != null) {
                paint.classList.remove("unconfirmed-shape");
                paint.classList.add("available");
            }
        }
        // if (shapeAdjustment == false) {
        //     currentShape = "";
        // } else {
        //     shapeAdjustment = false;
        // }
        // wildAbilityUse = false;
        spacesToCheck = [];
        tempPlacement = false;
        removePopUp();
    }
    return;
}

/**
 * Deactivate the ability associated with the bonus shapes.
 */
function deativateShapeAbilitySpace() {
    if (abilityShapeUse == true) {
        let currentUsedAbilityShape = document.getElementsByClassName("active-ability-shape");
        currentUsedAbilityShape[0].classList.add("ability-shape-space-used");
        currentUsedAbilityShape[0].classList.remove("active-ability-shape");
        abilityShapeUse = false;
    }
}

/**
 * Deactivate the used dice.
 */
function deactivateDice() {
    if (wildAbilityUse == true) {
        wildAbilityUse = false;
        let deactivate = document.getElementsByClassName("active-wild-space");
        if (deactivate.length > 0) {
            deactivate[0].classList.add("used-wild-space");
            deactivate[0].textContent = "";
            deactivate[0].classList.remove("active-wild-space");
        }
    } else {
        for (let x = 1; x < 3; x++) {
            let deactivate = document.getElementById("available"+x);
            if (deactivate.classList.contains("clicked-die")) {
                deactivate.classList.add("used-rolled-dice");
                deactivate.textContent = "";
                deactivate.classList.remove("unused-rolled-dice");
                deactivate.classList.remove("clicked-die");
            }
        }
    }
}

/**
 * Upon evidence being surrounded, enable the relevant ability.
 */
function abilityActivation() {
    for (let x = 0; x < evidenceComplete.length; x++) {
        if (evidenceComplete[x] === true) {
            document.getElementById("ability"+x).classList.remove("inactive-ability");
            for (let y = 1; y < 3; y++) {
                let abilitySpaceUpdate = document.getElementById("ability"+x+"-space"+y);
                if (abilitySpaceUpdate.classList.contains("ability-space-unavailable")) {
                    abilitySpaceUpdate.classList.remove("ability-space-unavailable");
                    abilitySpaceUpdate.classList.add("ability-space-active");
                }
            }
        }
    }
}

/**
 * Present scoring information.
 */
function presentScoring() {
    deactivateAbilitySpaces();
    deactivateSpaces();
    uncolourElements();
    confirmation = "cancel";
    paintSpaces(confirmation);

    // Update the round number.
    document.getElementById("round-tracker").textContent = "";
    
    // Hide Elements in Right Panel.
    let rightPanel = document.getElementById("right-panel");
    let children = rightPanel.children;
    for (let x = 0; x < children.length; x++) {
        children[x].classList.add("hidden");
    }

    // Calculate scores.
    // Surrounding evidence. 2 points per piece.
    let scoreEvidenceSurrounded = 0;
    for (let x = 0; x < evidenceComplete.length; x++) {
        if (evidenceComplete[x] == true) {
            scoreEvidenceSurrounded += 2;
        }
    }
    console.log(`Score for surrounding evidence is ${scoreEvidenceSurrounded}`);
    let numberEvidenceSurrounded = scoreEvidenceSurrounded / 2;

    // Filling rooms. Room specific value.
    checkRoom();
    let roomScores = 0;

    if (roomComplete[0] == true) {
        roomScores += 9;
    }
    if (roomComplete[1] == true) {
        roomScores += 9;
    }
    if (roomComplete[2] == true) {
        roomScores += 8;
    }
    if (roomComplete[3] == true) {
        roomScores += 6;
    }
    if (roomComplete[4] == true) {
        roomScores += 11;
    }
    if (roomComplete[5] == true) {
        roomScores += 11;
    }
    if (roomComplete[6] == true) {
        roomScores += 8;
    }
    if (roomComplete[7] == true) {
        roomScores += 6;
    }
    if (roomComplete[8] == true) {
        roomScores += 10;
    }
    console.log(`Score for room completion is ${roomScores}`);

    // Scores for specific evidence abilities.
    // 3 points
    let vp3ab1 = document.getElementById("ability-complete-div8");
    let vp3ab2 = document.getElementById("ability-complete-div6");
    // 7 points
    let vp7ab1 = document.getElementById("ability-complete-div2");
    let vp7ab2 = document.getElementById("ability-complete-div5");

    let abilityScores = 0;
    if (vp3ab1 != null) {
        abilityScores += 3;
    }
    if (vp3ab2 != null) {
        abilityScores += 3;
    }
    if (vp7ab1 != null) {
        abilityScores += 7;
    }
    if (vp7ab2 != null) {
        abilityScores += 7;
    }
    console.log(`Score for abilities is ${abilityScores}`);

    let finalScore = scoreEvidenceSurrounded + roomScores + abilityScores;
    console.log(`Final score is ${finalScore}`);

    // Add scoring table.
    let scoringTable = document.createElement("div");
    // scoringTable.setAttribute("class", "reroll-space reroll");
    scoringTable.setAttribute("id", "scoring-table");
    rightPanel.appendChild(scoringTable);
    document.getElementById("scoring-table").innerHTML = "<h2>Game Over!</h2><p>After sixty minutes, Ada's time is up!</p><p>She thoroughly searched "+numberEvidenceSurrounded+" pieces of evidence. (for <b>"+scoreEvidenceSurrounded+" points!)</b></p><p>From scouring the rooms in the museum, she scored <b>"+roomScores+" points!</b></p><p>Some pieces of evidence proved particularly valuable. From these, she scored <b>"+abilityScores+" points!</b></p><h3>Final Score: "+finalScore+" points!</h3><br>";

    let narrativeEnd = document.createElement("div");
    narrativeEnd.setAttribute("id", "narrative-end");
    rightPanel.appendChild(narrativeEnd);
    if (finalScore < 40) {
        document.getElementById("narrative-end").innerHTML = "<h3 class='text-muted'>How does Ada's first investigation end?</h3><p>Flustered, you drop an ancient abacus on the ground, smashing it. Everybody boos.</p>"
    } else if (finalScore < 50) {
        document.getElementById("narrative-end").innerHTML = "<h3 class='text-muted'>How does Ada's first investigation end?</h3><p>A few random knick-knacks do not make a convincing case!</p>"
    } else if (finalScore < 60) {
        document.getElementById("narrative-end").innerHTML = "<h3 class='text-muted'>How does Ada's first investigation end?</h3><p>You have a case, but it is unconvincing. Your reputation is in tatters.</p>"
    } else if (finalScore < 70) {
        document.getElementById("narrative-end").innerHTML = "<h3 class='text-muted'>How does Ada's first investigation end?</h3><p>You've gathered some decent evidence, so you blame Sir Charles Wheatstone.</p><p>“Preposterous!” he yells.</p><p>Others come to his defence: “He was performing on his concertina at the time.”</p><p>Whoops!</p>"
    } else if (finalScore < 80) {
        document.getElementById("narrative-end").innerHTML = "<h3 class='text-muted'>How does Ada's first investigation end?</h3><p>You try to blame Charles Babbage and some people say, “By golly, I think she's right!” But you're not right. Charles is not amused.</p>"
    } else if (finalScore > 79) {
        document.getElementById("narrative-end").innerHTML = "<h3 class='text-muted'>How does Ada's first investigation end?</h3><p>You pin the blame on Lord Byron, even though he has been dead for 18 years. But your evidence is so thorough, everyone is convinced you are telling the truth. And that means nobody realises it was really you who stole the Lebombo Bone! <b>Ada Lovelace: Master Criminal!</b></p>"
    }

    let replayDetails = document.createElement("div");
    replayDetails.setAttribute("id", "replay-details");
    rightPanel.appendChild(replayDetails);
    document.getElementById("replay-details").innerHTML = "<hr><a href='https://robindavid.itch.io/ada-lovelace-legacy' target='_blank' rel='noopener'>Want more? Get the Ada Lovelace campaign game here</a><br><button id='replay-button' onClick='window.location.reload();'>Play Again</button>"
}