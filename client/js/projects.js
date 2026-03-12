var projectsTemp = {}

let projectsScript = document.getElementById("projects-template")

projectsTemp.contactsList = HandleBars.compile(projectsScript.textContent)

let projectsContent = projectsTemp.contactsList({projects: projects})

windows.addEventListener("DOMContentLoaded", main)

function main(){
    let projectContain= document.querySelector("#projects")
    projectContain.innerHTML= projectsContent
}