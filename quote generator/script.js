

function Quote() {
  var [quote,setQuote]=React.useState("ahah")

  function getQuote() {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      setQuote(data[Math.floor(Math.random() * 1000)]) 
    });

  }
       return (
        <div>
        <div className="card card-1">
      <div className="card__icon"><i className="fa fa-bolt"></i></div>
      <p className="card__exit"><i className="fa fa-times"></i></p>
      <h2 className="card__title">{quote.text} <p className="card__apply">
       <a className="card__link" >{quote.author? `- ${quote.author}`:""}<i className="fa fa-user-vneck"></i></a>
</p></h2>
      <p className="card__apply">
        <a className="card__link" href="#" onClick={getQuote}>New Quote <i className="fa fa-arrow-right"></i></a>
      </p>
     
    </div>
        </div>
       )
}



ReactDOM.render(<Quote /> ,document.getElementById('root')) ;
