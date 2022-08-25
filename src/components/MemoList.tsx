import React, { FC } from "react";

type Props = {
  memos: string[];
  //   void型というのは関数が何も返却しないことを意味します。
  //   下記のように明示的にvoidを指定しておくと関数内でreturn文を記述するとエラーにすることができます。
  onClickDelete: (index: number) => void;
};

const MemoList: FC<Props> = (props) => {
  // 分割代入によってわざわざpropsと書く必要がなくなる。
  const { memos, onClickDelete } = props;
  return (
    <>
      <div className="border border-slate-300 rounded px-40 py-10 mx-auto mt-10 w-6/12">
        <p className="mb-8">メモ一覧</p>
        <ul>
          <>
            {memos.map((memo, index) => (
              <li key={memo} className="mb-2 w-5/12 m-auto text-center">
                <div className="flex text-center justify-between">
                  <p>{memo}</p>
                  <button
                    className="bg-teal-500 rounded-md text-xs text-white p-1 ml-4 hover:bg-teal-300"
                    onClick={() => onClickDelete(index)}
                  >
                    削除
                  </button>
                </div>
              </li>
            ))}
          </>
        </ul>
      </div>
    </>
  );
};

export default MemoList;
