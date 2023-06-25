const mySuperDuperDate = new Date(document.lastModified);

const opt_almost_full = {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "2-digit"
};

document.addEventListener("DOMContentLoaded", function() {
  // wait until the dom is fully loaded before trying to get the innerHTML 
  // datetime, which is throwing a blasted cannot set properties of null
  // AARRGGHH!!!
  document.getElementById("datetime").innerHTML = mySuperDuperDate.toLocaleString("en-US", opt_almost_full);
});
