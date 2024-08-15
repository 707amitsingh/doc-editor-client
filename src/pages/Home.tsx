import { useNavigate } from "react-router-dom"
import { v4 as uuidV4 } from 'uuid';

function Home() {
  const navigate = useNavigate()
  const handleCreateNewDocument = () => {
    navigate(`/document/${uuidV4()}`)
  }
  return <div>Home
    <button onClick={handleCreateNewDocument}>New Doc</button>
  </div>
}

export default Home