import type React from "react";
import "./Header.css";

interface HeaderItem {
  label: string;
  value: React.ReactNode;
}

interface HeaderProps {
  items: HeaderItem[];
}

export default function Header({ items }: HeaderProps) {
  return (
    <div className="header">
      {items.map((item, index) => (
        <div className="header__item" key={index}>
          <span className="header__label">{item.label}</span>
          <span className="header__value">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
