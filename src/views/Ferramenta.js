import React from 'react'

const Ferramenta = (props) => {
  const { match } = props;
  const { params } = match;
  const { ferramentaId } = params;
   
  return (
    <div>
      Página da ferramenta com ID = {ferramentaId} 
    </div>
  )
}

export default Ferramenta