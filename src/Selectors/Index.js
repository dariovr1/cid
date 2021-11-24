const excludeSelector = (arr, exclude) => {
    return arr.filter(item => {
        if (item.status != exclude) {
            return true;
        }
    });
}

const includeSelector = (arr, inc) => {
    return arr.filter(item => {
        if (item.status == inc) {
            return true;
        }
    });
}


export {
    excludeSelector,
    includeSelector
}