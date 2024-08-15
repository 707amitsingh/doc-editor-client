import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor() {
  const quillRef = useRef(null);
  const [value, setValue] = useState('');
  const [socket, setSocket] = useState<any>()

  useEffect(() => {
    const instance = io("http://localhost:3001");
    instance.on("receive-changes", handleReceiveChanges)
    setSocket(instance)
    return () => {
      instance.disconnect()
    }
  }, []);

  const handleReceiveChanges = () => {

  }

  const handleEditorChange = (content: any, delta: any, source: string, editor: any) => {
    if(source !== 'user' || !socket) return;
    console.log('Content', content);
    console.log('Plain Text', editor.getText());
    setValue(content);
    socket.emit("send-changes", delta)
  };


  return <div className='.editor-container'>
    <ReactQuill
      theme='snow'
      defaultValue={value}
      ref={quillRef}
      value={value} onChange={(content, delta, source, editor) => {
        handleEditorChange(content, delta, source, editor);
      }}/>
    </div>
}

export default Editor