//!Task-01 Konsola mesaj verin: «My name is Ülvi».
// let firstName='Ülvi'
// console.log(firstName);
//!Task-02 Adı name və adınızın mənimsədildiyi sabit dəyişən təyin edin.  Bu dəyişənin dəyərini konsolda göstərin.

// const name='Ülvi'
// console.log(name);
/**Task-03
Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin.
Birdən çox variant seçin.

2user 
c@rt
person 
title color
console
$add */
// *let 2user =false
// *let title color=false

/*Task-04
Depodaki bütün kitabların ümumi dəyərini konsola çıxarın
Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində
və depodaki kitab sayı bookAmount dəyişənində saxlanılır.
Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.
=>let bookPrice = 750;
=>let bookAmount = 14; */

//*let bookPrice = 750;
//*let bookAmount = 14
//*let allPrice=bookPrice*bookAmount
//*console.log(allPrice);10500

/*
Task-05
Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.
kmhSpeed ​​dəyişəni avtomobilin sürətinin «saatda kilometrlərlə» 
dəyərini saxlayır. msSpeed ​​dəyişəni təyin edin və 
ona eyni sürət dəyərini «saniyədə metrə» çevirərək yazın.
msSpeed dəyişəninin dəyərini konsola çıxarın.
=>let kmhSpeed = 75;*/

// let kmhSpeed = 75;
// let  msSpeed = kmhSpeed/3.6
// console.log(Math.round(msSpeed));

/*Task-06
İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı günlərin sayını göstərən proqram yazın.*/
// let userDate=prompt('Dogum tarixinizi daxil edin!')
// console.log(userDate);
// const userAnswer=new Date(+userDate)
// console.log(userAnswer);
// const today=new Date()

// let result=today-userAnswer;

// const liveDays=Math.floor(result/(1000*60*60*24))
// console.log(liveDays);
function calcDays() {
   
    let btn=document.querySelector("#btn");

   btn.addEventListener('click',()=>{
    let input=document.querySelector("input").value;
    if (!input) {
        console.log("Dogum tarixiniz daxil edin!");
        return
    }
        else{
            let userDate=new Date(input)
        let today=new Date()
        let result=today-userDate
        // console.log(result);
let liveDay=Math.floor(result/(1000*60*60*24))
console.log(liveDay);
    let end=document.querySelector("p").innerText=liveDay
    input=''
        }
   })
}

calcDays()
