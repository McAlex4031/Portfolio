function showPage(pageId) {

    document.querySelectorAll('.page').forEach(p => {
        p.style.display = 'none';
    });

    document.getElementById(pageId).style.display = 'block';

    if (pageId === 'projets') {
        filterProjects('all');
    }
}

function filterProjects(category) {

    let projects = document.querySelectorAll('.project-card');
    let empty = document.querySelectorAll('.empty-message');

    let found = false;

    projects.forEach(p => {
        let cat = p.getAttribute('data-category');

        if (category === 'all' || cat === category) {
            p.style.display = 'block';
            found = true;
        } else {
            p.style.display = 'none';
        }
    });

    empty.forEach(e => {
        let cat = e.getAttribute('data-category');

        if (cat === category && !found) {
            e.style.display = 'block';
        } else {
            e.style.display = 'none';
        }
    });
}

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onload = () => {
    showPage('accueil');
};
