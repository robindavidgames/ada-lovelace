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

    // if ((currentAbility.getAttribute("id") == "ability2") || (currentAbility.getAttribute("id") == "ability5") && emptySpace) {
    //     console.log("Ability2 or Ability5 with one available space.");
    //     if (abilityDieSpace1.innerText != "") {
    //         let abilityValue = parseInt(abilityDieSpace1.innerText);
    //         if ((abilityValue + dieValue == 6) || (abilityValue + dieValue == 7) || (abilityValue + dieValue == 8)) {
    //             abilityDieSpace2.classList.add("ability-space-available");
    //         }
    //     } else if (abilityDieSpace2.innerText != "") {
    //         let abilityValue = parseInt(abilityDieSpace2.innerText);
    //         if (abilityValue + dieValue == 6 || 7 || 8) {
    //             abilityDieSpace1.classList.add("ability-space-available");
    //         }
    //     }
    // } 

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

    // Ability 4 () with 1 empty space.

    // Ability 5 () with 1 empty space.

    // Ability 6 () with 1 empty space.

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

    // Ability 8 () with 1 empty space.

    // Ability 9 () with 1 empty space.

    // Ability 10 () with 1 empty space.

    // Ability 11 () with 1 empty space.

    // if (currentAbility.getAttribute("id") == "ability1" && emptySpace) {
    //     console.log("Ability1 with one available space.");
    //     if (abilityDieSpace1.innerText != "") {
    //         let abilityValue = parseInt(abilityDieSpace1.innerText);
    //         if (abilityValue + dieValue == 8 || 9) {
    //             abilityDieSpace2.classList.add("ability-space-available");
    //         }
    //     } else if (abilityDieSpace2.innerText != "") {
    //         let abilityValue = parseInt(abilityDieSpace2.innerText);
    //         if (abilityValue + dieValue == 8 || 9) {
    //             abilityDieSpace1.classList.add("ability-space-available");
    //         }
    //     }
    // }
    
    // if (currentAbility.getAttribute("id") == "ability3" && emptySpace) {
    //     console.log("Ability3 with one available space.");
    //     if (abilityDieSpace1.innerText != "") {
    //         let abilityValue = parseInt(abilityDieSpace1.innerText);
    //         if (abilityValue + dieValue < 5) {
    //             abilityDieSpace2.classList.add("ability-space-available");
    //         }
    //     } else if (abilityDieSpace2.innerText != "") {
    //         let abilityValue = parseInt(abilityDieSpace2.innerText);
    //         if (abilityValue + dieValue < 5) {
    //             abilityDieSpace1.classList.add("ability-space-available");
    //         }
    //     }
    // }
    
    // if ((currentAbility.getAttribute("id") == "ability8") || (currentAbility.getAttribute("id") == "ability6") && emptySpace) {
    //     console.log("Ability8 or Ability6 with one available space.");
    //     if (abilityDieSpace1.innerText != "") {
    //         let abilityValue = parseInt(abilityDieSpace1.innerText);
    //         if (abilityValue == dieValue) {
    //             abilityDieSpace2.classList.add("ability-space-available");
    //         }
    //     } else if (abilityDieSpace2.innerText != "") {
    //         let abilityValue = parseInt(abilityDieSpace2.innerText);
    //         if (abilityValue == dieValue) {
    //             abilityDieSpace1.classList.add("ability-space-available");
    //         }
    //     }
    // }
    
    // if ((currentAbility.getAttribute("id") == "ability4") || (currentAbility.getAttribute("id") == "ability9") || (currentAbility.getAttribute("id") == "ability10") && emptySpace) {
    //     console.log("Ability4, Ability9 or Ability10 with one available space.");
    //     if (abilityDieSpace1.innerText != "") {
    //         let abilityValue = parseInt(abilityDieSpace1.innerText);
    //         if (abilityValue == (dieValue + 1) || (dieValue - 1)) {
    //             abilityDieSpace2.classList.add("ability-space-available");
    //         }
    //     } else if (abilityDieSpace2.innerText != "") {
    //         let abilityValue = parseInt(abilityDieSpace2.innerText);
    //         if (abilityValue == (dieValue + 1) || (dieValue - 1)) {
    //             abilityDieSpace1.classList.add("ability-space-available");
    //         }
    //     }
    // }
    
    // if (currentAbility.getAttribute("id") == "ability7" && emptySpace) {
    //     console.log("Ability7 with one available space.");
    //     if (abilityDieSpace1.innerText != "") {
    //         let abilityValue = parseInt(abilityDieSpace1.innerText);
    //         if (abilityValue + dieValue == 5 || 6) {
    //             abilityDieSpace2.classList.add("ability-space-available");
    //         }
    //     } else if (abilityDieSpace2.innerText != "") {
    //         let abilityValue = parseInt(abilityDieSpace2.innerText);
    //         if (abilityValue + dieValue == 5 || 6) {
    //             abilityDieSpace1.classList.add("ability-space-available");
    //         }
    //     }
    // }
    
    
        
}