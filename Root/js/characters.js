const info = document.getElementById('info')

const onClick = function(){
    getDetails(this.id)
}

function getDetails(){
    const xhttp = new XMLHttpRequest();
    
}

for(let i = 1; i < 26; i++){
    document.getElementById('character'+i.toString()).onclick = onClick;
}

function changeDetails() {

}