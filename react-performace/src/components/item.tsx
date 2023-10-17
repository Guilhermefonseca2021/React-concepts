import { memo } from "react";

interface Props {
  title: string,
}

export default function Item({title}: Props) {
  return (
    <li>{title}</li>
  )
}

export const Item = memo(ItemComponent, (oldProps, nextProps) => {
  return true;
});