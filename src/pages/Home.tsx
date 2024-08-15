import { useNavigate } from "react-router-dom"
import { v4 as uuidV4 } from 'uuid';
import DocImage from '../assets/docs_image.png'

function Home() {
  const navigate = useNavigate()
  const handleCreateNewDocument = () => {
    navigate(`/document/${uuidV4()}`)
  }
  return <div>
    <h2 style={{ marginLeft: '15px', marginTop: '20px'}}>Document List</h2>
    <div>
    <img width={120} src={DocImage} alt="doc"/>
    </div>
    <button style={{ marginLeft: '15px', marginTop: '20px'}} onClick={handleCreateNewDocument}>New Doc</button>
  </div>
}

export default Home