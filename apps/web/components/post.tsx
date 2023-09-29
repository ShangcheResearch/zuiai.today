import React, {FC, useEffect} from "react";
import { HeaderSimple } from "./header";
import { oneOneApi } from "../lib/api";
import { useQuery } from "react-query";
import {
    AspectRatio,
    Badge,
    Box,
    Card,
    Container,
    createStyles,
    Flex, Grid,
    Image,
    SimpleGrid,
    Skeleton,
    Text,
} from "@mantine/core";
import { AIArticle } from "@app/yueleme-api";
import { Overlay } from "@mantine/core";
import dayjs from "dayjs";
import Link from "next/link";
import {useRouter} from "next/router";

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function ArticlesCardsGrid({ data }: { data: AIArticle[] }) {
  const { classes } = useStyles();

  const router = useRouter();
  const cards = data.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      target={"_blank"}
      href={article.url ?? "/"}
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image
          src={
            "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          }
        />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {dayjs(article.date).format("YYYY-MM-DD")}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
        <Box >
            {
                article.tags?.map(tag => (
                        <Badge key={tag} color="blue"
                               onClick={(e) => {
                                   console.log('e', e)
                                   // window.open(`/tag/${tag}`, '_blank')
                                   window.open(`/t?tag=${tag}`, '_blank')
                                   e.stopPropagation();
                                   e.preventDefault();
                               }
                               }
                        >{tag}</Badge>
                ))
            }
        </Box>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}

 export const Posts: FC<{
  tag?: string
 }>  = ({tag}) =>  {
  const { data, isLoading } = useQuery(
    oneOneApi.getApiMeditationV1TapirAiPosts.toString(),
    () => oneOneApi.getApiMeditationV1TapirAiPosts({
      tag,
    })
  );

  return (
    <>
      <HeaderSimple links={[{ link: "/", label: "Home" }]}></HeaderSimple>
      <Flex>
        <Container w={"100%"}>
          {isLoading && (
            <>
              <Box mt={20}>
                <Skeleton height={8} mt={6} width="50%" radius="xl" />
                <Skeleton height={8} mt={6} width="70%" radius="xl" />
                <Skeleton height={8} mt={6} width="80%" radius="xl" />
              </Box>
            </>
          )}
          <ArticlesCardsGrid data={data?.records ?? []} />
        </Container>
      </Flex>
    </>
  );
}
