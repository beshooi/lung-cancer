let gear = document.getElementById("gear")
let btn_dark = document.querySelector(".btn-dark")
let btn_light = document.querySelector(".btn-light")
gear.onclick=function(){
    gear.style.display="none"
    colorchange.style.display="block"
    colorchange.onmouseleave=function(){
        colorchange.style.display="none"
        gear.style.display="block"

    }
}

/*dark mood*/
btn_dark.onclick=function(){
    document.body.classList.toggle("dark")
    document.body.style.color="white"
    document.querySelector("img").src="./photos/3.jpg"
    document.querySelector(".b-form").style.backgroundColor="black "
    document.querySelector(".navbar-toggler").style.cssText="color: white ;border: 1px solid white; box-shadow: none;"
    document.querySelectorAll(".nav-link").forEach((na)=>{
                na.style.color="white"
                na.onmouseleave=()=>{
                    na.style.color="white"
                }
                na.onmouseover=()=>{
                    na.style.color="var(--wr-color)"
                }
        
            }
        
            )
        
    if(document.body.classList.contains("dark")){
        btn_dark.style.display="none"
        btn_light.style.display="inline-block"

    }
    btn_light.onclick=function(){
        document.body.style.color="black "
        document.body.classList.remove("dark")
        document.querySelector("img").src="./photos/1.jpg"
        document.querySelector(".b-form").style.backgroundColor="white "
        document.querySelector(".navbar-toggler").style.cssText="color: black;border: 1px solid black;box-shadow: none;"
        document.querySelectorAll(".navbar .nav-link").forEach((na)=>{
            na.style.color="rgb(0 0 0 / 57%)"
                        na.onmouseleave=()=>{
                            na.style.color="rgb(0 0 0 / 57%)"
                
                        }
                        na.onmouseover=()=>{
                            na.style.color="var(--wr-color)"
                        }
        })
        window.onscroll=function(){
        if(scrollY>=about.offsetTop-130){
            gear.style.color="white"
                }
                else{
                    gear.style.color="black"
                }
    }
        if(document.body.hasAttribute("class")){
            btn_dark.style.display="inline-block"
            btn_light.style.display="none"
        }
    }
}