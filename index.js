document.addEventListener("DOMContentLoaded", function () {
    // Select the elements
    var loadingGRB = document.querySelector('.Loading_GRB');
    var loadGrbLabels = document.querySelectorAll('#load_grb');
    var pagesDiv = document.querySelector('.Pages');

    // Hide the loading content after the animation is loaded
    setTimeout(function () {
        loadingGRB.style.display = 'none';
        // Show the Pages div
        pagesDiv.style.display = 'block';
    }, (loadGrbLabels.length + 1) * 1000); // Adjust the timeout based on the number of load_grb labels
});
