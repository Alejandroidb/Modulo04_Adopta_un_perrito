import React from "react"
import Tags from './Tags'
const MyCard = ({imageUrl,badgeText,dogdesc}) => {
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <Tags badgeText={badgeText} />
                    <p className="card-text">{dogdesc}</p>
                    
                </div>
            </div>
        </div>
    )
}
export default MyCard