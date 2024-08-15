import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor() {
  const params = useParams()
  const { id: documentId } = params;
  const quillRef = useRef(null);
  const [value, setValue] = useState('');
  const [socket, setSocket] = useState<any>();

  useEffect(() => {
    if(!quillRef.current || !socket) return;
    const interval = setInterval(() => {
      // @ts-ignore
      console.log('>>>>>>>>>>>> ', quillRef?.current.getEditor().getText())
      // @ts-ignore
      socket.emit('save-document', quillRef?.current.getEditor().getText())
    }, 1500)

    return () => {
      clearInterval(interval)
    }
  }, [quillRef.current, socket])

  useEffect(() => {
    if (!socket || !quillRef.current) return;
    socket.emit('get-document', documentId);

    socket.once('load-document', (document: any) => {
      setValue(document)
    })
  }, [documentId, quillRef.current, socket])

  useEffect(() => {
    const instance = io("http://localhost:3001");
    instance.on("receive-changes", handleReceiveChanges)
    setSocket(instance)
    return () => {
      instance.disconnect()
    }
  }, []);

  const handleReceiveChanges = (delta: string) => {
    if(!quillRef.current) return;
    // @ts-ignore
    const quill = quillRef.current.getEditor();
    quill.updateContents(delta);
  }

  const handleEditorChange = (content: any, delta: any, source: string, editor: any) => {
    if(source !== 'user' || !socket) return;
    setValue(content);
    socket.emit("send-changes", delta)
  };

  return <div className='.editor-container'>
    <ReactQuill
      theme='snow'
      defaultValue={value}
      ref={quillRef}
      value={value}
      onChange={(content, delta, source, editor) => {
        handleEditorChange(content, delta, source, editor);
      }}/>
    </div>
}

export default Editor