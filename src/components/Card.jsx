import React from "react";
import data from "../data/data.json";

const Card = () => {
  // calculate total score
  const totalScore = data.reduce((sum, item) => sum + item.score, 0);
  const averageScore = Math.round(totalScore / data.length);

  return (
    <section className="section h-screen w-screen md:px-20 md:py-40 lg:px-40 lg:py-35">
      <div className="container bg-white rounded-4xl md:flex">
        {/* LEFT: Total Result */}
        <div className="total-result bg-linear-to-b from-blue-600 to-blue-800 text-center place-items-center p-7 text-white grid gap-4 rounded-b-4xl md:rounded-4xl md:w-full">
          <h2 className="total-result-title text-2xl">Your Result</h2>
          <div className="total-score bg-linear-to-t from-blue-600/0 to-blue-800 flex flex-col rounded-full w-[9rem] h-[9rem] justify-center align-middle gap-2">
            <span className="total-score-value text-6xl font-bold">{averageScore}</span>
            <span> of 100</span>
          </div>
          <h3 className="predicate text-3xl">
            {averageScore >= 90
              ? "Excellent"
              : averageScore >= 80
              ? "Great"
              : averageScore >= 70
              ? "Good"
              : averageScore >= 60
              ? "Average"
              : "Below Average"}
          </h3>
          <p className="result-desc">
            You scored higher than 65% of the people who have taken these
            tests.
          </p>
        </div>
        {/* RIGHT: Items Result */}
        <div className="items-result bg-white p-6 md:w-full md:rounded-tr-3xl md:rounded-br-3xl">
          <h2 className="items-result-title font-bold pb-4">Summary</h2>

          <div className="item-detail-result flex flex-col gap-8 md:justify-between">
            {data.map((item, index) => (
              <div key={index} className={`${item.category.toLowerCase()} flex items-center justify-center gap-2 p-4 md:p-1 md:w-full rounded-xl`}>
                <img src={item.icon} alt={item.category} className="w-5 h-5" />
                <span className="category md:text-sm">{item.category}</span>
                <span className="score ml-auto font-bold text-black">
                  {item.score} <span className="text-gray-400"> / 100</span>
                </span>
              </div>
            ))}
          <button className="btn-continue bg-blue-950 p-4 cursor-pointer hover:bg-blue-800 rounded-full text-white md:p-2">Continue</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Card;
