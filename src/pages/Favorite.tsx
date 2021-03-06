import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

import Header from "../components/head/Header";
import Footer from "../components/footer/Footer";
import Logo from "../components/logo/Logo";
import FavoriteList from "../components/list/FavoriteList";
import "../components/card/Card.css";
import { CheckProps } from "../types/Types";

const Favorite = ({ check }: CheckProps) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Header title="FavoriteList" check={check} />
      <Logo />
      <div className="card-container">
        <Card style={{ marginBottom: "100px" }}>
          <CardContent>
            <FavoriteList />
          </CardContent>
          <Box textAlign="center">
            <Button
              size="large"
              onClick={() => {
                navigate(-1);
              }}
            >
              Go Back
            </Button>
          </Box>
        </Card>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Favorite;
