import './App.css';
import Footer from './components/Layout/Footer';
import Navigation from './components/Layout/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <section>
          <div className="stack">
              <img src="./assets/imagesnakit-pozadina.jpg" alt="slika" width="700px" height="300px" />
              <button className="btn">NEW ARRIVALS</button>
          </div>
          <div className="stack">
              <img src="./assets/imagesnakit2.jpg" alt="slika" width="700px" height="300px" />
              <button className="btn">EARRINGS</button>
          </div>
          <div className="stack">
              <img src="./assets/imagesnakit-slika2.jpg" alt="slika" width="700px" height="300px" />
              <button className="btn">RINGS</button>
          </div>
      </section>
      <main>
        <div className="naslovi">
            <h3>TRENDING</h3>
            <h4>TOP VIEW IN THIS WEEK</h4>
        </div>
        <div className="proizvodi">
            <div className="jewelry">
              <div id="trns">
                  <img className="bottom" src="./assets/imagesnakit5.jpg" alt="slika" />
                  <img className="top" src="./assets/imagesim_nakit1.jpg" alt="slika" />
              </div>
              <h5>JEWELRY</h5>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <p>Mindjuse od bakra</p>
              <p>$5.00</p>
              <button type="button" className="btn btn-dark"><i className="fas fa-shopping-bag"></i> ADD TO CART</button>
            </div>
            <div className="jewelry">
                <div id="trns">

                    <img className="bottom" src="./assets/images/im-nakit7.jpg" alt="slika" />
                    <img className="top" src="./assets/imagesnakit6.jpg" alt="slika" />
                </div>

                <h5>JEWELRY</h5>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <p>Drugi tip minjdusa</p>
                <p>$6.00</p>
                <button type="button" className="btn btn-dark"><i className="fas fa-shopping-bag"></i> ADD TO CART</button>
            </div>
            <div className="jewelry">
                <div id="trns">

                    <img className="bottom" src="./assets/imagesprsten6.jpg" alt="slika" />
                    <img className="top" src="./assets/imagesprsten2.jpg" alt="slika" />
                </div>

                <h5>JEWELRY</h5>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <p>Prstenovi</p>
                <p>$4.00</p>
                <button type="button" className="btn btn-dark"><i className="fas fa-shopping-bag"></i> ADD TO CART</button>
            </div>
            <div className="jewelry">
                <div id="trns">

                    <img className="bottom" src="./assets/imagesogrlice3.jpg" alt="slika" />
                    <img className="top" src="./assets/imagesogrlice5.jpg" alt="slika" />
                </div>

                <h5>JEWELRY</h5>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <p>Ogrlice</p>
                <p>$7.00</p>
                <button type="button" className="btn btn-dark"><i className="fas fa-shopping-bag"></i> ADD TO CART</button>



            </div>
        </div>

        <div className="more-image">
            <div className="category-info">
                <div className="image">

                    <h5>NEW COLLECTION</h5>
                    <h4>DIFFERENT CEATIVE SOLUTION</h4>
                    <img src="./assets/imagesnakit4.jpg" alt="slika" />
                </div>
            </div>
            <div className="category-info">
                <div className="image">

                    <h5>NEW COLLECTION</h5>
                    <h4>DIFFERENT CEATIVE SOLUTION</h4>
                    <img src="./assets/imagesnakit-slika3.jpg" alt="slika" />
                </div>
            </div>

        </div>

        <div className="naslovi">
            <h3>TRENDING</h3>
            <h4>TOP VIEW IN THIS WEEK</h4>

        </div>



        <div className="proizvodi" id="proizvodi-two">
            <div className="jewelry" id="jewelry-two">

                <div id="trns">

                    <img className="bottom" src="./assets/imagesogrlice2.jpg" height="500px" alt="slika" />
                    <img className="top" src="./assets/imagesogrlcice7.jpg" alt="slika" />
                </div>

                <h5>MORE JEWELRY</h5>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <p>Novi tip ogrlica</p>
                <p>$5.00</p>
                <button type="button" className="btn btn-dark"><i className="fas fa-shopping-bag"></i> ADD TO CART</button>
            </div>
            <div className="jewelry" id="jewelry-two">

                <div id="trns">

                    <img className="bottom" src="./assets/imagesim-nakit4.jpg" alt="slika" />
                    <img className="top" src="./assets/imagesim-nakit6.jpg" alt="slika" />
                </div>

                <h5>MORE JEWELRY</h5>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <p>Drugi tip minjdusa</p>
                <p>$6.00</p>
                <button type="button" className="btn btn-dark"><i className="fas fa-shopping-bag"></i>ADD TO CART</button>
            </div>
            <div className="jewelry" id="jewelry-two">
              <div id="trns">
                  <img className="bottom" src="./assets/imagesprsten4.jpg" alt="slika" />
                  <img className="top" src="./assets/imagesprsten1.jpg" alt="slika" />
              </div>

                <h5>MORE JEWELRY</h5>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <p>Prstenovi</p>
                <p>$4.00</p>
                <button type="button" className="btn btn-dark"><i className="fas fa-shopping-bag"></i>ADD TO CART</button>
            </div>
        </div>
    </main>
      <Footer />     
    </div>
  );
}

export default App;
