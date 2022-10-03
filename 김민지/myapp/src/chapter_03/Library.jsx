import React from "react";
import Book from "./Book";

export default function Library() {
  return (
    <div>
      <Book name="처음 만난 파이썬" price={14000}></Book>
      <Book name="처음 만난 AWS" price={25000}></Book>
      <Book name="처음 만난 리액트" price={33000}></Book>
    </div>
  );
}