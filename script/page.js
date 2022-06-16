



let objData =[]

function Products(n,i,p){
    this.name=n;
    this.img_url=i;
    this.price=p;
}

let p1 = new Products("The Leela Palace New Delhi","https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3860000/3851700/3851663/958ad657_b.jpg", 192)

let p2 = new Products("Pullman New Delhi Aerocity Hostel","https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/10000000/10000000/9994600/9994586/99a27f9a_b.jpg", 104)

let p3= new Products("Sheraton New Delhi hotel", "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/800000/790500/790474/acc5ae1c_b.jpg", 92)

let p4=new Products("The Leela Place New Delhi","https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/800000/790500/790474/acc5ae1c_b.jpg", 92 )

let p5=new Products("Taj Place, New Delhi", "https://images.trvl-media.com/hotels/1000000/470000/465100/465005/13a4747e.jpg?impolicy=resizecrop&rw=455&ra=fit", 104)

let p6=new Products("The Oberoi New Delhi","https://images.trvl-media.com/hotels/21000000/20170000/20160800/20160759/e31ef8a9.jpg?impolicy=resizecrop&rw=455&ra=fit", 182)

let p7=new Products("Holiday Inn New Delhi International Airport an IHG Hotel","https://images.trvl-media.com/hotels/79000000/78470000/78468200/78468159/9874bc65.jpg?impolicy=resizecrop&rw=455&ra=fit", 182)

let p8=new Products("The Leela Ambience Girugram Hotel","https://images.trvl-media.com/hotels/11000000/10220000/10210200/10210101/532d599e.jpg?impolicy=resizecrop&rw=455&ra=fit", 76)

let p9=new Products("Hotel The Glory","https://images.trvl-media.com/hotels/77000000/76190000/76180300/76180263/387e7140.jpg?impolicy=resizecrop&rw=455&ra=fit", 13)

let p10=new Products("Rosete House","https://images.trvl-media.com/hotels/11000000/10220000/10210200/10210101/532d599e.jpg?impolicy=resizecrop&rw=455&ra=fit", 112)



objData.push(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10)

console.log(objData)


var cartData=JSON.parse(localStorage.getItem("cart")) || [];

objData.map(function(elem){
    var box2=document.createElement("div");
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src =elem.img_url;


    var name=document.createElement("p");
    name.innerText=elem.name;

    var price=document.createElement("p");
    price.innerText=elem.price;

    var btn = document.createElement("button");
    btn.innerText="Click for the Booking";
    btn.addEventListener("click", function(){
        addToCart(elem);
    });

    box.append(img,name, price, btn);



    document.querySelector("#container").append(box);

});


function addToCart(elem){
    console.log(elem);
    cartData.push(elem);
    localStorage.setItem("data", JSON.stringify(cartData) );
    alert("item added to the cart");
}



