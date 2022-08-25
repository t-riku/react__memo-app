import React, { ChangeEvent, FC, useCallback, useState } from "react";
import useMemoList from "../hooks/useMemoList";
import MemoList from "./MemoList";

const App: FC = () => {
  // カスタムフックからそれぞれ取得
  // 分割代入。()にmemosなどの値が入っている。
  // const useMemoList() = {
  //   memos=memos,
  //   addTodo=addTodo(),
  //   deleteTodo=deleteTodo()
  // };
  const { memos, addTodo, deleteTodo } = useMemoList();
  // テキストボックスstate
  const [text, setText] = useState<string>("");

  // テキストボックス入力時に入力内容をstateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };

  // 追加ボタンを押した時
  const onClickAdd = () => {
    // hooksのuseMemoListにインプットタグで取得したテキスト情報をaddTodoに渡す
    addTodo(text);
    // テキストボックスを空に
    setText("");
  };

  // 削除ボタンを押した時（何番目が押されたかを引数で受け取る）
  // useCallback関数は親から子コンポーネントに関数をpropsとして渡したい時にpropsが子コンポーネントが無駄に再レンダリングされてしまうのを防ぐ関数useCallback()で囲むだけ
  // この場合deleteTodoの値が変わった時に再レンダリングされる
  const onClickDelete = useCallback(
    (index: number) => {
      // hooksのuseMemoListにボタンタグで取得した何番目かの情報をaddTodoに渡す
      deleteTodo(index);
    },
    [deleteTodo]
  );

  return (
    <div className="App">
      <div className="flex justify-center text-center flex-col h-screen">
        <div className="contaier">
          <h1 className="text-xl font-bold">簡単メモアプリ！</h1>
          <div className="flex justify-center gap-3 my-6">
            <input
              type="text"
              value={text}
              className="border border-slate-300 rounded"
              onChange={onChangeText}
            />
            <button
              className="bg-teal-500 rounded-md text-sm text-white p-2 hover:bg-teal-300"
              onClick={onClickAdd}
            >
              追加
            </button>
          </div>
          {/* MemoListにpropsとして値を渡す */}
          <MemoList memos={memos} onClickDelete={onClickDelete} />
          {/* <div className="border border-slate-300 rounded px-40 py-10 mx-auto mt-10 w-6/12">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
