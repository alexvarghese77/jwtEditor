import React,{useRef} from 'react'
import ContentEditable from 'react-contenteditable';

const Signature = ({signature}) => {
    const headerRef = useRef();
    
    const onChangeHandler=(event) => {
        console.log("🚀 ~ file: Header.jsx ~ line 12 ~ onChangeHandler ~ event", event)
        return {
    }
    }

    const getSignatureData=()=>{
        return `<b style="color:#00b9f1;">${signature}</b>`
    }

     return (
       <div  className='decoder-items'>
           <div className='decoder-header-wrapper'>
               <p className='decoder-header'>VERIFY SIGNATURE</p>
           </div>
           <div>
           <ContentEditable
             innerRef={headerRef}
             html={getSignatureData()} // innerHTML of the editable div
             disabled={false} // use true to disable editing
             onChange={onChangeHandler} // handle innerHTML change
             tagName="article" // Use a custom HTML tag (uses a div by default)
             className='decoder-content-style'
           />
           </div>
       </div>
     )

}

export default Signature