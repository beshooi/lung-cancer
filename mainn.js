let infile =document.getElementById("upl")
let imagecon = document.getElementById("jiji")
let lungcancer = document.getElementById("lungcancer")
let colorchange = document.getElementById("colorchange")
let gear = document.getElementById("gear")
let log = document.getElementById("login")
let search = document.querySelector(".search")
let get = document.getElementById("getstart")
let list = document.querySelectorAll(".lists li")
let iminput= document.getElementById("upl")
let check=document.getElementById("check")
let box = document.querySelector(".diagnosis .box")
let table=document.getElementById("table")
let svg_1=document.getElementById("svg_1")
let logout =document.getElementById("logout")
let ab_ut=document.querySelectorAll(".ab_ut h2")
let nav= document.querySelector(".navbar")
let navLink = document.querySelectorAll(".nav-link")
let landing=document.getElementById("landing")
let Title=document.querySelectorAll(".title h2")
let btn_dark = document.querySelector(".btn-dark")
let btn_light = document.querySelector(".btn-light")
let result = document.querySelector(".result p")
let tr=document.querySelectorAll("tr th")
let td =document.querySelectorAll("td")
let TitleP=document.querySelector(".his")
let user = document.querySelectorAll(".user p")
let abTitle=document.querySelector(".ab-title p")
let imgsrc=document.querySelector(".dar")
let about=document.querySelector(".about")
let footer = document.querySelector(".footer ")
let a7aaaa =document.getElementById("TableBody")
let serv_caption= document.querySelector(".serv-caption h2")
let serv_captionp= document.querySelector(".serv-caption p")
let serv_text= document.querySelectorAll(".serv-text h5")
let serv_textp=document.querySelectorAll(".serv-text p")
let team_info=document.querySelectorAll(".team-info")
let our_team=document.querySelector(".our-team")
let team_infoh=document.querySelectorAll(".team-info h5")
let team_infop=document.querySelectorAll(".team-info p")
let team_p=document.querySelectorAll(".p p")
let team_title=document.querySelector(".team-title ")
let navbar_toggler=document.querySelector(".navbar-toggler")

gear.onclick=function(){
    gear.style.display="none"
    colorchange.style.display="block"
    colorchange.onmouseleave=function(){
        colorchange.style.display="none"
        gear.style.display="block"
    }
}
/*local storage check*/
if(localStorage.getItem("color")!=null){
    lungcancer.style.color=localStorage.getItem("color")
    serv_caption.style.color=localStorage.getItem("color")
    log.style.backgroundColor=localStorage.getItem("color")
    search.style.borderLeft=`solid 1px ${localStorage.getItem("color")}`
    search.style.color=localStorage.getItem("color")
    get.style.backgroundColor=localStorage.getItem("color")
    iminput.style.backgroundColor=localStorage.getItem("color")
    check.style.backgroundColor=localStorage.getItem("color")
    box.style.border=`solid 1px ${localStorage.getItem("color")}`
    logout.style.backgroundColor=localStorage.getItem("color")
result.style.color=localStorage.getItem("color")
    table.style.cssText=`border-color: ${localStorage.getItem("color")} !important`
    ab_ut.forEach((h)=>{
        h.style.color=localStorage.getItem("color")
    })

    tr.forEach((th)=>{
        th.style.color=localStorage.getItem("color")
    })
    serv_text.forEach((se)=>{
        se.style.color=localStorage.getItem("color")
    })

}

/*changeColor*/
list.forEach((li)=>{
li.addEventListener("click",(e)=>{
localStorage.setItem("color",e.currentTarget.dataset.color)
lungcancer.style.color=e.currentTarget.dataset.color
serv_caption.style.color=e.currentTarget.dataset.color
log.style.backgroundColor=e.currentTarget.dataset.color
search.style.borderLeft=`solid 1px ${e.currentTarget.dataset.color}`
search.style.color=e.currentTarget.dataset.color
get.style.backgroundColor=e.currentTarget.dataset.color
iminput.style.backgroundColor=e.currentTarget.dataset.color
check.style.backgroundColor=e.currentTarget.dataset.color
box.style.border=`solid 1px ${e.currentTarget.dataset.color}`
table.style.cssText=`border-color: ${e.currentTarget.dataset.color} !important`
logout.style.backgroundColor=e.currentTarget.dataset.color
result.style.color=e.currentTarget.dataset.color
ab_ut.forEach((h)=>{
    h.style.color=e.currentTarget.dataset.color
})
tr.forEach((th)=>{
        th.style.color=e.currentTarget.dataset.color
    })
    serv_text.forEach((se)=>{
        se.style.color=e.currentTarget.dataset.color
    })

})
})

/*uploadImage*/
infile.addEventListener("change", function(){
    const file=this.files[0];
if(file){
const reader= new FileReader();
imagecon.style.display="block";
reader.addEventListener("load",function(){
    imagecon.setAttribute("src",this.result)
})
reader.readAsDataURL(file)
}})

/*darkMood*/
btn_dark.onclick=function(){
    document.body.classList.toggle("dark")
    document.body.style.color="white"
    document.getElementById("TableBody").style.color="white"
    document.getElementById("TableBodyy").style.color="white"
    landing.style.cssText=" background-image: url(./photos/Vaping-and-lungs-1023x682.jpg);background-size:cover;min-height: 1000px;"
    document.querySelector(".navbar-toggler").style.cssText="color: white ;border: 1px solid white; box-shadow: none;"
    imgsrc.src="./photos/4.jpg"
    list.forEach((li)=>{
        li.addEventListener(("click"),(e)=>{
            footer.style.backgroundColor=e.currentTarget.dataset.color
        })
    })
    footer.style.backgroundColor=localStorage.getItem("color")
    document.querySelectorAll(".navbar .nav-link").forEach((e)=>{
        e.style.color="white"
    })
    document.querySelectorAll(".team-info").forEach((t)=>{
        t.style.backgroundColor="black "
        t.children[1].style.color="white"
        t.children[2].style.color="white"
    })
    team_info.forEach((t)=>{
        t.onmouseover=function(){
            t.style.cssText=`background-color: ${localStorage.getItem("color")}; color: white;transition: .5s;`
        }
    t.onmouseleave=function(){
        t.style.cssText="background-color:black ; color: white;transition: .5s;"
    }
    })
    window.onscroll=function(){
    if(scrollY>=about.offsetTop-130){
        gear.style.color="white"
            }
            else{
                gear.style.color="white"
            }
}
    if(document.body.classList.contains("dark")){
        btn_dark.style.display="none"
        btn_light.style.display="inline-block"

    }
    btn_light.onclick=function(){
        document.body.style.color="black "
        document.body.classList.remove("dark")
        document.getElementById("TableBody").style.color="black"
        document.getElementById("TableBodyy").style.color="black"
        landing.style.cssText=" background-image: url(./photos/5.jpg);background-size:cover;min-height: 1000px;"
        document.querySelector(".navbar-toggler").style.cssText="color: black;border: 1px solid black;box-shadow: none;"
        imgsrc.src="./photos/lung.jpg"
        footer.style.backgroundColor="var(--dark-color) "
        document.querySelectorAll(".navbar .nav-link").forEach((e)=>{
            e.style.color="black"
        })
        document.querySelectorAll(".team-info").forEach((t)=>{
        t.style.backgroundColor="white"
        t.children[1].style.color="black"
        t.children[2].style.color="black"
        })
        team_info.forEach((t)=>{
            t.onmouseover=function(){
                t.style.cssText=`background-color: ${localStorage.getItem("color")}; color: white !important;transition: .5s;`
                t.children[1].style.color="white"
                t.children[2].style.color="white"

            }
        t.onmouseleave=function(){
            t.style.cssText="background-color:white ; color: black !important ;transition: .5s;"
            t.children[1].style.color="black"
            t.children[2].style.color="black"

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

/*add result*/
check.onclick=function(){
    var cartonna="";
    for(var i=1;i<2;i++){
cartonna+=`<tr>
<td class="kill">${i}</td>
<td class="kill"><img src="${imagecon.src}" alt="" class="img-fluid" style="width: 40px; "></td>
<td class="kill">cancer</td>
<td class="kill"> <button class="btn btn-outline-danger" id="delee" onclick="deleteRow()">delete</button></td>
</tr>`
    }
document.getElementById("TableBody").innerHTML=cartonna; 
document.getElementById("delee").onclick=function(){
document.getElementById("TableBody").innerHTML=""
}
}

/*increase on scroll*/
let nums = document.querySelectorAll(".inc-text h5");
let section = document.querySelector(".inc-num");
let started=false
console.log(nums)
window.onscroll=function(){
if(window.scrollY<=document.querySelector(".diagnosis").offsetTop){
if(!started){
nums.forEach((num)=>num_inc(num))
}
started=true;
}
function num_inc(el){
    let goal = el.dataset.goal;
    let counter =setInterval(()=>{
    el.textContent++;
    if(el.textContent===goal){
    clearInterval(counter);
    }
    },10/goal)}

/*gear on scroll*/
window.onscroll=function(){
    if(scrollY>=about.offsetTop-130){
        gear.style.color="white"
            }
            else{
                gear.style.color="black"
            }
}
};

/* end increase on scroll*/
team_info.forEach((t)=>{
    t.onmouseover=function(){
        t.style.cssText=`background-color: ${localStorage.getItem("color")}; color: white;transition: .5s;`
    }
t.onmouseleave=function(){
    t.style.cssText="background-color:white; color: black;transition: .6s;"
}
})

var typed = new Typed('#element', {
    strings: ["lung cancer",'Lung Cancer Prediction'],
    typeSpeed: 30,
    loop:true,
});