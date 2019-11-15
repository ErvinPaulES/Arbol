export default class Registro{
    constructor(){
        this._raiz=null;
    }
    get raiz(){
        return this._raiz;
      }
  
      _encontrarArticulo(codigo, ultimo){
        let r;
        if(codigo === ultimo.codigo){
          r = ultimo;
        }else{
          if(codigo>ultimo.codigo){
            if(ultimo.derecha===null){
              r = null;
            }else{
              r = this._encontrarArticulo(codigo, ultimo.derecha)
            }
          }else{
            if(ultimo.izquierda===null){
              r = null;
            }else{
              r = this._encontrarArticulo(codigo, ultimo.izquierda)
            }
          }
        }
        return r;
      }
  
      agregarArticulo(articulo){
          console.log(this);
          
          if(this._raiz===null){
            this._raiz=articulo;
          }else{
            if(this._encontrarArticulo(articulo.codigo, this._raiz) !==null){
              
              return null;
            }
                this._agregarnuevo(articulo, this._raiz);
          }
          return articulo;  
                
      }
      _agregarnuevo(nuevo, ultimo){
        if(nuevo.codigo>ultimo.codigo){
          if(ultimo.derecha===null){
            ultimo.derecha=nuevo;
          }else{
            this._agregarnuevo(nuevo, ultimo.derecha)
          }
        }else{
          if(ultimo.izquierda===null){
            ultimo.izquierda=nuevo;
          }else{
            this._agregarnuevo(nuevo, ultimo.izquierda)
          }
        
      }
      console.log(this._raiz)
    }
  
      
  }