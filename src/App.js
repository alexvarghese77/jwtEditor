import './App.css';
import Header from './components/Header/Header';
import Decoder from './components/Decoder/Decoder';
import Encoder from './components/Encoder/Encoder.js';
import './App.css';
import base64 from 'base-64';
import utf8 from 'utf8';

function App() {
  const input = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
  var bytes = base64.decode(input);
  var text = utf8.decode(bytes);
  const changeHandler = (evt) => {
    console.log(
      '🚀 ~ file: Encoder.js ~ line 16 ~ changeHandler ~ evt',
      evt.target.value.replace(/<[^>]*>/g, '')
    );
  };
  return (
    <div className="">
      <Header></Header>
      <section className="content-main">
        <Encoder changeHandler={changeHandler} />
        <Decoder />
      </section>
    </div>
  );
}

export default App;
