const charPrev = document.getElementById('char-prev');
const charName = document.getElementById('char-name');
const charOccupation = document.getElementById('char-occupation');
const charDesc = document.getElementById('char-desc');
const char = document.querySelector('.character');

const onClick = function(){
    let number = Number(this.id.slice(this.id.indexOf('e')+2)) - 1;
    getDetails(number);
    selectCharacter(this.id, number);
}

function getDetails(char_id){
    fetch('./js/details.json')
        .then(res => res.json())
        .then(function(data){
            let first_name = data.details[char_id].name
            if(first_name.indexOf(' ') === -1){
                charPrev.src = "./img/character_previews/" + first_name.slice(0).toLowerCase() + '.jpg';
            }
            else{
                charPrev.src = "./img/character_previews/" + first_name.slice(0, first_name.indexOf(' ')).toLowerCase() + '.jpg';
            }
            
            charName.innerHTML = '<h2>' + data.details[char_id].name + '</h2>';
            charOccupation.innerHTML = '<p><b>' + 'Occupation: ' + '</b>' + data.details[char_id].occupation + '</p>';
            charDesc.innerHTML = '<p>' + data.details[char_id].desc + '<p>';
        })
}

function selectCharacter(char_id, number){
    number += 1;
    for(let i = 1; i < 26; i++){
        if(i == number){
            document.getElementById(char_id).style.border = "2px solid lime";
        }
        else{
            document.getElementById("character"+i.toString()).style.border = "2px solid transparent";
        }
    }
}

for(let i = 1; i < 26; i++){
    document.getElementById('character'+i.toString()).onclick = onClick;
}