export function getPropertyCss(property){
  return  getComputedStyle(document.documentElement).getPropertyValue(property);
}
export function setPropertyCss(key,value){
    document.documentElement.style.setProperty(key,value);
}
