
function validator (string) {
    if (!string || string == "" || string == undefined || string == "undefined") {
        return false;
    }
    else{
        return true;
    }
}

export default validator()