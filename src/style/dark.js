 import add from "./media/add.png";
 import setting from "./media/setting.png"
 const dark =`   
    --ground: rgb(25, 37, 47);
    --borders:white;
    --text:white;
  /* keyboard */
    --key-text:#eee;
    --key-ground:#333;
    --key-shadow:#222;
    --key-border:#444;
  /* active keyboard key*/
    --key-shadow-active:black;
    --key-text-active:#aaa;
    --key-ground-active:#2a2a2a;
  /* interval */
    --letter-active:greenyellow;
    --small-text:rgba(236, 236, 236, 0.793);
  /* boxes */
    --box-ground:rgb(37, 41, 56);
    --li-active:rgba(240, 255, 255, 0.386);
    --title-input:white;
  /* zone text*/
    --zone-border:white;
    --zone-text:white;
   /* zone text-active */
   --active-text:white;
   --n-active-text:rgb(161, 161, 161);
   --text-setting:white;
   /*icons */
    --settings: url(${add}) ;
    --input:url(${setting});
  `;
export default dark;