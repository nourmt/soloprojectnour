var data =[
    {
        name:"Flower Girl Scented Soy Candle",
        imgSrc:"./photo/1.webp",
        price:"50$"
        
    },
  
    {name:"Alphabet Letter Personalized Scented Soy Candle",
    imgSrc:"./photo/3.webp",
    price:"40$"
},
{
    name:"Teddy Bear Birthday Number",
    imgSrc:"./photo/4.webp",
    price:"25$"
    
},
{
    name:"Shy Teddy Bear",
    imgSrc:"./photo/5.webp",
    price:"35$"
    
},
{
    name:"Ribbed Circus Scented Soy ",
    imgSrc:"./photo/6.webp",
    price:"15$"
    
},

{
    name:"Retro Scented Soy",
    imgSrc:"./photo/8.webp",
    price:"25$"
    
},
{
    name:"Black Raspberry & Vanilla Soy",
    imgSrc:"./photo/9.webp",
    price:"30$"
    
},
{
    name:"Daisy Flower Jar",
    imgSrc:"./photo/10.webp",
    description:"eruhghghtg",
    price:"35$"
    
},
{
    name:"Succulent Scented Soy Candle",
    imgSrc:"./photo/11.webp",
    price:"40$",
    description:"Indulge in the exquisite fragrance of our non-toxic and paraffin-free Succulent Scented Soy Candle. Crafted with a natural soy wax blend, this scented candle is the perfect addition to your dining table, infusing your space with a delightful aroma. Available in three captivating colours, each offering a unique blend of scents, this candle is designed to elevate your sensory experience."
    
},
{
    name:"Palm Spear Scented Soy Candle",
    imgSrc:"./photo/13.webp",
    description:"eruhghghtg",
    price:"45$"
    
},
{
    name:"Tree Root Jar Soy ",
    imgSrc:"./photo/14.webp",
    description:"eruhghghtg",
    price:"25$"
    
},
{
    name:"Snowflake Jar  ",
    imgSrc:"./photo/15.webp",
    description:"eruhghghtg",
    price:"35$"
    
},


    ] 

function generateItems() {
    var itemsContainer = $('#items-container') 
    itemsContainer.empty()
    var searchInput = $('#search-input').val().toLowerCase() 
    var filteredData = data.filter(function(item) { 
      return item.name.toLowerCase().includes(searchInput)
      
    })
    filteredData.forEach(function(item) {
      var itemHTML = `
        <div class="item">
          <img src="${item.imgSrc}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>Price: ${item.price}</p>
        </div>`
      
  
      itemsContainer.append(itemHTML)
    })
  }
  
  $(document).ready(function() {
    generateItems() 
    
    $('#search-button').click(function() {
      generateItems() 
    })
  })

  $(document).ready(function() {
    $('#send-button').on('click', function() {
        var email = $('input[type="email"]').val()
        var password = $('input[type="password"]').val()
        window.location.href = 'index.html'
    })
})



  

