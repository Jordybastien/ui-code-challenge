/* eslint-disable array-callback-return */
import React, { Component } from "react";
import TextBox from "../components/TextBox";
import TextArea from "../components/TextBox/textArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";
import ImageUploader from "react-images-upload";
import { showLoading, hideLoading } from "react-redux-loading";
import { connect } from "react-redux";
import { uploadImages } from "../utils/imageUploader";
import _ from "lodash";
import { handleNewProduct } from "../actions/product";

class AddProduct extends Component {
  state = {
    counter: 1,
    pictures: [],
    name: "",
    price: "",
    description: "",
    specs: [],
    spec: "",
    loading: false,
    errors: {
      price: "",
      name: "",
      description: "",
      pictures: "",
      images: "",
      spec: "",
    },
  };

  onDrop = (pictureFiles, pictureDataURLs) => {
    this.props.dispatch(showLoading());
    const { errors } = this.state;
    errors.images = "";
    this.setState({
      pictures: pictureFiles,
      errors,
    });
    setTimeout(() => this.props.dispatch(hideLoading()), 2000);
  };

  handleSubmit = async () => {
    this.setState({ loading: true });
    const { name, price, description, pictures } = this.state;
    if (this.checkValidation()) {
      let product = {};
      const specs = this.getSpecs();
      const images = await uploadImages(pictures);
      product.name = name;
      product.price = price;
      product.description = description;
      product.images = images;
      product.specs = specs;
      this.props
        .dispatch(handleNewProduct(product))
        .then((res) => this.props.history.push(`/product/${res.id}`));
      this.setState({ loading: false });
    }
  };

  getSpecs = () => {
    let arr = [];
    const { specs } = this.state;
    specs.map(({ spec }) => arr.push(spec));
    return arr;
  };

  checkValidation = () => {
    const { name, errors, price, description, pictures, spec } = this.state;
    let response = true;
    if (!name) {
      errors.name = "Required";
      response = false;
    }
    if (!price) {
      errors.price = "Required";
      response = false;
    } else if (isNaN(price)) {
      errors.price = "price has to be a valid numeric value";
      response = false;
    }
    if (!description) {
      errors.description = "Required";
      response = false;
    }

    if (pictures.length < 3) {
      errors.images = "Atleast 3 images are required";
      response = false;
    }

    if (!spec) {
      errors.spec = "Required";
      response = false;
    }
    this.setState({ errors });
    return response;
  };

  handleName = (e) => {
    const { errors } = this.state;
    errors.name = "";
    this.setState({ errors, name: e.target.value });
  };

  handleDescription = (e) => {
    const { errors } = this.state;
    errors.description = "";
    this.setState({ errors, description: e.target.value });
  };

  handleSpec = (e, index) => {
    const { errors, specs } = this.state;
    if (index === 1) this.setState({ spec: e.target.value });
    errors.spec = "";
    let arr = [];
    let spec = {
      index,
      spec: e.target.value,
    };
    arr.push(spec);
    let result = _.unionBy(arr, specs, "index");

    this.setState({ errors, specs: result });
  };

  handleprice = (e) => {
    const { errors } = this.state;
    if (isNaN(e.target.value)) {
      errors.price = "price has to be a valid numeric value";
      this.setState({ errors });
    } else {
      errors.price = "";
      this.setState({ errors, price: e.target.value });
    }
  };

  render() {
    const { counter, errors, loading } = this.state;

    return (
      <div className="wrapper">
        <div className="form-container">
          <div>
            <span className="form-title"> Add Product </span>
          </div>
          <div className="form-cont">
            <form onSubmit className="forms">
              <TextBox
                label="Name"
                name="name"
                placeholder="Input product name"
                onChange={(e) => this.handleName(e)}
                error={errors.name}
              />
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
                <div className="error-container-img">
                  {errors.images && (
                    <span className="font-italic text-danger">
                      {errors.images}
                    </span>
                  )}
                </div>
              </div>
              <TextBox
                label="Price"
                placeholder="Input price"
                onChange={(e) => this.handleprice(e)}
                name="price"
                error={errors.price}
              />
              <TextArea
                label="Description"
                placeholder="Describe the product"
                error={errors.description}
                onChange={(e) => this.handleDescription(e)}
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
                    onChange={(e) => this.handleSpec(e, index + 1)}
                    error={index === 0 && errors.spec}
                  />
                  <div
                    className="remove-spec"
                    onClick={() => this.setState({ counter: counter - 1 })}
                  >
                    <FontAwesomeIcon icon={faTimes} size="2x" color="red" />
                  </div>
                </div>
              ))}
              <div
                className="btn-container custom-btn"
                onClick={() => this.handleSubmit()}
              >
                <button type="button" className="purchase-btn">
                  Add{" "}
                  {loading && (
                    <FontAwesomeIcon
                      icon={faSpinner}
                      size="sm"
                      color="#fff"
                      className="spinner"
                    />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(AddProduct);
