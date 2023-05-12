const mySuperDuperDate = new Date(document.lastModified);
const mySuperDuperYear = mySuperDuperDate.getFullYear();
const mySuperDuperHours = ('0' + mySuperDuperDate.getHours()).slice(-2);
const mySuperDuperMinutes = ('0' + mySuperDuperDate.getMinutes()).slice(-2);
const mySuperDuperSeconds = ('0' + mySuperDuperDate.getSeconds()).slice(-2);

/* 
     I keep getting pesky null object errors. So, I'll make the object first 
     then assign values to them.

     I needed to create an instance of a date and then assign that not-null value
     to my datetime. I also wanted to match the format that Brother Blazzard had
     in his example Dayofweek Month, Day-numeric, Year-numeric. It looks like
     dateStyle: "medium" comes super close.
*/


const options = {
     weekday: "long",
     month: "long",
     year: "numeric",
     day: "2-digit"
}

document.getElementById("datetime").innerHTML = mySuperDuperDate.toLocaleString("en-US", options);