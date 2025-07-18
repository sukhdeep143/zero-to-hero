



const Duplication = [1,1,2,2,3,3,3,4,4,4,4,5,5,6,6,6,7,7,8,8,8,9,9,9,9];


let prv = null; 


for(i = 0; i < Duplication.length; i++){

    if(Duplication[i] !== prv){
        console.log(Duplication[i]);
        prv = Duplication[i]
        
    }
}