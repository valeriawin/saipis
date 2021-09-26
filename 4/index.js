function act(){
    let paragraf=document.getElementById("paragraf");

    let color, background, font;

    let background_color=document.forms["countries"].elements["background"].value;
    if(background_color==="Choose") {background="transparent";}

    else if(background_color==="Blue") {background="lightblue"; }
    else if(background_color==="White") {background="white";}
    else if(background_color==="Pink") {background="pink"; }
    else if(background_color==="Powdery") {background="wheat"; }

    let font_color=document.forms["countries"].elements["font-color"].value;
    if(font_color==="Choose") {color="cornsilk";}

    else if(font_color==="Turquoise") {color="turquoise";}
    else if(font_color==="Carall") {color="coral"; }
    else if(font_color==="Red") {color="red"; }
    else if(font_color==="Lilac") {color="lilac";}

    let font_style=document.forms["countries"].elements["font-style"].value;
    if(font_style==="Choose") {font="normal";}

    else if(font_style==="Regular") {font="normal"; }
    else if(font_style==="Oblique") {font="oblique";}
    else if(font_style==="Italic") {font="italic";}

    paragraf.setAttribute("style", `background:${background}; color:${color}; font-style: ${font};`);
}

function add_text(){

    let div=document.getElementById("last");
    let p = document.createElement('p');
    p.textContent="Nice to see you on our page!";
    if (p.textContent=="Nice to see You on our page!") {background_color="green";};
    
    p.setAttribute("style", `background:${background_color}`);

    div.append(p);

    // let h = document.getElementById("last");
    // h.insertAdjacentText("afterend", "My inserted text");
}