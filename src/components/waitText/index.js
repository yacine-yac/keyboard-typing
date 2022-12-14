import {Link} from 'react-router-dom';
function WaitText(){
    return  <>
            <div className="zone center">
                <div className="zone-btn center">
                    <Link to='/text'>Insert Text</Link>
                    <hr /> 
                    <Link  to="/interval">Text Interval</Link>
                </div>
            </div> 
    </>
}
export default WaitText;
 