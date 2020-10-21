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
import Editor from './Editor';
import { FeedContents } from '../Common/Interface';
import useReactRouter from "use-react-router";

 function CreateFeedMain() {
  const { history } = useReactRouter();
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
  
  const [feedContentsData, setFeedContentsData] = useState<FeedContents>({
    feedTitle: "",
    feedSubTitle:"",
    feedContent:"",
    feedCategory: ""
  });
  
  const contentHandleChange = (e:string) => {
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
  const redirectToMain = () =>{
    history.push("/");
  }
  const submitHandler = () =>{
    
    
    if(!(feedContentsData.feedContent === "" 
    || feedContentsData.feedContent === null 
    || feedContentsData.feedContent === undefined)){
      
      const tmp = `<div>${feedContentsData.feedContent}</div>`;
      contentHandleChange(tmp); // 겉에 <div> 태그를 씌워줌
      const data = {feedContentsData};
      
        // submit Action
        console.log("Data is ",data);
        redirectToMain();
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
          <Editor 
          changeFeedContent={contentHandleChange}/>
        </EditorWrap>
        <SaveButton onClick={submitHandler}>
          피드 저장하기
        </SaveButton>
      </EditArea>
    </MainWrapper>
  );
}
export default CreateFeedMain;

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

