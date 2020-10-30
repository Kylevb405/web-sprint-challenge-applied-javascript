// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerHTML = document.querySelector('.header-container')

function headerFunc() {
    
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('header')
    
        const dateSpan = document.createElement('span')
            dateSpan.classList.add('date')
            dateSpan.textContent = `MARCH 28, 2020`
        
        const lambdaTimesh1 = document.createElement('h1')
            lambdaTimesh1.textContent = `Lambda Times`
        
        const tempSpan = document.createElement('span')
            tempSpan.textContent = `98°`
    
    headerDiv.appendChild(dateSpan)
    headerDiv.appendChild(lambdaTimesh1)
    headerDiv.appendChild(tempSpan)
    
    headerHTML.appendChild(headerDiv)
    
}

console.log(headerFunc());

// const headerProduct = Header()

// console.log(header());

// headerHTML.appendChild(headerProduct)


// console.log(headerHTML);