
const numeroInput = document.getElementById("numero");
const nomInput = document.getElementById("nom");
const dateInput = document.getElementById("dateNaissance");
const mentionInput = document.getElementById("mention");
const niveauInput = document.getElementById("niveau");
const ajouterBtn = document.getElementById("btAjouter");
const studentTable = document.getElementById("studentTable");
const rechercheInput = document.getElementById("rechercher")

ajouterBtn.addEventListener("click", ()=>{
 const num = numeroInput.value.trim();
 const nom = nomInput.value.trim();
 const date = dateInput.value.trim();
 const mention = mentionInput.value.trim();
 const niveau = niveauInput.value.trim();

 if((num ==="") || 
 (nom ==="") || 
 (date === "") || 
 (mention === "") ||
 (niveau === "")){
    alert("veuillez completer les formulaires");
    return;
 }

 const tr = document.createElement("tr");
 const btndelete = document.createElement("button");
 btndelete.textContent = "Supprimer";
 const btnEdit = document.createElement("button");
 btnEdit.textContent = "Modifier";
 const tdnumero = document.createElement("td");
 tdnumero.textContent = num;
 const tdnom = document.createElement("td");
 tdnom.textContent = nom;
 const tddate = document.createElement("td");
 tddate.textContent= date;
 const tdmention = document.createElement("td");
 tdmention.textContent = mention;
 const tdniveau = document.createElement("td");
tdniveau.textContent = niveau;
const tdaction = document.createElement("td");

tdaction.appendChild (btndelete);
tdaction.appendChild (btnEdit);

tr.appendChild(tdnumero);
tr.appendChild(tdnom);
tr.appendChild(tddate);
tr.appendChild(tdmention);
tr.appendChild(tdniveau);
tr.appendChild(tdaction);

studentTable.appendChild(tr);
//recherche
rechercheInput.addEventListener("input", () => {

    const recherche = rechercheInput.value.toLowerCase();

    const lignes = studentTable.querySelectorAll("tr");

    lignes.forEach((ligne) => {

        const texte = ligne.textContent.toLowerCase();

        if (texte.includes(recherche)) {
            ligne.style.display = "";
        } else {
            ligne.style.display = "none";
        }

    });

});

//supprimer 
btndelete.addEventListener("click", ()=>{
   if(confirm("voulez vous supprimer")){
      tr.remove();
   }
  })

  //modifier
  btnEdit.addEventListener("click", ()=>{
    numeroInput.value = tdnumero.textContent;
    nomInput.value = tdnom.textContent;
    dateInput.value = tddate.textContent;
    mentionInput.value = tdmention.textContent;
    niveauInput.value = tdniveau.textContent;

    tr.remove();
  })
    
})