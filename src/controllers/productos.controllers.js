const productosctl = {};
const ProductoModel = require('../models/Productos');

productosctl.getProductos = async (req, res) => {
    try {
        const respuesta = await ProductoModel.find();
        res.json(respuesta)
    } catch (error) {
        console.log(error)
        res.json({message:error})
    }
};

productosctl.getProducto = async (req, res) => {
    try {
        const respuesta = await ProductoModel.findById(req.params.id);
        res.json(respuesta);
    } catch (error) {
        res.json({ message: error });
    }
}

productosctl.getProdXCategoria = async (req, res) => {
    try {
        let query = {};
        query[req.params.key]= req.params.value;
        const respuesta = await ProductoModel.find(query);
        res.json(respuesta);
    } catch (error) {
        res.json({ message: error });
    }
}

productosctl.createProductos = async (req, res) => {
    try {
        const newProducto = new ProductoModel(req.body);
        const productoCreado = await newProducto.save();
        res.json(productoCreado);
    } catch (error) {
        res.json({ message: error })
    }
}


productosctl.updeteProducto = async (req, res) => {
    try {
        const respuesta = await ProductoModel.findByIdAndUpdate(req.params.id, req.body);
        res.json(respuesta);
    } catch (error) {
        res.json({ message: error })
    }
}

productosctl.deleteProducto = async (req, res) => {
    try {
        await ProductoModel.findByIdAndDelete(req.params.id);
        res.json({ message: "Producto eliminado" })
    } catch (error) {
        res.json({ message: error })
    }
}

productosctl.getCategorias = (req, res) => {
    try {
        // console.log(categorias)
        res.json(categorias)
    } catch (error) {
        // console.log(error)
        res.json({ message: error.message })
    }
}


categorias = [
    {
        nombre: "Pizzas",
        img: "../../../assets/img/Pizzas.jpg"
    },
    {
        nombre: "Empanadas",
        img: "../../../assets/img/Empanadas.jpg"
    },
    {
        nombre: "Hamburguesas y Sandwichs",
        img: "../../../assets/img/Hamb-sand.jpg"
    },
    {
        nombre: "Lomos",
        img: "../../../assets/img/Lomos.jpg"
    },
    {
        nombre: "Papas",
        img: "../../../assets/img/Papas.jpg"
    },
    {
        nombre: "Picadas",
        img: "../../../assets/img/Picadas.jpg"
    },
    {
        nombre: "Bebidas",
        img: "../../../assets/img/Bebidas.jpg"
    },
]


module.exports = productosctl;
