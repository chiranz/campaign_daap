import React, { ReactElement } from "react";

interface Props {
  items: [];
}

export default function TableHeader({ items }: Props): ReactElement {
  const getHeadings = () => {
    const headings = items.map((item) => {
      return (
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          {item}
        </th>
      );
    });
    return headings;
  };
  return (
    <thead className="bg-gray-50">
      <tr>{...getHeadings()}</tr>
    </thead>
  );
}
