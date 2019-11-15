export default class View{
    constructor(table, registro){
        this._table = table;
        this._registro = registro;

    }

    agregarArticulo(articulo){
        let r = this._registro.agregarArticulo(articulo);
        console.log(r);
        
        if(r !== null){
            this._show(articulo);
        }
    }

    _show(articulo){

            let row = this._table.insertRow(-1);

            let cellCodigo = row.insertCell(0);
            let cellNombre = row.insertCell(1);
            let cellPrecio = row.insertCell(2);
            let cellCantidad = row.insertCell(3);
            let cellDescripcion = row.insertCell(4);

            cellCodigo.innerHTML = articulo.codigo
            cellNombre.innerHTML = articulo.nombre;
            cellPrecio.innerHTML = articulo.precio;
            cellCantidad.innerHTML = articulo.cantidad;
            cellDescripcion.innerHTML = articulo.descripcion;
                  
   }

   _buscar(buscador, tablabuscar) {
        tablabuscar.innerHTML='';
        let row = tablabuscar.insertRow(-1);
        let cellCodigo = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellDescripcion = row.insertCell(4);
        console.log(this._registro.raiz);
        let r = this._registro._encontrarArticulo(buscador.codigo, this._registro.raiz)
        if(r !== null){
            cellCodigo.innerHTML = r.codigo
            cellNombre.innerHTML =r.nombre;
            cellPrecio.innerHTML = r.precio;
            cellCantidad.innerHTML = r.cantidad;
            cellDescripcion.innerHTML = r.descripcion;
        }
    }

}