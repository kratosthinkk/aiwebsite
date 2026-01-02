document.getElementById('generate-course').addEventListener('click', () => {
    const topic = document.getElementById('topic-input').value.trim();
    if(topic) {
        alert(`Le cours sur "${topic}" va être généré par IA !`);
        document.getElementById('topic-input').value = '';
    } else {
        alert("Veuillez entrer un sujet pour générer un cours.");
    }
});

