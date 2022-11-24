/**
 * Ability spaces activate if the chosen die is valid.
 */
 function activateAbilitySpaces(dieValue) {
    for (let x = 0; x < 11; x++) {
        // If the ability is not inactive.
        let currentAbility = document.getElementById("ability"+x);
        if (!currentAbility.classList.contains("inactive-ability")) {
            console.log(`Ability ${x} is active.`)
            let abilityDieSpace1 = document.getElementById("ability"+x+"-space1");
            let abilityDieSpace2 = document.getElementById("ability"+x+"-space2");

            // If the two spaces are empty.
            if (abilityDieSpace1.innerText == "" && abilityDieSpace2.innerText == "") {
                console.log(`Dice spaces for ability ${x} are empty.`)
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
            ability1die2.classList.add("ability-space-available");
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
        if (abilityValue + dieValue > 5) {
            ability3die2.classList.add("ability-space-available");
        }
    } else if (ability3die2.innerText != "") {
        let abilityValue = parseInt(ability3die2.innerText);
        if (abilityValue + dieValue > 5) {
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
        if ((abilityValue == dieValue) || (abilityValue - 1 == dieValue)) {
            ability6die2.classList.add("ability-space-available");
        }
    } else if (ability6die2.innerText != "") {
        let abilityValue = parseInt(ability6die2.innerText);
        if ((abilityValue == dieValue) || (abilityValue - 1 == dieValue)) {
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
        if ((abilityValue == dieValue) || (abilityValue - 1 == dieValue)) {
            ability8die2.classList.add("ability-space-available");
        }
    } else if (ability8die2.innerText != "") {
        let abilityValue = parseInt(ability8die2.innerText);
        if ((abilityValue == dieValue) || (abilityValue - 1 == dieValue)) {
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