import add from "./media/add_Light.png";
import settings from './media/settings_Light.png';
 const light= ` 
  --ground:#e4e5f1 ;
  --borders:rgb(72,75,106);
  --text:#484b6a;
/* keyboard */
  --key-text:white;
  --key-ground: rgb(72,75,106);
  --key-shadow:#e4e5f1;
  --key-border:rgb(72,75,106);
/* active keyboard key*/
  --key-shadow-active:white;
  --key-text-active:white;
  --key-ground-active:#9394a5;
/* interval */
  --letter-active:greenyellow;
  --small-text:#83828E;
/* boxes */
  --box-ground:rgb(72,75,106);
  --li-active:#929094;
  --title-input:white;
/* zone text*/
--zone-border:black;
--zone-text:black;
/* zone text-active */
--active-text:#01000A;
--n-active-text:#9394a5;
--text-setting:white;
/*icons */
--settings:url(${add});
--input:url(${settings});

`;
export default light;