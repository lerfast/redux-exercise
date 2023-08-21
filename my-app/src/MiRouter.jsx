import React from 'react'
import {Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom'
import Dos from './componentes/Dos'
import Uno from './componentes/Uno'

const MiRouter = () => {
  return (
   <>
   <Router>
    <div>
        <Link to="/Uno"><button>Ir al Uno</button>
        </Link>
        <Link to="/Dos"><button>Ir al Dos</button>
        </Link>
    </div>
    <Routes>
        <Route path ="/uno" element= {<Uno/>}/>
        <Route path ="/dos" element= {<Dos/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default MiRouter
