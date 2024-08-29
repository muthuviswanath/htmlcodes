function product(prodid, prodname, prodprice, prodcategory) {
    this.id = prodid;
    this.name = prodname;
    this.price = prodprice;
    this.category = prodcategory;
}
p = new product(101, "Laptop", 45000, "Electronics");
console.log(p.id);
