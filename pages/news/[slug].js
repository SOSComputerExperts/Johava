import React from "react";
import styled from "styled-components";
import { Section, Paragraph } from "theme";
import Header from "components/NewsHeader";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { marked } from "marked";
import SEO from "components/SEO";

const Container = styled(Section)`
  position: relative;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  padding-top: 50px !important;
`;

const Post = ({ htmlString, data }) => {
  return (
    <>
      <SEO title={data.title} />
      <Header title={data.title} image={data.featuredImg ?? null} />
      <Container>
        <Paragraph dangerouslySetInnerHTML={{ __html: htmlString }} as="div" />
      </Container>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Post;
