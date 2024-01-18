"use client";

import React, { createContext, useEffect, useRef, useState } from "react";

export const Context = createContext<any>([]);

export const ContextProvider = ({ children }: { children: any }) => {
  const [products, setProducts] = useState<any>([]);
  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    fetch("/api/products", {
      method: "GET",
      cache: "no-store",
    }).then(async (val: any) => {
      let result = await val.json();
      if (result.data) {
        setProducts(result.data);
      }
    });

    fetch("/api/blogs", {
      method: "GET",
      cache: "no-store",
    }).then(async (val: any) => {
      let result = await val.json();
      if (result.data) {
        setBlogs(result.data);
      }
    });
  }, []);

  return (
    <Context.Provider value={{ products, blogs }}>{children}</Context.Provider>
  );
};
