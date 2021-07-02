function receivesAFunction(callBack){
    callBack();
}
//ReferenceError: returnsANamedFunction is not defined
function  returnsANamedFunction(){
    //let fn;
    //fn = returnsANameFunction ();
    return function racheal(){
        console.log('A good girl');
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log('me')
        
    }

