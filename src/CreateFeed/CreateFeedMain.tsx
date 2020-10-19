import * as React from "react";
import { useState } from "react";
import { MainWrapper } from "../Mainpage/component/MagazineGrid";
import {
  Head,
  Title,
  Option,
  Subtitle,
  EditArea,
  EditorWrap,
  SaveButton,
  FeedLabel,
  OptionSlide,
  OptionWrap,
  Labels,
  StyledRate,
  MapArea,
} from "./CommonStyles";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import Map from "./Map";
import ReactQuill from './CreateFeed_Config';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';


export default function CreateFeedMain() {
  const [isOpen, setIsOpen] = useState(false);
  const [stars, setStars] = useState<number>(0);
//   const [inputs, setInputs] = useState({
//     title: "",
//     subTitle: "",
//   });
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setInputs(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
  
  const [feedContentsData, setFeedContentsData] = useState({
    feedTitle: "",
    feedSubTitle:"",
    feedContent:"",
    feedCategory: "",
    feedCreated_at:"",
  });
  
  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{ size: ['small', false, 'large', 'huge'] }],  // custom dropdown
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'align': []},{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
    imageResize: {
      handleStyles: {
        backgroundColor: 'black',
        border: 'none',
        color: 'white',
      },
      modules: ['Resize', 'DisplaySize', 'Toolbar'],
    },
      // imageUpload:{
      //   url: "http://localhost:4000/upload",
      //   method: "POST",
      //   name: "img",
      //   withCredentials: false,
      //   callbackOK: (serverResponse:any, next:any) =>{
      //     next(serverResponse);
      //   },
      //   callbackKO: (serverError:any) => {
      //     alert(serverError);
      //   },
      //   checkBeforeSend: (file:any, next:any) =>{
      //     console.log(file);
      //     next(file);
      //   }
      // }
      imageUploader: {
        upload: async (file:any) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url:
              "https://api.imgbb.com/1/upload?key=d36eb6591370ae7f9089d85875e56b22",
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data"
            }
          });
          return response.data.data.url;
        }
      },
    imageDrop: true
  }
  const formats = [
    'header', 'size', 'font',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image','align',
  ]

  const contentHandleChange = (e:any) => {
    setFeedContentsData({
      ...feedContentsData,
      feedContent: e,
    });
    console.log(feedContentsData);
  };
   
  const handleChange = (e:any) =>{
    const {id, value} = e.target;
    setFeedContentsData({
      ...feedContentsData,
      [id] : value
    })
    console.log(feedContentsData);
  }

  // console.log(feedContentsData);
  
  const submitHandler = () =>{
    const tmp = `<div>${feedContentsData.feedContent}</div>`;
    contentHandleChange(tmp); // 겉에 <div> 태그를 씌워줌

    const data = {feedContentsData};

    // <p><br>...</p><p><img src="jwqioejoajsd"></p>....</p>"
    // multer에 포스트 요청을 보냄

    if(!(feedContentsData.feedContent === "" 
      || feedContentsData.feedContent === null 
      || feedContentsData.feedContent === undefined)){
      
        const payload ={
          feedContent: <img src="data:image/jpeg;base64,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"></img>
        }
        console.log(payload);
        axios.post('http://localhost:4000/upload',payload)
        // submit Action
        console.log(data);
    }else{

      // rejected Action
      console.log("It is empty.")
      
    }
  }


  return (
    <MainWrapper>
      <FeedLabel>
        당신의 <span style={{ color: "#A3320B" }}>일상</span>을 기록하세요.
      </FeedLabel>
      <Head>
        <Title>
          <input 
            id="feedTitle" 
            value={feedContentsData.feedTitle}
            placeholder="피드 제목을 입력해주세요."
            onChange={handleChange}/>
          <div />
        </Title>
        <OptionSlide>
          <p>소제목과 위치 정보를 기록하세요</p>
          {isOpen ? (
            <button onClick={() => setIsOpen(false)}>
              <MdKeyboardArrowUp />
            </button>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <MdKeyboardArrowDown />
            </button>
          )}
        </OptionSlide>
        {isOpen ? (
          <Option>

            <OptionWrap>
              <div>
                <Labels>피드 소제목</Labels>
                <Subtitle 
            id="feedSubTitle"
            value={feedContentsData.feedSubTitle}
            placeholder="소제목을 입력해주세요." 
            onChange={handleChange}
            />
              </div>
              <div>
                <Labels>피드에 별점 남기기</Labels>
                <StyledRate
                  onChange={value => {
                    setStars(value);
                    console.log(value);
                  }}
                  tooltips={DESC}
                  value={stars}
                  defaultValue={0}
                />
              </div>
            </OptionWrap>
            <MapArea>
              <Labels>위치 정보 기록</Labels>
              <Map />
            </MapArea>
            

          </Option>
        ) : null}
      </Head>
      <EditArea>
        <EditorWrap>
          <ReactQuill 
            theme="snow" 
            modules={modules}
            formats={formats}
            onChange={contentHandleChange}
            style={{height:"300px"}}
            placeholder="일상을 기록해보세요"
          />
        </EditorWrap>
        <SaveButton onClick={submitHandler}>
          피드 저장하기
        </SaveButton>
      </EditArea>

      {/* <img src = "https://s3.ap-northeast-2.amazonaws.com/testing-upload1234/unnamed.jpg" alt=""></img> */}
    </MainWrapper>
  );
}


// constant
const DESC = ["angry 😤", "not good 🙁", "soso 😀", "good 😁", "wonderful 😆"];


// 해봐야 할거 Array로 받았을 때 객체의 순서는 어떻게 될것이며, 위치는 어떻게 잡을것인가..
// multer 업로드 리스폰스
// 이미지 가져오는 방법은 두가지 
// 1) req.file.location을 가져오는것과
// 2) req.file.originalname을 주소 뒤에 붙여주는것
// {
//   "fieldname": "img",
//   "originalname": "unnamed.jpg",
//   "encoding": "7bit",
//   "mimetype": "image/jpeg",
//   "size": 73854,
//   "bucket": "testing-upload1234",
//   "key": "unnamed.jpg",
//   "acl": "public-read-write",
//   "contentType": "image/jpeg",
//   "contentDisposition": null,
//   "storageClass": "STANDARD",
//   "serverSideEncryption": null,
//   "metadata": null,
//   "location": "https://testing-upload1234.s3.ap-northeast-2.amazonaws.com/unnamed.jpg",
//   "etag": "\"53d27276184275dfb707e1a31b41e821\""
// }

