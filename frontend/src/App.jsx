 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className="btn btn-xs">Xsmall</button>
<button className="btn btn-sm">Small</button>
<button className="btn">Medium</button>
<button className="btn btn-lg">Large</button>
<button className="btn btn-xl">Xlarge</button>
    </>
  )
}

export default App
