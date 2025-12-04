import React from 'react'
import { Link } from 'react-router-dom'

function Servicios() {
  return (
     <div className="nosotros">
      <div className="tarjeta">
        <div className="contenido-tarjeta">
          <h1>Nuestro Propósito</h1>
          <p>
            Nosotr@s creemos que la gran oportunidad de cambio frente a las
            problemáticas sociales está en la manera en que concebimos y
            respetamos al Otro. No creemos que las cosas son de una única
            manera. Nos permitimos pensar y elegir cómo las queremos construir.
            Nuestro sueño es sembrar cambios culturales hacia el desarrollo de
            una sociedad más justa, consciente y sustentable, reivindicando la
            igualdad de oportunidades como un derecho en el respeto de la
            diversidad humana y sembrando alternativas para asumir la libertad
            de elegir cómo vivir.
          </p>
        </div>
        <div className="contenedor-imagen">
          <img
            className="img2"
            src="/img_juegos/mejores.jpeg"
            alt="Ilustración representando respeto y diversidad"
          />
        </div>
      </div>

      <div className="tarjeta">
        <div className="contenido-tarjeta">
          <h1>Nuestra Misión</h1>
          <p>
            Somos un proyecto empresarial que busca amplificar los puntos de
            contacto y generar confianza con las comunidades que lo rodean,
            actuando junto a ellas como un impulsor de cambio para mejorar su
            calidad de vida. No sabemos cuáles serán los puntos de contacto en
            el futuro. Sí sabemos que el sentido va a ser el mismo: no
            visualizamos clientes, sino personas que en algún momento se
            vinculan con nuestras huellas. La creatividad, la diversidad y una
            mirada sensible y abierta al cambio están presentes en nuestros
            productos, tiendas, sitios, charlas, carteles, fotos, cuentos
            acciones comerciales y hasta en nuestro silencio, creando un hogar
            que compartimos con tod@s l@s otr@s. Nuestra obsesión es la búsqueda
            de enriquecer y cuidar esta idea de hogar a través de todo lo que
            hacemos
          </p>
        </div>
        <div className="contenedor-imagen">
          <img
            className="img2"
            src="/img_juegos/reunion.jpeg"
            alt="Ilustración representando nuestra misión"
          />
        </div>
      </div>
    
    <div className="tarjeta">
        <div className="contenido-tarjeta">
          <h1>Nuestras Maquinas</h1>
          <p>
            Máquinas de confección de edredones: precisión que transforma fibras en sueños. 
            Silenciosas, rápidas y robustas, manejan acolchados, capas y costuras con control de tensión
             y puntadas perfectas. Versátiles para tejidos gruesos, permiten acabados profesionales, 
             producción eficiente y resultados de lujo en cada prenda.
          </p>
        </div>
        <div className="contenedor-imagen">
          <img
            className="img2"
            src="/img_juegos/maq2.jpg"
            alt="Ilustración representando respeto y diversidad"
          />
        </div>
      </div>
    <div className="tarjeta">
        <div className="contenido-tarjeta">
          <h1>El Disenio</h1>
          <p>
            Edredones: diseño que abraza emociones. Formas limpias, texturas lujosas y paletas que cuentan historias.
             Capas acolchadas con motivos contemporáneos, costuras invisibles y acabado premium. 
             Mezcla generar confort visual y sensorial, creando un refugio elegante en cada noche.
          </p>
        </div>
        <div className="contenedor-imagen">
          <img
            className="img2"
            src="/img_juegos/maq1.jpg"
            alt="Ilustración representando respeto y diversidad"
          />
        </div>
      </div>
    </div>
  )
}

export default Servicios