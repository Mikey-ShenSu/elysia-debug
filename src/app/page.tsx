"use client";

import React from 'react';
import { api } from "@/lib/api";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: '管理后台',
// };

// const HomePage = () => {
//   return <h1>管理后台</h1>;
// };

function Counter() {
    const [data, setData] = useState("Loading...");

    useEffect(() => {
        api.api.count.get().then((response) => {
            if (response.error) {
                setData(`Error: ${response.error}`);
                return;
            }

            setData(response.data.message);
        });
    }, []);

    return <span>{data}</span>;
}

export default Counter;

