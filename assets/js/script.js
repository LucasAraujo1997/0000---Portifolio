const ul = document.querySelector(".repository-container ul");

function getApiGitHub() {
  fetch("https://api.github.com/users/LucasAraujo1997/repos")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (dataRep of data) {
        
        const li = document.createElement("li");
        li.innerHTML = `<p>Nome: ${JSON.stringify(dataRep.name)}</p>
        <p>Descrição: ${JSON.stringify(dataRep.description)}</p>
        <a href=${JSON.stringify(dataRep.html_url)} target="_blank">acesse aqui</a>
        <br>`;
        console.log(JSON.stringify(dataRep.url))

        ul.appendChild(li);
      }
    })
    .catch((e) => console.error(e));
}
getApiGitHub();
