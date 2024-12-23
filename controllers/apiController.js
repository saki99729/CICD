// Example controller with a function to handle a route

  
  const getData = (req, res) => {
    res.json({ message: 'Hello from the API!' });
  }


  app.get('/api/data/new', (req, res) => {
    res.json({ message: 'Hello from the newGetApi!' });
  });
  

    module.exports = {
        getData,
        newGetData
        };