import { Grid, Button } from "semantic-ui-react";
import React, { Component } from "react";
import {
  removeNodeAtPath,
  changeNodeAtPath,
  addNodeUnderParent
} from "react-sortable-tree";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddCategory from "./components/AddCategory";
import ListCategory from "./components/ListCategory";
import UtilityService from "../service/utility";
import { fetch, post, remove, addCategory } from "./store/actionCreator";
import { updateCategories } from "./store/action";
import MessageBox from "../../common/messages/Message";

class CategoryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        title: ""
      },
      error: ""
    };

    this.onCategoryAddHandler = this.onCategoryAddHandler.bind(this);
    this.onChangeHanlder = this.onChangeHanlder.bind(this);
    this.onTreeChange = this.onTreeChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onResetCategories = this.onResetCategories.bind(this);
    this.onNodeClick = this.onNodeClick.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onAddNode = this.onAddNode.bind(this);
  }

  componentDidMount() {
    const {
      categories,
      fetch: fetchCategories,
      updateCategories: update
    } = this.props;
    if (categories.length < 1) {
      fetchCategories()
        .then(response => {
          const filtered = UtilityService.filterCategories(response.data);
          update(filtered);
        })
        .catch(error => this.setState({ error }));
    }
  }

  onCategoryAddHandler() {
    const { data } = { ...this.state };
    const { addCategory: insertCategory } = this.props;
    insertCategory({ title: data.title, children: [] });
    this.setState({ data: { title: "" } });
  }

  onTreeChange(data) {
    const { updateCategories: update } = this.props;
    update(data);
  }

  onSubmitHandler() {
    const { categories, post: postCategories } = { ...this.props };
    postCategories(categories);
  }

  onChangeHanlder(e) {
    const { value } = e.target;
    this.setState({ data: { title: value } });
  }

  onResetCategories() {
    const { fetch: fetchCategories, updateCategories: update } = this.props;
    fetchCategories()
      .then(response => {
        const filtered = UtilityService.filterCategories(response.data);
        update(filtered);
      })
      .catch(error => this.setState({ error }));
  }

  onCategoryChange(node, path, value) {
    const { categories, updateCategories: updateData } = this.props;
    const updated = changeNodeAtPath({
      treeData: categories,
      path,
      getNodeKey: ({ treeIndex }) => treeIndex,
      newNode: { ...node, title: value }
    });
    updateData(updated);
  }

  onRemoveNode(node, path) {
    const { remove: removeNode } = this.props;
    removeNode(node)
      .then(() => {
        this.removeNode(path);
      })
      .catch(error => this.setState({ error }));
  }

  onAddNode(node, path) {
    const { categories, updateCategories: updateData } = this.props;
    const updated = addNodeUnderParent({
      treeData: categories,
      parentKey: path[path.length - 1],
      expandParent: true,
      getNodeKey: ({ treeIndex }) => treeIndex,
      newNode: {
        title: "",
        edit: true,
        children: []
      },
      addAsFirstChild: true
    }).treeData;
    updateData(updated);
  }

  onNodeClick(node, path, status) {
    const { categories, updateCategories: updateData } = this.props;
    const updated = UtilityService.updateNode(categories, node, "edit", status);
    updateData(updated);
  }

  removeNode(path) {
    const { categories, updateCategories: updateData } = this.props;

    const updated = removeNodeAtPath({
      treeData: categories,
      path,
      getNodeKey: ({ treeIndex }) => treeIndex
    });
    updateData(updated);
  }

  render() {
    const { data, error } = this.state;
    const { categories, loading } = this.props;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column computer={11} mobile={16}>
            <AddCategory
              onCategoryAddHandler={this.onCategoryAddHandler}
              onChangeHanlder={this.onChangeHanlder}
              categoryName={data.title}
            />
          </Grid.Column>
          <Grid.Column mobile={16} computer={5} textAlign="right">
            {categories.length > 0 && (
              <Button.Group>
                <Button onClick={this.onResetCategories}>Refresh</Button>
                <Button.Or />
                <Button onClick={this.onSubmitHandler} positive>
                  Save
                </Button>
              </Button.Group>
            )}
          </Grid.Column>
        </Grid.Row>
        {error && (
          <Grid.Row>
            <Grid.Column>
              <MessageBox header="Exception" negative content={error.message} />
            </Grid.Column>
          </Grid.Row>
        )}
        {!loading.fetch && !error && categories.length < 1 && (
          <Grid.Row>
            <Grid.Column>
              <MessageBox header="Message" info content="No record available" />
            </Grid.Column>
          </Grid.Row>
        )}
        <Grid.Row>
          <Grid.Column width={16} textAlign="center">
            <ListCategory
              loading={loading}
              categoryList={categories}
              onTreeChange={this.onTreeChange}
              onRemoveNode={(node, path) => this.onRemoveNode(node, path)}
              onAddNode={(node, path) => this.onAddNode(node, path)}
              onNodeClick={(node, path, status) =>
                this.onNodeClick(node, path, status)
              }
              onCategoryChange={(node, path, value) =>
                this.onCategoryChange(node, path, value)
              }
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.admin.category.categories,
    loading: state.app.loading
  };
};
CategoryContainer.propTypes = {
  loading: PropTypes.object.isRequired, //eslint-disable-line
  categories: PropTypes.instanceOf(Array).isRequired,
  fetch: PropTypes.func.isRequired,
  post: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  updateCategories: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  { fetch, post, remove, addCategory, updateCategories }
)(CategoryContainer);
