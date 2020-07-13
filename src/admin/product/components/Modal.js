import React from "react";
import { Modal, Button, Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import Categories from "./Categories";

const CategoryModal = ({
  open,
  onModalClose,
  onTreeChange,
  categoryList,
  onCategoryClick,
  onFinish
}) => {
  return (
    <Modal size="small" open={open} centered={false} onClose={onModalClose}>
      <Modal.Header>Categories</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={14}>
                <Categories
                  categoryList={categoryList}
                  onTreeChange={d => onTreeChange(d)}
                  onCategoryClick={d => onCategoryClick(d)}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={onModalClose}>
          Close
        </Button>
        <Button positive content="Continue" onClick={onFinish} />
      </Modal.Actions>
    </Modal>
  );
};
CategoryModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onTreeChange: PropTypes.func.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  categoryList: PropTypes.arrayOf(Array).isRequired
};

export default CategoryModal;
