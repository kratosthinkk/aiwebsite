
// Données utilisateur simulées
let totalCourses = 0;
let points = 0;
let dayStreak = 0;

const totalCoursesSpan = document.getElementById('total-courses');
const pointsSpan = document.getElementById('points');
const dayStreakSpan = document.getElementById('day-streak');
const courseList = document.getElementById('course-list');

// Ajouter un nouveau cours
document.getElementById('new-course').addEventListener('click', () => {
    const courseName = prompt("Nom du cours :");
    if(courseName) {
        addCourse(courseName);
    }
});

// Générer un cours par IA (simulation)
document.getElementById('generate-course').addEventListener('click', () => {
    const topic = document.getElementById('topic-input').value;
    if(topic) {
        addCourse(`Cours IA : ${topic}`);
        document.getElementById('topic-input').value = '';
        points += 10; // gain de points
        updateStats();
    }
});

function addCourse(name) {
    totalCourses++;
    updateStats();

    const li = document.createElement('li');
    li.textContent = name;
    courseList.appendChild(li);
}

function updateStats() {
    totalCoursesSpan.textContent = totalCourses;
    pointsSpan.textContent = points;
    dayStreakSpan.textContent = dayStreak;
}
