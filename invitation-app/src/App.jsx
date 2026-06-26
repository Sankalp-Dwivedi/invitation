import FlowerRain from './FlowerRain.jsx'
import InvitationCard from './InvitationCard.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <FlowerRain count={42} />
      <main className="stage">
        <InvitationCard />
      </main>
    </div>
  )
}
