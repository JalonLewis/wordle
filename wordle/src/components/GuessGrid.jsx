function GuessGrid({ guess, word }) {
  return (
    <div className="container mb-2 col-5 d-flex justify-content-center">
      <div className="row">
        {new Array(5).fill().map((_, i) => {
          let bgColor = "bg-light";
          let txtColor = "text-dark";
          if (guess[i] === word[i]) {
            bgColor = "bg-success";
            txtColor = "text-light";
          } else if (word.includes(guess[i])) {
            bgColor = "bg-warning";
            txtColor = "text-light";
          } else if (!word.includes(guess[i])) {
            bgColor = "bg-secondary";
            txtColor = "text-light";
          }
          return (
            <div
              key={i}
              className={`d-flex align-items-center justify-content-center text-uppercase border ${txtColor} ${bgColor}`}
              style={{ width: 60, height: 60 }}
            >
              {guess[i]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GuessGrid;
