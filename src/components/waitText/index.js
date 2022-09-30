function WaitText({setInputZone,setPage}){
    return  <>
            <div className="zone center">
                <div className="zone-btn center">
                    <button onClick={()=>{setPage(true); setInputZone(true);} }>Insert Text</button>
                    <hr /> 
                    <button onClick={()=>{ setPage(false); }}>Text Interval</button>
                </div> 
            </div> 
    </>
}
export default WaitText;
// {}