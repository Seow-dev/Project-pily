import React from "react";
import * as P from "./styles/PreviewStyles";
import { useTransition, animated } from "react-spring";
import { previewTypes } from "../Common/Interface";
import * as D from "../MagazineDetail/styles/DetailHeadStyles";
import DetailContent from "../MagazineDetail/DetailContent";

interface props {
  previewData: previewTypes;
  isPreview: boolean;
  close: () => void;
}

export default function Preview({ isPreview, close, previewData }: props) {
  const props = useTransition(isPreview, null, {
    from: { opacity: 0, marginTop: "-50px" },
    enter: { opacity: 1, marginTop: "0px" },
    leave: { opacity: 0, marginTop: "50px" },
  });

  const propsWrapper = useTransition(isPreview, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {propsWrapper.map(({ item, props, key }) => {
        return item ? (
          <animated.div key={key} style={props}>
            <P.PreviewBackground onClick={close} />
          </animated.div>
        ) : null;
      })}
      {props.map(({ item, props, key }) => {
        return item ? (
          <animated.div key={key} style={props}>
            <P.PreviewModal>
              <P.ConfirmButton onClick={close}>확인</P.ConfirmButton>
              <D.DetailBox>
                <D.DetailHead>
                  {previewData.thumbnail && (
                    <D.CoverImg url={previewData.thumbnail}>
                      <D.CoverHead>
                        <D.CoverText>
                          <D.CoverTitle align={previewData.titleAlign}>
                            <h1>{previewData.magazineTitle}</h1>
                            <h5>{previewData.magazineSubTitle}</h5>
                          </D.CoverTitle>
                        </D.CoverText>
                      </D.CoverHead>
                    </D.CoverImg>
                  )}
                  {!previewData.thumbnail && (
                    <D.CoverDiv>
                      <D.CoverHead>
                        <D.CoverText>
                          <D.CoverTitle
                            align={previewData.titleAlign}
                            only={true}
                          >
                            <h1>{previewData.magazineTitle}</h1>
                            <h5>{previewData.magazineSubTitle}</h5>
                          </D.CoverTitle>
                        </D.CoverText>
                      </D.CoverHead>
                    </D.CoverDiv>
                  )}
                </D.DetailHead>
                <DetailContent data={previewData} />
              </D.DetailBox>
            </P.PreviewModal>
          </animated.div>
        ) : null;
      })}
    </>
  );
}
