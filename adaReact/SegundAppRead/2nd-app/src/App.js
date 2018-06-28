import React, { Component } from 'react';
import logo from './logo.svg';
import edificio1 from './edificio1.png';
import edificio2 from './edificio2.png';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <nav>
          <a href="/">LA NACÍON</a> | 
          <a href="/">TECNOLOGÍA</a> | 
          <a href="/">TECNOLOGICA</a> | 
        </nav>
        <div>
          <h1>Japón planea tener el rascacielos de madera más alto del mundo en Tokio</h1>
        </div>

        <div class="bloque1">
		      <figure>
			      <img src={edificio1}/>
			      <figcaption>Tendrá 350 metros de altura y será la más alta en su tipo, con una construcción cuya estructura combina nueve partes de madera y una de acero</figcaption>
		      </figure>
        </div>
	
		    <div>
			    <h6>16 de Febrero de 2018 - 00:16</h6>
		    </div>

		    <div>
			    <p id="primerParrafo">El constructor y desarrollador inmobiliarfio <a href="">Sumitomo Foresty</a>, especializado en la industria forestal, planea tener para las próximas décadas el ambicioso objetivo de desarrollar un torre rascacielos de 350 metros de altura. Como referencia, el edificio más alto de Buenos Aires sera el Alvear Tower, una construccion tradicional de 235 metros, mientras que el edificio mas alto de madera es el Brock Commons Tallwood House, un edificio de 53 metros de altura ubicado en a Universidad de Columbia Británica en Vancouver, Canada,</p>

			    <p>El proyecto diseñado por Nikken Sekei, buscara combinar una proporcion de 9 a 1 de madera y acero para la particular estuctura solicitada por Sumitomo para acelerar el 350 aniversario de la compania en 2041 con una estructura que transfome a Tokio en un bosque.</p>

			    <p>La estructura de la torre de madera mas alta del mundo cumplira con los reglamentos antisismicos para este tipo de edificios y se destinara para un hotel, oficinas, residencias.</p>

			    <p>Cuando finalice, la torre de Sumitomo Forestry no solo sera la mas alta del mundo Sino que tambien superara a los rascacielos  tradicionales de tdo Japon.</p>
		    </div>

	
		    <figure>
			    <img src={edificio2}/>
			    <figcaption>	
					  <epigrafe> El proyecto deberá superar las estrictas normas japonesas que restringen el uso de la madera para evitar incendios </epigrafe>
			    </figcaption>
		    </figure>
	    
      </div>
        // <p className="App-intro">
        //   To get started, edit <code>src/App.js</code> and save to reload.
        // </p>

    );
  }
}

export default App;
