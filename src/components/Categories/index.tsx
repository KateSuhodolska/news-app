import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import * as Styled from "./Categories.styled";

const worldImg =
  "https://i.pinimg.com/564x/e0/92/b4/e092b450655744323a1e1bd37676af73.jpg";
const businessImg =
  "https://i.pinimg.com/564x/de/83/50/de8350ca4001e97fd66c70b09b822a71.jpg";
const technologyImg =
  "https://i.pinimg.com/564x/89/d1/cc/89d1ccb322153ee155586872dd9c2ffa.jpg";
const scienceImg =
  "https://i.pinimg.com/564x/10/e4/ef/10e4ef38dd21f451c21d297ef969edc8.jpg";
const entertainmentImg =
  "https://i.pinimg.com/564x/81/f6/ee/81f6eef4cd47ca1e14dc4ac2e49f5d65.jpg";
const sportImg =
  "https://images.everydayhealth.com/images/everything-you-need-know-about-fitness-1440x810.jpg";
const healthImg =
  "https://i.pinimg.com/564x/61/76/eb/6176ebd2539f5cb41834f89091a2991e.jpg";
const economyImg =
  "https://i.pinimg.com/564x/94/4d/bc/944dbc90de002847e245c8fb72c95953.jpg";
const politicImg =
  "https://i.pinimg.com/564x/25/53/2f/25532fe69a0aadb061f7d62cf59fde73.jpg";
const religionImg =
  "https://i.pinimg.com/564x/75/40/b0/7540b0ae5f02c2344221909cd0c71948.jpg";
const travelImg =
  "https://i.pinimg.com/564x/cb/60/31/cb60316420802c30590d558fa8a3b755.jpg";
const generalNewsImg =
  "https://i.pinimg.com/564x/81/18/32/81183253f5bf1058fe7137c128e37512.jpg";

const NewsCategories = () => {
  return (
    <Styled.Categories maxWidth="xl">
      <div style={{ display: "flex", flexWrap: "wrap", margin: "20px 0" }}>
        <Styled.CategoryCard style={{ flexGrow: "1" }}>
          <span style={{ position: "absolute" }}>
            <img
              src={worldImg}
              alt="World"
              style={{
                filter: "grayscale(100%) brightness(0.5) contrast(1.5)",
                height: "500px",
              }}
            />
          </span>
          <FavoriteBorderIcon
            sx={{
              color: "#fff",
              fontSize: "30px",
              position: "absolute",
              right: "20px",
              top: "15px",
            }}
          />
          <Styled.CardTitle>World</Styled.CardTitle>
          <Styled.OpenNewsInCategoryBtn>
            Read the news
          </Styled.OpenNewsInCategoryBtn>
        </Styled.CategoryCard>
        <Styled.CategoryCard style={{ flexGrow: "1" }}>
          <span style={{ position: "absolute" }}>
            <img
              src={businessImg}
              alt="Business"
              style={{
                filter: "grayscale(100%) brightness(0.5) contrast(1)",
                height: "470px",
              }}
            />
          </span>
          <FavoriteBorderIcon
            sx={{
              color: "#fff",
              fontSize: "30px",
              position: "absolute",
              right: "20px",
              top: "15px",
            }}
          />
          <Styled.CardTitle>Business</Styled.CardTitle>
          <Styled.OpenNewsInCategoryBtn>
            Read the news
          </Styled.OpenNewsInCategoryBtn>
        </Styled.CategoryCard>
        <Styled.CategoryCard style={{ flexGrow: "1" }}>
          <span style={{ position: "absolute" }}>
            <img
              src={scienceImg}
              alt="Science"
              style={{
                filter: "grayscale(100%) brightness(0.5) contrast(1.5)",
                height: "350px",
              }}
            />
          </span>
          <FavoriteBorderIcon
            sx={{
              color: "#fff",
              fontSize: "30px",
              position: "absolute",
              right: "20px",
              top: "15px",
            }}
          />
          <Styled.CardTitle>Science</Styled.CardTitle>
          <Styled.OpenNewsInCategoryBtn>
            Read the news
          </Styled.OpenNewsInCategoryBtn>
        </Styled.CategoryCard>
        <Styled.CategoryCard style={{ flexGrow: "1" }}>
          <span style={{ position: "absolute" }}>
            <img
              src={technologyImg}
              alt="Technology"
              style={{
                filter: "grayscale(100%) brightness(0.5) contrast(1)",
              }}
            />
          </span>
          <FavoriteBorderIcon
            sx={{
              color: "#fff",
              fontSize: "30px",
              position: "absolute",
              right: "20px",
              top: "15px",
            }}
          />
          <Styled.CardTitle>Technology</Styled.CardTitle>
          <Styled.OpenNewsInCategoryBtn>
            Read the news
          </Styled.OpenNewsInCategoryBtn>
        </Styled.CategoryCard>
        <Styled.CategoryCard style={{ flexGrow: "1" }}>
          <span style={{ position: "absolute" }}>
            <img
              src={entertainmentImg}
              alt="Entertainment"
              style={{
                filter: "grayscale(100%) brightness(0.5) contrast(1)",
                height: "400px",
              }}
            />
          </span>
          <FavoriteBorderIcon
            sx={{
              color: "#fff",
              fontSize: "30px",
              position: "absolute",
              right: "20px",
              top: "15px",
            }}
          />
          <Styled.CardTitle>Entertainment</Styled.CardTitle>
          <Styled.OpenNewsInCategoryBtn>
            Read the news
          </Styled.OpenNewsInCategoryBtn>
        </Styled.CategoryCard>
        <Styled.CategoryCard style={{ flexGrow: "1" }}>
          <span style={{ position: "absolute" }}>
            <img
              src={sportImg}
              alt="Sport"
              style={{
                filter: "grayscale(100%) brightness(0.5) contrast(1.5)",
                height: "400px",
              }}
            />
          </span>
          <FavoriteBorderIcon
            sx={{
              color: "#fff",
              fontSize: "30px",
              position: "absolute",
              right: "20px",
              top: "15px",
            }}
          />
          <Styled.CardTitle>Sport</Styled.CardTitle>
          <Styled.OpenNewsInCategoryBtn>
            Read the news
          </Styled.OpenNewsInCategoryBtn>
        </Styled.CategoryCard>
        <Styled.CategoryCard style={{ flexGrow: "1" }}>
          <span style={{ position: "absolute" }}>
            <img
              src={healthImg}
              alt="Health"
              style={{
                filter: "grayscale(100%) brightness(0.5) contrast(1.5)",
                height: "370px",
              }}
            />
          </span>
          <FavoriteBorderIcon
            sx={{
              color: "#fff",
              fontSize: "30px",
              position: "absolute",
              right: "20px",
              top: "15px",
            }}
          />
          <Styled.CardTitle>Health</Styled.CardTitle>
          <Styled.OpenNewsInCategoryBtn>
            Read the news
          </Styled.OpenNewsInCategoryBtn>
        </Styled.CategoryCard>
        <Styled.CategoryCard style={{ flexGrow: "1" }}>
          <span style={{ position: "absolute" }}>
            <img
              src={economyImg}
              alt="Economy"
              style={{
                filter: "grayscale(100%) brightness(0.5) contrast(1)",
                height: "300px",
              }}
            />
          </span>
          <FavoriteBorderIcon
            sx={{
              color: "#fff",
              fontSize: "30px",
              position: "absolute",
              right: "20px",
              top: "15px",
            }}
          />
          <Styled.CardTitle>Economy</Styled.CardTitle>
          <Styled.OpenNewsInCategoryBtn>
            Read the news
          </Styled.OpenNewsInCategoryBtn>
        </Styled.CategoryCard>
        <Styled.CategoryCard style={{ flexGrow: "1" }}>
          <span style={{ position: "absolute" }}>
            <img
              src={politicImg}
              alt="Politic"
              style={{
                filter: "grayscale(100%) brightness(0.5) contrast(1)",
              }}
            />
          </span>
          <FavoriteBorderIcon
            sx={{
              color: "#fff",
              fontSize: "30px",
              position: "absolute",
              right: "20px",
              top: "15px",
            }}
          />
          <Styled.CardTitle>Politic</Styled.CardTitle>
          <Styled.OpenNewsInCategoryBtn>
            Read the news
          </Styled.OpenNewsInCategoryBtn>
        </Styled.CategoryCard>
        <Styled.CategoryCard style={{ flexGrow: "1" }}>
          <span style={{ position: "absolute" }}>
            <img
              src={religionImg}
              alt="Religion"
              style={{
                filter: "grayscale(100%) brightness(0.5) contrast(1)",
                height: "550px",
              }}
            />
          </span>
          <FavoriteBorderIcon
            sx={{
              color: "#fff",
              fontSize: "30px",
              position: "absolute",
              right: "20px",
              top: "15px",
            }}
          />
          <Styled.CardTitle>Religion</Styled.CardTitle>
          <Styled.OpenNewsInCategoryBtn>
            Read the news
          </Styled.OpenNewsInCategoryBtn>
        </Styled.CategoryCard>
        <Styled.CategoryCard style={{ flexGrow: "1" }}>
          <span style={{ position: "absolute" }}>
            <img
              src={travelImg}
              alt="Travel"
              style={{
                filter: "grayscale(100%) brightness(0.5) contrast(1)",
                //   padding: "0 100px 900px 0",
                height: "400px",
                width: "400px",
              }}
            />
          </span>
          <FavoriteBorderIcon
            sx={{
              color: "#fff",
              fontSize: "30px",
              position: "absolute",
              right: "20px",
              top: "15px",
            }}
          />
          <Styled.CardTitle>Travel</Styled.CardTitle>
          <Styled.OpenNewsInCategoryBtn>
            Read the news
          </Styled.OpenNewsInCategoryBtn>
        </Styled.CategoryCard>
        <Styled.CategoryCard style={{ flexGrow: "1" }}>
          <span style={{ position: "absolute" }}>
            <img
              src={generalNewsImg}
              alt="Religion"
              style={{
                filter: "grayscale(100%) brightness(0.5) contrast(1.5)",
                paddingRight: "20px",
              }}
            />
          </span>
          <FavoriteBorderIcon
            sx={{
              color: "#fff",
              fontSize: "30px",
              position: "absolute",
              right: "20px",
              top: "15px",
            }}
          />
          <Styled.CardTitle>General News</Styled.CardTitle>
          <Styled.OpenNewsInCategoryBtn>
            Read the news
          </Styled.OpenNewsInCategoryBtn>
        </Styled.CategoryCard>
      </div>
    </Styled.Categories>
  );
};

export default NewsCategories;
