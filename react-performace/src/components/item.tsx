import { memo } from "react";

interface Props {
  title: string,
  onAddItemWishList: (item: string) => void;
  countItemsWithOne: number;
}


export function Item({title, onAddItemWishList, countItemsWithOne}: Props) {
  return (
    <li>
      {title} - {countItemsWithOne}
      <button onClick={() => onAddItemWishList(title)}>
        Add to wishList
      </button>
    </li>
  )
}

export const ItemMemo = memo(Item //(oldProps, nextProps) => {
  //return true}
);