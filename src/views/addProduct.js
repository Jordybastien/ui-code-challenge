import React, { Component } from "react";
import TextBox from "../components/TextBox";
import TextArea from "../components/TextBox/textArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import ImageUploader from "react-images-upload";
import { showLoading, hideLoading } from "react-redux-loading";
import { connect } from "react-redux";

class AddProduct extends Component {
  state = {
    counter: 1,
    pictures: [],
    name: "",
    price: "",
    description: "",
  };

  onDrop = (pictureFiles, pictureDataURLs) => {
    this.props.dispatch(showLoading());
    this.setState({
      pictures: pictureFiles,
    });
    setTimeout(() => this.props.dispatch(hideLoading()), 2000);
  };

  render() {
    const { counter, pictures } = this.state;
    console.log("========>pictures", pictures);

    const error = "";
    return (
      <div className="wrapper">
        <div className="form-container">
          <div>
            <span className="form-title"> Add Product </span>
          </div>
          <div className="form-cont">
            <form onSubmit className="forms">
              <TextBox label="Name" placeholder="Input product name" />
              <div className="img-area">
                <div className="img-label">
                  <span>Upload Images</span>
                  <span className="important">*</span>
                </div>
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose images"
                  onChange={this.onDrop}
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                  withPreview={true}
                />
              </div>
              <TextBox label="Price" placeholder="Input price" />
              <TextArea
                label="Description"
                placeholder="Describe the product"
              />
              <div className="specifications-cont">
                <div>
                  <span>Specifications</span>
                </div>
                <div className="btn-add">
                  <button
                    type="button"
                    className="purchase-btn circle-btn"
                    onClick={() => this.setState({ counter: counter + 1 })}
                  >
                    <FontAwesomeIcon icon={faPlus} size="1x" color="#fff" />
                  </button>
                </div>
              </div>
              {[...Array(counter)].map((el, index) => (
                <div className="added-spec" key={index}>
                  <TextBox
                    key={index}
                    label={`spec-${index + 1}`}
                    placeholder={`Input Spec No ${index + 1}`}
                  />
                  <div
                    className="remove-spec"
                    onClick={() => this.setState({ counter: counter - 1 })}
                  >
                    <FontAwesomeIcon icon={faTimes} size="2x" color="red" />
                  </div>
                </div>
              ))}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(AddProduct);
