// Select the HTML element to manipulate
const date = new Date(document.lastModified);
const year = date.getFullYear();

document.getElementById("myDate").innerHTML = date;
document.getElementById("myYear").innerHTML = year;