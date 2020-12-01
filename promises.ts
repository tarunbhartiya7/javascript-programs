const fruits = ['1', '2', '3'];

const getFruit = (id) => {
	return  new Promise((resolve, reject) => {
    	setTimeout(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .then(response => response.json())
          .then(json => resolve(json))
      
    	}, 3000);
    })
}

// This way the promise runs one after another 
const fruitLoop = async () => {
  for (const f of fruits) {
  	const temp = await getFruit(f)
    console.log(temp)
  }
};

fruitLoop()

// This way the promise runs one after another 
const smoothie = fruits.map(async v => {
	const temp = await getFruit(v)
  console.log(temp)
})
