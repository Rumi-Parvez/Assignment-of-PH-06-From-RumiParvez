'use client'

import { useContext } from "react"

import { IsAddedList } from "../context/addlistbtncontext"

export const useAddlist = ()=>{
    const context = useContext(IsAddedList)

    if (!context) {
    throw new Error("useAddlist must be used inside AddListBtnContext");
  }

    return context
}