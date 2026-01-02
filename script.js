// Toggle mode sombre/clair
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    // Change icon
    if(document.body.classList.contains('dark-theme')){
        toggleBtn.textContent = '☀️';
    } else {
        toggleBtn.textContent = '🌙';
    }
});

// Menu dropdown utilisateur
const userBtn = document.getElementById('user-account');
const dropdown = document.getElementById('user-dropdown');

userBtn.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Fermer le dropdown si clic en dehors
window.addEventListener('click', function(e){
    if(!userBtn.contains(e.target) && !dropdown.contains(e.target)){
        dropdown.style.display = 'none';
    }
});

// Générer un cours (simulé)
document.getElementById('generate-course').addEventListener('click', () => {
    const topic = document.getElementById('topic-input').value.trim();
    if(topic){
        alert(`Le cours sur "${topic}" va être généré par IA !`);
        document.getElementById('topic-input').value = '';
    } else {
        alert("Veuillez entrer un sujet pour générer un cours.");
    }
});
