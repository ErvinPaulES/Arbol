import Articulo from './Articulo.js';
import Registro from './Registro.js';
import View from './View.js';

class Main{
    constructor(){
        let view = new View(document.querySelector('#body'),  new Registro());
        document.querySelector('#agregar').addEventListener('click', () => {

                let nombre = document.querySelector('#nombre').value;
                let codigo = document.querySelector('#codigo').value;
                let precio = Number(document.querySelector('#precio').value);
                let cantidad = Number(document.querySelector('#cantidad').value);
                let descripcion = document.querySelector('#descripcion').value;
                let articulo = new Articulo(codigo, nombre, precio, cantidad, descripcion);
                view.agregarArticulo(articulo);
            
        })
        document.querySelector('#buscar').addEventListener('click', () => {
            console.log("Si entra");
            
            var buscador = Number(document.getElementById('buscador').value);
            var tablabusca = document.querySelector('#bodybuscar')
            view._buscar(buscador, tablabusca);
        })
        document.querySelector('#Mostrarinorder').addEventListener('click', () => {
            console.log("Si entra");
            
            view._mostrarInOrder(document.getElementById('inorder'));
        })
        document.querySelector('#Mostrarpreorder').addEventListener('click', () => {
            console.log("Si entra");
            
            view._mostrarPreOrder(document.getElementById('preorder'));
        })
        document.querySelector('#Mostrarposorder').addEventListener('click', () => {
            console.log("Si entra");
            
           
            view._mostrarPosOrder(document.getElementById('posorder'));
        })
    }
    
}
let main = new Main();