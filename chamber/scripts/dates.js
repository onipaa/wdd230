// Select the HTML element to manipulate
var date = new Date(document.lastModified);
var year = date.getFullYear();
document.getElementById("myDate").innerHTML = date;
document.getElementById("myYear").innerHTML = year;
