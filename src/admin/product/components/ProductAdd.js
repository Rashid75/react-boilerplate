import React from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";

const ProductAdd = ({ onSelectCategory, form, onInputChange, selected }) => {
  console.log(selected);
  return (
    <Form>
      <Form.Field>
        <Form.Input
          label="Name"
          name="name"
          onChange={e => onInputChange(e)}
          value={form.name}
          placeholder="Enter name"
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          label="Amount"
          type="number"
          name="amount"
          value={form.amount}
          onChange={e => onInputChange(e)}
          placeholder="Enter amount"
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          label="Quantity"
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={e => onInputChange(e)}
          placeholder="Enter quantity"
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          label="Category"
          action={{
            color: "teal",
            icon: "external alternate",
            onClick: onSelectCategory
          }}
          value={selected.title}
          placeholder="Select category"
        />
      </Form.Field>
    </Form>
  );
};

ProductAdd.propTypes = {
  onSelectCategory: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  selected: PropTypes.object, //eslint-disable-line
  form: PropTypes.object //eslint-disable-line
};
export default ProductAdd;
