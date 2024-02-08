import Container from "@/Share/Container";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider } from "@mui/material";
import Image from "next/image";
import img1 from "@/Assets/blog1.jpg";
import Title from "@/Share/Titile";
const Blogs = () => {
  return (
    <div className="my-10">

     
      
      

      <Container>
      <div
        style={{
          backgroundImage: "radial-gradient(#baedf5, #f0f9fa,  #ffffff)",
        }}
        className="text-center py-5 px-5 md:py-20   space-y-2 border rounded-full"
      >
        <h1 className="text-3xl  font-bold">Article & News</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
          fugiat.
        </p>
      </div>
      <Title
        heading="Article & News"
        subHeading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
          fugiat."
      />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <Card
            sx={{
              " :hover": {
                color: "white",
                backgroundColor: "#27A1B0",
                boxShadow: 20,
              },
            }}
          >
            <CardActionArea>
              <Image src={img1} alt="blog image 1" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight={700}
                  component="div"
                >
                  From Clicks to Conversions: Optimizing Your Online Store for
                  Maximum Sales Impact.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, fugiat molestias accusamus officia aliquam adipisci
                  nemo facere est vitae possimus aut laudantium doloribus, non
                  doloremque quia voluptates facilis impedit maxime!
                </Typography>
              </CardContent>
              <Divider />
              <Typography style={{ padding: "10px" }}>
                Post Date : January 19, 2024{" "}
              </Typography>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              " :hover": {
                color: "white",
                backgroundColor: "#27A1B0",
                boxShadow: 20,
              },
            }}
          >
            <CardActionArea>
              <Image src={img1} alt="blog image 1" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight={700}
                  component="div"
                >
                  From Clicks to Conversions: Optimizing Your Online Store for
                  Maximum Sales Impact.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, fugiat molestias accusamus officia aliquam adipisci
                  nemo facere est vitae possimus aut laudantium doloribus, non
                  doloremque quia voluptates facilis impedit maxime!
                </Typography>
              </CardContent>
              <Divider />
              <Typography style={{ padding: "10px" }}>
                Post Date : January 19, 2024{" "}
              </Typography>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              " :hover": {
                color: "white",
                backgroundColor: "#27A1B0",
                boxShadow: 20,
              },
            }}
          >
            <CardActionArea>
              <Image src={img1} alt="blog image 1" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight={700}
                  component="div"
                >
                  From Clicks to Conversions: Optimizing Your Online Store for
                  Maximum Sales Impact.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, fugiat molestias accusamus officia aliquam adipisci
                  nemo facere est vitae possimus aut laudantium doloribus, non
                  doloremque quia voluptates facilis impedit maxime!
                </Typography>
              </CardContent>
              <Divider />
              <Typography style={{ padding: "10px" }}>
                Post Date : January 19, 2024{" "}
              </Typography>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              " :hover": {
                color: "white",
                backgroundColor: "#27A1B0",
                boxShadow: 20,
              },
            }}
          >
            <CardActionArea>
              <Image src={img1} alt="blog image 1" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight={700}
                  component="div"
                >
                  From Clicks to Conversions: Optimizing Your Online Store for
                  Maximum Sales Impact.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, fugiat molestias accusamus officia aliquam adipisci
                  nemo facere est vitae possimus aut laudantium doloribus, non
                  doloremque quia voluptates facilis impedit maxime!
                </Typography>
              </CardContent>
              <Divider />
              <Typography style={{ padding: "10px" }}>
                Post Date : January 19, 2024{" "}
              </Typography>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              " :hover": {
                color: "white",
                backgroundColor: "#27A1B0",
                boxShadow: 20,
              },
            }}
          >
            <CardActionArea>
              <Image src={img1} alt="blog image 1" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight={700}
                  component="div"
                >
                  From Clicks to Conversions: Optimizing Your Online Store for
                  Maximum Sales Impact.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, fugiat molestias accusamus officia aliquam adipisci
                  nemo facere est vitae possimus aut laudantium doloribus, non
                  doloremque quia voluptates facilis impedit maxime!
                </Typography>
              </CardContent>
              <Divider />
              <Typography style={{ padding: "10px" }}>
                Post Date : January 19, 2024
              </Typography>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              " :hover": {
                color: "white",
                backgroundColor: "#27A1B0",
                boxShadow: 20,
              },
            }}
          >
            <CardActionArea>
              <Image src={img1} alt="blog image 1" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight={700}
                  component="div"
                >
                  From Clicks to Conversions: Optimizing Your Online Store for
                  Maximum Sales Impact.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, fugiat molestias accusamus officia aliquam adipisci
                  nemo facere est vitae possimus aut laudantium doloribus, non
                  doloremque quia voluptates facilis impedit maxime!
                </Typography>
              </CardContent>
              <Divider />
              <Typography style={{ padding: "10px" }}>
                Post Date : January 19, 2024{" "}
              </Typography>
            </CardActionArea>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
