// let instruction = document.querySelector('.instructions');
// let messageFormatInputBox = document.querySelector('.textArea');
let numClass = document.querySelector('.numClass');
let numClassArea = document.querySelector('.numClassArea');
let groupClass = document.querySelector('.groupClass');
let groupClassArea = document.querySelector('.groupClassArea');
let fileClass = document.querySelector('.fileClass');
let fileClassArea = document.querySelector('.fileClassArea');

let radioNumber = document.querySelector('#radioNumber');
    radioNumber.checked = true;
let radioGroups = document.querySelector('#radioGroups');
let radioCSV = document.querySelector('#radioCSV');

let selectAllCheckbox = document.querySelector('#selectAll');
let selectOneCheckbox = document.querySelector('#selectOne');
let selectTwoCheckbox = document.querySelector('#selectTwo');

const radioNumberForamatHandler = () =>{
    if(numClass.className.includes('displayNone') && numClassArea.className.includes('displayNone')){
        numClass.classList.remove('displayNone');
        numClassArea.classList.remove('displayNone');
        
        groupClass.classList.add('displayNone');
        groupClassArea.classList.add('displayNone');
        fileClass.classList.add('displayNone');
        fileClassArea.classList.add('displayNone');

        radioNumber.checked = true;
        radioGroups.checked = false;
        radioCSV.checked = false;
    }
}

const radioGroupsForamatHandler = () =>{
    // document.querySelector('#radioNumber').checked = false;
    // radioNumber.checked = false;
    // radioCSV.checked = false;
    // document.querySelector('#radioGroups').checked = true;
    if(groupClass.className.includes('displayNone') && groupClassArea.className.includes('displayNone')){
        groupClass.classList.remove('displayNone');
        groupClassArea.classList.remove('displayNone');

        numClass.classList.add('displayNone');
        numClassArea.classList.add('displayNone');
        fileClass.classList.add('displayNone');
        fileClassArea.classList.add('displayNone');

        // radioNumber.checked = false;
        // console.log(event.target.checked = true);    
        // radioCSV.checked = false;
        // radioGroups.checked = true;
    }
}

const radioCSVFileForamatHandler = () =>{
    if(fileClass.className.includes('displayNone') && fileClassArea.className.includes('displayNone')){
        fileClass.classList.remove('displayNone');
        fileClassArea.classList.remove('displayNone');

        groupClass.classList.add('displayNone');
        groupClassArea.classList.add('displayNone');
        numClass.classList.add('displayNone');
        numClassArea.classList.add('displayNone');

        // radioCSV.checked = true;
        // radioNumber.checked = false;
        // radioGroups.checked = false;
    }
}

const selectAllGroupsHandler = () =>{
    if(selectAllCheckbox.checked == true){
        selectOneCheckbox.checked = true;
        selectTwoCheckbox.checked = true;
        return;
    }
    selectAllCheckbox.checked = false;
    selectOneCheckbox.checked = false;
    selectTwoCheckbox.checked = false;

}

radioNumber.addEventListener('click', radioNumberForamatHandler);
radioGroups.addEventListener('click', radioGroupsForamatHandler);
radioCSV.addEventListener('click', radioCSVFileForamatHandler);
selectAll.addEventListener('click', selectAllGroupsHandler);