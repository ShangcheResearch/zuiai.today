import React, {useEffect} from "react";
import {HeaderSimple} from "../../components/header";
import {ArticlesCardsGrid} from "../../components/articles";
import {oneOneApi} from "../../lib/api";
import {useQuery} from "react-query";
export default function Page() {

    const {data} = useQuery(oneOneApi.getApiMeditationV1TapirAiProjects.toString(), () => oneOneApi.getApiMeditationV1TapirAiProjects())

    return (
        <>
            <HeaderSimple links={[{link: '/', label: 'Home'}]}></HeaderSimple>
            <ArticlesCardsGrid></ArticlesCardsGrid>
        </>
    );
}
