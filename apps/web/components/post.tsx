import React, {useEffect} from "react";
import {HeaderSimple} from "./header";
import {oneOneApi} from "../lib/api";
import {useQuery} from "react-query";
import {AspectRatio, Box, Card, Container, createStyles, Flex, Image, SimpleGrid, Text} from "@mantine/core";
import {AIArticle} from "@app/yueleme-api/dist/index";
import dayjs from "dayjs";

const useStyles = createStyles((theme) => ({
    card: {
        transition: 'transform 150ms ease, box-shadow 150ms ease',

        '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: theme.shadows.md,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 600,
    },
}));
export function ArticlesCardsGrid({data}: {data: AIArticle[]}) {
    const { classes } = useStyles();

    const cards = data.map((article) => (
        <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'} />
            </AspectRatio>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                {dayjs(article.date).format("YYYY-MM-DD")}
            </Text>
            <Text className={classes.title} mt={5}>
                {article.title}
            </Text>
        </Card>
    ));

    return (
        <Container py="xl">
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {cards}
            </SimpleGrid>
        </Container>
    );
}
export function Posts() {

    const {data} = useQuery(oneOneApi.getApiMeditationV1TapirAiPosts.toString(), () => oneOneApi.getApiMeditationV1TapirAiPosts())

    return (
        <>
            <HeaderSimple links={[{link: '/', label: 'Home'}]}></HeaderSimple>
            <Flex>
                <Container w={'100%'}>
                    <ArticlesCardsGrid data={data?.records ?? []} />
                </Container>
            </Flex>
        </>
    );
}
