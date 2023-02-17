const search=()=>{
    let searchBox=document.getElementById("search-item").value.toUpperCase();
    let storeProject=document.getElementById("project-list")
    let project=document.querySelectorAll(".project")
    let projectName=document.getElementsByTagName('h2')


    for(var i=0;i<projectName.length;i++){
        let match=project[i].getElementsByTagName('h2')[0]

        if(match){
            let textValue= match.textContent || match.innerHTML
            if(textValue.toUpperCase().indexOf(searchBox) >-1){
                project[i].style.display=""
                project[i].style.color="red"
            }
            else{
                project[i].style.display="none"
                


            }
        }
    }
}