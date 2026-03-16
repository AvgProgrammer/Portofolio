window.addEventListener('DOMContentLoaded', main)

function main(){

    let recentProjectsScript= document.getElementById("recent-project-template")
    window.myApp={}
    myApp.recentProjectsTemp= Handlebars.compile(recentProjectsScript.textContent)

    fetchandShowRecentProjects()
}

function fetchandShowRecentProjects(){
    let httpsheader=new Headers()
    httpsheader.append("Accept","application/json")

    let init={
        method: "GET",
        Headers: httpsheader
    }

    fetch("/api/recent-projects", init)
      .then(response => response.json())
      .then(data =>
        showRecentProjects(data)
      )
      .catch(err => {
        showError(err);
      })
}

function showError(error){
    console.error("Error fetching recent projects:", error);

}

function showRecentProjects(data){
    const recentProjectsContect= data.map(project => ({
        title: project.title,
        description: project.description,
        link: project.link,
        image_recent: project.image_recent
    }))

    const recentProjectsTemplate= myApp.recentProjectsTemp({
        recentProjects: recentProjectsContect
    })
    let recentProjects= document.querySelector("#recent-projects")
    recentProjects.innerHTML= recentProjectsTemplate
}