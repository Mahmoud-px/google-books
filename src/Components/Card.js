import React from 'react';

function Card({book}) {

    return (
        <>
        
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount
                    let title = item.volumeInfo.title
                    let preview = item.volumeInfo && item.volumeInfo.infoLink
                    function handleClick (){
                        window.open(`${preview}`)
                    }

                    if (thumbnail != undefined && amount != undefined && title != undefined){
                        return(
                            <div key={item.id} className='card' onClick={handleClick}>
                                <img alt='' src={thumbnail}/>
                                <h4>{title}</h4>
                                <p>{amount} L.E</p>
                            </div>
                        )
                    }
                })
                
            }
        </>
    )
}

export default Card;