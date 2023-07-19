const inpGivenNames = document.getElementById('givenName');
const errGivenNames = document.getElementById('errGivenName');

const inpCellPhone = document.getElementById('cellPhone');
const errCellPhone = document.getElementById('errCellPhone');

const inpBusinessTitle = document.getElementById('businessTitle')
const errBusinessTitle = document.getElementById('errBusinessTitle')

const inpEmailAddress = document.getElementById('emailAddress');
const errEmailAddress = document.getElementById('errEmailAddress');


function validateInputName() {
    /*
    pattern1: starts with + [any letter combo + space] + at least one or more + end

    pattern2: /^[+]*[0-9]{1,3}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
        ^               - start with
        [+]*            - matches zero or more "+" signs
        [0-9]{1,3}      - 1 to 3 digit counry codes
        [(]{0,1}        - zero or 1 "("
        [0-9]{1,4}      - one to four numbers
        [)]{0,1}        - zero or 1 ")"
        [-\s\./0-9]*    - whitespace \s dashes - dots . or numbers zero or more
        $               - end
        g               - gloal search
        s               - single line if I wanted to
    
    pattern3: /^[a-zA-z0-9 \-]{7,}$/ig
        ^               - starts with
        [a-zA-Z0-9 \-]+ - alpha numeric space or hyphen
        {7,}            - at least 7 or more characters
        $               - end
        g               - global search
        i               - ignore case
    */

    const NamePattern = /^[a-zA-Z0-9\s]+$/;
    const inpGivenNamesValue = inpGivenNames.value;

    const inpBusinessTitleValue = inpBusinessTitle.value;

    if (NamePattern.test(inpGivenNamesValue)) {
        // everthang is okay
        errGivenNames.textContent = '';
        console.log('A OK on the Given Name!')
    } else {
        errGivenNames.textContent = 'Invalid input. Please use only alphanumeric characters.';
        inpGivenNames.focus();
    }
}

function validateInputCell() {
    const CellPattern = /^[+]{0,1}[\s0-9]{1,5}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{8,}$/g
    const inpCellPhoneValue = inpCellPhone.value;

    if (CellPattern.test(inpCellPhoneValue)) {
        errCellPhone.textContent = '';
        console.log('A OK on the Cell Phone!');
    } else {
        errCellPhone.textContent = 'Invalid input. Please insert a phone number with the following format +### (###) ###-####.'
        inpCellPhone.focus();
    }
}

function validateInputTitle() {
    const TitlePattern = /^[a-zA-Z0-9\s\-]{7,}$/g;
    const inpTitleValue = inpBusinessTitle.value;

    if (TitlePattern.test(inpTitleValue)) {
        errBusinessTitle.textContent = '';
        console.log('A OK on the Title!');
    } else {
        errBusinessTitle.textContent = 'Invalid input. Please use a title that is at least 7 alpha numeric characters.';
        inpBusinessTitle.focus();
    }
}

function validateInputEmail() {
    const emailPattern = /^[\w\.-]+@[\w\.-]+\.\w{2,4}$/ig
    /* ok one more
        ^                   - starts with
        [\w\.-]+            - any \w(ord) . or - combo (at least one)
        @                   - duh
        [\w\.-]+\.\w{2,4}   - any word . or - one or more  a dot and some domain with at least 2 to 4 characters
        $                   - end
    */

    const inputEmailValue = inpEmailAddress.value;

    if (emailPattern.test(inputEmailValue)) {
        errEmailAddress.textContent = '';
        console.log('A OK on Email!');
    } else {
        errEmailAddress.textContent = 'Invalid input. Please enter a valid email address.';
        inpEmailAddress.focus();
    }
}

// add listeners
inpGivenNames.addEventListener('blur', validateInputName);
inpCellPhone.addEventListener('blur', validateInputCell);
inpBusinessTitle.addEventListener('blur', validateInputTitle);
inpEmailAddress.addEventListener('blur', validateInputEmail);
