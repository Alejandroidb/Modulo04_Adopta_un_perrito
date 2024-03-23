import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import MyFooter from "./components/Myfooter";

function App() {
  return (
    <>
      <Header Titulo='Adopta un perrito' />
      <main className="container">
        <div className="d-flex justify-content-evenly flex-wrap mb-3 mt-3">
          <div>
            <MyCard 
            imageUrl="https://placedog.net/200/201" 
            badgeText="Quilterrier" 
            dogdesc='El fiel compañero, aventurero como el solo, el Quilterrier es el mejor perro del mundo mundial' />
          </div>
          <div>
            <MyCard 
            imageUrl="https://placedog.net/200/202" 
            badgeText="Quilterrier cuico" 
            dogdesc="Muy similar al Quilterrier, el cuico tambien es un compaero fiel, pero no es igual de aventurero" />
          </div>
          <div>
            <MyCard 
            imageUrl="https://placedog.net/200/203" 
            badgeText="Quilterrier crespo"
            dogdesc='Con un pelaje que los más "Lais" quisieran, el crespo te volvera loco con sus pelos en la casa' />
          </div>
          <div>
            <MyCard 
            imageUrl="https://placedog.net/200/204" 
            badgeText="Quilterrier del Sur" 
            dogdesc='Su gran pelaje, lo hara ideal para sobrevivir a la temperatura y condiciones del sur de Chile'/>
          </div>
          <div>
            <MyCard 
            imageUrl="https://placedog.net/200/205" 
            badgeText="Primo del lipigas"
            dogdesc='Un pariente muy cercano, que te podría acercar el gas si se te acaba cuando te estas duchando' />
          </div>
          <div>
            <MyCard 
            imageUrl="https://placedog.net/200/206" 
            badgeText="Siberiano enojado" 
            dogdesc="Perrito siberiano muy enojado, pero que no te engañe es muy amigable, aunque un tanto dramático" />
          </div>
          <div>
            <MyCard 
            imageUrl="https://placedog.net/200/207" 
            badgeText="Salchicha al 'Completo'"
            dogdesc='El temperamental "Salchicha, a pesar de su imagen, es un deportista innato, ideal para acompañarte a comer' />
          </div>
          <div>
            <MyCard 
            imageUrl="https://placedog.net/200/208" 
            badgeText="Quilterrier Fashion" 
            dogdesc='Este ejemplar te puede llevar al "lolapalooza" y no al reves, el rey de la moda, vaya donde vaya'/>
          </div>
        </div>
      </main>
      <MyFooter />
    </>
  );
}

export default App;
