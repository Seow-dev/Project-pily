import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function CreateFeed () {
  
  const [feedContentsData, setFeedContentsData] = useState({
    feedTitle: "",
    feedContent:"",
    feedCategory: "",
    feedCreated_at:"",
  });
  
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]


  const handleChange = (e:string) => {
    setFeedContentsData({
      ...feedContentsData,
      feedContent: e,
    });
  };
   
  console.log(feedContentsData);
  
  const submitHandler = () =>{
    const tmp = `<div>${feedContentsData.feedContent}</div>`;
    handleChange(tmp); // 겉에 <div> 태그를 씌워줌

    const data = {feedContentsData};

    if(!(feedContentsData.feedContent === "" 
      || feedContentsData.feedContent === null 
      || feedContentsData.feedContent === undefined)){
      
        // submit Action
        console.log(data);
    }else{

      // rejected Action
      console.log("It is empty.")
      
    }
  }


  return (
    <div>
      제목 : <input 
      id="feedTitle" 
      placeholder="제목을 입력하세요" 
      style={{
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        borderBottom: "none",
        width: "500px"
      }}
      value={feedContentsData.feedTitle}
      onChange={(e) => {
        setFeedContentsData({
          ...feedContentsData,
          [e.target.id]: e.target.value
        })
      }}
      ></input>

      <ReactQuill 
        theme="snow" 
        modules={modules}
        formats={formats}
        onChange={handleChange}
      />

      <button type="submit" onClick={submitHandler}>
        저장
      </button>
    </div>
  );
}
  












  
  
  // interface FeedState{
  //   contents: string;
  //   title: string;
  //   workings?: {[s: number]: any};
  //   fileIds?: string[];
  // }
  
  // const __ISMSIE__ = navigator.userAgent.match(/Trident/i) ? true : false;
  // const __ISIOS__ = navigator.userAgent.match(/iPad|iPhone|iPod/i) ? true : false;

  // title: "",
  // workings: {},
  // fileIds: [],
  // const quillRef: ReactQuill = "";
  // const dropzone: Dropzone = null;
  // let onKeyEvent = false;

  // const modules = {
  //   toolbar: {
  //     container: [
  //       ["bold", "italic", "underline", "strike", "blockquote"],
  //       [{ size: ["small", false, "large", "huge"] }, { color: [] }],
  //       [
  //         { list: "ordered" },
  //         { list: "bullet" },
  //         { indent: "-1" },
  //         { indent: "+1" },
  //         { align: [] }
  //       ],
  //       ["link", "image", "video"],
  //       ["clean"]
  //     ],
  //     // handlers: { image: imageHandler }
  //   },
  //   clipboard: { matchVisual: false }
  // };
  
  // const formats = [
  //   "header",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "blockquote",
  //   "size",
  //   "color",
  //   "list",
  //   "bullet",
  //   "indent",
  //   "link",
  //   "image",
  //   "video",
  //   "align"
  // ];
  
  // const onKeyUp = (event: KeyboardEvent) => {
  //   // if (!__ISIOS__) return;
  //   // enter
  //   if (event.keyCode === 13) {
  //     let onKeyEvent = true;
  //     quillRef.blur();
  //     quillRef.focus();
  //     if (document.documentElement.className.indexOf("edit-focus") === -1) {
  //       document.documentElement.classList.toggle("edit-focus");
  //     }
  //     onKeyEvent = false;
  //   }
  // };
  
  // const onFocus = () => {
  //   if (
  //     !onKeyEvent &&
  //     document.documentElement.className.indexOf("edit-focus") === -1
  //   ) {
  //     document.documentElement.classList.toggle("edit-focus");
  //     window.scrollTo(0, 0);
  //   }
  // };
  
  // const onBlur = () => {
  //   if (
  //     !onKeyEvent &&
  //     document.documentElement.className.indexOf("edit-focus") !== -1
  //   ) {
  //     document.documentElement.classList.toggle("edit-focus");
  //   }
  // };
  
  // const doBlur = () => {
  //   onKeyEvent = false;
  //   quillRef.blur();
  //   // force clean
  //   if (document.documentElement.className.indexOf("edit-focus") !== -1) {
  //     document.documentElement.classList.toggle("edit-focus");
  //   }
  // };
  
  // const onChangeContents = (gcontents: string) => {
  //   let contents: string = "";
  //   if (__ISMSIE__) {
  //     if (contents.indexOf("<p><br></p>") > -1) {
  //       contents = contents.replace(/<p><br><\/p>/gi, "<p>&nbsp;</p>");
  //     }
  //   }
  //   setFeedContentsData({contents: gcontents });
  //   console.log(contents);
  // };


    // <div className="main-panel">
    //   <div className="navbar">
    //     ReactQuill Typescript with IE11, iOS, Korean Support
    //   </div>
    //   <div className="main-content">
    //     <ReactQuill
    //       // onRef={(el: any) => (quillRef = el)}
    //       value={contents}
    //       onChange={onChangeContents}
    //       onKeyUp={onKeyUp}
    //       onFocus={onFocus}
    //       onBlur={onBlur}
    //       theme="snow"
    //       modules={modules}
    //       formats={formats}
    //     />
    //     <Dropzone
    //       ref={(el: Dropzone) => (dropzone = el)}
    //       style={{ width: 0, height: 0 }}
    //       onDrop={onDrop}
    //       accept="image/*"
    //     />
    //   </div>
    // </div>


