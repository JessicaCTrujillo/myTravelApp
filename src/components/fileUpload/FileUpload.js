import React, { Component } from "react";
import { storage } from "../firebase/index";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: ""
      //   progress: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleUpload = () => {
    //('images/FileName')
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        //progress function
        // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        // this.setState({progress});
      },
      error => {
        //error function
        console.log(error);
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.props.changeImageState(url);
            this.setState({ url });
          });
      }
    );
  };

  render() {
    const style = {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    };
    const button = {
      duration: "0.4s"
    };
    return (
      <div>
        {/* <progress value={this.state.progress} max="100"/> */}

        <br />
        <img
          src={this.state.url || "http://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="200"
          width="300"
        />
        <br />
        <br />
        <input type="file" onChange={this.handleChange} />
        <button className="btn btn-primary" onClick={this.handleUpload}>
          Upload
        </button>
        {/* <button button={button} className="btn">
          Delete
        </button> */}
      </div>
    );
  }
}

export default FileUpload;
