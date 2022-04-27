import React from 'react'

interface DadosDeCadaAtividade {
  title:string;
  timeframes:{
    daily: {
      current:number;
      previous:number
    };
    weekly: {
      current:number;
      previous:number
    };
    monthly: {
      current:number;
      previous:number
    }
  }
}

interface TypeTempo{
  tempo: string;
}

const Tempos = ({ tempo }: TypeTempo) => {
  const [dados, setDados] = React.useState<[DadosDeCadaAtividade]>(null)

  React.useEffect(() => {
    fetch('data.json')
      .then((response) => response.json())
      .then((json) => setDados(json))
  }, [])

  if (dados === null) return null
  return (
    <div>
      <ul className="lista">
        {dados.map((item) => {
          return (
              <li key={item.title}>
                <div className={item.title}></div>
                <button>
                  <h3>{item.title}</h3>{' '}
                  <h1>{item.timeframes[tempo].current}hrs</h1>{' '}
                  <p>
                    Last {tempo} - {item.timeframes[tempo].previous}hrs
                  </p>
                </button>{' '}
              </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Tempos
