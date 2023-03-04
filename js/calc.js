buttons = document.querySelectorAll(".buttons li")
screen = document.querySelector(".screen")
tv = document.querySelector(".screen .tv")




buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if (e.currentTarget.classList.contains("equal")) {
            if(tv.innerText !== ""){
                try {
                    tv.innerText = eval(tv.innerText)
                }catch {
                    tv.innerText = "Error"
                }
            }
        }else if (e.currentTarget.classList.contains("reset")) {
            tv.innerText = ""
        }else if (e.currentTarget.classList.contains("del")) {
            tv.innerText = tv.innerText.slice(0,-1)
        }else if (e.currentTarget.classList.contains("multiply")) {
            tv.appendChild(document.createTextNode("*"))
        }else{
            tv.appendChild(document.createTextNode(e.currentTarget.textContent))
        }
        // store in local storage 
    })
})

// color changer
but = document.querySelector(".buttons")
colors = document.querySelectorAll(".color li") 
reset = document.querySelector(".calculator .reset") 
del = document.querySelector(".calculator .del") 
colors.forEach((color)=>{
color.addEventListener("click",(e)=>{
    colors.forEach((e)=>{
        e.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
    if (e.currentTarget.dataset.color === "one"){ 
        colorOne ()
        // store in local storage 
        window.localStorage.setItem("color",e.currentTarget.dataset.color)
    }else if (e.currentTarget.dataset.color === "two"){ 
        colorTwo()
        // store in local storage 
        window.localStorage.setItem("color",e.currentTarget.dataset.color)
    }else if (e.currentTarget.dataset.color === "three"){
        colorThree()
        // store in local storage 
        window.localStorage.setItem("color",e.currentTarget.dataset.color)
    }
})
})

let colorOne  = function() {
    screen.classList.remove("screenc2", "screenc3")
    but.classList.remove("butcolor2", "butcolor3")
    del.classList.remove("resDel2", "resDel3")
    reset.classList.remove("resDel2", "resDel3")

    screen.classList.add("screenc1")
    but.classList.add("butcolor1")
    del.classList.add("resDel1")
    reset.classList.add("resDel1")
    buttons.forEach((e)=>{
        e.classList.add("buttonscolor")
    })
}
let colorTwo  = function() {
        screen.classList.remove("screenc2", "screenc3")
        but.classList.remove("butcolor2", "butcolor3")
        del.classList.remove("resDel2", "resDel3")
        reset.classList.remove("resDel2", "resDel3")

        screen.classList.add("screenc2")
        but.classList.add("butcolor2")
        del.classList.add("resDel2")
        reset.classList.add("resDel2")
}
let colorThree  = function() {
    screen.classList.remove("screenc2", "screenc1")
    but.classList.remove("butcolor2", "butcolor1")
    del.classList.remove("resDel2", "resDel1")
    reset.classList.remove("resDel2", "resDel1")

    screen.classList.add("screenc3")
    but.classList.add("butcolor3")
    del.classList.add("resDel3")
    reset.classList.add("resDel3")
}


colors.forEach((e)=>{
    e.classList.remove("active")
})
if (window.localStorage.getItem("color") !== "") {
    colors.forEach((e)=>{
        e.classList.remove("active")
        if(window.localStorage.getItem("color") === e.dataset.color &&  window.localStorage.getItem("color") === "one"){
            console.log(e.target)
            e.classList.add("active")
        colorOne();
        }else if (window.localStorage.getItem("color") === e.dataset.color &&  window.localStorage.getItem("color") === "two") {
            e.classList.add("active")
         colorTwo();
        }else if (window.localStorage.getItem("color") === e.dataset.color &&  window.localStorage.getItem("color") === "three") {
            e.classList.add("active")
         colorThree();
        }
    })
}
// Template 2: my world template contains many sections as landing,toggle menu,.articles,Gallery , Features , Testimonials ,
// ,Team Members, Articles, Our Skills,How It Works, Latest events, Pricing Plans, videos ,stats,discounts , footer
// and many styles and animation

// Template 4: a creative Agenct template which was was made by JS and SCSS & HTML contain many sections 
//  as landing,toggle menu, about us , skills ,Gallery,dynamic timeline, features testimonials ,Contact us and footer 
//  and there is a pop up menu where you can control the colors , background, bullets and toggle menu 


// Template 5:  a sneakers shop Tempalte which was was made by JS and SCSS & HTML where you can pick 
// your the sneakers you prefer and add it to you cart and then order it or remove from your cart if 
// you rethought about it


