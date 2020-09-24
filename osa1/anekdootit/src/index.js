import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return (
  <button onClick={onClick}>{text}</button>
  )
}

const MostVotes = ({votes, anecdotes}) => {
  let votedMost = 0;
  for (let i = 1; i< votes.length; i++) {
    if (votes[votedMost] < votes[i]) {
      votedMost = i;
    }
  }
  return (
    <>
    <p>{anecdotes[votedMost]}</p>
    <p>has {votes[votedMost]} votes</p>
    </>
  )
}

const Random = () => Math.floor(Math.random() * anecdotes.length);

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleAnecdote = () => setSelected(Random);
  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  return (
    <div>
      <h1>Anecdote of  the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleAnecdote} text='next anecdote'/>
      <Button onClick={handleVote} text='vote'/>
      <h1>Anecdote with most votes</h1>
      <MostVotes votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)