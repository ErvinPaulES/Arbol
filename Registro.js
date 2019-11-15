export default class Registro{
    constructor(){
        this._raiz=null;
    }
    get raiz(){
        return this._raiz;
      }
  
      _encontrarArticulo(codigo, ultimo){
        if(codigo === ultimo.codigo){
          return ultimo;
        }else{
          if(codigo>ultimo.codigo){
            if(ultimo.derecha===null){
              return null;
            }else{
              this._encontrarArticulo(codigo, ultimo.derecha)
            }
          }else{
            if(ultimo.izquierda===null){
              return null;
            }else{
              this._encontrarArticulo(codigo, ultimo.izquierda)
            }
          }
        }
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
    }
  
      
  }