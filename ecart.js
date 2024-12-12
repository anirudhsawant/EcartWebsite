let storage = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/TBSnov/Updated/New/COOP/6._CB540197241_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/2024/Gateway/November/pc_WE1._CB540033029_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/Nov_New_3000x1200._CB542180708_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30001._CB542120021_.jpg",
  ];
  let storageIndex = 0;
  let next = document.querySelectorAll("button")[0];
  let previous = document.querySelectorAll("button")[1];
  let image = document.querySelector("img");
  function nextLogic() {
    storageIndex++; // increment by 1
    if (storageIndex > storage.length - 1) {
      storageIndex = 0;
    }
    image.src = storage[storageIndex];
  }
  
  next.addEventListener("click", nextLogic);
  
  // previous.addEventListener("click", () => {
  //   storageIndex--;
  //   if (storageIndex < 0) {
  //     storageIndex = storage.length - 1;
  //   }
  //   image.src = storage[storageIndex];
  // });
  
 
  
  function preLogic() {
    storageIndex--;
    if (storageIndex < 0) {
      storageIndex = storage.length - 1;
    }
    image.src = storage[storageIndex];
  }
  
  previous.addEventListener("click", preLogic);
  
  setInterval(nextLogic, 2000);

  let myMain = document.querySelector("main");
  



async function mainfun() {
  let responseFromServer = await fetch("https://www.shoppersstack.com/shopping/products/alpha");

  let objectFromServer = await responseFromServer.json();
//display all products
  let dataFromObject = objectFromServer.data
  console.log(dataFromObject);
  productDisplay.call(dataFromObject);

  //*******men product
  let MenData = dataFromObject.filter((e)=>{
    if(e.category =="men"){
        return e;
    }
  });

  let myMenTag = document.querySelector("#men")

  myMenTag.addEventListener("click",(e)=>{
    e.preventDefault();
    productDisplay.call(MenData)
  })

  console.log(MenData);
  //*****women product
  let WomenData = dataFromObject.filter((e)=>{
    if(e.category =="women"){
        return e;
    }
  });

  let myWomenTag = document.querySelector("#women")

  myWomenTag.addEventListener("click",(e)=>{
    e.preventDefault();
    productDisplay.call(WomenData)
  })

  console.log(WomenData);

  //*****children product
  let ChildrenData = dataFromObject.filter((e)=>{
    if(e.category =="kids"){
        return e;
    }
  });

  let myChildrenTag = document.querySelector("#children")

  myChildrenTag.addEventListener("click",(e)=>{
    e.preventDefault();
    productDisplay.call(ChildrenData)
  })

  console.log(ChildrenData);

  //******Electronics
  let ElectronicsData = dataFromObject.filter((e)=>{
    if(e.category =="electronics"){
        return e;
    }
  });

  let myElectronicsTag = document.querySelector("#electronics")

  myElectronicsTag.addEventListener("click",(e)=>{
    e.preventDefault();
    productDisplay.call(ElectronicsData)
  })

  console.log(ElectronicsData);

  //*****Beauty
  let BeautyData = dataFromObject.filter((e)=>{
    if(e.category =="beauty"){
        return e;
    }
  });

  let myBeautyTag = document.querySelector("#beauty")

  myBeautyTag.addEventListener("click",(e)=>{
    e.preventDefault();
    productDisplay.call(BeautyData)
  })

  console.log(BeautyData);
}

mainfun(); // Call mainfun instead of main

function productDisplay(){
    myMain.innerHTML = "";

    this.forEach((e)=>{
        let myImg = document.createElement("img");
        myImg.src = e.productImageURLs[0];

        let myproductName = document.createElement("h3");
        myproductName.innerHTML = e.name;

        let myPrice = document.createElement("h3");
        myPrice.innerHTML = `Price: Rs.${e.price}`;

        let myRating = document.createElement("h3");
        myRating.innerHTML = `Rating: ${e.rating}`;

        let myBtn = document.createElement("button");
        myBtn.innerHTML =`Add to Cart`;

        let div = document.createElement("div");

        div.append(myImg,myproductName,myPrice,myRating,myBtn);

        myMain.append(div);





    })
}