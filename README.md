# Hepsiburada Case Study Node.js Server

Hepsiburada Case Study Node.js Server is using for listing & filtering products.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all dependencies for a project.

### `node backend.js`

[http://localhost:9999/products](http://localhost:9999/products) is POST request for all listing & filtering products on this project.

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
    search    : Search by product name.
    color     : Search by product color.
    sortOrder : Ascending or descending. Parameters: "asc" | "desc"
    sortBy    : Ascending or descending rank value. Parameters: "addedTime" | "price"
    brand     : Search by product brand.
    page      : Pagination page number.
    limit     : Standard value 12. Dynamically manageable.
```



