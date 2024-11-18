function toggleNavbar() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}
const fetchJokeBtn = document.getElementById('fetchJokeBtn');
        const jokeDisplay = document.getElementById('joke');
        async function fetchJoke() {
            try {
                const response = await fetch('https://official-joke-api.appspot.com/random_joke');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jokeData = await response.json();
                jokeDisplay.textContent = `${jokeData.setup} - ${jokeData.punchline}`;
            } catch (error) {
                jokeDisplay.textContent = 'Oops! Something went wrong.';
                console.error('Error fetching the joke:', error);
            }
        }
        fetchJokeBtn.addEventListener('click', fetchJoke);
        function submitQuiz() {
            let score = 0;
            const answers = {
                q1: 'd',
                q2: 'a',
                q3: 'b',
                q4: 'b'
            };
            for (let i = 1; i <= 4; i++) {
                const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
                if (selectedOption && selectedOption.value === answers[`q${i}`]) {
                    score++;
                }
            }
            const result = document.getElementById('result');
            result.textContent = `You scored ${score} out of 4!`;
        }