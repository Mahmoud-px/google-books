import {React, useState} from 'react'
import Card from './Card';
import axios from 'axios'
import Footer from './Footer';


function Main() {

  const [search, setSearch] = useState("")
  const [bookData, setBookData] = useState([])

  const searchBook = (evt) =>{
    if(evt.key === "Enter"){
      axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyA1Fwq07FkbMlW2oycrxzMIGeeNnCWm59w"+"&maxResults=40")
      .then(res => {
        setBookData(res.data.items);
        return res
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <>

      {/* header section starts */}
      <div className='header'>
        <div className='row1'>
          <h1>
            A room without <span>BOOKS</span> is like <br/>a body without <span>SOUL</span>
          </h1>
        </div>
        
        <div className='row2'>
          <h2>
            Find your <span>Soul</span>
          </h2>
          <div className='search'>
            <input type="text" placeholder="Enter your book name"
              value={search} onChange={e=>setSearch(e.target.value)}
              onKeyPress={searchBook} />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      {/* header section starts */}


      {/* card section starts */}
      <div className='container'>
        <div className='card-container'>

          <Card book={bookData} />

        </div>
      </div>
      {/* card section ends */}

      {/* footer section starts */}
        <Footer books={bookData}/>
      {/* footer section ends */}

    </>
  )
}

export default Main;