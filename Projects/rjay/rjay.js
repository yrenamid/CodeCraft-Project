document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('audioSource');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const songSelector = document.getElementById('songSelector');

    // Event listener for song selection change
    songSelector.addEventListener('change', function () {
        const selectedSong = songSelector.value;
        audioSource.src = selectedSong;
        audio.load(); // Load the new audio source
        playPauseBtn.textContent = 'Play'; // Reset button text to 'Play'
    });

    // Event listener for play/pause button
    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });
});
