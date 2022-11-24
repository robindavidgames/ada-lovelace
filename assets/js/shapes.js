/**
 * Check current shape rotation and rotate by 90 degrees CW.
 */
 function rotate90Degrees() {
    // removeClickedSpaces();
    confirmation = "cancel";
    paintSpaces(confirmation);

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
    if (currentShape !== "") {
        for (let x = 1; x < 10; x++) {
            if (currentShape == x+"-0-0") {
                currentShape = x+"-90-0";
            } else if (currentShape == x+"-90-0") {
                currentShape = x+"-180-0";
            } else if (currentShape == x+"-180-0") {
                currentShape = x+"-270-0";
            } else if (currentShape == x+"-270-0") {
                currentShape = x+"-0-0";
            } else if (currentShape == x+"-0-1") {
                currentShape = x+"-90-1";
            } else if (currentShape == x+"-90-1") {
                currentShape = x+"-180-1";
            } else if (currentShape == x+"-180-1") {
                currentShape = x+"-270-1";
            } else if (currentShape == x+"-270-1") {
                currentShape = x+"-0-1";
            }
        }
    }
}

/**
 * Check current shape flip and flip horizontal.
 */
 function flipHorizontal() {
    // removeClickedSpaces();
    confirmation = "cancel";
    paintSpaces(confirmation);

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
    if (currentShape !== "") {
        for (let x = 1; x < 10; x++) {
            if (currentShape == x+"-0-0") {
                currentShape = x+"-0-1";
            } else if (currentShape == x+"-90-0") {
                currentShape = x+"-90-1";
            } else if (currentShape == x+"-180-0") {
                currentShape = x+"-180-1";
            } else if (currentShape == x+"-270-0") {
                currentShape = x+"-270-1";
            } else if (currentShape == x+"-0-1") {
                currentShape = x+"-0-0";
            } else if (currentShape == x+"-90-1") {
                currentShape = x+"-90-0";
            } else if (currentShape == x+"-180-1") {
                currentShape = x+"-180-0";
            } else if (currentShape == x+"-270-1") {
                currentShape = x+"-270-0";
            }
        }
    }
}

/**
 * Define the squares that each shape needs to occupy.
 */
function shapeDefiner() {
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
    } else if (currentShape == "1-0-1") {
        adjustSpace(-1, 1);
        adjustSpace(0, 1);
        adjustSpace(1, 1);
        adjustSpace(-2, 1);
    } else if (currentShape == "2-0-1") {
        adjustSpace(0, 1);
        adjustSpace(-1, 1);
        adjustSpace(-2, 1);
    } else if (currentShape == "3-0-1") {
        adjustSpace(-1, 0);
        adjustSpace(-1, 1);
        adjustSpace(-2, 1);
    } else if (currentShape == "4-0-1") {
        adjustSpace(-1, 0);
        adjustSpace(-1, 1);
        adjustSpace(-1, 2);
        adjustSpace(-2, 2);
    } else if (currentShape == "6-0-1") {
        adjustSpace(0, 1);
        adjustSpace(0, 2);
        adjustSpace(-1, 2);
        adjustSpace(-2, 2);
    } else if (currentShape == "9-0-1") {
        adjustSpace(0, 1);
        adjustSpace(-1, 1);
    } else if (currentShape == "1-90-1") {
        adjustSpace(-1, -1);
        adjustSpace(-1, 0);
        adjustSpace(-1, 1);
        adjustSpace(-1, -2);
    } else if (currentShape == "2-90-1") {
        adjustSpace(-1, 0);
        adjustSpace(-1, -1);
        adjustSpace(-1, -2);
    } else if (currentShape == "3-90-1") {
        adjustSpace(0, -1);
        adjustSpace(-1, -1);
        adjustSpace(-1, -2);
    } else if (currentShape == "4-90-1") {
        adjustSpace(0, -1);
        adjustSpace(-1, -1);
        adjustSpace(-2, -1);
        adjustSpace(-2, -2);
    } else if (currentShape == "6-90-1") {
        adjustSpace(-1, 0);
        adjustSpace(-2, 0);
        adjustSpace(-2, -1);
        adjustSpace(-2, -2);
    } else if (currentShape == "9-90-1") {
        adjustSpace(-1, 0);
        adjustSpace(-1, -1);
    } else if (currentShape == "1-180-1") {
        adjustSpace(2, -1);
        adjustSpace(1, -1);
        adjustSpace(0, -1);
        adjustSpace(-1, -1);
    } else if (currentShape == "2-180-1") {
        adjustSpace(2, -1);
        adjustSpace(1, -1);
        adjustSpace(0, -1);
    } else if (currentShape == "3-180-1") {
        adjustSpace(1, 0);
        adjustSpace(1, -1);
        adjustSpace(2, -1);
    } else if (currentShape == "4-180-1") {
        adjustSpace(1, 0);
        adjustSpace(1, -1);
        adjustSpace(1, -2);
        adjustSpace(2, -2);
    } else if (currentShape == "6-180-1") {
        adjustSpace(0, -1);
        adjustSpace(0, -2);
        adjustSpace(1, -2);
        adjustSpace(2, -2);
    } else if (currentShape == "9-180-1") {
        adjustSpace(0, -1);
        adjustSpace(1, -1);
    } else if (currentShape == "1-270-1") {
        adjustSpace(1, 2);
        adjustSpace(1, 1);
        adjustSpace(1, 0);
        adjustSpace(1, -1);
    } else if (currentShape == "2-270-1") {
        adjustSpace(1, 2);
        adjustSpace(1, 1);
        adjustSpace(1, 0);
    } else if (currentShape == "3-270-1") {
        adjustSpace(0, 1);
        adjustSpace(1, 1);
        adjustSpace(1, 2);
    } else if (currentShape == "4-270-1") {
        adjustSpace(0, 1);
        adjustSpace(1, 1);
        adjustSpace(2, 1);
        adjustSpace(2, 2);
    } else if (currentShape == "6-270-1") {
        adjustSpace(1, 0);
        adjustSpace(2, 0);
        adjustSpace(2, 1);
        adjustSpace(2, 2);
    } else if (currentShape == "9-270-1") {
        adjustSpace(1, 0);
        adjustSpace(1, 1);
    } else {
        console.log("Error: Undefined shape selected.");
    }
    return;
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