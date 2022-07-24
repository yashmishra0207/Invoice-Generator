import './App.css';
import Invoice from './components/Invoice';

export function randomNumber(fixed, random) {
  return fixed + Math.floor(Math.random() * random)
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';

export function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export function findTop(element) {
  var rec = document.getElementById(element).getBoundingClientRect();
  return rec.top + window.scrollY;
}

function App() {
  return (
    <div className="App">
      {
        [...Array(1)].map(() => {
          return <Invoice rows={randomNumber(3, 4)} />
        })
      }
    </div>
  );
}

export default App;
