"use client";

import React, { createContext, useEffect, useRef, useState } from "react";

export const Context = createContext<any>([]);

export const ContextProvider = ({ children }: { children: any }) => {
  const [items, setItems] = useState<any>(null);

  useEffect(() => {
    fetch("/api/products", {
      method: "GET",
      cache: "no-store",
    }).then(async (val: any) => {
      let result = await val.json();
      if (result.data) {
        console.log("result.data", result.data);
        setItems(result.data);
      }
    });
  }, []);

  const itemsRef = useRef(items);
  itemsRef.current = items;

  return <Context.Provider value={items}>{children}</Context.Provider>;
};
