let farver = ["#0020bf","#ff5b4c","white","#FFCDC9"];
let farve1 = farver[0];
let farve2 = farver[1];
let farve3 = farver[2];
let farve4 = farver[3];

let knap1 = document.getElementById('c_knap1');
let knap2 = document.getElementById('c_knap2');
let baggrund_kasse = document.getElementById('c_bundbar_flex');
let baggrund_tekst = document.getElementById('c_bundbar_tekst');


// ------------------------------------------------------------------------------------------------------------------------------


let j = true;
// Mouseover der fortæller id="c_bundbar_flex" at den skal skifte farve
baggrund_kasse.addEventListener('mouseover', function handleMouseOver() {
    j = false
// så længe j er false skift de 2 farver
while(j == false){
    baggrund_tekst.style.backgroundColor = farve4;
    baggrund_kasse.style.backgroundColor = farve4;
    j = true
}});
// mouseout fortæller at den kassen skal tilbage til sine gammle farver
baggrund_kasse.addEventListener('mouseout', function handleMouseOver() {
    
    baggrund_tekst.style.backgroundColor = farve2;
    baggrund_kasse.style.backgroundColor = farve2;
    
});


// ------------------------------------------------------------------------------------------------------------------------------


// samme som foroven men hvis id="c_bundbar_tekst" er mouseover punktet
baggrund_tekst.addEventListener('mouseover', function handleMouseOver() {
    j = false

while(
    j == false){
    baggrund_tekst.style.backgroundColor = farve4;
    baggrund_kasse.style.backgroundColor = farve4;
    j = true
}});

baggrund_tekst.addEventListener('mouseout', function handleMouseOver() {
    
    baggrund_tekst.style.backgroundColor = farve2;
    baggrund_kasse.style.backgroundColor = farve2;
    
});


// ------------------------------------------------------------------------------------------------------------------------------


//knap 1 mouseover
knap1.addEventListener('mouseover', function handleMouseOver() {
    knap1.style.backgroundColor = farve1;
});

//knap 1 mouseout
knap1.addEventListener('mouseout', function handleMouseOver() {
    knap1.style.backgroundColor = farve2;
});

//knap 2 mouseover
knap2.addEventListener('mouseover', function handleMouseOver() {
    knap2.style.backgroundColor = farve1;
});

//knap 2 mouseout
knap2.addEventListener('mouseout', function handleMouseOver() {
    knap2.style.backgroundColor = farve2;
});


// ------------------------------------------------------------------------------------------------------------------------------


//click skift farve
let adminClicked = false;

knap1.addEventListener('click', function onClick(){
    if (adminClicked==false){
        knap1.style.backgroundColor = farve3;
        knap1.style.color = farve1;
        adminClicked = true;
    }
    else{
        knap1.style.backgroundColor = farve1;
        adminClicked = false;
    }
} );

knap2.addEventListener('click', function onClick(){
    if (adminClicked==false){
        knap2.style.backgroundColor = farve3;
        knap2.style.color = farve1;
        adminClicked = true;
    }
    else{
        knap2.style.backgroundColor = farve1;
        adminClicked = false;
    }
} );

//resetter farverne
knap1.addEventListener('mouseout', function handleMouseOver() {
    knap1.style.color = farve3;
});
knap2.addEventListener('mouseout', function handleMouseOver() {
    knap2.style.color = farve3;
});