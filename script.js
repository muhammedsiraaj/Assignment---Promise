// 1. Create a function fetchData that returns a Promise. The Promise should resolve with the string "Data fetched successfully" after a delay of 2 seconds. Use setTimeout to simulate the delay. Test your function by calling it and using .then() to log the resolved value to the console

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve ('Data fetched succesfully')
        },1000)
    })
}
fetchData().then((data)=>[
    console.log(data)
])

// 2. Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data". Modify your test to handle this rejection using .catch(). 

function fetchDataa(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (9==='9'){
                resolve ('Data fetched succesfully')
            }else{
                reject('Failed to fetch data')
            }
        },2000)
    })
}
fetchDataa()
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

// 3. Convert the fetchData function from Question  1 to use async and await instead of .then(). Ensure to handle errors using try and catch

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (10===10) {
                resolve("Data fetched successfully");
            } else {
                reject("Failed to fetch data");
            }
        },3000);
    });
}

async function fetchDataaa() {
  try{
    const data = await fetchData();
    console.log(data);
  }catch (error){
    console.log(error);
  }
}

fetchDataaa();

// 4. Write a function "getCountryData" that fetches data from the public API " https://restcountries.com/v3.1/all ". Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data on the web page. Make sure to handle any errors that might occur during the fetch operation and display an appropriate error message in the div if the fetch fails. (deploy the webpage on github)
function getCountryData(){
    fetch ('https://restcountries.com/v3.1/all')
    .then((result)=>{
        return result.json()
    })
    .then((result)=>{
        console.log(result)
        for ( let i = 0; i<result.length; i++){
            const imageContainer = document.createElement('div')
    
            const heading = document.createElement( 'h1')
            heading.innerText = result[i].name.common 
            imageContainer.appendChild(heading)
    
            const image = document.createElement('img')
            image.src = result[i].flags.png
            image.className = 'flags'
            imageContainer.appendChild(image)
            document.getElementById('container').appendChild(imageContainer)
    
            const capital = document.createElement('h4')
            capital.innerText = 'Capital : ' + result[i].capital
            capital.className = 'details'
            imageContainer.appendChild(capital)
            
            const continent = document.createElement('h4')
            continent.innerText = 'Continent : ' + result[i].continents
            continent.className = 'details'
            imageContainer.appendChild(continent)
    
            const languages = document.createElement('h4')
            if (result[i].languages){
                const languageList = Object.values(result[i].languages).join(', ');
                languages.innerText= 'Languages : ' + languageList
            }else{
                languages.innerText = 'Languges : Not Available'
            }
            imageContainer.appendChild(languages)
            languages.className = 'details'
    
                document.getElementById('container').appendChild(imageContainer);
            
    
        }
    })
    .catch((error)=>{
        console.log('error fetching data')
    })
}


