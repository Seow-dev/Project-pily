import * as React from "react";
import { Component } from "react";
import ReactQuill from "./CreateFeed_Config";
import axios, { AxiosResponse } from "axios";

// import "quill/dist/quill.core.css"
import "./EditorStyle.css";
import { uploadFeedImageApi } from "../Api/feed";

type appProps = {
  changeFeedContent: (e: string) => void;
  
};

type appState = {
  text: string;
};


class Editor extends Component<appProps, appState> {
  constructor(props: appProps) {
    super(props);
    this.state = {
      text: "",
    };
  }

  modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { align: [] },
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
    imageUploader: {
      upload: async (file: File) => {
        const bodyFormData = new FormData();
        bodyFormData.append("img", file);

        const response : AxiosResponse = await uploadFeedImageApi(bodyFormData);
        return response.data.location;
      },
    },
    imageResize: {
      displayStyles: {
        backgroundColor: "black",
        border: "none",
        color: "white",
      },
      modules: ["Resize", "DisplaySize"],
    },
    imageDrop: true,
  };

  formats = [
    "header",
    "size",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
  ];

  componentDidUpdate(prevProps: any, prevState: Readonly<appState>) {
    if (this.state.text !== prevState.text) {
      this.props.changeFeedContent(this.state.text);
    }
  }

  render() {
    return (
      <ReactQuill
        theme="snow"
        modules={this.modules}
        formats={this.formats}
        value={this.state.text}
        onChange={content => {
          this.setState({ text: content });
        }}
        placeholder="일상을 적어보아요."
      />
    );
  }
}
export default Editor;
