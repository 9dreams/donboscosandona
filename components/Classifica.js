import React, { useState, useEffect } from 'react';


const Classifica = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState({
    '1A': 1101,
    '2A': 950,
    '3A': 1357,
    '4A': 936,
    '1B': 1121,
    '2B': 854,
    '3B': 1160,
    '4B': 1056,
    '1C': 1030,
    '2C': 977,
    '3C': 1138,
    '1D': 905,
    '2D': 991,
    '3D': 1056,
    '1E': 1051,
    '2E': 823,
    '3E': 935,
    '1F': 1146,
    '2F': 1189,
    '3F': 1080,
  });


  const [showChart, setShowChart] = useState(false);
  const [emojis, setEmojis] = useState([]);
  const [showImage, setShowImage] = useState(true);


  const handleButtonClick = () => {
    setShowChart((prevShowChart) => !prevShowChart);
    setShowImage((prevShowImage) => !prevShowImage);
  };


  const handleMouseMove = (e) => {
    if (showChart) {
      const emoji = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        speed: Math.floor(Math.random() * 5) + 2,
      };




      setEmojis((prevEmojis) => [...prevEmojis, emoji]);
    }
  };


  useEffect(() => {
    let animationFrameId;


    const animateEmojis = () => {
      setEmojis((prevEmojis) =>
        prevEmojis.map((emoji) => ({
          ...emoji,
          y: emoji.y + emoji.speed,
        }))
      );


      animationFrameId = requestAnimationFrame(animateEmojis);
    };


    if (showChart) {
      animateEmojis();
    }


    return () => cancelAnimationFrame(animationFrameId);
  }, [showChart, emojis]);


  const sortedData = Object.entries(data).sort(([, a], [, b]) => b - a);
  const maxDataValue = Math.max(...Object.values(data));
  const maxHeightPercentage = 45;


  const imageUrl = 'https://media2.giphy.com/media/3ohzdNwjApMs98ECKA/giphy.gif?cid=ecf05e47dsb83lm5eum8el0qd70nbk2f2bs0x88zn23rogj3&ep=v1_stickers_search&rid=giphy.gif&ct=s';
  const podio = 'https://static.vecteezy.com/system/resources/thumbnails/012/808/358/small_2x/podium-product-display-png.png';
  const pizza = 'https://media1.giphy.com/media/5WXQ8znCU5oraPMvBE/giphy.gif?cid=ecf05e47xonp6ue1q1arzadpov0168u698elcci6lbe77xc4&ep=v1_stickers_search&rid=giphy.gif&ct=s';
  const pizza2 = 'https://media0.giphy.com/media/boZ5McJzZBf9e/giphy.webp?cid=ecf05e47wotloyx30tqc2wlxbhho0hs6wlwzruz3e0io7t8m&ep=v1_stickers_search&rid=giphy.webp&ct=s';
  const pizza3 = 'https://media2.giphy.com/media/h7ibVDe3zsdEm4fWTm/giphy.gif?cid=ecf05e47ryt4igbls5yqhvdsmi8cfyh6ie197btqzavda0xw&ep=v1_stickers_search&rid=giphy.gif&ct=s';


  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };


  const imageStyle = {
    height: '8vh',
    marginRight: '1vh',
    marginLeft: '0',
  };


  const imageStyle2 = {
    height: '8vh',
    marginRight: '1vh',
    marginLeft: '0',
    transform: 'scaleX(-1)',
  };


  const textStyle = {
    fontSize: '10vh',
    padding: '0vh',
    margin: '0',
    top: '0',
  };


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  return (
    <div
      style={{
        textAlign: 'center',
        marginBottom: '0',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-x repeat-y',
        backgroundPosition: 'center center',
        background: '#F5E1AA',
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
      }}
      onMouseMove={handleMouseMove}
    >
      <div style={{ width: '100%' }}>
        <center>
          <h1 style={textStyle}>
            <img src={imageUrl} alt="GIF" style={imageStyle} /> Classifica Superpizza{' '}
            <img src={imageUrl} alt="GIF" style={imageStyle2} />
          </h1>
        </center>
        <center>
          <button
            style={{
              position: 'relative',
              margin: '2px',
              color: 'white',
              fontFamily: 'Helvetica, sans-serif',
              fontWeight: 'bold',
              fontSize: '36px',
              textAlign: 'center',
              textDecoration: 'none',
              backgroundColor: '#FFA12B',
              display: 'block',
              position: 'relative',
              padding: '10px 20px',
              WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
              textShadow: '0px 1px 0px #000',
              filter: 'dropshadow(color=#000, offx=0px, offy=1px)',
              WebkitBoxShadow: 'inset 0 1px 0 #FFE5C4, 0 10px 0 #915100',
              MozBoxShadow: 'inset 0 1px 0 #FFE5C4, 0 10px 0 #915100',
              boxShadow: 'inset 0 1px 0 #FFE5C4, 0 10px 0 #915100',
              WebkitBorderRadius: '5px',
              MozBorderRadius: '5px',
              borderRadius: '5px',
              transition: 'top 0.3s ease, background-color 0.3s ease',
            }}
            onClick={handleButtonClick}
          >
            <a
              onMouseDown={(e) => {
                e.preventDefault();
                e.target.style.top = '10px';
              }}
              onMouseUp={(e) => {
                e.target.style.top = '0px';
              }}
            >
              {showChart ? 'Nascondi Grafico' : 'Mostra il Grafico'}
            </a>
          </button>
        </center>


        <div>
          <center>
            <button
              onClick={toggleVisibility}
              style={{
                position: 'relative',
                color: 'white',
                fontFamily: 'Helvetica, sans-serif',
                fontWeight: 'bold',
                fontSize: '35px',
                textAlign: 'center',
                textDecoration: 'none',
                backgroundColor: '#FFA12B',
                display: 'block',
                position: 'relative',
                padding: '10px ',
                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                textShadow: '0px 1px 0px #000',
                filter: 'dropshadow(color=#000, offx=0px, offy=1px)',
                WebkitBoxShadow: 'inset 0 1px 0 #FFE5C4, 0 10px 0 #915100',
                MozBoxShadow: 'inset 0 1px 0 #FFE5C4, 0 10px 0 #915100',
                boxShadow: 'inset 0 1px 0 #FFE5C4, 0 10px 0 #915100',
                WebkitBorderRadius: '5px',
                MozBorderRadius: '5px',
                borderRadius: '5px',
                transition: 'top 0.3s ease, background-color 0.3s ease',
                position: 'relative',
                bottom: '-2vh',
               
                color: 'white'
              }}>Info Superpizza</button></center>
          {isVisible && (
            <div
              style={{
                fontSize: '2vh',
                fontFamily: 'Helvetica, sans-serif',
                fontWeight: 'bold',
                textDecoration: 'none',
                backgroundColor: '#FFA12B',
                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                textShadow: '0px 1px 0px #000',
                filter: 'dropshadow(color=#000, offx=0px, offy=1px)',
                WebkitBoxShadow: 'inset 0 1px 0 #FFE5C4, 0 10px 0   #915100',
                MozBoxShadow: 'inset 0 1px 0 #FFE5C4, 0 10px 0 #915100',
                boxShadow: 'inset 0 1px 0 #FFE5C4, 0 10px 0 #915100',
                WebkitBorderRadius: '5px',
                MozBorderRadius: '5px',
                borderRadius: '5px',
                transition: 'top 0.3s ease, background-color 0.3s ease',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                position: 'fixed',
                top: '12vh',
                right:'0',
                width: '30%',
                
              }}
            >
              < h1 style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)', color: 'white',marginTop:"-0%"}}>Classifica Superpizza</h1>
              <p style={{ textShadow: '1px 1px 2px rgba(1, 1, 1, 1.5)', color: 'white',marginTop:"-4%", }} >
                Il CFP Don Bosco organizza il torneo Superpizza coinvolgendo attivamente tutte le sue classi.
                Attraverso la partecipazione entusiastica alle varie attività proposte, le classi
                accumulano preziosi punti che determinano la loro posizione nella classifica
                generale. Al termine dell'anno, la classe trionfante viene festosamente proclamata vincitrice e
                premiata con l'ambito trofeo: una deliziosa mega pizza da condividere nell'entusiasmo della
                vittoria.
              </p>
            </div>
          )}
        </div>


        <div style={{ position: 'absolute', top: '60%', right: '50%', height: '20vh' }}>


          {showImage && (
            <img src={podio} alt="GIF" style={{ position: 'absolute', top: '90%', left: '20%', height: '100%', transform: 'translate(-50%, -50%)' }} />
          )}
          {showImage && (
            <img
              src={pizza}
              alt="GIF"
              style={{ position: 'absolute', bottom: '-20%', left: '10%', height: '120%', transform: 'translate(-50%, -50%)', filter: 'brightness(90%) contrast(170%)' }}
            />
          )}
          {showImage && (
            <img
              src={pizza2}
              alt="GIF"
              style={{
                position: 'absolute',
                bottom: '-40%',
                left: '16vh',  
                height: '80%',
                transform: 'translate(-50%, -50%)',
                filter: 'brightness(90%) contrast(170%)'
              }}
            />
          )}
          {showImage && (
            <img
              src={pizza3}
              alt="GIF"
              style={{ position: 'absolute', top: '40%', right: '40%', height: '90%', transform: 'translate(-50%, -50%)', filter: 'brightness(90%) contrast(170%)' }}
            />
          )}


          {showImage && (
            <div
              style={{
                position: 'absolute',
                top: '65%',
                right: '-2vh',
                height: '20%',
                fontSize: '2vh',
              }}
            >
              <div><h1 style={{ color: 'white' }}>{sortedData[0][0]}</h1></div>
            </div>
          )}
          {showImage && (
            <div
              style={{
                position: 'absolute',
                top: '87%',
                right: '16vh',
                height: '20%',
                fontSize: '2vh',
              }}
            >
              <div><h1 style={{ color: 'white' }}>{sortedData[1][0]}</h1></div>
            </div>
          )}


          {showImage && (
            <div
              style={{
                position: 'absolute',
                top: '95%',
                right: '-19vh',
                height: '20%',
                fontSize: '2vh',
              }}
            >
              <div><h1 style={{ color: 'white' }}>{sortedData[2][0]}</h1></div>
            </div>
          )}


        </div>


        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            height: showChart ? '69vh' : '0xvh',
            marginTop: showChart ? '0vh' : '65vh',
            transition: 'margin-top 0.5s ease-in-out',
            position: 'relative',
          }}
        >
          {showChart &&
            sortedData.map(([element, value], index) => (
              <div
                key={index}
                className="chart-bar"
                style={{
                  flex: '1',
                  backgroundImage: 'url("https://static.vecteezy.com/ti/vettori-gratis/p3/3282093-pizza-sfondo-senza-soluzione-di-continuita-gratuito-vettoriale.jpg")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  margin: '0 5px',
                  position: 'relative',
                  height: `${(value / maxDataValue) * maxHeightPercentage}vh`,
                  transformOrigin: 'bottom',
                  transition: 'height 0.5s ease, opacity 0.5s ease',
                  opacity: 1,
                  border: '3px solid #000000',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#000',
                    fontSize: '80%',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                  }}
                >
                  {element}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff',
                    fontSize: '80%',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                  }}
                >
                  {value}
                  <br />
                  punti
                </div>
              </div>
            ))}
          {showChart &&
            emojis.map((emoji) => (
              <div
                key={emoji.id}
                style={{
                  position: 'absolute',
                  left: emoji.x,
                  top: emoji.y,
                  pointerEvents: 'none',
                  marginTop: '-25vh',
                }}
              >
                🍕
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};


export default Classifica;
