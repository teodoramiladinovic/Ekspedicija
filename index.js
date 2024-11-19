const dugme = document.getElementById("dugme");

function sledecaStranica() {
    let ponudaDiv = document.getElementById("ponuda");
    ponudaDiv.scrollIntoView({ behavior: 'smooth' });
}

dugme.addEventListener("click", sledecaStranica);




