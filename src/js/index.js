import '../css/main.css';
import '../css/main.less';
import component from './component.js';
var ele=document.createElement("div");
ele.innerHTML="this is an box";
document.body.appendChild(ele);
component();
