const Book = require('../model/Book');

const getAllBooks = async(req,res,next) => {
    let books;
    try{
        books = await Book.find();
    }catch(err){
        console.log(err);
    }


    if(!books){
        return res.status(404).json({message:"no products found"})
    }
    return res.status(200).json({books})
}
const addBook = async(req,res,next) => {
    const {name,author,description,price,available,image} = req.body
    let books;
    try{
        books = new Book({
            name,
            author,
            description,
            price,
            available,
            image

        });
        await books.save()

    }catch(err){
        console.log(err)

    }

    if(!books){
        return res.status(500).json({message:'unable to add'})
    }else{
        return res.status(201).json({books})
    }
}
const getById = async(req,res,next) => {
    const id = req.params.id
    let book;
    try{
        book= await Book.findById(id);

    }catch(err){
        console.log(err);

    }
    if(!book){
        return res.status(404).json({message:'no book found'})
    }else{
        return res.status(200).json({book});
    }

};
const updateBook = async(req,res,next)=>{
    const id = req.params.id;
    const {name,author,description,price,available,image} = req.body
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image
        })
        book = await book.save()

    }catch(err){
        console.log(err);

    }
    if(!book){
        return res.status(404).json({message:'unable to update at this id'})
    }else{
        return res.status(200).json({book});
    }


}
const deleteBook = async(req,res,next)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id)

    }catch(err){
        console.log(err);

    }
    if(!book){
        return res.status(404).json({message:'unable to delete '})
    }else{
        return res.status(200).json({message:"product deleted"});
    }
    

}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;