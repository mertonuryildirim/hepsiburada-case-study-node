# Hepsiburada Case Study Node.js Server

Hepsiburada Case Study Node.js Server is using for listing & filtering products.

## DOCUMENTATION OF THE PROJECT

Comment lines are written for each feature such as components, functionalities etc.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all dependencies for a project.

### `node backend.js`

[http://localhost:8085/products](http://localhost:8085/products) is POST request for all listing & filtering products on this project.

## Request Body 

```` 
```
{
    "search": "",  
    "color": "",    
    "sortOrder": "",  
    "sortBy": "",     
    "brand": "",     
    "page": "",       
    "limit": ""     
}
```
````

## Request Body Descriptions

```` 
```
    search    : Arama ürün ismine göre yapılmalı.
    color     : Ürün rengine göre yapılmalı kaç adet bu renkten varsa oda hesaplanmalı.
    sortOrder : Frontend'den "asc" veya "desc" şeklinde yollanacak.
    sortBy    : Frontend'den "addedTime" veya "price" olarak yollanacak. sortOrder'ın tipine göre küçükten büyüğe veya büyükten küçüğe olacak.
    brand     : Ürün markasına göre yapılmalı kaç tane bu markadan varsa oda dönmeli.
    page      : Frontend'den hangi sayfanın tıklandığı bilgisi.
    limit     : Frontend'den standart 12 değeri yollanıyor. Ama backend'den dinamik yapılabilir tabii.
```
````


