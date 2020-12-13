import './App.css';

const date = new Date().toLocaleTimeString();

function App(prop) {
  return (
    <div className='hi'>
      <div className='hello'>
        <div className='how'>
          <img src={prop.profilepic} className='then' />
          <p className="when">
            <a className='khan' href={prop.link} target="_blank">{prop.name}</a>
            <span className='date'>{date}</span>
          </p>
        </div>
        <br />
        <img src={prop.some} className='ques' />
        <div>
          <button className='likeBtn'>Like</button>
          <button className='cmtBtn'>Comments</button>
          <button className='shareBtn'>Share</button>
        </div>
      </div>
    </div>
  );
}




export default App;
