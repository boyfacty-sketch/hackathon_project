function goToDashboard() {
    window.location.href = "dashboard.html";
}

window.onload = () => {
    document.querySelector(".hero").classList.add("show");

    setTimeout(() => {
        document.querySelector(".features").classList.add("show");
    }, 300);
};
function goToUpload() {
    window.location.href = "upload.html";
}

function goToHistory() {
    window.location.href = "history.html";
}

function goToShare() {
    window.location.href = "share.html";
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".upload-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Record Uploaded Successfully!");
        });
    }
});
function shareRecords() {
    alert("Records Shared Successfully!");
}