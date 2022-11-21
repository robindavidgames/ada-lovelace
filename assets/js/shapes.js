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