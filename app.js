   // Interactive JavaScript
   document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progressBar');
    const notifyBtn = document.getElementById('notifyBtn');

    // Simulate progress
    function calculateProgress() {
        const stages = ['Design', 'Frontend', 'Backend', 'Testing', 'Deployment'];
        const currentStage = Math.floor(Math.random() * stages.length);
        return (currentStage / (stages.length - 1)) * 100;
    }

    // Animate progress bar
    function animateProgressBar() {
        const progress = calculateProgress();
        progressBar.style.width = `${progress}%`;
    }

    // Notify button interaction
    notifyBtn.addEventListener('click', () => {
        const email = prompt('Enter your email to get launch updates:');
        if (email) {
            alert(`Thanks! We'll notify ${email} when we go live. 🚀`);
        }
    });

    // Initial animation
    animateProgressBar();
});