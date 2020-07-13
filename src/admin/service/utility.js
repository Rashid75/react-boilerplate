const UtilityService = {
  filterCategories: categories => {
    const filteredData = categories.filter(parent => {
      parent.children = []; //eslint-disable-line
      categories.forEach(child => {
        if (parent._id === child.parent) {
          parent.children.push(child);
        }
      });
      return !parent.parent;
    });
    return filteredData;
  },
  updateNode(categories, node, property, value) {
    return categories.map(category => {
      if (node._id === category._id) {
        category[property] = value; // eslint-disable-line
      }
      if (category.children.length > 0) {
        const updatedChildren = UtilityService.updateNode(
          [...category.children],
          node,
          property,
          value
        );
        category.children = [...updatedChildren]; // eslint-disable-line
      }
      return category;
    });
  },
  resetData(categories, property, value) {
    return categories.map(category => {
      if (category.children.length > 0) {
        const updatedChildren = UtilityService.resetData(
          [...category.children],
          property,
          value
        );
        category.children = [...updatedChildren]; // eslint-disable-line
      }
      return { ...category, [property]: value };
    });
  }
};

export default UtilityService;
