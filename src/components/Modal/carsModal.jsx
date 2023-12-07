import React from "react";
import { useSelector } from "react-redux";

const Modal = ({ onClose }) => {
    const select = useSelector((state) => state.modal.select)

    if (!select) return null;

    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>{`${select.year} ${select.make} ${select.model}`}</h2>
          {/* Додайте інші деталі про авто */}
          <p>Fuel Consumption: {select.fuelConsumption}</p>
          <p>Engine Size: {select.engineSize}</p>
          <p>Description: {select.description}</p>
          {/* Додайте інші деталі, які вам необхідні */}
        </div>
      </div>
    );
}

export default Modal;