import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { registerPlugin } from "react-filepond";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";
import ProductAdd from "./components/ProductAdd";
import ProductImage from "./components/ProductImage";
import CategoryModal from "./components/Modal";
import { fetch } from "../category/store/actionCreator";
import UtilityService from "../service/utility";
import { updateCategories } from "../category/store/action";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
      categories: [],
      error: "",
      selected: { title: "" },
      form: {
        name: "",
        amount: "",
        quantity: ""
      }
    };

    this.setFiles = this.setFiles.bind(this);
    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onTreeChange = this.onTreeChange.bind(this);
    this.onCategoryClick = this.onCategoryClick.bind(this);
    this.onFinish = this.onFinish.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onModalClose() {
    const { categories } = this.state;
    const { updateCategories: update } = this.props;
    const resetData = UtilityService.resetData(
      [...categories],
      "selected",
      false
    );
    update(resetData);
    this.setState({ modalStatus: false, selected: { title: "" } });
  }

  onTreeChange(data) {
    this.setState({ categories: data });
  }

  onCategoryClick(node) {
    const { categories } = this.state;
    const resetData = UtilityService.resetData(
      [...categories],
      "selected",
      false
    );
    const updated = UtilityService.updateNode(
      resetData,
      node,
      "selected",
      true
    );

    this.setState({ categories: updated, selected: node });
  }

  onInputChange(event) {
    event.persist();
    this.setState(state => {
      return {
        form: { ...state.form, [event.target.name]: event.target.value }
      };
    });
  }

  onSubmit() {
    const { form, selected } = { ...this.state };
    form.categoryId = selected._id;

    const formData = new FormData();
    formData.set("name", form.name);
    formData.set("name", form.amount);
    formData.set("quantity", form.quantity);
    formData.set("categoryId", form.categoryId);
    formData.append("productImage", selected);
  }

  onSelectCategory() {
    const {
      categories,
      fetch: fetchCategories,
      updateCategories: update
    } = this.props;
    if (categories.length > 1) {
      this.setState({ modalStatus: true, categories });
    } else {
      fetchCategories()
        .then(response => {
          const filtered = UtilityService.filterCategories(response.data);
          update(filtered);
          this.setState({ modalStatus: true, categories: filtered });
        })
        .catch(error => this.setState({ error }));
    }
  }

  onFinish() {
    this.setState({ modalStatus: false });
  }

  setFiles(files) {
    console.log(files);
  }

  render() {
    const { modalStatus, categories, selected, form } = this.state;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} computer={8}>
            <ProductAdd
              selected={selected}
              form={form}
              onInputChange={e => this.onInputChange(e)}
              onSelectCategory={this.onSelectCategory}
            />
          </Grid.Column>
          <Grid.Column mobile={16} textAlign="center" computer={8}>
            <br />
            <ProductImage setFiles={this.setFiles} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="right">
            <Button color="yellow" content="Clear" />
            <Button positive content="Add" onClick={this.onSubmit} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <CategoryModal
            open={modalStatus}
            onTreeChange={d => this.onTreeChange(d)}
            onCategoryClick={d => this.onCategoryClick(d)}
            categoryList={categories}
            onModalClose={this.onModalClose}
            onFinish={this.onFinish}
          />
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.admin.category.categories
  };
};
ProductPage.propTypes = {
  categories: PropTypes.arrayOf(Array).isRequired,
  fetch: PropTypes.func.isRequired,
  updateCategories: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  {
    fetch,
    updateCategories
  }
)(ProductPage);
