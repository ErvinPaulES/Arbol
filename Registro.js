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
  _posOrder(valor, posorder){
      if(valor.izquierda!=null){
          this._posOrder(valor.izquierda, posorder)
      }
      if(valor.derecha != null){
          this._posOrder(valor.derecha, posorder)
      }
      posorder.innerHTML+= valor.codigo + " ";
  }
  _preOrder(valor, preorder){
    preorder.innerHTML+= valor.codigo + " ";
    if(valor.izquierda!=null){
        this._preOrder(valor.izquierda,preorder)
    }
    if(valor.derecha != null){
        this._preOrder(valor.derecha, preorder)
    }
  }
  _inOrder(valor, inorder){
    if(valor.izquierda!=null){
        this._inOrder(valor.izquierda, inorder)
    }
    inorder.innerHTML+= valor.codigo + " ";
    if(valor.derecha != null){
        this._inOrder(valor.derecha, inorder)
    }
  }
  
      
}