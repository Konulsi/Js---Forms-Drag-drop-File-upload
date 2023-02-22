"use strict";


// let formElem = document.querySelector("form");


// formElem.addEventListener("submit",function(e){    //formelemente submit edende
//     e.preventDefault();                             // e burada hansi event olursa o sayilir. yeni, buradadaki submiti goturub default veziyyetinin prevent edirik.(prevent-qarwisini almaq)

//     if(document.getElementById("exampleInputEmail1").value != ""){
//         document.querySelector("span").classList.add("d-none")
//         writeWord(document.getElementById("exampleInputEmail1").value);
//     }else{
//         document.querySelector("span").classList.remove("d-none")
//     }
// })

// function writeWord(word){
//     document.querySelector("h1").innerText = word;
// }


// document.querySelector("a").addEventListener("click", function(e){
//     e.preventDefault();
//     console.log("clicked a");
// })





// let dragElem = document.getElementById("drag-elem");
// let dropElem = document.getElementById("drop-elem");


// dragElem.ondragstart = (e) =>{  //drag olmaga bawlayanda
//     console.log("started");
// }

// dragElem.ondrag = () =>{   element drag olan vaxtda
//     console.log("dragging");
// }

// dragElem.ondragend = () =>{   // drag olub bitende
//     console.log("drag end");
// }

// dropElem.ondragover = (e) => {  // elementin haraya drag olunacaqsa hemin yer drop olunan sayilir. drop olunanin default veziyyetini silirik
// e.preventDefault();
// }

// dropElem.ondrop = () =>{     // drag olunan elementi drop olunanin uzerine buraxanda iwleyir bu function
//     console.log("tested");
// }




// //drag-drop

//   let dragElems = document.querySelectorAll(".item");

//   let dropElem = document.getElementById("drop-elem");


//  dragElems.forEach(element => {
//     element.ondragstart = (e) => {                                      //burada e drag eventini verir.yeni drag olunan elementin start oldugu eventi                           //drag elediyim elementi neyine gorese yaddawda saxlayib, drop olanda  yaddawdan hemin weye gore gedib onu chagirib istifade edirik
//     e.dataTransfer.setData("id",element.getAttribute("id"))              // id adi altinda drag olan elementin atributun adini yazib valuesini gotururuk. datatransferin icherisine yazdiririq
//   }
// });


// dropElem.ondragover = (e) => {  // elementin haraya drag olunacaqsa hemin yer drop olunan sayilir. drop olunanin default veziyyetini silirik
//     e.preventDefault();
// }


// dropElem.ondrop = (e) => {                           // drag olunan elementi drop olunanin uzerine buraxanda iwleyir bu function
//     // let id = e.dataTransfer.getData("id");        //getdata ile datatransfere id keyi altinda yazdigimiz idni gelib drop olan zaman datatransferden gotururuk

//     // let elem = document.getElementById(id);       // elementin id sini getdata ile datatransferden goturennen sonra bu setirde  id ni getelemenbyid ile tapib elem variablenine beraber edirik

//     // dropElem.append(elem);                        //drop olanin uzerine append edirik.

// }


//let id, let elem evezine qisa formada bele yaza bilerik,

//  dropElem.ondrop = (e) => dropElem.append(document.getElementById(e.dataTransfer.getData("id")));





//alternative drag-drop


// let dragElems = document.querySelectorAll(".item");
// let dropElem = document.getElementById("drop-elem");


// dropElem.ondragover = (e) => {
//     e.preventDefault();
// }

// dragElems.forEach(element => {
//     element.addEventListener("dragstart", function(){
//         dropElem.ondrop = () =>{
//             dropElem.append(element);
//         }
//     })
// });








//file upload



let uploadIcon = document.querySelector(".upload-area i")

let table = document.querySelector(".table")



uploadIcon.addEventListener("click", function () {
    this.nextElementSibling.click();                     //buradaki klik shekili goturdun sechdin ok edende iwleyen klikdir
})

//iconun clickinde eyni zamanda d-none etdiyimiz inputun clickini tetikleyir eyni anda click olunmuw kimi olur. gorsenmir deye bunu vasiteciliyinnen inputa daxil ola bilirik.
//icona click olanda inputun change eventini tetikleyir


uploadIcon.nextElementSibling.addEventListener("change", function (e) {   //burada e.target bize eventi verir, onunda ichinde files var. hansiki ichinde wekilin olchusu, adi ve s olur
    for (const file of e.target.files) {
        let reader = new FileReader();     //sistemin verdiyi classdi file lari oxumaq uchun ist edilir

        reader.onloadend = (event) => {     //fayli oxuyub bitirennen sonra iwleyen method

            let fileBase64 = event.currentTarget.result;  //reader classsi onload-methodun eventisinde olan object-currentTarget , result-currentTargetin ichinde olan propertysidir, ve onunda deyerinde gelen wekil base54dur

            table.innerHTML += `<tr>
              <th scope="row"${file.name}</th>
              <td>${file.size / 1024} Kb</td>
              <td>
              <div class="img">
              <img src="${fileBase64}"alt="">
              </div>
              </td>
              </tr>`

            table.classList.remove("d-none")

        }

        reader.readAsDataURL(file)   //bunu reader classinin bu methodunu yazmadiqda fayli oxumur




    }

})





