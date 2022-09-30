const getSelectButton = document.querySelectorAll('.button')
for (let singleButton of getSelectButton) {
    singleButton.addEventListener('click', function (event) {
        // console.log(event.target.parentNode.childNodes);
        const singleplayers = event.target.parentNode.childNodes[3].firstElementChild.innerText;
        const setTextPlayer = document.getElementById('setPlayers');
        const playerEror = setTextPlayer.childNodes.length;
        if (playerEror > 5) {
            alert('Sorry You cant select more than five Players')
            return;
        }
        const listItem = document.createElement('li');
        listItem.innerText = singleplayers;
        const setPlayer = setTextPlayer.appendChild(listItem);
        setPlayer.style.color = 'white';
        setPlayer.style.fontSize = '20px'
    })
}