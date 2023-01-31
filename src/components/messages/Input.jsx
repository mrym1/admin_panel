import React from 'react'
import ImageIcon from '@mui/icons-material/Image';

const Input = () => {
  return (
    <div className='input'>
        <input type="text" placeholder='Tyep Message...' />
        <div className="send">
            <input type="file" style={{display: "none"}} id="file" />
            <label htmlFor='file'>
                <ImageIcon className='img'/>
            </label>
            <button>Send</button>

        </div>
    </div>
  )
}

export default Input