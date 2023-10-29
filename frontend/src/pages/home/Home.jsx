import { useEffect, useState } from 'react';
import './home.css';
import axios from 'axios';

import pre2 from '../../assets/pre2.gif';
const Home = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    let mydata;
    axios.get("http://localhost:3000")
      .then(res => mydata = res.data)
      .catch(err => console.log(err));

      setTimeout(()=>{
        setQuotes(mydata)
      }, 2000)
  }, [])
  return (
    <div className='home'>
      <h1 className='heading'> Life Changing Quotes</h1>

      {
        quotes.length == 0 ? (
          <div className="preloader">
            <img src={pre2} alt="this is preloader." />
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

export default Home