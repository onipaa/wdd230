const mySuperDuperDate = new Date(document.lastModified);

const opt_almost_full = {
     weekday: "long",
     month: "long",
     year: "numeric",
     day: "2-digit"
}

document.getElementById("datetime").innerHTML = mySuperDuperDate.toLocaleString("en-US", opt_almost_full);
document.getElementById("copyrightYear").innerHTML = mySuperDuperDate.getFullYear();
document.getElementById("lastUpdateDate").innerHTML = mySuperDuperDate.toLocaleString("en-US", opt_almost_full);