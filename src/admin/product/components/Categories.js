import React from "react";
import SortableTree from "react-sortable-tree";
import PropTypes from "prop-types";
import { Button, Icon } from "semantic-ui-react";

const Categories = ({ categoryList, onTreeChange, onCategoryClick }) => {
  return (
    <React.Fragment>
      {categoryList.length > 0 && (
        <div style={{ height: 400 }}>
          <SortableTree
            treeData={categoryList}
            canDrop={() => false}
            onChange={d => onTreeChange(d)}
            generateNodeProps={({ node }) => {
              if (node.selected) {
                return {
                  buttons: [
                    <Icon
                      style={{ cursor: "pointer" }}
                      size="large"
                      name="check circle outline"
                    />
                  ]
                };
              }
              if (node.children.length < 1) {
                return {
                  buttons: [
                    <Button
                      onClick={() => onCategoryClick(node)}
                      basic
                      size="mini"
                      color="green"
                    >
                      Select
                    </Button>
                  ]
                };
              }
              return "";
            }}
          />
        </div>
      )}
    </React.Fragment>
  );
};

Categories.propTypes = {
  categoryList: PropTypes.instanceOf(Array).isRequired,
  onTreeChange: PropTypes.func.isRequired,
  onCategoryClick: PropTypes.func.isRequired
};
export default Categories;
