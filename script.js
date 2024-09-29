// Function to start the survey
function startSurvey() {
    window.location.href = 'survey.html'; // Ensure this matches your file name
}

// Function to navigate to the contact us page
function contactUs() {
    window.location.href = 'contact.html'; // Ensure this matches your contact page file name
}

// Add event listeners for emoji buttons in the survey
const emojiButtons = document.querySelectorAll('.emoji-btn');
emojiButtons.forEach(button => {
    button.addEventListener('click', function() {
        const feeling = this.getAttribute('data-feeling');
        let moodPage = 'mood.html'; // Default mood page

        // Change the moodPage based on user feeling
        if (feeling === 'happy') {
            moodPage = 'happy.html';
        } else if (feeling === 'anxious') {
            moodPage = 'anxious.html';
        } else if (feeling === 'sad') {
            moodPage = 'sad.html';
        } else if (feeling === 'confident') {
            moodPage = 'confident.html';
        } else if (feeling === 'overwhelmed') {
            moodPage = 'overwhelmed.html';
        }

        // Redirect to the mood page
        window.location.href = moodPage;
    });
});
