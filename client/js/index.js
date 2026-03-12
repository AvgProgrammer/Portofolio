var recentProjectTemp= {}

let recentProjectsScript= document.getElementById("recent-project-template")

recentProjectTemp.recentProjects= Handlebars.compile(recentProjectsScript.textContent)

let recentProjectsContect= recentProjectTemp.recentProjects({recentProjects:projects})

window.addEventListener("DOMContentLoaded", main)

function main(){
    let recentProjects= document.querySelector("#recent-projects")
    recentProjects.innerHTML= recentProjectsContect
}
