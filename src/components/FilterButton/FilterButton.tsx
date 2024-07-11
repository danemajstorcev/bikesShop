import React from "react";
import "./FilterButton.scss";

interface FilterButtonProps {
  btnName: string;
  bikesCount?: number;
  isActive: boolean;
  onClick: () => void;
  setActive: (btnName: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  btnName,
  bikesCount,
  isActive,
  onClick,
  setActive,
}) => {
  const handleClick = () => {
    if (!isActive) {
      setActive(btnName);
      onClick();
    }
  };

  const buttonClass = isActive ? "button active" : "button";

  return (
    <div className={buttonClass} onClick={handleClick}>
      <span className="btn-name">{btnName}</span>
      <span className="bikes-count">{bikesCount}</span>
    </div>
  );
};

export default FilterButton;
