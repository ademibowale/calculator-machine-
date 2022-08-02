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
    title: 'Arithmetic is being able to count up to twenty without taking off your shoes.',
    author: 'Mickey Mouse',
  },
  {
    id: 4,
    title: 'Mathematics is the gate and key to science.',
    author: 'Roger Bacon',
  },
  {
    id: 5,
    title: 'Life is a math equation. In order to gain the most, you have to know how to convert negatives into positives.',
    author: 'Anonymous',
  },
  {
    id: 6,
    title: 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
    author: 'Shakuntala Devi',
  },
  {
    id: 7,
    title: 'The only way to learn mathematics is to do mathematics.',
    author: 'Paul Halmos',
  },
  {
    id: 8,
    title: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
    author: 'William Paul Thurston',
  },
  {
    id: 9,
    title: 'Mathematics is a language.',
    author: 'Josiah Willard Gibbs',
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
