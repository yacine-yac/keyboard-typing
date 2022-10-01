import "./index.css";
import {useState,useEffect,memo, useMemo} from "react";
import {useNavigate} from "react-router-dom";
function Keyboard({status,setParagraph}){  //console.log('status',status);
  const [inputs,setInp]=useState(null);
  let button=[],blockButton={}; let route=useNavigate();
  const [capsButton,setcapsButton]=useState(false);
  const handleBlockButton=(nodeelement,keycode,key)=>{
    keycode ==20 ? 
        setcapsButton(!capsButton) 
    :
        blockButton[keycode] ? 
            (delete blockButton[keycode],nodeelement.classList.remove('active-block')):
            (blockButton[keycode]=key,nodeelement.classList.add('active-block'));
  } 
  const HandleKeydown=(key,nodeelement)=>{  
      button.forEach(element => {element.classList.remove('active-btn-k');});
              button=[];
              button.push(nodeelement);
              nodeelement.classList.add("active-btn-k");
             // handleText(key);
             setInp(prev=>{ return prev==null ? {count:0,text:key} : {...prev,text:prev.text+key}})
              // console.log(inputs,"inputes handle");
                   //setInp(prev=>{ return {count:1,text:key}
              // return {
              //      count:paragraph[inputs['count']].word.length == prev.text ? prev.count+1 : prev.count,
              //      text:prev.text+letter
              //  }    
         //});  
  }
  window.onkeydown=(e)=>{ 
    if(status==true) {
            const targetting=document.querySelector(`div[data-key="${e.keyCode}"]`);
              targetting && (
                  targetting !==null && 
                    (targetting.getAttribute('block-button') !==null ? handleBlockButton(targetting,e.keyCode,e.key) 
                    : HandleKeydown(e.key,targetting))
              )
              setTimeout(()=>{targetting.classList.remove("active-btn-k")},100); 
    }
  };
  useMemo(()=>{
    (inputs!==null) && (setParagraph(prev=>{
     // console.log('version',prev);
      
      prev[inputs["count"]]={
        ...prev[inputs['count']],
        check:inputs['text'],
        wordState:true
      }  
       
      return prev;   
    }),console.log(inputs),route('/text') ); 

  },[inputs]);
  const handleText=(letter)=>{
    
    //  setInp({count:1,text:"fr"});
    // console.log('fff',inputs );
    // //  setInp({count:1,text:"fr"});
        
    //     (inputs!==null) && setParagraph(prev=>{
    //           prev[inputs["count"]]   ={
    //             ...prev[inputs['count']],
    //             check:letter,
    //             WordState:true
    //           }      
    //     }); 
    //     (inputs!==null) ? setParagraph(prev=>{
    //           prev[inputs["count"]]   ={
    //             ...prev[inputs['count']],
    //             check:letter,
    //             WordState:true
    //           }      
    //     }): setParagraph({count:0,text:letter}); 
        // textState(prev=> prev ?
        //            (letter ==="Backspace" ? prev.slice(0,-1) : prev+letter):
        //            (letter ==="Backspace" ? null: letter)
        // );  
  } 
  window.onkeyup=(e)=>{ 
  if(status==true) {
    blockButton[e.keyCode] && 
    (delete blockButton[e.keyCode],
    document.querySelector(`div[data-key="${e.keyCode}"]`).classList.remove('active-block')) 
  }
  };
  /**jsx keyboard ===================================================================== */
    return <>
<div className="keyboard">
  <div className="keyboard__row keyboard__row--h1">
    <div data-key="27" className="key--word">
      <span>esc</span>
    </div>
    <div block-button="false" data-key="112" className="key--fn">
      <span>F1</span>
    </div>
    <div block-button="false" data-key="113" className="key--fn">
      <span>F2</span>
    </div>
    <div block-button="false" data-key="114" className="key--fn">
      <span>F3</span>
    </div>
    <div block-button="false" data-key="115" className="key--fn">
      <span>F4</span>
    </div>
    <div block-button="false" data-key="116" className="key--fn">
      <span>F5</span>
    </div>
    <div block-button="false"data-key="117" className="key--fn">
      <span>F6</span>
    </div>
    <div block-button="false" data-key="118" className="key--fn">
      <span>F7</span>
    </div>
    <div block-button="false" data-key="119" className="key--fn">
      <span>F8</span>
    </div>
    <div block-button="false" data-key="120" className="key--fn">
      <span>F9</span>
    </div>
    <div block-button="false"data-key="121" className="key--fn">
      <span>F10</span>
    </div>
    <div block-button="false" data-key="122" className="key--fn">
      <span>F11</span>
    </div>
    <div block-button="false" data-key="123" className="key--fn">
      <span>F12</span>
    </div>
    <div data-key="n/a" className="key--word">
      <span>&#x23CF;</span>
    </div>
  </div>
  <div className="keyboard__row">
    <div className="key--double" data-key="192">
      <div>~</div>
      <div>`</div>
    </div>
    <div className="key--double" data-key="49">
      <div>!</div>
      <div>1</div>
    </div>
    <div className="key--double" data-key="50">
      <div>@</div>
      <div>2</div>
    </div>
    <div className="key--double" data-key="51">
      <div>#</div>
      <div>3</div>
    </div>
    <div className="key--double" data-key="52">
      <div>$</div>
      <div>4</div>
    </div>
    <div className="key--double" data-key="53">
      <div>%</div>
      <div>5</div>
    </div>
    <div className="key--double" data-key="54">
      <div>^</div>
      <div>6</div>
    </div>
    <div className="key--double" data-key="55">
      <div>&</div>
      <div>7</div>
    </div>
    <div className="key--double" data-key="56">
      <div>*</div>
      <div>8</div>
    </div>
    <div className="key--double" data-key="57">
      <div>(</div>
      <div>9</div>
    </div>
    <div className="key--double" data-key="48">
      <div>)</div>
      <div>0</div>
    </div>
    <div className="key--double" data-key="189">
      <div>_</div>
      <div>-</div>
    </div>
    <div className="key--double" data-key="187">
      <div>+</div>
      <div>=</div>
    </div>
    <div className="key--bottom-right key--word key--w4" data-key="8">
      <span>delete</span>
    </div>
  </div>
  <div className="keyboard__row">
    <div block-button="true" className="key--bottom-left key--word key--w4" data-key="9">
      <span>tab</span>
    </div>
    <div className="key--letter" data-key="81"  data-char="Q">Q</div>
    <div className="key--letter" data-key="87" data-char="W">W</div>
    <div className="key--letter" data-key="69" data-char="E">E</div>
    <div className="key--letter" data-key="82" data-char="R">R</div>
    <div className="key--letter" data-key="84" data-char="T">T</div>
    <div className="key--letter" data-key="89" data-char="Y">Y</div>
    <div className="key--letter" data-key="85" data-char="U">U</div>
    <div className="key--letter" data-key="73" data-char="I">I</div>
    <div className="key--letter" data-key="79" data-char="O">O</div>
    <div className="key--letter" data-key="80" data-char="P">P</div>
    <div className="key--double" data-key="219" data-char="{[">
      <div>{"\n{"}</div>
      <div>"["</div>
    </div>
    <div className="key--double" data-key="221" data-char="}]">
      <div>{"\n}"}</div>
      <div>"]"</div>
    </div>
    <div className="key--double" data-key="220" data-char="|\">
      <div>|</div>
      <div>\</div>
    </div>
  </div>
  <div className="keyboard__row">
    <div block-button="false" className={capsButton==true ? "key--bottom-left key--word key--w5 active-block" : "key--bottom-left key--word key--w5" } data-key="20">
      <span>caps lock</span>
    </div>
    <div className="key--letter" data-key="65" data-char="A">A</div>
    <div className="key--letter" data-key="83" data-char="S">S</div>
    <div className="key--letter" data-key="68" data-char="D">D</div>
    <div className="key--letter" data-key="70" data-char="F">F</div>
    <div className="key--letter" data-key="71" data-char="G">G</div>
    <div className="key--letter" data-key="72" data-char="H">H</div>
    <div className="key--letter" data-key="74" data-char="J">J</div>
    <div className="key--letter" data-key="75" data-char="K">K</div>
    <div className="key--letter" data-key="76" data-char="L">L</div>
    <div className="key--double" key-code='191' data-key="186">
      <div>:</div>
      <div>;</div>
    </div>
    <div className="key--double" data-key="222">
      <div>"</div>
      <div>'</div>
    </div>
    <div className="key--bottom-right key--word key--w5" data-key="13">
      <span>return</span>
    </div>
  </div>
  <div className="keyboard__row">
    <div block-button="true" className="key--bottom-left key--word key--w6" data-key="16">
      <span>shift</span>
    </div>
    <div className="key--letter" data-key="90" data-char="Z">Z</div>
    <div className="key--letter" data-key="88" data-char="X">X</div>
    <div className="key--letter" data-key="67" data-char="C">C</div>
    <div className="key--letter" data-key="86" data-char="V">V</div>
    <div className="key--letter" data-key="66" data-char="B">B</div>
    <div className="key--letter" data-key="78" data-char="N">N</div>
    <div className="key--letter" data-key="77" data-char="M">M</div>
    <div className="key--double" data-key="188">
      <div>&lt;</div>
      <div>,</div>
    </div>
    <div className="key--double" data-key="190">
      <div>&gt;</div>
      <div>.</div>
    </div>
    <div className="key--double" data-key="191">
      <div>?</div>
      <div>/</div>
    </div>
    <div block-button="true" className="key--bottom-right key--word key--w6" data-key="16-R">
      <span>shift</span>
    </div>
  </div>
  <div className="keyboard__row keyboard__row--h3">
    <div className="key--bottom-left key--word">
      <span>fn</span>
    </div>
    <div block-button="true" className="key--bottom-left key--word key--w1" data-key="17">
      <span>control</span>
    </div>
    <div className="key--bottom-left key--word key--w1" data-key="18">
      <span>option</span>
    </div>
    <div className="key--bottom-right key--word key--w3" data-key="91">
      <span>command</span>
    </div>
    <div className="key--double key--right key--space" data-key="32" data-char=" ">
      &nbsp;
    </div>
    <div className="key--bottom-left key--word key--w3" data-key="93-R">
      <span>command</span>
    </div>
    <div className="key--bottom-left key--word key--w1" data-key="18-R">
      <span>option</span>
    </div>
    <div className="keyboard__row key-center key-n">
          <div data-key="37" className="key-arrow">
            <span>&#9664;</span>
          </div>
    </div>
    <div className="keyboard__row key-n">
          <div className="key-arrow" data-key="38"> 
              <span>&#9650;</span>
          </div>
          <div className="key-arrow" data-key="40"> 
              <span>&#9660;</span>
          </div>
    </div>
    <div className="keyboard__row key-center key-n">
          <div data-key="39" className="key-arrow">
                <span>&#9654;</span>
          </div>
    </div>
    
  </div>
</div>
    </>
}
export default  memo(Keyboard) ;