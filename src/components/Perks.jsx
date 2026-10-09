import './Perks.css'

function Perks({ perks }) {
  return (
    <section className="perks" id="why">
      <div className="container">
        <div className="section-heading">
          <h2>Why Mango Grove</h2>
          <p>Supermarket mangoes are picked green and ripened in a warehouse. Ours are not.</p>
        </div>
        <ul className="perks__list">
          {perks.map((perk, position) => (
            <li key={perk.id} className="perk">
              <span className="perk__number">{String(position + 1).padStart(2, '0')}</span>
              <h3>{perk.title}</h3>
              <p>{perk.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Perks
