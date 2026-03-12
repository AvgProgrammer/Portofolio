var recentProjectTemp= {}

let recentProjectsScript= document.getElementById("recent-project-template")

recentProjectTemp.contactsList= HandleBars.compile(recentProjectsScript.textContent)

let recentProjectsContect= recentProjectTemp.contactsList({recentProjects: recentProjects})

windwos.addEventListener("DOMContentLoaded", main)

function main(){
    let recentProjectsContainer= document.querySelector("#recent-projects")
    recentProjectsContainer.innerHTML= recentProjectsContect
}