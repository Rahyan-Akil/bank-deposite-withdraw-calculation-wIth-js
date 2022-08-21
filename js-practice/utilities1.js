function getInputFieldValueById1(inputFieldId1){
    /* common file /utilities1 e inputField1 argument pathaisi cause deposite1 ba withdraw1 file access korte hole  thake function call dewar por pera meter pathaile jate ei funciton gula te parameter ta access korte pare  */
    const inputField1 = document.getElementById(inputFieldId1);
    inputFieldValueString1 =inputField1.value;
    const inputFieldValue1 = parseFloat(inputFieldValueString1);
    inputField1.value = '';
    return inputFieldValue1;
}

/* get Textelementvalue */
function getTextElementValueById1(elementId1){
    /* common file /utilities1 e elementId1 argument pathaisi cause deposite1 ar withdraw one thake function call dewar por pera meter pathaile jate ei funciton gula te parameter ta access korte pare  */
    const textElement1 = document.getElementById(elementId1);
    const textElementValueString1 = textElement1.innerText;
    const textElementValue1 = parseFloat(textElementValueString1)
    return textElementValue1;
}

function setTextElementValueById1(elementId1,newValue1){/* ekhane elementId1 e id ar newValue1 a value ta set korbo  */
    /* common file/utilities1 e inputField1 argument pathaisi cause deposite1 ar withdraw one thake function call dewar por pera meter pathaile jate ei funciton gula te parameter ta access korte pare  */

    const textElement1 = document.getElementById(elementId1);
    textElement1.innerText = newValue1;
}