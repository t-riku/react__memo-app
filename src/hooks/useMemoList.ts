import React, { useCallback, useState } from "react";

const useMemoList = () => {
  // メモ一覧state（配列）
  const [memos, setMemos] = useState<string[]>([]);

  //   引数に「追加する項目」を受け取り、それをメモ配列に追加するというロジック
  const addTodo = useCallback(
    (text: string) => {
      const newMemos = [...memos];
      newMemos.push(text);
      setMemos(newMemos);
    },
    [memos]
  );

  //   引数に「削除対象が何番目か」を受け取り、それをメモ配列から削除するというロジック
  const deleteTodo = useCallback(
    (index: number) => {
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return { memos, addTodo, deleteTodo };
};

export default useMemoList;
