const mySuperDuperDate = new Date(document.lastModified);
const mySuperDuperYear = mySuperDuperDate.getFullYear();
const mySuperDuperHours = ('0' + mySuperDuperDate.getHours()).slice(-2);
const mySuperDuperMinutes = ('0' + mySuperDuperDate.getMinutes()).slice(-2);
const mySuperDuperSeconds = ('0' + mySuperDuperDate.getSeconds()).slice(-2);

/* 
     I keep getting pesky null object errors. So, I'll make the object first 
     then assign values to them.
*/
document.createElement('copyrightYear')
document.createElement('lastUpdatedDate')

document.getElementById('copyrightYear').innerHTML = mySuperDuperYear
document.getElementById('lastUpdatedDate').innerHTML = `${mySuperDuperDate.getDate()}/${mySuperDuperDate.getMonth()}/${mySuperDuperDate.getFullYear()} ${mySuperDuperHours}:${mySuperDuperMinutes}:${mySuperDuperSeconds}`