
    //   id wise card data filter 

    app.get('/cards/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await ShopCardCollection.findOne(query);
        res.send(result);
      })

      
      
    // delete my posted data

    app.delete('/cards/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await ShopCardCollection.deleteOne(query);
        res.send(result);
      })


        // delete my posted equepment

  
      app.put('/cards/:id', async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updatedComponentDoc = req.body;
  
        // akhane update turor doc a data set kora holo
  
        const componentDoc = {
          $set: {
            
            name: updatedComponentDoc.name,
            email: updatedComponentDoc.email,
            itemname: updatedComponentDoc.itemname,
            categoryName: updatedComponentDoc.categoryName,
            price: updatedComponentDoc.price,
            Rating: updatedComponentDoc.Rating,
            customization: updatedComponentDoc.customization,
            deliverytime: updatedComponentDoc.deliverytime,
            Image: updatedComponentDoc.Image,
            ProductQuentity: updatedComponentDoc.ProductQuentity,
            description: updatedComponentDoc.description,
          },
        };
  
        const result = await ShopCardCollection.updateOne(filter, componentDoc, options);
        res.send(result);
      });
  