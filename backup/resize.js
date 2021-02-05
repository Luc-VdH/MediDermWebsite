window.addEventListener('load', checksize)


window.addEventListener('resize', checksize);

function checksize(){
    let h = window.height();
    let w = window.width();
    let d = document.getElementById("navbuttons")
    let n = document.getElementById("navb")

    let tag = document.createElement("button")
    tag.classList.add("dropbtn")
    tag.onclick = function showcontent(){d.classList.toggle("show")}


    if(h > w){
        d.classList.toggle("show")
        n.appendChild(tag)
    }else{
        d.classList.add("show")
        n.removeChild(tag)
    }

}


