/**
 * Ability spaces activate if the chosen die is valid.
 */
 function activateAbilitySpaces(dieValue) {
    for (let x = 0; x < 11; x++) {
        // If the ability is not inactive.
        let currentAbility = document.getElementById("ability"+x);
        if (!currentAbility.classList.contains("inactive-ability")) {
            let abilityDieSpace1 = document.getElementById("ability"+x+"-space1");
            let abilityDieSpace2 = document.getElementById("ability"+x+"-space2");

            // If the two spaces are empty.
            if (abilityDieSpace1.innerText == "" && abilityDieSpace2.innerText == "") {
                abilityDieSpace1.classList.add("ability-space-available");
                abilityDieSpace2.classList.add("ability-space-available");
            }
        }
    }

    // Ability 0 (apple) with 1 empty space.
    let ability0 = document.getElementById("ability0");
    let ability0die1 = document.getElementById("ability0-space1");
    let ability0die2 = document.getElementById("ability0-space2");
    if (!ability0.classList.contains("inactive-ability") && ability0die1.innerText != "") {
        let abilityValue = parseInt(ability0die1.innerText);
        if (abilityValue + dieValue > 9) {
            ability0die2.classList.add("ability-space-available");
        }
    } else if (ability0die2.innerText != "") {
        let abilityValue = parseInt(ability0die2.innerText);
        if (abilityValue + dieValue > 9) {
            ability0die1.classList.add("ability-space-available");
        }
    }

    // Ability 1 (martini) with 1 empty space.
    let ability1 = document.getElementById("ability1");
    let ability1die1 = document.getElementById("ability1-space1");
    let ability1die2 = document.getElementById("ability1-space2");
    if (!ability1.classList.contains("inactive-ability") && ability1die1.innerText != "") {
        let abilityValue = parseInt(ability1die1.innerText);
        if ((abilityValue + dieValue == 8) || (abilityValue + dieValue == 9)) {
            ability1die2.classList.add("ability-space-available");
        }
    } else if (ability1die2.innerText != "") {
        let abilityValue = parseInt(ability1die2.innerText);
        if ((abilityValue + dieValue == 8) || (abilityValue + dieValue == 9)) {
            ability1die1.classList.add("ability-space-available");
        }
    }

    // Ability 2 (teapot) with 1 empty space.
    let ability2 = document.getElementById("ability2");
    let ability2die1 = document.getElementById("ability2-space1");
    let ability2die2 = document.getElementById("ability2-space2");
    if (!ability2.classList.contains("inactive-ability") && ability2die1.innerText != "") {
        let abilityValue = parseInt(ability2die1.innerText);
        if ((abilityValue + dieValue == 6) || (abilityValue + dieValue == 7) || (abilityValue + dieValue == 8)) {
            ability2die2.classList.add("ability-space-available");
        }
    } else if (ability2die2.innerText != "") {
        let abilityValue = parseInt(ability2die2.innerText);
        if ((abilityValue + dieValue == 6) || (abilityValue + dieValue == 7) || (abilityValue + dieValue == 8)) {
            ability2die1.classList.add("ability-space-available");
        }
    }

    // Ability 3 (key) with 1 empty space.
    let ability3 = document.getElementById("ability3");
    let ability3die1 = document.getElementById("ability3-space1");
    let ability3die2 = document.getElementById("ability3-space2");
    if (!ability3.classList.contains("inactive-ability") && ability3die1.innerText != "") {
        let abilityValue = parseInt(ability3die1.innerText);
        if (abilityValue + dieValue < 5) {
            ability3die2.classList.add("ability-space-available");
        }
    } else if (ability3die2.innerText != "") {
        let abilityValue = parseInt(ability3die2.innerText);
        if (abilityValue + dieValue < 5) {
            ability3die1.classList.add("ability-space-available");
        }
    }

    // Ability 4 (violin) with 1 empty space.
    let ability4 = document.getElementById("ability4");
    let ability4die1 = document.getElementById("ability4-space1");
    let ability4die2 = document.getElementById("ability4-space2");
    if (!ability4.classList.contains("inactive-ability") && ability4die1.innerText != "") {
        let abilityValue = parseInt(ability4die1.innerText);
        if ((abilityValue + 1 == dieValue) || (abilityValue - 1 == dieValue)) {
            ability4die2.classList.add("ability-space-available");
        }
    } else if (ability4die2.innerText != "") {
        let abilityValue = parseInt(ability4die2.innerText);
        if ((abilityValue + 1 == dieValue) || (abilityValue - 1 == dieValue)) {
            ability4die1.classList.add("ability-space-available");
        }
    }

    // Ability 5 (binoculars) with 1 empty space.
    let ability5 = document.getElementById("ability5");
    let ability5die1 = document.getElementById("ability5-space1");
    let ability5die2 = document.getElementById("ability5-space2");
    if (!ability5.classList.contains("inactive-ability") && ability5die1.innerText != "") {
        let abilityValue = parseInt(ability5die1.innerText);
        if ((abilityValue + dieValue == 6) || (abilityValue + dieValue == 7) || (abilityValue + dieValue == 8)) {
            ability5die2.classList.add("ability-space-available");
        }
    } else if (ability5die2.innerText != "") {
        let abilityValue = parseInt(ability5die2.innerText);
        if ((abilityValue + dieValue == 6) || (abilityValue + dieValue == 7) || (abilityValue + dieValue == 8)) {
            ability5die1.classList.add("ability-space-available");
        }
    }

    // Ability 6 (crowbar) with 1 empty space.
    let ability6 = document.getElementById("ability6");
    let ability6die1 = document.getElementById("ability6-space1");
    let ability6die2 = document.getElementById("ability6-space2");
    if (!ability6.classList.contains("inactive-ability") && ability6die1.innerText != "") {
        let abilityValue = parseInt(ability6die1.innerText);
        if ((abilityValue == dieValue)) {
            ability6die2.classList.add("ability-space-available");
        }
    } else if (ability6die2.innerText != "") {
        let abilityValue = parseInt(ability6die2.innerText);
        if ((abilityValue == dieValue)) {
            ability6die1.classList.add("ability-space-available");
        }
    }

    // Ability 7 (top hat) with 1 empty space.
    let ability7 = document.getElementById("ability7");
    let ability7die1 = document.getElementById("ability7-space1");
    let ability7die2 = document.getElementById("ability7-space2");
    if (!ability7.classList.contains("inactive-ability") && ability7die1.innerText != "") {
        let abilityValue = parseInt(ability7die1.innerText);
        if ((abilityValue + dieValue == 5) || (abilityValue + dieValue == 6)) {
            ability7die2.classList.add("ability-space-available");
        }
    } else if (ability7die2.innerText != "") {
        let abilityValue = parseInt(ability7die2.innerText);
        if ((abilityValue + dieValue == 5) || (abilityValue + dieValue == 6)) {
            ability7die1.classList.add("ability-space-available");
        }
    }

    // Ability 8 (telescope) with 1 empty space.
    let ability8 = document.getElementById("ability8");
    let ability8die1 = document.getElementById("ability8-space1");
    let ability8die2 = document.getElementById("ability8-space2");
    if (!ability8.classList.contains("inactive-ability") && ability8die1.innerText != "") {
        let abilityValue = parseInt(ability8die1.innerText);
        if ((abilityValue == dieValue)) {
            ability8die2.classList.add("ability-space-available");
        }
    } else if (ability8die2.innerText != "") {
        let abilityValue = parseInt(ability8die2.innerText);
        if ((abilityValue == dieValue)) {
            ability8die1.classList.add("ability-space-available");
        }
    }

    // Ability 9 (meat) with 1 empty space.
    let ability9 = document.getElementById("ability9");
    let ability9die1 = document.getElementById("ability9-space1");
    let ability9die2 = document.getElementById("ability9-space2");
    if (!ability9.classList.contains("inactive-ability") && ability9die1.innerText != "") {
        let abilityValue = parseInt(ability9die1.innerText);
        if ((abilityValue + 1 == dieValue) || (abilityValue - 1 == dieValue)) {
            ability9die2.classList.add("ability-space-available");
        }
    } else if (ability9die2.innerText != "") {
        let abilityValue = parseInt(ability9die2.innerText);
        if ((abilityValue + 1 == dieValue) || (abilityValue - 1 == dieValue)) {
            ability9die1.classList.add("ability-space-available");
        }
    }

    // Ability 10 (bike) with 1 empty space.
    let ability10 = document.getElementById("ability10");
    let ability10die1 = document.getElementById("ability10-space1");
    let ability10die2 = document.getElementById("ability10-space2");
    if (!ability10.classList.contains("inactive-ability") && ability10die1.innerText != "") {
        let abilityValue = parseInt(ability10die1.innerText);
        if ((abilityValue + 1 == dieValue) || (abilityValue - 1 == dieValue)) {
            ability10die2.classList.add("ability-space-available");
        }
    } else if (ability10die2.innerText != "") {
        let abilityValue = parseInt(ability10die2.innerText);
        if ((abilityValue + 1 == dieValue) || (abilityValue - 1 == dieValue)) {
            ability10die1.classList.add("ability-space-available");
        }
    }
}

/**
 * Check if abilities are complete and activate their power.
 */
function checkAbilityActivated() {
    for (let x = 0; x < 11; x++) {
        if (abilityFinished[x] == false) {

            let firstAbility = document.getElementById("ability"+x+"-space1");
            let secondAbility = document.getElementById("ability"+x+"-space2");
            if ((firstAbility.classList.contains("ability-space-confirmed")) && (secondAbility.classList.contains("ability-space-confirmed"))) {

                let abilityToComplete = document.getElementById("ability"+x);
                abilityToComplete.classList.add("ability-completed");
                let divsToRemove = abilityToComplete.getElementsByClassName("space");
                for (let y = 0; y < divsToRemove.length; y++) {
                    divsToRemove[y].classList.add("hidden");
                }

                if ((x == 2) || (x == 5)) {
                    // Teapot and Binoculars
                    let element = document.createElement("div");
                    element.setAttribute("class", "ability-space");
                    element.setAttribute("id", "ability-complete-div"+x);
                    abilityToComplete.appendChild(element);
                    document.getElementById("ability-complete-div"+x).textContent = "7 points";
                    abilityFinished[x] = true;
                }
                
                if ((x == 8) || (x == 6)) {
                    // Telescope or crowbar
                    let element = document.createElement("div");
                    element.setAttribute("class", "ability-space");
                    element.setAttribute("id", "ability-complete-div"+x);
                    abilityToComplete.appendChild(element);
                    document.getElementById("ability-complete-div"+x).textContent = "3 points";

                    // Reset up to 3 dice.
                    let usedDiceDiv = document.getElementById("used-dice");
                    let usedDice = usedDiceDiv.getElementsByClassName("filled");
                    let unusedDiceDiv = document.getElementById("reserve-dice");
                    let unusedDice = unusedDiceDiv.getElementsByClassName("empty");
                    if (usedDice.length == 0) {
                        console.log("No used dice to move.");
                    } else if (usedDice.length == 1) {
                        usedDice[0].classList.add("empty");
                        usedDice[0].classList.remove("filled");
                        unusedDice[0].classList.add("filled");
                        unusedDice[0].classList.remove("empty");
                    } else if (usedDice.length == 2) {
                        usedDice[0].classList.add("empty");
                        usedDice[0].classList.remove("filled");
                        unusedDice[0].classList.add("filled");
                        unusedDice[0].classList.remove("empty");
                        usedDice[1].classList.add("empty");
                        usedDice[1].classList.remove("filled");
                        unusedDice[1].classList.add("filled");
                        unusedDice[1].classList.remove("empty");
                    } else if (usedDice.length == 3) {
                        remove3dice(0, 1, 2);
                    } else if (usedDice.length == 4) {
                        remove3dice(1, 2, 3);
                    } else if (usedDice.length == 5) {
                        remove3dice(2, 3, 4);
                    } else if (usedDice.length == 6) {
                        remove3dice(3, 4, 5);
                    }
                    
                    function remove3dice(a, b, c) {
                        usedDice[c].classList.add("empty");
                        usedDice[c].classList.remove("filled");
                        unusedDice[c].classList.add("filled");
                        unusedDice[c].classList.remove("empty");
                        usedDice[b].classList.add("empty");
                        usedDice[b].classList.remove("filled");
                        unusedDice[b].classList.add("filled");
                        unusedDice[b].classList.remove("empty");
                        usedDice[a].classList.add("empty");
                        usedDice[a].classList.remove("filled");
                        unusedDice[a].classList.add("filled");
                        unusedDice[a].classList.remove("empty");
                    }

                    // If the new round button was up, hide it and put the roll button back.
                    let newRoundCheck = document.getElementById("new-round-button");
                    if (!newRoundCheck.classList.contains("hidden")) {
                        document.getElementById("new-round-button").classList.add("hidden");
                        document.getElementById("roll-dice-button").classList.remove("hidden");
                    }

                    abilityFinished[x] = true;
                }

                if ((x == 4) || (x == 9) || (x == 10)) {
                    // Violin, Meat and Bike
                    for (let y = 0; y < 2; y++) {
                        let element = document.createElement("div");
                        element.setAttribute("class", "wild-space wild");
                        element.setAttribute("id", "ability-complete"+y+"-div"+x);
                        abilityToComplete.appendChild(element);
                        document.getElementById("ability-complete"+y+"-div"+x).textContent = "Wild";
                    }
                    abilityFinished[x] = true;
                }

                if ((x == 1) || (x == 7)) {
                    // Martini and Tophat
                    for (let y = 0; y < 4; y++) {
                        let element = document.createElement("div");
                        element.setAttribute("class", "reroll-space reroll");
                        element.setAttribute("id", "ability-complete"+y+"-div"+x);
                        abilityToComplete.appendChild(element);
                        document.getElementById("ability-complete"+y+"-div"+x).textContent = "#";
                    }
                    abilityFinished[x] = true;
                }

                if ((x == 3) || (x == 0)) {
                    // Key and Apple
                    for (let y = 1; y < 3; y++) {
                        let element = document.createElement("div");

                        // Check current orientation.
                        let shape1Orientation = document.getElementById("shape1");
                        if ((shape1Orientation.classList.contains("rotate-0")) || (shape1Orientation.classList.contains("rotate-180"))) {
                            // present shapes in normal orientation.
                            element.setAttribute("class", "ability-shape-space ability-shape rotate-0");
                        } else {
                            // present shapes in 90 orientation.
                            element.setAttribute("class", "ability-shape-space ability-shape rotate-90");
                        }

                        // element.setAttribute("class", "ability-shape-space ability-shape");
                        element.setAttribute("id", "ability-complete"+y+"-div"+x);
                        abilityToComplete.appendChild(element);
                        document.getElementById("ability-complete"+y+"-div"+x).innerHTML = '<img src="assets/images/abilitypiece'+y+'.png" class="ability-piece ability-piece-'+y+'">';
                    }
                    // Needs event listener etc.
                    abilityFinished[x] = true;
                }
            }
        }
    }
}

// Event listener for wild shapes.
// See event delegation https://davidwalsh.name/event-delegate
document.getElementById("ability4").addEventListener("click", function(e) {
    if (e.target && e.target.matches("div.wild-space")) {
        let currentWildShape = e.target.id;
        wildShapeAbility(currentWildShape);
	}
});

document.getElementById("ability9").addEventListener("click", function(e) {
    if (e.target && e.target.matches("div.wild-space")) {
        let currentWildShape = e.target.id;
        wildShapeAbility(currentWildShape);
	}
});

document.getElementById("ability10").addEventListener("click", function(e) {
    if (e.target && e.target.matches("div.wild-space")) {
        let currentWildShape = e.target.id;
        wildShapeAbility(currentWildShape);
	}
});

/**
 * Upon pressing a wild shape button, activates a dice of a value 13. Shapes are all associated with value 13.
 */
function wildShapeAbility(currentWildShape) {

    confirmation = "cancel";
    paintSpaces(confirmation);
    uncolourElements();
    removePopUp;
    deactivateSpaces();
    deactivateAbilitySpaces();

    let clickedWild = document.getElementById(currentWildShape);

    clickedWild.classList.add("active-wild-space");
    clickedWild.classList.remove("wild-space");

    wildAbilityUse = true;
    dieValue = 13;
    activateSpaces();

}

// Event listener for rerolls.
document.getElementById("ability1").addEventListener("click", function(e) {
    if (e.target && e.target.matches("div.reroll-space")) {
        let currentRerollSpace = e.target.id;
        let spaceToDeactivate = document.getElementById(currentRerollSpace);
        spaceToDeactivate.classList.add("reroll-space-used");
        spaceToDeactivate.classList.remove("reroll-space");
        rerollAbilityUse = true;
        availableDice = [];
        randomiseDice();
	}
});

document.getElementById("ability7").addEventListener("click", function(e) {
    if (e.target && e.target.matches("div.reroll-space")) {
        let currentRerollSpace = e.target.id;
        let spaceToDeactivate = document.getElementById(currentRerollSpace);
        spaceToDeactivate.classList.add("reroll-space-used");
        spaceToDeactivate.classList.remove("reroll-space");
        rerollAbilityUse = true;
        availableDice = [];
        randomiseDice();
	}
});

// Event listener for shape ability.
document.getElementById("ability3").addEventListener("click", function(e) {
    if (e.target && e.target.matches("div.ability-shape-space")) {
        let currentShapeAbility = e.target.id;
        shapeAbility(currentShapeAbility);
	}
});

document.getElementById("ability0").addEventListener("click", function(e) {
    if (e.target && e.target.matches("div.ability-shape-space")) {
        let currentShapeAbility = e.target.id;
        shapeAbility(currentShapeAbility);
	}
});

// Event listener if the image is clicked instead of the div
document.getElementById("ability3").addEventListener("click", function(e) {
    if (e.target && e.target.matches("img.ability-piece")) {
        let imageclicked = e.target;
        let parent = imageclicked.parentNode;
        let currentShapeAbility = parent.id;
        shapeAbility(currentShapeAbility);
	}
});

document.getElementById("ability0").addEventListener("click", function(e) {
    if (e.target && e.target.matches("img.ability-piece")) {
        let imageclicked = e.target;
        let parent = imageclicked.parentNode;
        let currentShapeAbility = parent.id;
        shapeAbility(currentShapeAbility);
	}
});

/**
 * Upon pressing the shape ability, gain ability to place large shape.
 */
function shapeAbility(currentShapeAbility) {

    // Uncolour elements
    uncolourElements();
    removeClickedSpaces();

    let clickedShapeAbility = document.getElementById(currentShapeAbility);

    clickedShapeAbility.classList.add("active-ability-shape");
    clickedShapeAbility.classList.remove("ability-shape-space");

    if (((clickedShapeAbility.id == "ability-complete1-div3") || (clickedShapeAbility.id == "ability-complete1-div0")) && (clickedShapeAbility.classList.contains("rotate-0"))) {
        // Unrotated 3x2
        currentShape = "14-0-0";
    } else if (((clickedShapeAbility.id == "ability-complete1-div3") || (clickedShapeAbility.id == "ability-complete1-div0")) && (clickedShapeAbility.classList.contains("rotate-90"))) {
        // Rotated 3x2
        currentShape = "14-90-0";
    } else if (((clickedShapeAbility.id == "ability-complete2-div3") || (clickedShapeAbility.id == "ability-complete2-div0")) && (clickedShapeAbility.classList.contains("rotate-0"))) {
        // Unrotated 1x5
        currentShape = "15-0-0";
    } else if (((clickedShapeAbility.id == "ability-complete2-div3") || (clickedShapeAbility.id == "ability-complete2-div0")) && (clickedShapeAbility.classList.contains("rotate-90"))) {
        // Rotated 1x5
        currentShape = "15-90-0";
    }

    abilityShapeUse = true;

    // Needs to rotate when rotate button is pressed (and change currentShape)

}