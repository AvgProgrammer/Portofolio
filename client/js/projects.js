var projectsTemp = {}

let projectsScript = document.getElementById("Project-list-Template")

projectsTemp.projectsList = Handlebars.compile(projectsScript.textContent)

let projectsContent = projectsTemp.projectsList({projectsList: projects})

window.addEventListener("DOMContentLoaded", main)

function main(){
    let projectList= document.querySelector("#projects")
    projectList.innerHTML= projectsContent
}
