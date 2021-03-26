import React from 'react'

const Ferramenta = (props) => {
  const { match } = props;
  const { params } = match;
  const { ferramentaId } = params;
   
  return (
    <div>
      Esta é a página da ferramenta com ID = {ferramentaId} 
    </div>
  )
}

export default Ferramenta