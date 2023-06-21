import React, { useEffect, useState } from "react";

function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState('');

 
  useEffect(() => {
    getQuotes();
  }, []);

  function getQuotes() {
    fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
       
        setQuotes(data);
        setQuote(data[Math.floor(Math.random() * data.length)]);
      });
  }

  function handleClickNewQuote() {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 col-11 mx-auto">
          <blockquote className="blockquote blockquote-custom p-5 shadow rounded">
            <div className="blockquote-custom-icon bg-info shadow-sm">
              <i className="fa fa-quote-left text-white"></i>
            </div>
            <p className="mb-0 mt-2 bolder-font font-italic display-6">{quote.text}</p>
            <footer className="blockquote-footer pt-4 mt-4 border-top">
              {quote.author ? quote.author : 'Unknown'}
            </footer>
            <button
              type="button"
              onClick={handleClickNewQuote}
              className="btn btn-outline-info mt-3"
            >
              New Quote
            </button>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Quote;
