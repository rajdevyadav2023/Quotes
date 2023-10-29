import { useEffect, useState } from 'react'
import './positive.css'
import axios from 'axios';

import pre2 from '../../assets/pre2.gif'

const Positive = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    let mydata;
    axios.get("http://localhost:3000/positive")
      .then(res => mydata = res.data)
      .catch(err => console.log(err));

      setTimeout(()=>{
        setQuotes(mydata)
      }, 2000)
  }, [])
  return (
    <div>
      <h1 className='heading'>Positive Quotes</h1>

      {
        quotes.length == 0 ? (
          <div className="preloader">
            <img src={pre2} alt="this is preloader" />
          </div>
        ) : (
          <div className="quotes-list">
            {
              quotes.map((item) => {
                return (
                  <div key={item.id} className='quote-box'>
                    <h3>&#34; {item.quote} &#34;</h3>
                    <p>- {item.speaker}</p>
                  </div>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}

export default Positive