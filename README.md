


# This is an pre configured project of angular 5, it has the configuration routes with each file commented, it also has been configurated to run over HTTPS with self-signed SSL certificated.

### First thing to do is an `npm install`

### Replace the `server.crt` `server.key` `server.csr` with the same name, but with your SSL files to put it with a real SSL certificate

### Then you can run `npm start` and it will deploy the app at localhost with HTTPS.

### Then you can add how many models that you may need to the Models folder following the example User model.

### Then you have to put your API address at /Services/base.ts

### Then you can add how many services that you may need to the Services folder following the example User service.

### Also if you application have to be full reactive, or need to get communication between components you can configurate events by following the example in /Services/EventHandler.service.ts

### Finally by running `ng g c Components/your-component-name` you will add a component and it will auto refresh your app.module.ts, however we recommend you to check it anyway.





# amazinGenerator® 
