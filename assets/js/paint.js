function configureListeners() {
    let images = document.getElementsByTagName('img');
    
    // select img elements  
    //get.ElementsByTagName selects the images. 

     for (let i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners 
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity,false)
        document.getElementById(images[i].Id).addEventListener('mouseout', removeOpacity,false)
    //adjusting transperancy level of the mouse over images 
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    if (!this.classList.contains('dim')){
        this.classList.add('dim');
    }
    getProductInfo(event.target.id); 
      //if 'dim' isn't there add 'dim' to function
}

function removeOpacity(event) {
     //remove appropriate CSS class
    if (this.classList.contains('dim')){
        this.classList.remove('dim');
    }
    //if 'dim' is present remove it using classList. 
   

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price     
            price = '$14.99'
            colorName = 'Lime Green'
            updatePrice(colorName,price)
            break;         
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price 
            price = '11.14'
            colorName= 'Medium Brown'
            updatePrice(colorName,price)
            break;          
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            price = '22.99'
            colorName= 'Royal Blue'
            updatePrice(colorName,price)
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            price = '4.99'
            colorName='Solid Black'
            updatePrice(colorName,price)
            break;   
        case 'pn5':
            price = '8.22'
            colorName= 'Solid Cyan'
            // set variables for price and color name and invoke a function to update the price       
            updatePrice(colorName,price)
            break;   
        case 'pn6':
            price = '11.99'
            colorName= 'Solid Purple'
            // set variables for price and color name and invoke a function to update the price        
            updatePrice(colorName,price)
            break;   
        case 'pn7':
            price= '13.42'
            colorName= 'Solid Red'
            // set variables for price and color name and invoke a function to update the price 
            updatePrice(colorName,price)
            break;   
        case 'pn8':
            price= '21.98'
            colorName= 'Solid White'
            // set variables for price and color name and invoke a function to update the price   
            updatePrice(colorName,price)
            break;   
        case 'pn9':
            price= '14.99'
            colorName= 'Solid Yellow'
            // set variables for price and color name and invoke a function to update the price 
            updatePrice(colorName,price)
            break;
               
          default:  
           
    }


    function updatePrice(colorName, price)
    {       
      // select element with corresponding id
        // display price
        let colorPrice= document.getElementById('color-price');
        colorPrice.textContent = price; 
       // select element with corresponding id
        //display color name
        let color = document.getElementById('color-name');
        color.textContent= colorName;
    }
    
}
