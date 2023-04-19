import React from "react";
import moment from "moment";

import * as Styled from "./News.styled";

const News = () => {
  return (
    <Styled.News maxWidth="md">
      <Styled.LatestNews>
        <Styled.LatestNewsTitle>Latest News</Styled.LatestNewsTitle>
        <Styled.Arrow />
      </Styled.LatestNews>
      <div>
        <Styled.ArticleCard>
          <Styled.ArticleImage image="https://i.pinimg.com/564x/fe/9a/e5/fe9ae5d34ea54f4ea89f17dd8360a446.jpg" />
          <Styled.ArticleContent>
            <Styled.Title>
              How To Take Beach Concept Photographs With Balloons
            </Styled.Title>
            <Styled.Additional>
              <Styled.Author>by Катя Юськів</Styled.Author>
              <Styled.Date>
                {moment("2023-02-22T06:26:00Z").format("ll")}
              </Styled.Date>
            </Styled.Additional>
            <Styled.Description>
              Минулої доби ЗСУ ліквідували 620 окупантів, а всього з початку
              вторгнення в Україну загинули понад 145 тисяч російських солдатів.
            </Styled.Description>
            <Styled.ReadArticleButton>
              Read the article
            </Styled.ReadArticleButton>
          </Styled.ArticleContent>
        </Styled.ArticleCard>

        <Styled.ArticleCard>
          <Styled.ArticleImage image="https://i.pinimg.com/564x/fe/9a/e5/fe9ae5d34ea54f4ea89f17dd8360a446.jpg" />
          <Styled.ArticleContent>
            <Styled.Title>
              How To Take Beach Concept Photographs With Balloons
            </Styled.Title>
            <Styled.Additional>
              <Styled.Author>by Катя Юськів</Styled.Author>
              <Styled.Date>
                {moment("2023-02-22T06:26:00Z").format("ll")}
              </Styled.Date>
            </Styled.Additional>
            <Styled.Description>
              Минулої доби ЗСУ ліквідували 620 окупантів, а всього з початку
              вторгнення в Україну загинули понад 145 тисяч російських солдатів.
            </Styled.Description>
            <Styled.ReadArticleButton>
              Read the article
            </Styled.ReadArticleButton>
          </Styled.ArticleContent>
        </Styled.ArticleCard>

        <Styled.ArticleCard>
          <Styled.ArticleImage image="https://i.pinimg.com/564x/fe/9a/e5/fe9ae5d34ea54f4ea89f17dd8360a446.jpg" />
          <Styled.ArticleContent>
            <Styled.Title>
              How To Take Beach Concept Photographs With Balloons
            </Styled.Title>
            <Styled.Additional>
              <Styled.Author>by Катя Юськів</Styled.Author>
              <Styled.Date>
                {moment("2023-02-22T06:26:00Z").format("ll")}
              </Styled.Date>
            </Styled.Additional>
            <Styled.Description>
              Минулої доби ЗСУ ліквідували 620 окупантів, а всього з початку
              вторгнення в Україну загинули понад 145 тисяч російських солдатів.
            </Styled.Description>
            <Styled.ReadArticleButton>
              Read the article
            </Styled.ReadArticleButton>
          </Styled.ArticleContent>
        </Styled.ArticleCard>
      </div>
    </Styled.News>
  );
};

export default News;
