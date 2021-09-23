/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <button
          type="button"
          className="btn btn-primary text-uppercase"
          disabled={_page <= 1}
          onClick={() => handlePageChange(_page - 1)}
        >
          Prev
        </button>
        <button
          type="button"
          className="btn btn-primary text-uppercase"
          disabled={_page >= totalPages}
          onClick={() => handlePageChange(_page + 1)}
        >
          Older Posts →
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
export default Pagination;
