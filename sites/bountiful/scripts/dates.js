document.addEventListener("DOMContentLoaded", function() {
  const mySuperDuperDate = new Date(document.lastModified);

  const opt_almost_full = {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "2-digit"
  };

  const opt_just_year = {
    year: "numeric"
  };

  document.getElementById("copyrightYear").innerHTML = mySuperDuperDate.toLocaleString("en-US", opt_just_year);
});
