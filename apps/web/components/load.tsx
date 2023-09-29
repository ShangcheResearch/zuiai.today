import { Posts } from "./post";
import React, {FC} from "react";

const NoSsrPosts: FC<{tag: string}> = ({tag})=> (
    <Posts key={tag} tag={tag ?? 'AI'}></Posts>
)

export default  NoSsrPosts;
