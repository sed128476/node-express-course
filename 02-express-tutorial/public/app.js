const {products} = require('./data');
//console.log(products);
app.use(express.static("./public"))


app.get('/api/v1/test/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json({ message: "It worked!" });
})



app.get('/about', (req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/v1/products">products</a>')
})


app.get('/api/v1/products', (req, res) => {
    const newProducts = products.map((product) => {
      const { id, name, image } = product
      return { id, name, image }
    })
  
    res.json(newProducts)
  })

  app.get('/api/v1/products/:productID', (req, res) => {
    // console.log(req)
    // console.log(req.params)
    const { productID } = req.params

    const idToFind = parseInt(req.params.productID);
    console.log("idTofind:", idToFind);
     
    const product = products.find((p) => p.id === idToFind);
    console.log("product:", product);
    
  
    const singleProduct = products.find(
      (product) => product.id === Number(productID)
    )
    if (!singleProduct) {
      return res.status(404).send('That product was not found')
    }
  
    return res.json(singleProduct)
  })


  app.get('/api/v1/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
  })



  app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]
      console.log(sortedProducts);
      
    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search)
      })
    }

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
          return product.price < search
        })
      }

    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(200).json({ sucess: true, data: [] })
    }
    res.status(200).json(sortedProducts)
  })

  app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
    })
    