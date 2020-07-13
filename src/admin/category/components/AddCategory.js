import React from "react";
import { Form, Input } from "semantic-ui-react";
import PropTypes from "prop-types";

const AddCategory = props => {
  const { onCategoryAddHandler, onChangeHanlder, categoryName } = props;
  return (
    <Form unstackable onSubmit={onCategoryAddHandler}>
      <Form.Group unstackable inline>
        <Form.Field width={13}>
          <Input
            placeholder="Category name"
            value={categoryName}
            onChange={onChangeHanlder}
          />
        </Form.Field>
        <Form.Field width={3}>
          <Form.Button type="submit" positive content="Add" />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

AddCategory.propTypes = {
  onChangeHanlder: PropTypes.func.isRequired,
  onCategoryAddHandler: PropTypes.func.isRequired,
  categoryName: PropTypes.string.isRequired
};

export default AddCategory;
