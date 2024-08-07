let teamAName = "";
let teamBName = "";

function enterTeamName(team) {
    const teamName = prompt(`Lütfen ${team === 'A' ? 'Ev Sahibi' : 'Konuk'} Takımının Adını Girin:`);
    if (teamName.length !== 0) {
        if ((team === 'A' && teamName === teamBName) || (team === 'B' && teamName === teamAName)) {
            alert("İki takımın adı aynı olamaz! Lütfen farklı bir ad girin.");
            return;
        }
        const teamHeader = document.querySelector(`#${team === 'A' ? 'teamA' : 'teamB'} h2`);
        teamHeader.innerText = teamName;
        document.getElementById(`team${team === 'A' ? 'A' : 'B'}`).querySelector('button').style.display = 'none';
        document.getElementById("startChoose").style.display = 'none';
        document.getElementById(`score${team}`).style.display = 'block';
        document.getElementById(`increaseScore${team}`).style.display = 'block';
        document.getElementById(`resetScore${team}`).style.display = 'block';
        document.getElementById(`reduceScore${team}`).style.display = 'block';
        
        if (team === 'A') {
            teamAName = teamName;
        } else {
            teamBName = teamName;
        }
        
        if (teamAName.length !== 0 && teamBName.length !== 0) {
            document.getElementById('endMatchButton').style.display = 'block';
        }
    }else {
        alert("Lütfen Geçerli Bir Takım İsmi Giriniz!");
    }
}


function increaseScore(team) {
    const teamScoreElement = document.getElementById(`score${team}`);
    let score = parseInt(teamScoreElement.innerText);
    teamScoreElement.innerText = ++score;
}

function reduceScore(team) {
    const teamScoreElement = document.getElementById(`score${team}`);
    let score = parseInt(teamScoreElement.innerText);
    if (score > 0) {
        teamScoreElement.innerText = --score;
    }
}

function resetScore(team) {
    const teamScoreElement = document.getElementById(`score${team}`);
    teamScoreElement.innerText = 0;
}

function resetPage() {
    window.location.reload();
}
function endMatch() {
    const scoreA = document.getElementById('scoreA').innerText;
    const scoreB = document.getElementById('scoreB').innerText;
    const teamNameA = document.querySelector('#teamA h2').innerText;
    const teamNameB = document.querySelector('#teamB h2').innerText;
    const resultContainer = document.getElementById('showResults');

    let resultMessage;

    if (scoreA > scoreB) {
        resultMessage = `Maç Bitti!<br> <br>
        ${teamNameA} ${scoreA} - ${scoreB} ${teamNameB}<br> <br>
        Kazanan Takım: ${teamNameA}`;
    }
    else if (scoreA === scoreB) {
        resultMessage=`Maç Bitti!<br> <br>
        ${teamNameA} ${scoreA} - ${scoreB} ${teamNameB}<br> <br>
        Maç Berabere Bitti!`;
    }
    else {
        resultMessage=`Maç Bitti!<br> <br>
        ${teamNameA} ${scoreA} - ${scoreB} ${teamNameB}<br> <br>
        Kazanan Takım: ${teamNameB}`;
    }
    resultContainer.innerHTML = '<p>' + resultMessage + '</p>';
    resultContainer.style.display = 'block'; 
    document.getElementById("teamA").style.display = 'none'; 
    document.getElementById("teamB").style.display = 'none'; 
    document.getElementById('endMatchButton').style.display = 'none';
    document.getElementById('reloadPageButton').style.display = 'block';
}

function reloadPage() {
    location.reload();
}