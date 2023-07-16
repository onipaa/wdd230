const mySuperDuperDate = new Date(document.lastModified);

const opt_almost_full = {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "2-digit"
};

const opt_just_year = {
  year: "numeric"
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("datetime").innerHTML = mySuperDuperDate.toLocaleString("en-US", opt_almost_full);
  document.getElementById("lastUpdatedDate").innerHTML = mySuperDuperDate.toLocaleString("en-US", opt_just_year);
});
