// 매거진 데이터 타입
export interface DataTypes {
  id: number;
  title: string;
  content: string;
  subTitle?: string;
  category?: string;
  User: { author: string; authorImg?: string };
  createdAt?: string;
  thumbnail?: string;
}

// 유저 데이터 타입
export interface UserData {
  profileImage?: string; // url,
  username: string; // username
}

export interface subData {
  IMG?: string;
  username: string;
}

// 유저 피드 타입
export interface FeedTypes {
  id: number;
  title: string;
  subTitle: string;
  content: string;
  createdAt: string;
  stars?: number;
  location_name?: string;
  location_x?: string;
  location_y?: string;
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

// FeedSubmit

export interface FeedDataTypes {
  title: string;
  content: string;
  subTitle?: string;
  location?: locationProps;
  stars?: number;
}

// optionProps
export interface OptionProps {
  query: string;
  date: { Moment: moment.Moment | null; dateString: string };
}

// searchDateProps

export interface searchDateProps {
  Moment: moment.Moment | null;
  dateString: string;
}

// magazineSubmit
export interface MagazineDataTypes {
  isVertical: boolean;
  grid: number;
  titleAlign: number;
  title: string;
  subTitle?: string;
  thumbnail?: string;
  feedList: number[];
}

// magazine detail types
export interface detailTypes {
  magazineId: number;
  title: string;
  subTitle?: string;
  User: { author: string; authorImg?: string };
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
  title: string;
  subTitle?: string;
  thumbnail?: string;
  feedList: FeedTypes[];
  grid: number;
  isVertical: boolean;
  titleAlign: number;
}

// location types
export interface locationProps {
  location_name?: string;
  location_x?: string;
  location_y?: string;
}
export interface location {
  place_name: string;
  x: string;
  y: string;
}
