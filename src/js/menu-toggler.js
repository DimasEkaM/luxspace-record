import {addClass, removeClass} from './utils-class';

const menuTogglerID = document.getElementById("menu-toggler");
menuTogglerID.addEventListener("click",function(){
    const menuId = document.getElementById("menu");
    if(menuId.className.indexOf("opacity-0")> -1){
        addClass(menuTogglerID,"fixed top-0 right-0")
        removeClass(menuTogglerID,"relative")
        addClass(menuId,"opacity-100 z-30")
        removeClass(menuId,"opacity-0 invisible")
    } else{
        removeClass(menuTogglerID,"fixed top-0 right-0");
        addClass(menuTogglerID, "relative");
        addClass(menuId,"opacity-0 invisible");
        removeClass(menuId,"opcaity-100 z-30");
    }
})