window.addEventListener('DOMContentLoaded', main)

function main(){

    let recentProjectsScript= document.getElementById("recent-project-template")
    window.myApp={}
    myApp.recentProjectsTemp= Handlebars.compile(recentProjectsScript.textContent)

    fetchandShowRecentProjects()
    let recentProjects= document.querySelector("#recent-projects")
    recentProjects.innerHTML= recentProjectsContect
}

function fetchandShowRecentProjects(){

}

function showError(error){

}

function showRecentProjects(projects){

}