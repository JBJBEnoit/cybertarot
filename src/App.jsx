//import { useState } from "react";
import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router';
import { Home } from "./pages/Home.jsx";
//import deck from "../src/deck.json"
import '@fontsource/geostar-fill';
import '@fontsource/monofett';


// function shuffleAndDraw() {

//     let picks = new Set();
//     while (picks.size < 3) {

//         picks.add(Math.floor(Math.random() * deck.length));
//     }

//     let output = [];
//     for (let pick of picks) {
//         deck[pick].inverted = Math.floor(Math.random() * 2);
//         output.push(deck[pick]);
//     }
//     return output;
// }

// const waitImages = [
//     "1.jpg",
//     "2.jpg",
//     "3.jpg",
//     "4.jpg",
//     "5.jpg",
//     "6.jpg",
//     "7.jpg",
//     "8.jpg",
//     "9.jpg",
//     "10.jpg",
//     "11.jpg",
//     "12.jpg",
// ];

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home/>} />
    )
);
function App() {
    // const [waiting, setWaiting] = useState(false);
    // const [spread, setSpread] = useState([]);
    // const [reading, setReading] = useState([]);
    // const [position, setPosition] = useState([]);
    // const [waitImageIdx, setWaitImageIdx] = useState(0);
 
    // const createSpread = async () => {
    //     if (spread.length) {
    //         window.location.reload(false);
    //         return;
    //     }
    //     setPosition(["Past", "Present", "Future"]);
    //     setWaiting(true);
    //     let spreadArr = shuffleAndDraw();
    //     setSpread(spreadArr);
    //     await getReading(spreadArr);
    // };
    // const showWaitImages = (show) => {
    //     if (show) {
    //         let idx = waitImageIdx + 1;
    //         setInterval(() => {
    //             idx++;
    //             if (idx === waitImages.length) {
    //                 idx = 0;
    //             }                
    //             setWaitImageIdx(idx);
    //         }, 3500);
    //     }
    //     else {
    //         clearInterval();
    //     }    
    // };
     
    // const getReading = async (spreadArr) => {

    //     if (!spreadArr.length) {
    //         return;
    //     }
    //     showWaitImages(true);
    //     let stanzas;
        
    //     console.log("API Address: " + import.meta.env.VITE_API_ADDRESS);

    //     fetch(import.meta.env.VITE_API_ADDRESS, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(spreadArr)
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {

    //         let temp = data.output.content;
    //         let readingArr = [];
    //         stanzas = temp.split("\n\n");
    //         for (let st of stanzas) {
    //             let tmpArr = st.split('\n');
    //             readingArr.push(tmpArr);
    //         }
    //         setReading(readingArr);
    //         clearInterval();
    //         setWaiting(false);
    //         showWaitImages(false);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });   
    // };

    // function home() {
    //     return (
    //         <main>
    //             <div id="wrap">
    //         <img id="logo" src="assets/logo.gif" alt="CyberTarot logo" />
    //             <h1>CyberTarot</h1>
    
    //                 {!waiting && (!spread || !spread.length) && <div id="intro">
    //                 <img id="tarot-reader-img" src="assets/tarot-reader.jpg" />
    //                 <div className="intro-para">Welcome to the enchanting realm of CyberTarot, where the mystical and the technological
    //                     converge to offer you a unique and insightful journey into the world of divination. Our tarot card readings
    //                         are not only a blend of ancient wisdom and modern innovation but also a testament to the limitless possibilities
    //                         that emerge when artificial intelligence and artistic expression unite.</div>
    //                 <div className="intro-para">At the heart of our offerings is a collection of stunning tarot cards whose intricate artwork
    //                     has been collaboratively crafted with the assistance of artificial intelligence. These digital masterpieces transcend
    //                     traditional boundaries, capturing the essence of each card in a mesmerizing fusion of algorithmic creativity and symbolic
    //                     meaning. As you embark on your tarot reading experience, you'll be captivated by the visual tapestry that unfolds before
    //                     you, a testament to the harmonious dance between human inspiration and machine intelligence.</div>
    //                 <div className="intro-para">But our innovation doesn't stop there. The interpretation of these cards is guided by AI, which 
    //                     weaves together the threads of symbolism, mythology, and archetypal imagery to provide you with a poetic narrative. Your
    //                     personalized reading unfolds in the form of a beautifully composed poem, offering a rich and nuanced exploration of the
    //                         energies and insights present in your tarot spread.</div>
                        
    //                 <div className="intro-para">As we delve into the realm of AI-enhanced divination, it's fascinating to consider the
    //                     intersection of technology and mysticism. Drawing inspiration from the renowned psychologist C.G. Jung's theory of
    //                     synchronicity, we recognize that the algorithmic processes guiding our readings can uncover meaningful patterns and
    //                     connections that resonate with the deeper currents of the unconscious mind. The interplay of chance and meaningful
    //                     coincidence, as described by Jung, finds a modern expression in the algorithms that shape your unique tarot experience,
    //                     inviting you to explore the synchronicities that unfold in the digital cards before you. Welcome to CyberTarot, where
    //                         ancient wisdom meets cutting-edge technology to illuminate the path ahead.</div>
    //                     <img id="meditation-img" src="assets/meditation.jpg" />
    //             </div>}
    
    //                 {!waiting && reading && reading.length > 0 && <div id="spread-container"><h3>Your Spread</h3>
    //                     {!waiting && reading && reading.length > 0 && <section id="spread-section">
    //                         {!waiting && position && position.length && position.map((pos, i) => (
    //                             <h2 key={i} className="position">{pos}</h2>
    //                         ))}
    //                         {!waiting && reading && reading.length && spread.map((card, index) => (
    //                             <div key={index} className={"tarot-card" + (card.inverted ? " inverted" : "")}>
    //                                 <img src={"./assets/card-images/" + card.image} className="card-image" />
    //                                 <div className="card-name">{card.name}</div>
    //                             </div>))}
    //                     </section>}
    //                 </div>}
    
    //             {!waiting && reading && reading.length > 0 && <div className="readingText"><h3>Interpretation</h3>
    //                 <div>{reading && reading.length ? reading.map((stanza, index) => (<div key={index} className="verseStanza">
    //                     {stanza.map((line, i) => (<div key={i} className="verseLine" >{line}</div>))}</div>)) : ""}</div>
    //                 </div>}
    
    //                 {!waiting && reading && reading.length > 0 && <div id="descr-container">{<h3>Card Meanings</h3>}
    //                     {!waiting && reading && reading.length > 0 && <section id="descr-section">
    //                         {!waiting && reading && reading.length && spread.map((card, index) => (
    //                             <div key={index} className="descr-card">
    //                                 <div className={"card-in-descr tarot-card" + (card.inverted ? " inverted" : "")}>
    //                                     <img src={"./assets/card-images/" + card.image} className="card-image" />
    //                                     <div className="card-name">{card.name}</div>
    //                                 </div>
    //                             <div className="card-descr">{card.inverted ? card.descr_inv : card.descr}</div>
    //                             </div>))}
                            
    //                     </section>}
    //                 </div>}
    
    //                 {waiting && <div id="waitAnimationContainer">
    //                     <h3 id="waitingTxt">Meditate deeply on your question while your reading is being prepared...</h3>
    //                     <img src={"assets/tarot_readers/" + waitImages[waitImageIdx]} className="waitImg" />      
    //             </div>}
    
    //             {!waiting && <div id="buttonDiv">
    //                 <button id="createSpreadBtn" onClick={() => createSpread()}>{reading.length ? "Get Another Reading" : "Get Reading"}</button>
    //                 </div>}
    //             </div>
    //             <footer><p>&copy; 2023 Jason Benoit. Content for entertainment purposes only.</p><p><a href="terms-of-use.html">Terms of Use</a></p></footer>
    //         </main> 
    //     );
    // } 

    return (
        <>
      <RouterProvider router={router}/>
    </>
    );
}
export default App;


  