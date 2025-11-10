// Responsive Navbar 
document.title = "Responsive Navbar";
let body = document.body;
Object.assign(body.style, {
    width: "100%",
    height: "100vh",
    margin: "0",
    padding: "0",
    overflowX: "hidden",
    background: "linear-gradient(135deg, #E0F7FA 0%, #F8E0F7 100%)",
})

// Navbar 
let div = document.createElement("div")
Object.assign(div.style, {
    width: "100%",
    height: "70px",
    background: "linear-gradient(90deg, #FFFFFF 0%, #E3F2FD 100%)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.50)",
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    boxSizing: "border-box"
})
body.append(div)

// NAV LOGO
let logo = document.createElement("div")
Object.assign(logo.style, {
    width: "auto",
    height: "auto",
    boxSizing: "border-box",
    display: "flex",
    paddingLeft: "40px",
    border: "none",
})
div.appendChild(logo)

let logoimg = document.createElement("img");
logoimg.classList.add("logo-img")
logoimg.src = "Assets/img/logo real.png"
Object.assign(logoimg.style, {
    objectFit: "contain",
    border: "none",
    outline: "none",
    width: "186.35px",
    height: "auto",
    boxSizing: "border-box",
    cursor: "pointer",
})
logo.appendChild(logoimg);

// NAV LINKS 
const links = ["Home", "About", "Services", "Contact", "Sign-in", "Sign-up"]
let navlinks = document.createElement("div")
navlinks.classList.add("nav-links")
for (i = 0; i < links.length; i++) {
    let a = document.createElement("a");
    a.href = "#";
    a.textContent = links[i];
    Object.assign(a.style, {
        fontSize: "18px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontWeight: "400",
        color: "#222",
        margin: "0 30px",
        textAlign: "center",
        transition: "all 0.3s ease",
        textDecoration: "none",
        cursor: "pointer",
        textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
    })
    a.addEventListener("mouseover", () => {
        a.style.color = "#6851ff",
            a.style.textDecoration = "underline",
            a.style.textShadow = "none"
    })
    a.addEventListener("mouseout", () => {
        if (dark) {
            a.style.color = "#fff",
                a.style.textDecoration = "none",
                a.style.textShadow = "1px 1px 2px rgba(0,0,0,0.2)"
        } else {
            a.style.color = "#222",
                a.style.textDecoration = "none",
                a.style.textShadow = "1px 1px 2px rgba(0,0,0,0.2)"
        }
    })
    navlinks.append(a)
}

div.append(navlinks)
Object.assign(navlinks.style, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

// NAV TOGGLE 
let themediv = document.createElement("div")
Object.assign(themediv.style, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})
div.append(themediv)


let themebutton = document.createElement("button")
themebutton.innerHTML = "🌙 Dark Mode"
themebutton.classList.add("theme-class")
themebutton.style.cssText = `
padding: 10px 20px;
border: none; 
border-radius: 30px;
background: #6851ff;
color: white;
fontSize: 16px;
fontFamily: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
fontWeight: 700,
`
themebutton.addEventListener("mouseover", () => {
    themebutton.style.opacity = "0.8";
    themebutton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
});

themebutton.addEventListener("mouseout", () => {
    themebutton.style.opacity = "1";
    themebutton.style.boxShadow = "none";
});
themediv.appendChild(themebutton)

// NAV MENU 
let menu = document.createElement("button")
menu.innerHTML = "<i class='bi bi-list'></i>"
menu.style.width = "30px";
menu.style.fontSize = "25px";
menu.style.color = "#222";
menu.style.height = "auto";
menu.style.padding = "5px";
menu.style.marginRight = "5px";
menu.style.background = "transparent";
menu.style.border = "none";
menu.style.transition = "all 0.5s ease";
menu.style.cursor = "pointer";
menu.addEventListener("mouseover", () => {
    menu.style.color = "#6851ff",
        menu.style.textDecoration = "underline",
        menu.style.textShadow = "none"
})
menu.addEventListener("mouseout", () => {
    if (dark) {
        menu.style.color = "#fff",
            menu.style.textDecoration = "none",
            menu.style.textShadow = "1px 1px 2px rgba(0,0,0,0.2)"
    } else {
        menu.style.color = "#222",
            menu.style.textDecoration = "none",
            menu.style.textShadow = "1px 1px 2px rgba(0,0,0,0.2)"
    }
})
themediv.append(menu)

// MOBILE SLIDER 
let mobileslider = document.createElement("div")
mobileslider.style.background = "linear-gradient(90deg, #FFFFFF 0%, #E3F2FD 100%)"
mobileslider.style.maxWidth = "240px"
mobileslider.style.width = "100%"
mobileslider.style.height = "100%"
mobileslider.style.position = "fixed"
mobileslider.style.left = "-300px"
mobileslider.style.padding = "30px"
mobileslider.style.transition = "all 0.5s ease"
mobileslider.style.boxSizing = "border-box"
mobileslider.style.boxShadow = "5px 0 15px rgba(0, 0, 0, 0.30)"
body.append(mobileslider)

// MOB LOGO 
let sliderlogo = document.createElement("div")
sliderlogo.style.display = "flex"
sliderlogo.style.padding = "0"
sliderlogo.style.border = "none"
sliderlogo.style.width = "auto",
sliderlogo.style.height = "auto",
sliderlogo.style.boxSizing = "border-box",
mobileslider.append(sliderlogo)

let sliderimg = document.createElement("img")
sliderimg.src = "Assets/img/logo real.png"
sliderimg.alt = "Logo Image"
Object.assign(sliderimg.style, {
    objectFit: "contain",
    border: "none",
    outline: "none",
    margin: "auto",
    width: "186.35px",
    height: "auto",
    boxSizing: "border-box",
    cursor: "pointer"
})
sliderlogo.appendChild(sliderimg);

// MOB LINKS
const links2 = ["Home", "About", "Services", "Contact"]
let sliderlinks = document.createElement("div")
navlinks.classList.add("slider-links")
for (i = 0; i < links2.length; i++) {
    let a = document.createElement("a");
    a.href = "#";
    a.textContent = links2[i];
    Object.assign(a.style, {
        width: "100%",
        fontSize: "18px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontWeight: "400",
        color: "#222",
        margin: "20px 0",
        transition: "all 0.3s ease",
        textDecoration: "none",
        cursor: "pointer",
        borderBottom: "1.5px solid grey"
    })
    a.addEventListener("mouseover", () => {
        a.style.color = "#6851ff",
            a.style.textShadow = "none"
    })
    a.addEventListener("mouseout", () => {
        if (dark) {
            a.style.color = "#fff",
                a.style.textShadow = "1px 1px 2px rgba(0,0,0,0.2)"
        } else {
            a.style.color = "#222",
                a.style.textDecoration = "none",
                a.style.textShadow = "1px 1px 2px rgba(0,0,0,0.2)"
        }
    })
    sliderlinks.append(a)
}
div.append(sliderlinks)
Object.assign(sliderlinks.style, {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "30px"
})
mobileslider.append(sliderlinks)

// MOB SIGN-IN/UP 
const sliderbtn1 = ["Sign-in", "Sign-up"]
let sliderbtn = document.createElement("div")
for (i = 0; i < sliderbtn1.length; i++) {
    let buttonslider = document.createElement("button")
    buttonslider.innerHTML = sliderbtn1[i]
    buttonslider.style.cssText = `
    width: auto;
    height: auto;
    padding: 5px 40px;
    margin: 10px auto;
    border: none;
    border-radius: 30px;
    background: #6851ff;
    color: white;
    font-size: 18px;
    font-weight: 400px;
    `
    buttonslider.addEventListener("mouseover", () => {
        buttonslider.style.opacity = "0.8";
        buttonslider.style.transform = "scale(0.95)";
    })
    buttonslider.addEventListener("mouseout", () => {
        buttonslider.style.opacity = "1";
        buttonslider.style.transform = "none";
    })
    sliderbtn.append(buttonslider)
}
div.append(sliderbtn)
Object.assign(sliderbtn.style, {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column"
})
mobileslider.append(sliderbtn)

let isslideropen = false
menu.addEventListener("click", () => {
    isslideropen = !isslideropen
    if (isslideropen) {
        mobileslider.style.left = "0";
        logo.style.visibility = "hidden";
        menu.innerHTML = "<i class='bi bi-x'></i>"
        menu.style.transform = "rotate(180deg)";

    } else {
        mobileslider.style.left = "-300px"
        logo.style.visibility = "visible";
        menu.innerHTML = "<i class='bi bi-list'></i>"
        menu.style.transform = "rotate(0deg)";
    }
})

// THEME SETTING 
let alllinks = navlinks.querySelectorAll('a')
let alllinks2 = sliderlinks.querySelectorAll('a')
let dark = false
themebutton.addEventListener("click", () => {
    dark = !dark
    if (dark) {
        body.style.background = "linear-gradient(135deg, #1A1A1A 0%, #121212 100%)"
        div.style.background = "#212126"
        mobileslider.style.background = "#212126"
        mobileslider.style.boxShadow = "5px 0 15px rgba(255, 255, 255, 0.20)"
        div.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.33)"
        themebutton.innerHTML = "☀️ Light Mode"
        alllinks.forEach(link => {
            link.style.color = "white"
        })
        alllinks2.forEach(link => {
            link.style.color = "white"
        })
        menu.style.color = "#fff";
    } else {
        body.style.background = "linear-gradient(135deg, #E0F7FA 0%, #F8E0F7 100%)"
        div.style.background = "linear-gradient(90deg, #FFFFFF 0%, #E3F2FD 100%)"
        mobileslider.style.background = "linear-gradient(90deg, #FFFFFF 0%, #E3F2FD 100%)"
        mobileslider.style.boxShadow = "5px 0 15px rgba(0, 0, 0, 0.30)"
        div.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.50)"
        themebutton.innerHTML = "🌙 Dark Mode"
        alllinks.forEach(link => {
            link.style.color = "#222"
        })
        alllinks2.forEach(link => {
            link.style.color = "#222"
        })
        menu.style.color = "#222";
    }
})

// MENU SETTING 
function checkScreenSize() {
    if (window.innerWidth <= 1200){
          alllinks.forEach(link => {
            link.style.margin = "0 20px"
        })      
        themebutton.style.padding = "10px 15px"
    }else{
          alllinks.forEach(link => {
            link.style.margin = "0 30px"
        })
        themebutton.style.padding = "10px 20px"
    }
    if (window.innerWidth <= 1105){
        alllinks.forEach(link => {
            link.style.margin = "0 15px"
        })      
        themebutton.style.padding = "10px 10px"
    }else{
        alllinks.forEach(link => {
            link.style.margin = "0 30px"
        })
        themebutton.style.padding = "10px 15px"
    }
    if (window.innerWidth <= 950) {
        menu.style.display = "flex"
        navlinks.style.display = "none"
    }else {
        menu.style.display = "none"
        navlinks.style.display = "flex"
    }
    if(window.innerWidth <= 500){
        logoimg.style.width = "130px"
        logo.style.paddingLeft = "0"
        themebutton.style.fontSize = "12px"
    }else{
        logo.style.paddingLeft = "40px"
        logoimg.style.width = "186.35px"
        themebutton.style.fontSize = "16px"
    }
}
   
checkScreenSize();
window.addEventListener('resize', checkScreenSize)