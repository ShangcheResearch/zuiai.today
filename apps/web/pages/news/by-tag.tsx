import React, { useEffect } from "react";
import { HeaderSimple } from "../../components/header";
import { ArticlesCardsGrid } from "../../components/articles";
import { oneOneApi } from "../../lib/api";
import { useQuery } from "react-query";
import {Posts} from "../../components/post";
import {useRouter} from "next/router";
import {useParams} from "next/navigation";
export default function Page() {

 const params = useParams()

  return (
    <>

      <HeaderSimple links={[{ link: "/", label: "Home" }]}></HeaderSimple>
        {
            JSON.stringify(params)
        }

      <Posts></Posts>
    </>
  );
}
