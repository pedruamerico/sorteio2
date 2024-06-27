document.getElementById('startRace').addEventListener('click', startRace);

function startRace() {
    const horses = document.querySelectorAll('.horse');
    let raceInProgress = true;

    horses.forEach(horse => {
        horse.style.left = '0px';
    });

    function moveHorses() {
        if (!raceInProgress) return;
        horses.forEach(horse => {
            const currentPos = parseInt(horse.style.left) || 0;
            const randomMove = Math.floor(Math.random() * 10);
            horse.style.left = currentPos + randomMove + 'px';

            if (currentPos + randomMove >= document.querySelector('.race-track').offsetWidth - horse.offsetWidth) {
                raceInProgress = false;
                document.getElementById('winner').innerText = horse.querySelector('span').innerText + ' venceu!';
            }
        });
        if (raceInProgress) requestAnimationFrame(moveHorses);
    }

    moveHorses();
}
