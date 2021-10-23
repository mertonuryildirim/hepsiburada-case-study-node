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


## Request Body Descriptions

 
```
    search    : Ürün ismine göre arama.
    color     : Ürün rengine göre arama.
    sortOrder : Artan veya azalan şeklinde. Parametreleri: "asc" | "desc"
    sortBy    : Artan veya azalan sıralaması değeri. Parametreleri: "addedTime" | "price"
    brand     : Ürün markasına göre arama.
    page      : Pagination sayfa numarası.
    limit     : Standart değeri 12. Dinamik olarak yönetilebilir.
```



