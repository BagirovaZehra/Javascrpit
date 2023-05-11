/* let telebe1=[
    {sira:6, ad:"Umudova Rena" ,ixtisas:"Informasiya Tehlukesizliy"},
    {sira:7, ad:"Quliyeva Fidan" ,ixtisas:"Informasiya Tehlukesizliy"},
    {sira:8, ad:"Dursunova Nergiz" ,ixtisas:"Informasiya Tehlukesizliy"},
    {sira:9, ad:"Qasimzade Fidan" ,ixtisas:"Informasiya Tehlukesizliy"},
    {sira:10, ad:"Eliyeva Elmira" ,ixtisas:"Informasiya Tehlukesizliy"}
    
];
let telebe2=[
    {sira:11, ad:"Emirova Ulker" ,ixtisas:"Informasiya Tehlukesizliy"},
    {sira:12, ad:"Memmedli Lamiye" ,ixtisas:"Informasiya Tehlukesizliy"},
    {sira:13, ad:"Bayramova Nezrin" ,ixtisas:"Informasiya Tehlukesizliy"},
    {sira:14, ad:"Ekberova Firuze" ,ixtisas:"Informasiya Tehlukesizliy"},
    {sira:15, ad:"Xudaverdiyeva Nermin" ,ixtisas:"Informasiya Tehlukesizliy"}
    
]; */
let tbodys=document.querySelectorAll("tbody");
let buttons=document.querySelectorAll(".number");
let previous=document.querySelectorAll(".istiqamet")[0];
let next=document.querySelectorAll(".istiqamet")[1];

for(let i=0;i<buttons.length;i++){
    buttons[i].style.backgroundColor='white'

    buttons[i].addEventListener("click", function(){
         for(let j=0;j<tbodys.length;j++){
            if(i==j){
                tbodys[j].style.display='block'
                this.style.backgroundColor='blue'
                this.style.color='white'
            }
            else{
                tbodys[j].style.display='none'

            }
        }
    })
}
let index=0;
next.addEventListener("click", function(){
    for(let i=0;i<tbodys.length-1;i++){
        tbodys[i].style.display='none';
    }
     if(index<=tbodys.length-1){
            tbodys[index++].style.display='block'
            console.log(tbodys.length-1);
        }
})
previous.addEventListener("click", ()=>{
    for(let i=0;i<=tbodys.length-1;i++){
        tbodys[i].style.display='none';
    }       
    if(index==0){
        index++;
    }
    else if(index<=tbodys.length    ){
        index--;
    }
    tbodys[index].style.display='block'
})
