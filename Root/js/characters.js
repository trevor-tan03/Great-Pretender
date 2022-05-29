const charPrev = document.getElementById('char-prev');
const charName = document.getElementById('char-name');
const charBirth = document.getElementById('char-birth');
const charDesc = document.getElementById('char-desc');

const onClick = function(){
    let number = Number(this.id.slice(this.id.indexOf('e')+2)) - 1;
    getDetails(number);
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
            charBirth.innerHTML = '<p><b>' + 'Place of birth: ' + '</b>' + data.details[char_id].birth + '</p>';
            charDesc.innerHTML = '<p>' + data.details[char_id].desc + '<p>';
        })
}

for(let i = 1; i < 26; i++){
    document.getElementById('character'+i.toString()).onclick = onClick;
}