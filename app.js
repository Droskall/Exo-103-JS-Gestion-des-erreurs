let resultss = document.getElementById('resultss');

try {
    resultss.innerHTML = "text au choix";
}
catch (johncena){
    alert(`
    
    Error message: ${johncena.message}`

    )
}