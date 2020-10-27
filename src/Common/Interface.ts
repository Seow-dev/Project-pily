// 매거진 데이터 타입
export interface DataTypes {
  megazineId: number;
  title: string;
  content: string;
  subTitle?: string;
  author: string;
  category?: string;
  authorImg?: string;
  createdAt?: string;
  thumbnail?: string;
}

// 유저 데이터 타입
export interface UserData {
  profileImage?: string; // url,
  username: string; // username
}

// 유저 피드 타입
export interface FeedTypes {
  feedId: number;
  title: string;
  subTitle: string;
  content: string;
  createdAt: string;
}

export interface displayModalProps {
  title: string;
  onClose: () => void;
  toSignUp?: () => void;
}

// create feed
export interface FeedContents {
  title: string;
  subTitle: string;
  content: string;
}

// optionProps
export interface OptionProps {
  query: string;
  date: { Moment: moment.Moment | null; dateString: string };
}

// magazineSubmit
export interface MagazineDataTypes {
  isVertical: boolean;
  grid: number;
  titleAlign: number;
  magazineTitle: string;
  magazineSubTitle?: string;
  thumbnail?: string;
  feedList: number[];
}

// magazine detail types
export interface detailTypes {
  magazineId: number;
  magazineTitle: string;
  magazineSubTitle?: string;
  author: string;
  authorImg?: string;
  createdAt: string;
  thumbnail?: string;
  isLiked: boolean;
  isSubscribed: boolean;
  feedList: FeedTypes[];
  grid: number;
  isVertical: boolean;
  titleAlign: number;
}

// preview types
export interface previewTypes {
  magazineTitle: string;
  magazineSubTitle?: string;
  thumbnail?: string;
  feedList: FeedTypes[];
  grid: number;
  isVertical: boolean;
  titleAlign: number;
}

// location types
export interface locationProps {
  place_name: string;
  x: string;
  y: string;
}

// category types
export interface categoryTypes {
  id: number;
  name: string;
}
