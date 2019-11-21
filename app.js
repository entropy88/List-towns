

let loadbtn=document.getElementById("btnLoadTowns");
loadbtn.addEventListener("click", async function(){
    const towns=document.getElementById("towns").value.split(", ");
    const source= await fetch("http://127.0.0.1:5500/towns.hbs")
    .then(res=>res.text());
    const template=Handlebars.compile(source);
    const context={towns};
    const html=template(context);
     document.getElementById("root").innerHTML=html;
})