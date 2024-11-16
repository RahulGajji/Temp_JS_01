let mainContainer = document.getElementById('main-container');
let backgroundUrls = ['images/rainy_season.jpg','images/spring_image.jpg','images/summer-image.jpg','images/winter-image.jpg'];

let i = 0
setInterval(function(){
  
 
  mainContainer.style.backgroundImage = "url(" + backgroundUrls[i] + ")";
  mainContainer.style.backgroundSize = 'cover';
  mainContainer.style.backgroundPosition = 'center';
  mainContainer.style.backgroundRepeat = 'no-repeat';
  i += 1;

  
  if(i > 3){
    i = 0
  }

  mainContainer.classList.add('animate_main_container')

},6000);



let buttonElement = document.getElementById('convertBtn');
let fromInput = document.getElementById('fromInput');
let fromSelect = document.getElementById('fromSelect');
let toInput = document.getElementById('toInput');
let toSelect = document.getElementById('toSelect');
let displayMsge = document.getElementById('textMsge');

function tempConversion(){

  let fromInputValue = fromInput.value;
  let toSelectValue = toSelect.value;
  let toInputValue = toInput.value;
  let fromSelectValue = fromSelect.value;
 

  if(fromInput.value===''){
    alert('Please Enter a Value')
  }
  
  
  else {

    
    
    if(fromSelectValue === toSelectValue){
      displayMsge.textContent = 'Cannot convert two same units.';
    }

    else if(fromSelectValue === 'celsius' && toSelectValue === 'fahrenheit'){

    
      let fahrenheitValue  = Number(( (9/5)*fromInputValue ) + 32);
      fahrenheitValue = fahrenheitValue.toFixed(2);
      toInput.value = fahrenheitValue;
      displayMsge.textContent = fromInputValue + '°C is equivalent to '+ fahrenheitValue + '°F';


    }

    else if(fromSelectValue === 'celsius' && toSelectValue === 'kelvin'){

      let KelvinValue  =  Number(273.15 + fromInputValue) ;
      KelvinValue = KelvinValue.toFixed(2);
      toInput.value = KelvinValue;
      displayMsge.textContent = fromInputValue + '°C is equivalent to '+ KelvinValue + '°K';

    }

    else if(fromSelectValue === 'fahrenheit' && toSelectValue === 'celsius'){

     let celsiusValue = Number( fromInputValue  - 32) * (5/9);
     celsiusValue = celsiusValue.toFixed(2);
     toInput.value = celsiusValue;
     displayMsge.textContent = fromInputValue + '°F is equivalent to '+ celsiusValue + '°C';


    }

    else if(fromSelectValue === 'fahrenheit' && toSelectValue === 'kelvin'){

      let kelvinValue =   Number(( fromInputValue  - 32) * (5/9) + 273.15);
      kelvinValue = kelvinValue.toFixed(2);
      toInput.value = kelvinValue;
      displayMsge.textContent = fromInputValue + '°F is equivalent to '+ kelvinValue + '°K';

    }

    else if(fromSelectValue === 'kelvin' && toSelectValue === 'celsius'){

      let celsiusValue = Number(fromInputValue - 273.15);
      celsiusValue = celsiusValue.toFixed(2);
      toInput.value = celsiusValue;
      displayMsge.textContent = fromInputValue + '°K is equivalent to '+ celsiusValue + '°C';

    }

    else if(fromSelectValue === 'kelvin' && toSelectValue === 'fahrenheit'){

      
      let fahrenheitValue = Number(( fromInputValue - 273.15 ) * 1.8 + 32);
      fahrenheitValue = fahrenheitValue.toFixed(2);
      toInput.value = fahrenheitValue;
      displayMsge.textContent = fromInputValue + '°K is equivalent to '+ fahrenheitValue+ '°F';

    }


    









  }



}





fromInput.value = '';
toInput.value = '';

buttonElement.onclick = function(){

  tempConversion();
}