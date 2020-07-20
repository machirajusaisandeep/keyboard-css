function addGradient(){
    if (document.getElementById('gradient_box').checked){
        document.getElementById('keyboard').classList.add('gradient');
    }else{
        document.getElementById('keyboard').classList.remove('gradient')
    }
}