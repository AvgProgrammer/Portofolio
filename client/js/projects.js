window.addEventListener("DOMContentLoaded", main)

function main(){
    let projectsScript = document.getElementById("Project-list-Template")
    window.myApp={}
    myApp.projectsTemp= Handlebars.compile(projectsScript.textContent)
    
    fetchAndShowProjects()
}

function fetchAndShowProjects(){
    let httpsheader=new Headers()
    httpsheader.append("Accept","application/json")

    let init={
        method: "GET",
        Headers: httpsheader
    }

    fetch("/api/projects", init)
        .then(response => response.json())
        .then(data => showProjects(data))
        .catch(error => showError(error))
}

function showError(error){
    console.error("Error fetching projects:", error);

}

function showProjects(data){
    const projectsContent= data.map(project=>({
        title: project.title,
        description: project.description,
        link: project.link,
        Image: project.Image
    }))

    const projectsTemplate= myApp.projectsTemp({
        projectsList: projectsContent
    })
    let projectList= document.querySelector("#projects")
    projectList.innerHTML= projectsTemplate
}