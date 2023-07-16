const inpGivenNames = document.getElementById('givenName');
const errGivenNames = document.getElementById('errGivenName');



function validateInput() {
    /*
    can folks have numbers in their names? I think we are looking for at 
    least 1 letter and spaces. For example, my father-in-law has "K" for his
    middle name. But, it doesn't stand for anything. His dad was a mean S.O.B.
    (sweet onion bisket). He decided to give Gene the middle initial K, but
    that's it so Gene would have to explain it all the time. Oh! and so kids
    would give Gene a hard time about it.
    pattern1: starts with + [any letter combo + space] + at least one or more + end

    pattern2: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
        ^               - start with
        [+]*            - matches zero or more "+" signs
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

    constNamePattern = /^[a-zA-Z ]+$/;
    constCellPattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
    constTitlePattern = /^[a-zA-z0-9 \-]{7,}$/g



    const inpGivenNamesValue = inpGivenNames.value;

    if (constNamePattern.test(inpGivenNamesValue)) {
        // everthang is okay
        errGivenNames.textContent = '';
        console.log('A OK on the Given Name!')
    } else {
        errGivenNames.textContent = 'Invalid input. Please use only alphanumeric characters.';
        inpGivenNames.focus();
    }

}

// add listeners
inpGivenNames.addEventListener('blur', validateInput);


