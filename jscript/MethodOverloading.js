class Display{

    yenaadhruondhu(){
        
        let thagoli = function(thago){
            console.log("Thagoli: "+thago);
            return thago;
        };

        let iskoli = function(isko, thago){
            console.log("Iskoli: "+isko);
            return isko + thago;
        };

        let thagobeda = function (beda){
            let args_concat = "";
            let temp = " ";

            for (let i =0; i<beda.length; i++){
             args_concat += beda[i];
            }

            console.log("Thagobeda method with array as argument: "+args_concat + temp);
            return args_concat;
        }       

        if (arguments.length === 1 && Array.isArray(arguments[0])){
            return thagobeda(arguments[0]);
        }        
        else if (arguments.length === 2){
            return iskoli(arguments[0], arguments[1]);
        }
        else if(arguments.length === 1 && !Array.isArray(arguments[0])){
            return thagoli(arguments[0]);
        }
    }
}

let display = new Display();
console.log(display.yenaadhruondhu("Thagoli"));
console.log(display.yenaadhruondhu("Iskoli", "Thagoli"));
console.log(display.yenaadhruondhu(["Electronic City", "Vijayanagar", "Banaswadi"]));