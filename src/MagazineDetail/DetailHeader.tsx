import * as D from "./styles/DetailHeadStyles";
import * as React from "react";
import { useEffect, useState } from "react";
import { detailTypes } from "../Common/Interface";
import { Link } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BsBookmarkFill } from "react-icons/bs";

interface props {
  data: detailTypes;
}

export default function DetailHeader({ data }: props) {
  const [coverOption, setCoverOption] = useState({
    isLike: false,
    isSub: false,
  });

  useEffect(() => {
    console.log(coverOption.isLike);
    setCoverOption({
      ...coverOption,
      isLike: data.isLiked,
      isSub: data.isSubscribed,
    });
  }, []);

  return (
    <D.DetailHead>
      {data.thumbnail && (
        <D.CoverImg url={data.thumbnail}>
          <D.CoverHead>
            <D.CoverText>
              <D.CoverTitle align={data.titleAlign}>
                <h1>{data.magazineTitle}</h1>
                <h5>{data.magazineSubTitle}</h5>
                <D.CoverUser>
                  <D.CoverOption>
                    <img
                      src={
                        data.authorImg
                          ? data.authorImg
                          : "/image/default_user.png"
                      }
                    />
                    <p>
                      <Link
                        style={{ color: "inherit" }}
                        to={`/user/${data.author}`}
                      >
                        {data.author}
                      </Link>
                    </p>
                  </D.CoverOption>
                  <D.CoverOption style={{ marginLeft: "2rem" }}>
                    {coverOption.isLike ? (
                      <D.LikeButton
                        onClick={
                          () =>
                            setCoverOption(prev => ({ ...prev, isLike: false }))
                          // unlike
                        }
                      >
                        좋아요
                        <FcLike />
                      </D.LikeButton>
                    ) : (
                      <D.LikeButton
                        onClick={
                          () =>
                            setCoverOption(prev => ({ ...prev, isLike: true }))
                          // like
                        }
                      >
                        좋아요
                        <FcLikePlaceholder />
                      </D.LikeButton>
                    )}
                    {coverOption.isSub ? (
                      <D.SubButton
                        active={coverOption.isSub}
                        onClick={() =>
                          setCoverOption(prev => ({ ...prev, isSub: false }))
                        }
                      >
                        구독하기
                        <BsBookmarkFill />
                      </D.SubButton>
                    ) : (
                      <D.SubButton
                        active={coverOption.isSub}
                        onClick={() =>
                          setCoverOption(prev => ({ ...prev, isSub: true }))
                        }
                      >
                        구독하기
                        <BsBookmarkFill />
                      </D.SubButton>
                    )}
                  </D.CoverOption>
                </D.CoverUser>
              </D.CoverTitle>
            </D.CoverText>
          </D.CoverHead>
        </D.CoverImg>
      )}
      {!data.thumbnail && (
        <D.CoverDiv>
          <D.CoverHead>
            <D.CoverText>
              <D.CoverTitle align={data.titleAlign} only={true}>
                <h1>{data.magazineTitle}</h1>
                <h5>{data.magazineSubTitle}</h5>
                <D.CoverUser>
                  <D.CoverOption>
                    <img
                      src={
                        data.authorImg
                          ? data.authorImg
                          : "/image/default_user.png"
                      }
                    />
                    <p>
                      <Link
                        style={{ color: "inherit" }}
                        to={`/user/${data.author}`}
                      >
                        {data.author}
                      </Link>
                    </p>
                  </D.CoverOption>
                  <D.CoverOption style={{ marginLeft: "2rem" }}>
                    {coverOption.isLike ? (
                      <D.LikeButton
                        onClick={() =>
                          setCoverOption(prev => ({ ...prev, isLike: false }))
                        }
                      >
                        좋아요
                        <FcLike />
                      </D.LikeButton>
                    ) : (
                      <D.LikeButton
                        onClick={() =>
                          setCoverOption(prev => ({ ...prev, isLike: true }))
                        }
                      >
                        좋아요
                        <FcLikePlaceholder />
                      </D.LikeButton>
                    )}
                    {coverOption.isSub ? (
                      <D.SubButton
                        active={coverOption.isSub}
                        onClick={() =>
                          setCoverOption(prev => ({ ...prev, isSub: false }))
                        }
                      >
                        구독하기
                        <BsBookmarkFill />
                      </D.SubButton>
                    ) : (
                      <D.SubButton
                        active={coverOption.isSub}
                        onClick={() =>
                          setCoverOption(prev => ({ ...prev, isSub: true }))
                        }
                      >
                        구독하기
                        <BsBookmarkFill />
                      </D.SubButton>
                    )}
                  </D.CoverOption>
                </D.CoverUser>
              </D.CoverTitle>
            </D.CoverText>
          </D.CoverHead>
        </D.CoverDiv>
      )}
    </D.DetailHead>
  );
}
