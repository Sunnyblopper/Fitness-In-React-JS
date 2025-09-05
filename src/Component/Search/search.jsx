import React from "react";

const SearchModal = ({ onClose }) => {
  return (
    <div
      className="modal fade show d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content rounded-0">
          {/* Header */}
          <div className="modal-header" style={{ padding: "16px 16px" }}>
            <h5
              className="modal-title"
              style={{
                fontFamily: "Teko, sans-serif",
                fontSize: "1.25rem",
                fontWeight: 500,
              }}
            >
              Search by keyword
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          {/* Body */}
          <div
            className="modal-body d-flex align-items-center"
            style={{ backgroundColor: "#c80036" }}
          >
            <div
              className="input-group w-75 mx-auto d-flex"
              style={{ backgroundColor: "#c80036" }}
            >
              <input
                type="search"
                className="form-control p-3"
                placeholder="keywords" style={{borderRadius: '1px'}} />
              <span
                id="search-icon-1"
                className="btn border input-group-text p-3"
              style={{borderRadius: '1px', backgroundColor: "#fff5e1 "}} >
                <i className="fa fa-search" style={{color: '#878d97', cursor: "pointer", fontSize: "1rem", userSelect: "none",}}></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
