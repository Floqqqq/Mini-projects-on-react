import React from 'react';
import './index.scss';  

const Modal = ({open, setOpen, children}) => {
  return (<div className = {`overlay animated ${open ? 'show' : ''}`}>
    <div className="modal">
      <svg onClick={() => {setOpen(false)}} height="200" viewBox="0 0 200 200" width="200">
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      {children}
    </div>
  </div>  )
}

function App() {
  const [open, setOpen] = React.useState(false)
  const [currentImage, setCurrentImage] = React.useState(0);
  
  const images = [
    {src: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGttMHY1Zzgxa3hkaGE4OGdsaHdqcmc2em1tZ21kNzk2eGsxN3h0ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jp7jSyjNNz2ansuOS8/giphy.webp', title: 'Dwight Schrute'},
    {src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmYzdzZ1MGoyZHpleDZ3MHB5djBndnRld3p4cXRoajgybGt2OWl2bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pkKt4lHJuZj9KjsxoS/giphy.webp", title: 'Dwight Schrute'},
    {src:'https://media3.giphy.com/media/cAxOGVNVPEkjDcpVQk/200.webp?cid=ecf05e47pweindevyfb366ehlcw8xqoljcvbzrcdijio4fx1&ep=v1_gifs_related&rid=200.webp&ct=g',title: 'Dwight Schrute'},
    {src: 'https://media.giphy.com/media/l0amJzVHIAfl7jMDos/giphy.gif', title: 'Michael Scott'},
    {src: 'https://media.giphy.com/media/UVah1k9VydwNC4RdOT/giphy.gif', title: 'Michael Scott'},
  ]
const openModalRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  setCurrentImage(randomIndex);
  setOpen(true);
}

  return (
    <div className="App">
      <button onClick={openModalRandomImage} className="open-modal-btn">✨ Открыть окно</button>
      <Modal  open={open} setOpen={setOpen}>
      <img src={images[currentImage].src} alt={images[currentImage].title} />
        <h2>{images[currentImage].title}</h2>
      </Modal> 
    </div>
  );
}

export default App;
