"use client"

import Link from "next/link";
import { StyleHeader } from "./StyleHeader";
import Nav from "./Nav/Nav";

export default function Header() {
  return (
    <StyleHeader>
      <h2>Logo.</h2>

      <Nav />
    </StyleHeader>
  )
}