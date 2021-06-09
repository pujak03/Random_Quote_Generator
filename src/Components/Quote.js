import React, { useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { IoCopy } from "react-icons/io5";

import { CopyToClipboard } from "react-copy-to-clipboard";
import {RiTwitterLine} from "react-icons/ri"



function Quote() {
  const [quote, setQuote] = useState(
    "A positive attitude causes a chain reaction of positive thoughts, events and outcomes. It is a catalyst and it sparks extraordinary results."
  );
  const [author, setAuthor] = useState("Wade Boggs");
  const [copied, setCopied] = useState(false);

  const getQuotes = () => {
    const quotes_api = "https://type.fit/api/quotes";
    
    fetch(quotes_api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        

        
        let random_no = Math.floor(Math.random() * data.length);

        let random_quote = data[random_no].text;
        let randomquote_author = data[random_no].author;
        console.log(random_no);
        setQuote(random_quote);
        setAuthor(randomquote_author);
        setCopied(false);
      });
  };
  const handlelClick = () => {
    getQuotes();
  };

  return (
    <div className="quote">
      <div className="quote-box">
        
        <h4>{quote}</h4>
        <div className="author">
          <span>Author-</span>
          {author}
        </div>

        <div className="refresh">
          <BiRefresh onClick={handlelClick} />
        </div>
        <div className="twitter">
        <a class="twitter-share-button" href="https://twitter.com/Puja86227690" >  
        <RiTwitterLine />
        </a> 
        </div>
       
        <div className="copy">
          <CopyToClipboard text={quote} onCopy={() => setCopied(true)}>
            <IoCopy />
          </CopyToClipboard>
          {copied ? <span className="copied">Copied </span> : null}
        </div>
      </div>
    </div>
  );
}

export default Quote;
