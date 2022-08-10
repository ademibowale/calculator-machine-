import React from 'react';
import Navbar from './Navbar';

const quotes = [
  {
    id: 1,
    title: 'You don’t have to be a mathematician to have a feel for numbers.',
    author: 'John Forbes',
  },
  {
    id: 2,
    title: 'Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.',
    author: 'Albert Einstein',
  },
  {
    id: 3,
    title: 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers..',
    author: ' Shakuntala Devi, Indian writer and mental calculator',
  },
  {
    id: 4,
    title: 'Mathematics is the gate and key to science.',
    author: 'Roger Bacon',
  },
  {
    id: 5,
    title: 'Life is a math equation.to gain the most, you have to know how to convert negatives into positives.',
    author: 'Anonymous',
  },
  {
    id: 6,
    title: 'Without mathematics,there’s nothing you can do.Everything around you is mathematics.',
    author: 'Shakuntala Devi',
  },
  {
    id: 7,
    title: 'The only way to learn mathematics is to do mathematics.',
    author: 'Paul Halmos',
  },
  {
    id: 8,
    title: 'I hope that seeing the excitement of solving this problem will make mathematicians realize that there are lots and lots of other problems in mathematics which are going to be just as challenging in the future..',
    author: 'William Paul Thurston',
  },
  {
    id: 9,
    title: 'Mathematics may not teach us to add love or subtract hate,but gives hope that every problem has a solution.',
    author: '— Anonymous',
  },
  {
    id: 10,
    title: 'Just because we can’t find a solution it doesn’t mean that there isn’t one.',
    author: 'Andrew',
  },
];
function Quotes() {
  const index = Math.floor(Math.random() * 10);
  return (
    <>
      <Navbar />
      <main className="main-section">
        <h2>Quote</h2>
        <p id="quote">
          {quotes[index].title}
        </p>
        <span id="span">
          -
          {quotes[index].author}
        </span>
      </main>
    </>
  );
}

export default Quotes;
