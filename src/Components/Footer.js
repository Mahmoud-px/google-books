import React, { useState, useEffect } from 'react'


function Footer({books}) {

    const [isAbsolute, setIsAbsolute] = useState(true)

    useEffect(() =>{
        if (books.length === 0){
            setIsAbsolute(true)
        }else{
            setIsAbsolute(false)
        }
    }, [books])
    

  return (

    <section className={`${isAbsolute ? 'Footer-absolute' : 'Footer-block'}`}>
                <h4 className="credit">
                    Created by  
                    <a href="https://www.facebook.com/7odasalama">
                        <span> Mahmoud Salama </span>
                    </a> 
                    | ©All Rights Reserved.
                </h4>
    </section>
  )
}

export default Footer;
