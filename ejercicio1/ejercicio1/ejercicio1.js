let fila=$("<tr>");
        let numero=0
        $(document).ready(function(){
            function ciclos(x){
                for(let i=0;i<x;i++){
                    fila.append("<td>"+numero+"</td>")
                    numero=numero+2
                }
                $("#cuerpotabla").append(fila)
            }
            $("#boton").on("click",function(){
                x=$("#valor").val();
                ciclos(x)
            })
        })