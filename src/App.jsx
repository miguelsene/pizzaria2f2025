import { useState } from "react"


function App(){
  var nome = "miguem"
  return(
    <div className="pizza">
      <h3>pizzaria</h3>
      <input type="text" />
      <button onClick={()=>{alert('nome')}}>sim?</button>
    </div>
  )
}
export default App