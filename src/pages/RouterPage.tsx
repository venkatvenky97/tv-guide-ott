import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewOnTv from "./NewOnTv";
import NewFilms from "./NewFilms";
import LandingPage from "./LandingPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Static from "./static";
import axios from "axios";
import Header from "./Header";
import Pagination from "./Pagination";
import Footer from "./Footer";

const client = new ApolloClient({
  uri: "http://tvgui-tvgui-1tv3elndl7z1r-533858730.eu-west-2.elb.amazonaws.com/graphql",
  cache: new InMemoryCache(),
});

var array: Array<any> = [];
var data = JSON.stringify({
  query: `query NewOnTV($input: NewOnTVInput!) {
    newOnTV(input: $input) {
      count
      schedules {
        id
        title
        startAt
        channel {
          logoURL
        }
        asset {
          imageURL
          number
          series {
            imageURL
          }
          season {
            imageURL
            number
          }
        }
      }
    }
  }`,
  variables: { input: { pagination: { skip: 0, take: 50 } } },
});

var config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://tvgui-tvgui-1tv3elndl7z1r-533858730.eu-west-2.elb.amazonaws.com/graphql",
  headers: {
    Authorization: "2ccb96dd-a4da-402f-b8d0-dc23f87e6655",
    "Content-Type": "application/json",
  },
  data: data,
};

export default function RouterPage() {
  var [newTV, setNewtv] = useState([]);
  useEffect(() => {
    axios(config)
      .then(function (response: { data: any }) {
        setNewtv(response.data.data.newOnTV.schedules);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Router>
        <ApolloProvider client={client}>
          <Header />
          <Routes>
            {/* <Route path="/" element={<LandingPage />} /> */}
            <Route path="/new-films" element={<NewFilms />} />
            {/* <Route path="/new-films" element={<NewFilms />} /> */}
            <Route path="/new-on-tv" element={<Static data={newTV} />} />
          </Routes>
          <Pagination items={[]} itemsPerPage={0} basePath={""} />
          <Footer />
        </ApolloProvider>
      </Router>
    </>
  );
}
