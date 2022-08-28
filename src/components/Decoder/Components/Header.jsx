import React,{useRef} from 'react'
import ContentEditable from 'react-contenteditable';
import base64 from 'base-64';
import utf8 from 'utf8';

const Header = ({header}) => {
    const headerRef = useRef();
 const onChangeHandler=(event) => {
     console.log("🚀 ~ file: Header.jsx ~ line 12 ~ onChangeHandler ~ event", event)
     return {
 }
 }

 const getDecodedData=()=>{
    try {
        const headerDecoded=utf8.decode(base64.decode(header))
        return ` <b style="color:#fb015b;">${headerDecoded}</b>`
    } catch (error) {
        return  `<b style="color:#fb015b;">invalid</b>`
       
    }   
}

  return (
    <div  className='decoder-items'>
        <div className='decoder-header-wrapper'>
            <p className='decoder-header'>HEADER:<span className='decoder-subheading'> ALGORITHM & TOKEN TYPE</span></p>
        </div>
        <div>
        <div className='decoder-editor'>
        <ContentEditable
          innerRef={headerRef}
          html={getDecodedData()} // innerHTML of the editable div
          disabled={false} // use true to disable editing
          onChange={onChangeHandler} // handle innerHTML change
          tagName="article" // Use a custom HTML tag (uses a div by default)
          className='decoder-content-style'
        />
        </div>
        </div>
    </div>
  )
}

export default Header