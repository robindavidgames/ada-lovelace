/**
 * Check if a piece of evidence is surrounded.
 */
 function checkSurround() {
    const evidence01Surround = ["v0101", "v0102", "v0103", "v0201", "v0203", "v0301", "v0302", "v0303"];
    const evidence02Surround = ["v0112", "v0113", "v0114", "v0212", "v0214", "v0312", "v0313", "v0314"];
    const evidence03Surround = ["v0209", "v0210", "v0211", "v0309", "v0311", "v0409", "v0410"];
    const evidence04Surround = ["v0513", "v0515", "v0613", "v0614", "v0615"];
    const evidence05Surround = ["v0510", "v0511", "v0512", "v0610", "v0612", "v0710", "v0711", "v0712"];
    const evidence06Surround = ["v0814", "v0815", "v0913", "v0915", "v1013", "v1014", "v1015"];
    const evidence07Surround = ["v0907", "v0908", "v0909", "v1007", "v1009", "v1010", "v1107", "v1110", "v1207", "v1209", "v1210", "v1307", "v1308", "v1309"];
    const evidence08Surround = ["v0918", "v0919", "v0920", "v1018", "v1020", "v1118", "v1119", "v1120"];
    const evidence09Surround = ["v1001", "v1002", "v1003", "v1101", "v1103", "v1104", "v1201", "v1204", "v1301", "v1302", "v1303", "v1304"];
    const evidence10Surround = ["v1210", "v1211", "v1310", "v1312", "v1410", "v1411", "v1412"];
    const evidence11Surround = ["v1412", "v1413", "v1414", "v1512", "v1514"];

    const arrayOfEvidence = [evidence01Surround, evidence02Surround, evidence03Surround, evidence04Surround, evidence05Surround, evidence06Surround, evidence07Surround, evidence08Surround, evidence09Surround, evidence10Surround, evidence11Surround];

    for (let y = 0; y < arrayOfEvidence.length; y++) {
        // Check if the evidence space has been filled and update an array with yes if so.
        let evidenceCheck = [];
        for (let x = 0; x < arrayOfEvidence[y].length; x++) {
            if (document.getElementById(arrayOfEvidence[y][x]).classList.contains("contains-shape")) {
                evidenceCheck.push("yes");
            } else {
                evidenceCheck.push("no");
            }
        }

        // If evidence completely surrounded, upcate the evidenceComplete array, which tracks this.
        let evidenceSurrounded = evidenceCheck.every(checkYes);
        if (evidenceSurrounded) {
            evidenceComplete[y] = true;
            abilityActivation();
        }
    }

    /**
     * Check if the previous evidence check returned yes values for each space.
     */
    function checkYes(value) {
        return value === "yes";
    }
}

/**
 * Check if a room has been filled.
 */
function checkRoom() {
    const room1 = ["v0101", "v0102", "v0103", "v0104", "v0201", "v0203", "v0204", "v0301", "v0302", "v0303", "v0304", "v0401", "v0402", "v0403", "v0404", "v0501", "v0502", "v0503", "v0504", "v0604", "v0704"];
    const room2 = ["v0106", "v0107", "v0108", "v0109", "v0110", "v0111", "v0112", "v0113", "v0114", "v0206", "v0207", "v0208", "v0209", "v0210", "v0211", "v0212", "v0214", "v0306", "v0307", "v0308", "v0309", "v0311", "v0312", "v0313", "v0314", "v0409", "v0410"];
    const room3 = ["v0506", "v0507", "v0508", "v0509", "v0605", "v0606", "v0607", "v0608", "v0609", "v0707", "v0708"];
    const room4 = ["v0510", "v0511", "v0512", "v0513", "v0515", "v0610", "v0612", "v0613", "v0614", "v0615", "v0710", "v0711", "v0712", "v0713", "v0714", "v0715"];
    const room5 = ["v0801", "v0802", "v0803", "v0804", "v0805", "v0901", "v0902", "v0903", "v0904", "v0905", "v1001", "v1002", "v1003", "v1004", "v1005", "v1101", "v1103", "v1104", "v1105", "v1201", "v1204", "v1205", "v1301", "v1302", "v1303", "v1304", "v1305", "v1401", "v1402", "v1403", "v1404", "v1405", "v1502", "v1503", "v1504", "v1505", "v1603", "v1604", "v1605"];
    const room6 = ["v0807", "v0808", "v0907", "v0908", "v0909", "v0910", "v0911", "v1007", "v1009", "v1010", "v1011", "v1107", "v1110", "v1111", "v1207", "v1209", "v1210", "v1211", "v1307", "v1308", "v1309", "v1310", "v1407", "v1408", "v1409", "v1410", "v1411", "v1507", "v1508", "v1509", "v1510", "v1511", "v1607", "v1608", "v1609", "v1610", "v1611"];
    const room7 = ["v0814", "v0815", "v0912", "v0913", "v0915", "v1012", "v1013", "v1014", "v1015", "v1016", "v1112", "v1113", "v1114", "v1115"];
    const room8 = ["v0917", "v0918", "v0919", "v0920", "v1017", "v1018", "v1020", "v1117", "v1118", "v1119", "v1120", "v1219", "v1220"];
    const room9 = ["v1312", "v1313", "v1314", "v1315", "v1316", "v1317", "v1318", "v1319", "v1320", "v1412", "v1413", "v1414", "v1415", "v1416", "v1417", "v1418", "v1419", "v1512", "v1514", "v1515", "v1516", "v1517", "v1518"];

    const arrayOfRooms = [room1, room2, room3, room4, room5, room6, room7, room8, room9];

    for (let y = 0; y < arrayOfRooms.length; y++) {
        // Check if the evidence space has been filled and update an array with yes if so.
        let evidenceCheck = [];
        for (let x = 0; x < arrayOfRooms[y].length; x++) {
            if (document.getElementById(arrayOfRooms[y][x]).classList.contains("contains-shape")) {
                evidenceCheck.push("yes");
            } else {
                evidenceCheck.push("no");
            }
        }

        // If evidence completely surrounded, upcate the evidenceComplete array, which tracks this.
        let roomFilled = evidenceCheck.every(checkYes);
        if (roomFilled) {
            roomComplete[y] = true;
        }
    }

    /**
     * Check if the previous evidence check returned yes values for each space.
     */
    function checkYes(value) {
        return value === "yes";
    }
}
