import React from "react";
import SortableTree from "react-sortable-tree";
import PropTypes from "prop-types";
import { Icon, Input } from "semantic-ui-react";
import LoadingCategories from "./placeholder";

const ListCategory = ({
  categoryList,
  onTreeChange,
  onRemoveNode,
  onNodeClick,
  onCategoryChange,
  onAddNode,
  loading
}) => {
  return (
    <React.Fragment>
      {loading.fetch && categoryList.length < 1 && <LoadingCategories />}
      {categoryList.length > 0 && (
        <div style={{ height: 400 }}>
          <SortableTree
            treeData={categoryList}
            onChange={d => onTreeChange(d)}
            generateNodeProps={({ node, path }) => {
              if (node.edit) {
                return {
                  title: (
                    <Input
                      value={node.title}
                      onChange={event =>
                        onCategoryChange(node, path, event.target.value)
                      }
                      placeholder="Category name"
                    />
                  ),
                  buttons: [
                    <Icon
                      style={{ cursor: "pointer" }}
                      onClick={() => onNodeClick(node, path, false)}
                      size="large"
                      name="check circle outline"
                    />
                  ]
                };
              }
              return {
                buttons: [
                  <Icon
                    style={{ cursor: "pointer" }}
                    onClick={() => onAddNode(node, path)}
                    size="large"
                    name="add circle"
                  />,
                  <Icon
                    style={{ cursor: "pointer" }}
                    onClick={() => onRemoveNode(node, path)}
                    size="large"
                    name="remove circle"
                  />,
                  <Icon
                    style={{ cursor: "pointer" }}
                    onClick={() => onNodeClick(node, path, true)}
                    size="large"
                    name="edit outline"
                  />
                ]
              };
            }}
          />
        </div>
      )}
    </React.Fragment>
  );
};

ListCategory.propTypes = {
  categoryList: PropTypes.instanceOf(Array).isRequired,
  onTreeChange: PropTypes.func.isRequired,
  onRemoveNode: PropTypes.func.isRequired,
  onNodeClick: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onAddNode: PropTypes.func.isRequired,
  loading: PropTypes.object.isRequired //eslint-disable-line
};
export default ListCategory;
