// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


function toggleSyllabus(id) {
    const content = document.getElementById(id);
    const arrow = content.previousElementSibling.querySelector('.arrow');
    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.innerHTML = "&#9660;";
    } else {
        content.style.display = "block";
        arrow.innerHTML = "&#9650;";
    }
}

function downloadPDF(sectionTitle, syllabusId) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(`${sectionTitle} Syllabus`, 10, 10);
    
    const syllabus = document.getElementById(syllabusId);
    const syllabusText = syllabus.textContent || syllabus.innerText;
    doc.text(syllabusText, 10, 20);
    doc.save(`${sectionTitle}_Syllabus.pdf`);
}
